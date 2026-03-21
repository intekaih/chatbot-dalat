import "dotenv/config";

const PEXELS_API_KEY = process.env.PEXELS_API_KEY;
const PEXELS_API_URL = "https://api.pexels.com/v1";

/** Interface cho Pexels photo response */
interface PexelsPhoto {
  id: number;
  width: number;
  height: number;
  url: string;
  photographer: string;
  photographer_url: string;
  photographer_id: number;
  avg_color: string;
  src: {
    original: string;
    large2x: string;
    large: string;
    medium: string;
    small: string;
    portrait: string;
    landscape: string;
    tiny: string;
  };
  liked: boolean;
  alt: string;
}

interface PexelsSearchResult {
  total_results: number;
  page: number;
  per_page: number;
  photos: PexelsPhoto[];
  next_page?: string;
}

/** Hash đơn giản để chọn index ảnh khác nhau cho mỗi query → tránh trùng ảnh */
function hashString(str: string): number {
  let h = 0;
  for (let i = 0; i < str.length; i++) {
    h = (h << 5) - h + str.charCodeAt(i);
    h |= 0;
  }
  return Math.abs(h);
}

/**
 * Tạo từ khóa tìm kiếm từ thông tin địa điểm.
 * Kết hợp tên + location + category để có kết quả chính xác nhất.
 */
function generateSearchKeywords(
  placeName: string,
  category?: string,
  address?: string,
): string {
  const keywords: string[] = [placeName];

  if (address && !address.toLowerCase().includes("đà lạt")) {
    keywords.push("Đà Lạt");
  } else if (!address) {
    keywords.push("Đà Lạt");
  }

  const categoryKeywords: Record<string, string> = {
    cafe: "coffee shop",
    food: "restaurant food",
    checkin: "landmark tourist",
    nature: "nature landscape mountain",
    homestay: "homestay accommodation",
    rental: "motorbike scooter",
    signature: "famous landmark dalat vietnam",
  };

  if (category && categoryKeywords[category]) {
    keywords.push(categoryKeywords[category]);
  }

  return keywords.join(" ");
}

/**
 * Tìm kiếm 1 ảnh từ Pexels theo từ khóa.
 * @param query - Từ khóa tìm kiếm
 * @param orientation - Hướng ảnh: landscape, portrait, or squarish
 * @param photoIndex - Chọn ảnh thứ mấy trong kết quả (để mỗi địa điểm có ảnh khác nhau)
 * @returns URL ảnh hoặc null nếu không tìm thấy
 */
export async function searchImage(
  query: string,
  orientation: "landscape" | "portrait" | "squarish" = "landscape",
  photoIndex?: number,
): Promise<string | null> {
  if (!PEXELS_API_KEY || PEXELS_API_KEY === "your-pexels-api-key-here") {
    console.warn("⚠️ PEXELS_API_KEY not configured");
    return null;
  }

  try {
    const searchQuery = generateSearchKeywords(query);

    const response = await fetch(
      `${PEXELS_API_URL}/search?query=${encodeURIComponent(searchQuery)}&per_page=10&orientation=${orientation}`,
      {
        headers: {
          Authorization: PEXELS_API_KEY,
        },
      },
    );

    if (!response.ok) {
      console.error(`Pexels API error: ${response.status}`);
      return null;
    }

    const data = await response.json() as PexelsSearchResult;

    if (data.photos && data.photos.length > 0) {
      const idx =
        photoIndex !== undefined
          ? photoIndex % data.photos.length
          : hashString(query) % data.photos.length;
      const photo = data.photos[idx];
      console.log(`📸 Pexels image for "${query}": ${photo.id} (index ${idx})`);
      return photo.src.large;
    }

    console.log(`❌ No Pexels images found for: "${query}"`);
    return null;
  } catch (error) {
    console.error("Pexels API error:", error);
    return null;
  }
}

/**
 * Tìm kiếm nhiều ảnh từ Pexels.
 * @param queries - Array các từ khóa
 * @returns Map của từ khóa -> URL ảnh
 */
export async function searchMultipleImages(
  queries: string[],
): Promise<Map<string, string>> {
  const results = new Map<string, string>();

  const BATCH_SIZE = 3;

  for (let i = 0; i < queries.length; i += BATCH_SIZE) {
    const batch = queries.slice(i, i + BATCH_SIZE);
    const promises = batch.map(async (query) => {
      const url = await searchImage(query);
      return { query, url };
    });

    const batchResults = await Promise.all(promises);
    batchResults.forEach(({ query, url }) => {
      if (url) {
        results.set(query, url);
      }
    });

    if (i + BATCH_SIZE < queries.length) {
      await new Promise((resolve) => setTimeout(resolve, 500));
    }
  }

  return results;
}

/** Placeholder ảnh không phụ thuộc API bên ngoài */
const PLACEHOLDER_BASE = "https://placehold.co/800x500/e2e8f0/64748b?text=";
const PLACEHOLDER_TEXTS: Record<string, string> = {
  cafe: "Cafe",
  food: "Ẩm thực",
  checkin: "Check-in",
  nature: "Thiên nhiên",
  homestay: "Homestay",
  rental: "Thuê xe",
  signature: "Biểu tượng",
};

/**
 * Lấy ảnh theo category (fallback khi không tìm được ảnh cụ thể).
 */
export function getCategoryDefaultImage(category: string): string {
  const text = encodeURIComponent(PLACEHOLDER_TEXTS[category] || "Đà Lạt");
  return `${PLACEHOLDER_BASE}${text}`;
}

/**
 * API endpoint wrapper: tìm ảnh và trả về format giống Pexels response.
 */
export async function searchPexels(query: string, per_page: number = 5): Promise<any> {
  try {
    const imageUrl = await searchImage(query);

    if (imageUrl) {
      return {
        photos: [{
          src: {
            medium: imageUrl,
            large: imageUrl,
            original: imageUrl
          }
        }]
      };
    }

    return { photos: [] };
  } catch (error) {
    console.error('Pexels search error:', error);
    return { photos: [] };
  }
}
