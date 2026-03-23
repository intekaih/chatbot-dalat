/**
 * Place Image Service — Simplified
 *
 * Gán ảnh cho places từ pool tĩnh `/assets/places/`.
 * Không còn sinh ảnh AI real-time — tất cả dùng relative path.
 */

import { getCategoryImages } from "./image-pool.js";

/** Tracker để tránh ảnh trùng: category → Set<index đã dùng> */
const categoryUsedIndices = new Map<string, Set<number>>();

/** Hash đơn giản → số nguyên dương (để chọn ảnh từ pool) */
function hashString(str: string): number {
  let h = 0;
  for (let i = 0; i < str.length; i++) {
    h = (h << 5) - h + str.charCodeAt(i);
    h |= 0;
  }
  return Math.abs(h);
}

/**
 * Chọn ảnh duy nhất trong category pool.
 * Dùng hash tên làm điểm bắt đầu, tự dịch nếu index đã dùng.
 */
export function getUniqueStaticImage(placeName: string, category: string): string {
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
 * Lấy ảnh cho 1 place — chỉ dùng static pool.
 * Trả relative path: /assets/places/xxx.png
 */
export function getPlaceImage(
  placeName: string,
  category = "signature",
): string {
  return getUniqueStaticImage(placeName, category);
}

export function clearImageCache() {
  categoryUsedIndices.clear();
  console.log("🗑️ [ImageCache] Index tracker cleared");
}
