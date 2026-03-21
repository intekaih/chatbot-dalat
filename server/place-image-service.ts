import "dotenv/config";
import { getCategoryDefaultImage } from "./pexels-service.js";

const PEXELS_API_KEY = process.env.PEXELS_API_KEY;
const PEXELS_API_URL = "https://api.pexels.com/v1";

// Cache trong memory: tránh gọi Pexels lại cho cùng địa điểm trong 1 phiên
const imageUrlCache = new Map<string, { imageUrl: string; imageUrls: string[] }>();

/**
 * Xóa toàn bộ cache — dùng khi cần force refresh
 */
export function clearImageCache() {
  imageUrlCache.clear();
  console.log("🗑️ [ImageCache] Cleared");
}

/**
 * Hash đơn giản để chọn index ảnh khác nhau cho mỗi query
 * → tránh trùng ảnh khi cùng 1 category
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
 * Tạo từ khóa tìm kiếm từ thông tin địa điểm.
 * Kết hợp tên + Đà Lạt + category keyword để kết quả chính xác nhất.
 */
function buildSearchQuery(placeName: string, category?: string, address?: string): string {
  const parts: string[] = [placeName];

  if (address && !address.toLowerCase().includes("đà lạt")) {
    parts.push("Đà Lạt");
  } else if (!address) {
    parts.push("Đà Lạt");
  }

  const categoryKeywords: Record<string, string> = {
    cafe: "coffee shop",
    food: "restaurant vietnam food",
    checkin: "landmark tourist",
    nature: "nature landscape mountain",
    homestay: "homestay accommodation",
    rental: "motorbike scooter",
    signature: "famous landmark dalat vietnam",
  };

  if (category && categoryKeywords[category]) {
    parts.push(categoryKeywords[category]);
  }

  return parts.join(" ");
}

/**
 * Lấy 1 ảnh từ Pexels, chọn ảnh thứ `photoIndex` (để mỗi place có ảnh khác nhau).
 */
async function fetchPexelsImage(
  query: string,
  orientation: "landscape" | "portrait" | "squarish" = "landscape",
  photoIndex?: number,
): Promise<string | null> {
  if (!PEXELS_API_KEY || PEXELS_API_KEY === "your-pexels-api-key-here") {
    return null;
  }

  try {
    const searchQuery = buildSearchQuery(query);

    const response = await fetch(
      `${PEXELS_API_URL}/search?query=${encodeURIComponent(searchQuery)}&per_page=10&orientation=${orientation}`,
      {
        headers: { Authorization: PEXELS_API_KEY },
      },
    );

    if (!response.ok) {
      console.warn(`⚠️ Pexels API error: ${response.status}`);
      return null;
    }

    const data: any = await response.json();

    if (data.photos && data.photos.length > 0) {
      const idx =
        photoIndex !== undefined
          ? photoIndex % data.photos.length
          : hashString(query) % data.photos.length;
      const photo = data.photos[idx];
      console.log(`📸 [Pexels] "${query}" → photo #${idx} (id=${photo.id})`);
      return photo.src.large;
    }

    console.log(`❌ [Pexels] No images found for: "${searchQuery}"`);
    return null;
  } catch (error) {
    console.error("Pexels fetch error:", error);
    return null;
  }
}

/**
 * Lấy nhiều ảnh từ Pexels cho 1 query.
 * Trả về tối đa `limit` URLs khác nhau.
 */
async function fetchMultiplePexelsImages(
  query: string,
  limit = 4,
  orientation: "landscape" | "portrait" | "squarish" = "landscape",
): Promise<string[]> {
  if (!PEXELS_API_KEY || PEXELS_API_KEY === "your-pexels-api-key-here") {
    return [];
  }

  try {
    const searchQuery = buildSearchQuery(query);
    const perPage = Math.min(limit * 2, 15); // lấy dư một chút để chọn

    const response = await fetch(
      `${PEXELS_API_URL}/search?query=${encodeURIComponent(searchQuery)}&per_page=${perPage}&orientation=${orientation}`,
      {
        headers: { Authorization: PEXELS_API_KEY },
      },
    );

    if (!response.ok) return [];

    const data: any = await response.json();

    if (!data.photos || data.photos.length === 0) return [];

    const urls: string[] = [];
    for (let i = 0; i < Math.min(limit, data.photos.length); i++) {
      urls.push(data.photos[i].src.large);
    }

    console.log(`📸 [Pexels] "${query}" → ${urls.length} images`);
    return urls;
  } catch {
    return [];
  }
}

/**
 * Lấy ảnh cho 1 địa điểm.
 * Chiến lược: Pexels (tên + Đà Lạt) → Pexels (tên thuần) → Placeholder
 */
export async function getPlaceImageSmart(
  placeName: string,
  category?: string,
  address?: string,
  skipValidation = false,
): Promise<{ imageUrl: string; imageUrls?: string[]; source: "pexels" | "placeholder" }> {
  const cacheKey = `${placeName}::${category}`;

  // Luôn check cache trước
  if (imageUrlCache.has(cacheKey)) {
    const cached = imageUrlCache.get(cacheKey)!;
    console.log(`  ✅ [Cache] Using cached image for: ${placeName}`);
    return { imageUrl: cached.imageUrl, imageUrls: cached.imageUrls, source: "pexels" };
  }

  console.log(`🖼️ [SmartImage] Fetching for: ${placeName} (${category || "n/a"})`);

  // Bước 1: Pexels — tìm với tên + location
  const fullQuery = address ? `${placeName} ${address}` : placeName;
  let urls = await fetchMultiplePexelsImages(fullQuery, 4);

  // Bước 2: Pexels — fallback chỉ với tên thuần
  if (urls.length === 0) {
    urls = await fetchMultiplePexelsImages(placeName, 4);
  }

  // Bước 3: Fallback theo category
  if (urls.length === 0) {
    const categoryFallback = await fetchMultiplePexelsImages(
      `${category || "Đà Lạt"} landmark`,
      2,
    );
    if (categoryFallback.length > 0) {
      urls = categoryFallback;
    }
  }

  let result: { imageUrl: string; imageUrls?: string[]; source: "pexels" | "placeholder" };

  if (urls.length > 0) {
    imageUrlCache.set(cacheKey, { imageUrl: urls[0], imageUrls: urls });
    result = { imageUrl: urls[0], imageUrls: urls, source: "pexels" };
    console.log(`  ✅ [Result] Pexels: ${urls.length} URLs`);
  } else {
    const placeholder = getCategoryDefaultImage(category || "nature");
    result = { imageUrl: placeholder, source: "placeholder" };
    console.log(`  ⚠️ [Result] No Pexels image, using placeholder`);
  }

  return result;
}

/**
 * Batch: Lấy ảnh cho nhiều địa điểm cùng lúc.
 * Giới hạn concurrent để tránh rate limit Pexels.
 */
export async function batchGetPlaceImages(
  places: { name: string; category?: string; address?: string }[],
): Promise<Map<string, { imageUrl: string; imageUrls?: string[]; source: "pexels" | "placeholder" }>> {
  const results = new Map<string, { imageUrl: string; imageUrls?: string[]; source: "pexels" | "placeholder" }>();

  const BATCH_SIZE = 3; // Pexels free tier: 200 req/số tháng, chia nhỏ để an toàn

  for (let i = 0; i < places.length; i += BATCH_SIZE) {
    const batch = places.slice(i, i + BATCH_SIZE);
    const batchResults = await Promise.all(
      batch.map(async (place) => {
        const result = await getPlaceImageSmart(place.name, place.category, place.address);
        return { name: place.name, result };
      }),
    );

    for (const { name, result } of batchResults) {
      results.set(name, result);
    }

    if (i + BATCH_SIZE < places.length) {
      await new Promise((r) => setTimeout(r, 300)); // delay nhỏ giữa các batch
    }
  }

  return results;
}
