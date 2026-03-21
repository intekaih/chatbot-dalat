/**
 * AI Image Service
 *
 * Toàn bộ ảnh do AI tạo ra, lưu tại: ionic-tailwind-app/src/assets/places/
 * Phục vụ qua Angular dev server (REPLIT_DEV_DOMAIN) hoặc Firebase Hosting khi deploy.
 */

function getHostingBase(): string {
  // Ưu tiên 1: APP_URL — set trong Replit Secrets khi deploy production
  const appUrl = process.env.APP_URL;
  if (appUrl) {
    return `${appUrl.replace(/\/$/, "")}/assets/places`;
  }
  // Ưu tiên 2: REPLIT_DEV_DOMAIN — tự động có trong Replit dev workspace
  const replitDomain = process.env.REPLIT_DEV_DOMAIN;
  if (replitDomain) {
    return `https://${replitDomain}/assets/places`;
  }
  // Fallback: Firebase Hosting (nếu ảnh đã được upload lên đó)
  return "https://dalat-chatbot.web.app/assets/places";
}

/**
 * Danh sách URL ảnh AI theo từng category.
 * Mỗi category có 5 ảnh để tạo đa dạng, giảm trùng lặp.
 */
export function getAIImageUrls(): Record<string, string[]> {
  const BASE = getHostingBase();
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

/** Lấy danh sách ảnh AI cho một category */
export function getCategoryImages(category: string): string[] {
  return getAIImageUrls()[category] || getAIImageUrls()["signature"];
}
