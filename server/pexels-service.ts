/**
 * AI Image Service
 * 
 * Thay thế Pexels API bằng bộ ảnh do AI tạo ra.
 * Ảnh được lưu tại: ionic-tailwind-app/src/assets/places/
 * Được serve qua Firebase Hosting: https://dalat-chatbot.web.app/assets/places/
 */

// Base URL khi deploy lên Firebase Hosting
const HOSTING_BASE = "https://dalat-chatbot.web.app/assets/places";

/**
 * Danh sách URL ảnh AI theo từng category.
 * Mỗi category có 2 ảnh khác nhau để tạo sự đa dạng.
 */
export const AI_IMAGE_URLS: Record<string, string[]> = {
  cafe: [
    `${HOSTING_BASE}/cafe_1.png`,
    `${HOSTING_BASE}/cafe_2.png`,
  ],
  food: [
    `${HOSTING_BASE}/food_1.png`,
    `${HOSTING_BASE}/food_2.png`,
  ],
  checkin: [
    `${HOSTING_BASE}/checkin_1.png`,
    `${HOSTING_BASE}/checkin_2.png`,
  ],
  nature: [
    `${HOSTING_BASE}/nature_1.png`,
    `${HOSTING_BASE}/nature_2.png`,
  ],
  homestay: [
    `${HOSTING_BASE}/homestay_1.png`,
    `${HOSTING_BASE}/homestay_2.png`,
  ],
  rental: [
    `${HOSTING_BASE}/rental_1.png`,
    `${HOSTING_BASE}/rental_2.png`,
  ],
  signature: [
    `${HOSTING_BASE}/signature_1.png`,
    `${HOSTING_BASE}/signature_2.png`,
  ],
};

/**
 * Lấy ảnh mặc định theo category (dùng ảnh AI đầu tiên của category).
 * Giữ nguyên interface cũ để tương thích với code hiện tại.
 */
export function getCategoryDefaultImage(category: string): string {
  const urls = AI_IMAGE_URLS[category];
  if (urls && urls.length > 0) {
    return urls[0];
  }
  // Fallback: dùng ảnh signature nếu category không hợp lệ
  return AI_IMAGE_URLS["signature"][0];
}

/**
 * Lấy danh sách tất cả ảnh AI cho một category.
 */
export function getCategoryImages(category: string): string[] {
  return AI_IMAGE_URLS[category] || AI_IMAGE_URLS["signature"];
}
