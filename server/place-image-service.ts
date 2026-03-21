/**
 * Place Image Service
 *
 * Lấy ảnh riêng biệt cho từng địa điểm Đà Lạt qua Pexels API.
 * Fallback về ảnh tĩnh nếu Pexels thất bại hoặc không có key.
 */

import { searchPexelsImage, getCategoryDefaultImage, getCategoryImages } from "./pexels-service.js";

// Cache trong memory (tên địa điểm → URL ảnh)
const imageUrlCache = new Map<string, { imageUrl: string; source: "pexels" | "static" }>();

export function clearImageCache() {
  imageUrlCache.clear();
  console.log("🗑️ [ImageCache] Cleared");
}

/** Hash đơn giản → số nguyên dương */
function hashString(str: string): number {
  let h = 0;
  for (let i = 0; i < str.length; i++) {
    h = (h << 5) - h + str.charCodeAt(i);
    h |= 0;
  }
  return Math.abs(h);
}

/**
 * Lấy ảnh cho 1 địa điểm:
 * 1. Kiểm tra cache
 * 2. Gọi Pexels API tìm ảnh theo tên địa điểm
 * 3. Fallback: ảnh tĩnh theo category (dùng hash để xoay vòng)
 */
export async function getPlaceImageSmart(
  placeName: string,
  category?: string,
  _address?: string,
  skipValidation = false,
): Promise<{ imageUrl: string; imageUrls?: string[]; source: "ai" | "pexels" | "placeholder" }> {
  const cacheKey = `${placeName}::${category}`;

  if (imageUrlCache.has(cacheKey)) {
    const cached = imageUrlCache.get(cacheKey)!;
    return {
      imageUrl: cached.imageUrl,
      source: cached.source === "pexels" ? "pexels" : "ai",
    };
  }

  const cat = category || "signature";

  // Thử Pexels API
  try {
    const pexelsUrl = await searchPexelsImage(placeName, cat);
    if (pexelsUrl) {
      imageUrlCache.set(cacheKey, { imageUrl: pexelsUrl, source: "pexels" });
      console.log(`🖼️ [Pexels] ${placeName} → OK`);
      return { imageUrl: pexelsUrl, source: "pexels" };
    }
  } catch (err) {
    console.warn(`⚠️ [Pexels] Failed for "${placeName}":`, (err as Error).message);
  }

  // Fallback: ảnh tĩnh theo category (xoay vòng bằng hash tên)
  const staticUrls = getCategoryImages(cat);
  const idx = hashString(placeName) % staticUrls.length;
  const imageUrl = staticUrls[idx];

  imageUrlCache.set(cacheKey, { imageUrl, source: "static" });
  console.log(`🖼️ [Static] ${placeName} (${cat}) → image #${idx + 1}`);

  return { imageUrl, imageUrls: staticUrls, source: "ai" };
}

/**
 * Batch: Lấy ảnh cho nhiều địa điểm tuần tự (tránh rate limit Pexels).
 */
export async function batchGetPlaceImages(
  places: { name: string; category?: string; address?: string }[],
): Promise<Map<string, { imageUrl: string; imageUrls?: string[]; source: "ai" | "placeholder" }>> {
  const results = new Map<string, { imageUrl: string; imageUrls?: string[]; source: "ai" | "placeholder" }>();

  for (const place of places) {
    const result = await getPlaceImageSmart(place.name, place.category, place.address);
    results.set(place.name, { ...result, source: "ai" });

    // Thêm delay nhỏ để tránh rate limit Pexels (~200 req/hour)
    await new Promise((r) => setTimeout(r, 150));
  }

  return results;
}
