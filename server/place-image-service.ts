/**
 * Place Image Service
 *
 * Cung cấp ảnh AI cho các địa điểm Đà Lạt.
 * Toàn bộ ảnh do AI tạo ra, không phụ thuộc API bên ngoài.
 * Mỗi category có 4-5 ảnh → dùng hash tên địa điểm để chọn → giảm trùng lặp.
 */

import { getCategoryImages } from "./pexels-service.js";

// Cache trong memory (tên + category → URL)
const imageUrlCache = new Map<string, string>();

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
 * Lấy ảnh AI cho 1 địa điểm.
 * Dùng hash tên để xoay vòng giữa 4-5 ảnh trong category
 * → mỗi địa điểm luôn nhận cùng 1 ảnh (ổn định), nhưng ít trùng hơn trước.
 */
export async function getPlaceImageSmart(
  placeName: string,
  category?: string,
  _address?: string,
  _skipValidation = false,
): Promise<{ imageUrl: string; imageUrls?: string[]; source: "ai" | "placeholder" }> {
  const cacheKey = `${placeName}::${category}`;

  if (imageUrlCache.has(cacheKey)) {
    return { imageUrl: imageUrlCache.get(cacheKey)!, source: "ai" };
  }

  const cat = category || "signature";
  const urls = getCategoryImages(cat);
  const idx = hashString(placeName) % urls.length;
  const imageUrl = urls[idx];

  imageUrlCache.set(cacheKey, imageUrl);
  console.log(`🖼️ [AIImage] ${placeName} (${cat}) → image #${idx + 1}/${urls.length}`);

  return { imageUrl, imageUrls: urls, source: "ai" };
}

/**
 * Batch: Lấy ảnh cho nhiều địa điểm (synchronous, không cần rate limit).
 */
export async function batchGetPlaceImages(
  places: { name: string; category?: string; address?: string }[],
): Promise<Map<string, { imageUrl: string; imageUrls?: string[]; source: "ai" | "placeholder" }>> {
  const results = new Map<string, { imageUrl: string; imageUrls?: string[]; source: "ai" | "placeholder" }>();
  for (const place of places) {
    const result = await getPlaceImageSmart(place.name, place.category, place.address);
    results.set(place.name, result);
  }
  return results;
}
