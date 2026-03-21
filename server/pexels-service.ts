/**
 * Pexels Image Service
 *
 * Tìm kiếm ảnh thực từ Pexels API theo tên địa điểm + Đà Lạt.
 * Mỗi địa điểm sẽ có ảnh riêng biệt, không trùng lặp.
 * Fallback về ảnh tĩnh nếu Pexels thất bại.
 */

const PEXELS_API_KEY = process.env.PEXELS_API_KEY || "";
const PEXELS_API_URL = "https://api.pexels.com/v1/search";

const HOSTING_BASE = "https://dalat-chatbot.web.app/assets/places";

/** Ảnh tĩnh fallback theo category */
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

/** Từ khóa tiếng Anh theo category để tìm kiếm Pexels */
const CATEGORY_KEYWORDS: Record<string, string> = {
  cafe: "cozy cafe coffee shop dalat vietnam",
  food: "vietnamese restaurant food dalat",
  checkin: "tourist attraction landmark dalat vietnam",
  nature: "nature landscape waterfall dalat vietnam",
  homestay: "boutique hotel homestay dalat vietnam",
  rental: "motorbike scooter rental vietnam",
  signature: "dalat vietnam city landmark iconic",
};

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
 * Tìm kiếm ảnh trên Pexels theo tên địa điểm.
 * Dùng hash để chọn trang kết quả khác nhau cho mỗi địa điểm → ảnh đa dạng.
 */
export async function searchPexelsImage(
  placeName: string,
  category: string = "signature",
): Promise<string | null> {
  if (!PEXELS_API_KEY) return null;

  const hash = hashString(placeName);

  // Thử tìm bằng tên địa điểm + Đà Lạt trước
  const queries = [
    `${placeName} Đà Lạt`,
    CATEGORY_KEYWORDS[category] || `dalat vietnam ${category}`,
  ];

  for (const query of queries) {
    try {
      // Dùng hash để chọn page khác nhau (1-5) → ảnh đa dạng hơn
      const page = (hash % 5) + 1;
      const perPage = 10;
      const idx = hash % perPage;

      const url = `${PEXELS_API_URL}?query=${encodeURIComponent(query)}&per_page=${perPage}&page=${page}&orientation=landscape`;

      const response = await fetch(url, {
        headers: { Authorization: PEXELS_API_KEY },
        signal: AbortSignal.timeout(8000),
      });

      if (!response.ok) {
        console.warn(`⚠️ [Pexels] ${response.status} for query: "${query}"`);
        continue;
      }

      const data = await response.json() as {
        photos: Array<{ src: { large: string; medium: string } }>;
        total_results: number;
      };

      if (data.photos && data.photos.length > 0) {
        const photo = data.photos[idx % data.photos.length];
        const imageUrl = photo.src.large || photo.src.medium;
        console.log(`✅ [Pexels] "${placeName}" → ${imageUrl.substring(0, 60)}...`);
        return imageUrl;
      }
    } catch (err) {
      console.warn(`⚠️ [Pexels] Error fetching for "${placeName}":`, (err as Error).message);
    }
  }

  return null;
}

/** Fallback: lấy ảnh tĩnh theo category */
export function getCategoryDefaultImage(category: string): string {
  const urls = AI_IMAGE_URLS[category];
  if (urls && urls.length > 0) {
    return urls[0];
  }
  return AI_IMAGE_URLS["signature"][0];
}

/** Lấy danh sách ảnh tĩnh cho một category */
export function getCategoryImages(category: string): string[] {
  return AI_IMAGE_URLS[category] || AI_IMAGE_URLS["signature"];
}
