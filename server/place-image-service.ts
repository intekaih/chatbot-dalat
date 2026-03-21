/**
 * Place Image Service
 * 
 * Cung cấp ảnh AI cho các địa điểm Đà Lạt.
 * Ảnh do AI tạo ra, lưu tại assets/places/, không phụ thuộc API bên ngoài.
 */

import { getCategoryDefaultImage, getCategoryImages } from "./pexels-service.js";

// Cache trong memory để tránh tính toán lại
const imageUrlCache = new Map<string, { imageUrl: string; imageUrls: string[] }>();

/**
 * Xóa toàn bộ cache
 */
export function clearImageCache() {
  imageUrlCache.clear();
  console.log("🗑️ [ImageCache] Cleared");
}

/**
 * Hash đơn giản để chọn index ảnh khác nhau cho mỗi place
 * → mỗi địa điểm trong cùng category sẽ luân phiên ảnh 1 / ảnh 2
 */
function hashString(str: string): number {
  let h = 0;
  for (let i = 0; i < str.length; i++) {
    h = (h << 5) - h + str.charCodeAt(i);
    h |= 0;
  }
  return Math.abs(h);
}

/**
 * Lấy ảnh AI cho 1 địa điểm theo category.
 * Dùng hash của tên để xoay vòng giữa các ảnh trong category,
 * đảm bảo mỗi địa điểm có ảnh ổn định (cùng tên → cùng ảnh).
 */
export async function getPlaceImageSmart(
  placeName: string,
  category?: string,
  _address?: string,
  _skipValidation = false,
): Promise<{ imageUrl: string; imageUrls?: string[]; source: "ai" | "placeholder" }> {
  const cacheKey = `${placeName}::${category}`;

  if (imageUrlCache.has(cacheKey)) {
    const cached = imageUrlCache.get(cacheKey)!;
    return { imageUrl: cached.imageUrl, imageUrls: cached.imageUrls, source: "ai" };
  }

  const cat = category || "signature";
  const urls = getCategoryImages(cat);

  // Chọn ảnh dựa trên hash của tên → mỗi địa điểm có ảnh riêng, nhất quán
  const idx = hashString(placeName) % urls.length;
  const imageUrl = urls[idx];

  imageUrlCache.set(cacheKey, { imageUrl, imageUrls: urls });

  console.log(`🖼️ [AIImage] ${placeName} (${cat}) → image #${idx + 1}`);
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
