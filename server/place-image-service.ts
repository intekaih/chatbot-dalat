/**
 * Place Image Service
 *
 * Tạo ảnh AI (Gemini Imagen) cho từng địa điểm Đà Lạt.
 * Cache theo tên địa điểm: đã tạo rồi thì dùng lại, không tạo mới.
 * Fallback về ảnh tĩnh theo category nếu Gemini thất bại.
 */

import fs from "fs";
import path from "path";
import { getCategoryImages } from "./pexels-service.js";
import { getCachedPlaceImage, savePlaceImageCache, updatePlaceImageUrl } from "./db.js";
import { openai } from "./utils.js";

const GENERATED_DIR = path.resolve("generated-images");

// Đảm bảo thư mục tồn tại
if (!fs.existsSync(GENERATED_DIR)) {
  fs.mkdirSync(GENERATED_DIR, { recursive: true });
}

function getHostingBase(): string {
  const appUrl = process.env.APP_URL;
  if (appUrl) return appUrl.replace(/\/$/, "");
  const replitDomain = process.env.REPLIT_DEV_DOMAIN;
  if (replitDomain) return `https://${replitDomain}`;
  return "https://chatbot-dalat.replit.app";
}

/** Hash đơn giản → số nguyên dương (để chọn ảnh tĩnh fallback) */
function hashString(str: string): number {
  let h = 0;
  for (let i = 0; i < str.length; i++) {
    h = (h << 5) - h + str.charCodeAt(i);
    h |= 0;
  }
  return Math.abs(h);
}

/** Tên địa điểm → tên file an toàn */
function safeName(name: string): string {
  return name
    .toLowerCase()
    .normalize("NFD")
    .replace(/[\u0300-\u036f]/g, "")
    .replace(/đ/g, "d")
    .replace(/[^a-z0-9]/g, "_")
    .replace(/_+/g, "_")
    .slice(0, 60);
}

/** Prompt sinh ảnh cho từng loại địa điểm */
function buildPrompt(placeName: string, category: string): string {
  const catPrompts: Record<string, string> = {
    cafe: `A cozy and beautiful cafe called "${placeName}" in Da Lat, Vietnam. Warm lighting, rustic wooden interior, lush plants, misty highland atmosphere. Travel photography style, vibrant and inviting.`,
    food: `A delicious local dish or restaurant called "${placeName}" in Da Lat, Vietnam. Authentic Vietnamese food, colorful presentation, warm atmosphere. Food photography style.`,
    checkin: `A stunning scenic spot called "${placeName}" in Da Lat, Vietnam. Beautiful landscape, golden hour lighting, highland scenery, flowers and pine trees. Travel photography, breathtaking view.`,
    nature: `A beautiful natural landscape called "${placeName}" in Da Lat, Vietnam. Misty mountains, pine forests, waterfalls or lakes, lush greenery. Nature photography, serene and majestic.`,
    homestay: `A charming homestay or hotel called "${placeName}" in Da Lat, Vietnam. Cozy rooms, beautiful garden, mountain view, rustic highland style. Interior and exterior photography.`,
    rental: `A motorbike or bicycle rental shop called "${placeName}" in Da Lat, Vietnam. Clean vehicles, scenic Da Lat backdrop, mountains and pine trees. Travel lifestyle photography.`,
    signature: `A famous and iconic destination called "${placeName}" in Da Lat, Vietnam. Iconic views, tourists exploring, vibrant colors, highland atmosphere. Travel photography, must-visit landmark.`,
  };
  return catPrompts[category] || `A beautiful destination called "${placeName}" in Da Lat, Vietnam. Scenic highland atmosphere, travel photography style.`;
}

/** In-memory cache: placeName::category → imageUrl */
const memCache = new Map<string, string>();

/** Tracker để tránh ảnh trùng: category → Set<index đã dùng> */
const categoryUsedIndices = new Map<string, Set<number>>();

/**
 * Chọn ảnh tĩnh duy nhất trong category.
 * Dùng hash làm điểm bắt đầu, tự dịch chuyển nếu index đã dùng.
 */
function getUniqueStaticImage(placeName: string, category: string): string {
  const urls = getCategoryImages(category);

  if (!categoryUsedIndices.has(category)) {
    categoryUsedIndices.set(category, new Set());
  }
  const used = categoryUsedIndices.get(category)!;

  // Reset khi đã dùng hết pool
  if (used.size >= urls.length) used.clear();

  // Bắt đầu từ index ưa thích (hash tên), tìm index chưa dùng
  let idx = hashString(placeName) % urls.length;
  let tries = 0;
  while (used.has(idx) && tries < urls.length) {
    idx = (idx + 1) % urls.length;
    tries++;
  }

  used.add(idx);
  return urls[idx];
}

/**
 * Lấy ảnh AI cho 1 địa điểm.
 * Ưu tiên: memory cache → DB cache → Gemini Imagen → ảnh tĩnh fallback
 */
export async function getPlaceImageSmart(
  placeName: string,
  category = "signature",
  _address?: string,
  _skipValidation = false,
): Promise<{ imageUrl: string; source: "ai-generated" | "ai-cached" | "static" }> {
  const cacheKey = `${placeName}::${category}`;

  // 1. Memory cache
  if (memCache.has(cacheKey)) {
    return { imageUrl: memCache.get(cacheKey)!, source: "ai-cached" };
  }

  // 2. DB + disk cache
  const cached = getCachedPlaceImage(placeName);
  if (cached && fs.existsSync(path.join(GENERATED_DIR, path.basename(cached)))) {
    const imageUrl = `${getHostingBase()}/api/place-image/${path.basename(cached)}`;
    memCache.set(cacheKey, imageUrl);
    return { imageUrl, source: "ai-cached" };
  }

  // 3. Gọi Gemini Imagen
  try {
    const prompt = buildPrompt(placeName, category);
    const response = await (openai.images as any).generate({
      model: process.env.API_IMAGE_MODEL || "gemini-3.1-flash-image",
      prompt,
      n: 1,
      response_format: "b64_json",
    });

    const b64 = response.data?.[0]?.b64_json;
    if (b64) {
      const filename = `${safeName(placeName)}_${Date.now()}.png`;
      const filePath = path.join(GENERATED_DIR, filename);
      fs.writeFileSync(filePath, Buffer.from(b64, "base64"));

      savePlaceImageCache(placeName, filename);

      const imageUrl = `${getHostingBase()}/api/place-image/${filename}`;
      memCache.set(cacheKey, imageUrl);

      console.log(`🎨 [Imagen] Generated: ${placeName} → ${filename}`);
      return { imageUrl, source: "ai-generated" };
    }
  } catch (err: any) {
    console.warn(`⚠️ [Imagen] Failed for "${placeName}": ${err?.message || err}`);
  }

  // 4. Fallback ảnh tĩnh theo category — chọn ảnh chưa dùng để tránh trùng
  const imageUrl = getUniqueStaticImage(placeName, category);
  memCache.set(cacheKey, imageUrl);
  console.log(`🖼️ [Imagen] Fallback static for: ${placeName} → ${path.basename(imageUrl)}`);
  return { imageUrl, source: "static" };
}

/**
 * Batch: tạo ảnh cho nhiều địa điểm tuần tự (tránh rate limit).
 * Cập nhật image_url trong DB ngay khi mỗi ảnh xong.
 */
export async function batchGeneratePlaceImages(
  places: { name: string; category?: string }[],
): Promise<void> {
  for (const place of places) {
    const result = await getPlaceImageSmart(place.name, place.category || "signature");
    updatePlaceImageUrl(place.name, result.imageUrl);
  }
  console.log(`✅ [Imagen] Batch done: ${places.length} places`);
}

/**
 * Batch map (sync với ảnh hiện có + generate mới nếu cần)
 * Dùng khi cần kết quả ngay (blocking).
 */
export async function batchGetPlaceImages(
  places: { name: string; category?: string; address?: string }[],
): Promise<Map<string, { imageUrl: string; source: string }>> {
  const results = new Map<string, { imageUrl: string; source: string }>();
  for (const place of places) {
    const result = await getPlaceImageSmart(place.name, place.category, place.address);
    results.set(place.name, result);
  }
  return results;
}

export function clearImageCache() {
  memCache.clear();
  categoryUsedIndices.clear();
  console.log("🗑️ [ImageCache] Memory cache + index tracker cleared");
}
