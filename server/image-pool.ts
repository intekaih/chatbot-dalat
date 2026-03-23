/**
 * Place Image Service — Static Pool
 *
 * Toàn bộ ảnh lưu tại: ionic-tailwind-app/src/assets/places/
 * Dùng RELATIVE PATH `/assets/places/xxx.png` — hoạt động ở mọi nơi:
 *   - Local dev (Angular dev server)
 *   - Replit (Express static serve)
 *   - Firebase Hosting (deploy)
 */

const BASE = "/assets/places";

/**
 * Danh sách ảnh theo từng category.
 * Mỗi category có 4-5 ảnh để tạo đa dạng, giảm trùng lặp.
 */
export function getAIImageUrls(): Record<string, string[]> {
  return {
    cafe: [
      `${BASE}/cafe_1.png`,
      `${BASE}/cafe_2.png`,
      `${BASE}/cafe_3.png`,
      `${BASE}/cafe_4.png`,
      `${BASE}/cafe_5.png`,
    ],
    food: [
      `${BASE}/food_1.png`,
      `${BASE}/food_2.png`,
      `${BASE}/food_3.png`,
      `${BASE}/food_4.png`,
      `${BASE}/food_5.png`,
    ],
    checkin: [
      `${BASE}/checkin_1.png`,
      `${BASE}/checkin_2.png`,
      `${BASE}/checkin_3.png`,
      `${BASE}/checkin_4.png`,
      `${BASE}/checkin_5.png`,
    ],
    nature: [
      `${BASE}/nature_1.png`,
      `${BASE}/nature_2.png`,
      `${BASE}/nature_3.png`,
      `${BASE}/nature_4.png`,
      `${BASE}/nature_5.png`,
    ],
    homestay: [
      `${BASE}/homestay_1.png`,
      `${BASE}/homestay_2.png`,
      `${BASE}/homestay_3.png`,
      `${BASE}/homestay_4.png`,
      `${BASE}/homestay_5.png`,
    ],
    rental: [
      `${BASE}/rental_1.png`,
      `${BASE}/rental_2.png`,
      `${BASE}/rental_3.png`,
      `${BASE}/rental_4.png`,
    ],
    signature: [
      `${BASE}/signature_1.png`,
      `${BASE}/signature_2.png`,
      `${BASE}/signature_3.png`,
      `${BASE}/signature_4.png`,
      `${BASE}/signature_5.png`,
    ],
  };
}

/** Kept for backward compat */
export const AI_IMAGE_URLS = getAIImageUrls();

/** Lấy ảnh mặc định theo category */
export function getCategoryDefaultImage(category: string): string {
  const urls = getAIImageUrls()[category];
  if (urls && urls.length > 0) return urls[0];
  return getAIImageUrls()["signature"][0];
}

/** Lấy danh sách ảnh cho một category */
export function getCategoryImages(category: string): string[] {
  return getAIImageUrls()[category] || getAIImageUrls()["signature"];
}
