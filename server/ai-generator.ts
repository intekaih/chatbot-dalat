import { getCategoryDefaultImage } from "./pexels-service.js";
import { saveAIMauJson, openai, defaultModel } from "./utils.js";

export const CATEGORY_LIMITS = {
  checkin: 20,
  nature: 10,
  homestay: 20,
  cafe: 20,
  food: 20,
  rental: 10,
  signature: 10,
};
export const TOTAL_LIMIT = Object.values(CATEGORY_LIMITS).reduce((a, b) => a + b, 0);

// ====== Helper Functions ======

function slugify(text: string): string {
  return text
    .toLowerCase()
    .normalize("NFD")
    .replace(/[\u0300-\u036f]/g, "")
    .replace(/đ/g, "d")
    .replace(/Đ/g, "D")
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/^-|-$/g, "")
    .slice(0, 60);
}

function validateCategory(cat: string | undefined): string {
  if (!cat) return "checkin";
  const valid = ["cafe", "food", "checkin", "nature", "homestay", "rental", "signature"];
  return valid.includes(cat) ? cat : "checkin";
}

/**
 * Phân tích JSON từ output AI một cách robust.
 * Thử nhiều chiến lược khi AI trả về text không hoàn toàn là JSON.
 */
function safeParseAIJson<T>(
  content: string | null | undefined,
  fallback: T,
): T {
  if (!content?.trim()) return fallback;
  const text = content.trim();

  const strategies: Array<() => T> = [
    // 1. Parse trực tiếp
    () => JSON.parse(text),
    // 2. Lấy từ code block ```json ... ```
    () => {
      const m = text.match(/```(?:json)?\s*([\s\S]*?)```/);
      if (!m) throw new Error();
      return JSON.parse(m[1].trim());
    },
    // 3. Lấy array [...] đầu tiên
    () => {
      const start = text.indexOf("[");
      const end = text.lastIndexOf("]");
      if (start === -1 || end === -1) throw new Error();
      return JSON.parse(text.slice(start, end + 1));
    },
    // 4. Lấy object {...} đầu tiên
    () => {
      const start = text.indexOf("{");
      const end = text.lastIndexOf("}");
      if (start === -1 || end === -1) throw new Error();
      return JSON.parse(text.slice(start, end + 1));
    },
  ];

  for (const strategy of strategies) {
    try {
      return strategy();
    } catch {
      // thử chiến lược tiếp theo
    }
  }

  console.warn(
    "safeParseAIJson: all strategies failed for content:",
    text.slice(0, 200),
  );
  return fallback;
}

// Prompt for generating personalized places
// Lưu ý: AI chỉ trả về thông tin place, không có imageUrl
// Hệ thống sẽ tự động lấy ảnh từ Pexels API sau đó
// AI trả về JSON với 7 key theo category
// Số lượng: checkin=20, nature=10, homestay=20, cafe=20, food=20, rental=10, signature=10

const PERSONALIZED_PLACES_PROMPT = `Bạn là chuyên gia du lịch Đà Lạt. Dựa vào thông tin người dùng, hãy gợi ý các địa điểm phù hợp.

THÔNG TIN NGƯỜI DÙNG:
- Sở thích: {{preferences}}
- Phong cách du lịch: {{travelStyles}}
- Ngân sách: {{budget}}

YÊU CẦU - TRẢ VỀ JSON VỚI ĐÚNG 7 KEY:
1. "checkin": ĐÚNG ${CATEGORY_LIMITS.checkin} địa điểm check-in, bảo tàng, công trình kiến trúc nổi tiếng Đà Lạt (Dinh Bảo Đại, Chùa Linh Phước, Thung lũng Tình Yêu,...)
2. "nature": ĐÚNG ${CATEGORY_LIMITS.nature} địa điểm thiên nhiên: hồ, thác, rừng, vườn, đồi chè Đà Lạt (Hồ Tuyền Lâm, Hồ Xuân Hương, Đồi Chè Cầu Đất,...)
3. "homestay": ĐÚNG ${CATEGORY_LIMITS.homestay} chỗ ở/homestay/resort phù hợp với budget và phong cách
4. "cafe": ĐÚNG ${CATEGORY_LIMITS.cafe} quán cafe view đẹp, nổi tiếng nhất Đà Lạt (Tinh Yeu Coffee, The Married Beans, Windahills,...)
5. "food": ĐÚNG ${CATEGORY_LIMITS.food} quán ăn đặc sản Đà Lạt ngon nhất (lẩu gà lá é, bún bò, cơm niêu, bánh căn, sữa đậu nành,...)
6. "rental": ĐÚNG ${CATEGORY_LIMITS.rental} địa điểm thuê xe máy/xe đạp uy tín nhất Đà Lạt
7. "signature": ĐÚNG ${CATEGORY_LIMITS.signature} địa điểm mang tính biểu tượng "signature", nổi tiếng nhất của Đà Lạt (VD: Quảng trường Lâm Viên, Ga Đà Lạt, Chợ Biên Điền, Đỉnh Langbiang...)

MỖI ĐỊA ĐIỂM CẦN CÓ ĐẦY ĐỦ:
- id: string (slug dạng "ten-diem-di")
- name: string (tên thật, có thể search trên GG Maps)
- slug: string (tương tự id)
- category: CHỈ dùng 1 trong 7 giá trị: "cafe" | "food" | "checkin" | "nature" | "homestay" | "rental" | "signature"
- shortDescription: string (1-2 câu, hấp dẫn)
- fullDescription: string (mô tả đầy đủ, 3-5 câu)
- tags: string[] (VD: ["#cafe", "#viewdep"])
- suitableFor: string[] (VD: ["Cặp đôi", "Nhóm bạn"])
- rating: number (rating GG Maps, VD: 4.5)
- reviewCount: number (số review GG Maps, VD: 500)
- priceRange: string (VD: "50.000đ - 100.000đ") - cho cafe/food/checkin/nature
- pricePerDay: string (VD: "150.000đ/ngày") - cho homestay/rental
- address: string (địa chỉ đầy đủ ở Đà Lạt, Lâm Đồng)
- openingHours: string (VD: "7:00 - 22:00") - cho cafe/food/checkin
- lat: number (tọa độ GPS Đà Lạt)
- lng: number (tọa độ GPS Đà Lạt)
- vehicleTypes: string[] (VD: ["xe máy", "xe đạp"]) - cho rental
- phoneNumber: string (nếu có) - cho homestay/rental

QUAN TRỌNG:
- category phải là 1 trong 7 giá trị: cafe, food, checkin, nature, homestay, rental, signature
- KHÔNG dùng "featured" hoặc "restaurant" cho category
- Chỉ gợi địa điểm THỰC TẾ ở Đà Lạt, có thể tìm trên GG Maps
- Rating phải realistic (4.0-5.0), reviewCount từ 50-5000
- Với budget "{{budget}}": chọn địa điểm phù hợp mức giá
- KHÔNG bao gồm trường imageUrl - hệ thống tự lấy ảnh
- Số lượng mỗi category phải ĐÚNG: checkin=${CATEGORY_LIMITS.checkin}, nature=${CATEGORY_LIMITS.nature}, homestay=${CATEGORY_LIMITS.homestay}, cafe=${CATEGORY_LIMITS.cafe}, food=${CATEGORY_LIMITS.food}, rental=${CATEGORY_LIMITS.rental}, signature=${CATEGORY_LIMITS.signature}
- Mỗi địa điểm phải KHÁC NHAU, không trùng tên

Định dạng JSON CHÍNH XÁC (7 keys):
{
  "checkin": [
    {"id": "dinh-bao-dai", "name": "Dinh Bảo Đại", "slug": "dinh-bao-dai", "category": "checkin", "shortDescription": "...", "fullDescription": "...", "tags": ["#checkin"], "suitableFor": ["Cặp đôi", "Nhóm bạn"], "rating": 4.6, "reviewCount": 4500, "priceRange": "40.000đ - 70.000đ", "address": "01 Trần Quang Diệu, Phường 10, Đà Lạt, Lâm Đồng", "openingHours": "7:00 - 17:00", "lat": 11.9415, "lng": 108.4273},
    ... (9 more)
  ],
  "nature": [
    {"id": "ho-tuyen-lam", "name": "Hồ Tuyền Lâm", "slug": "ho-tuyen-lam", "category": "nature", "shortDescription": "...", "fullDescription": "...", "tags": ["#hothuyensang"], "suitableFor": ["Cặp đôi", "Gia đình"], "rating": 4.7, "reviewCount": 3200, "priceRange": "Miễn phí tham quan", "address": "Phường 4, Đà Lạt, Lâm Đồng", "lat": 11.9299, "lng": 108.4435},
    ... (9 more)
  ],
  "homestay": [
    {"id": "terracotta-hotel", "name": "Terracotta Hotel", "slug": "terracotta-hotel", "category": "homestay", "shortDescription": "...", "fullDescription": "...", "tags": ["#khachsan"], "suitableFor": ["Cặp đôi", "Gia đình"], "rating": 4.8, "reviewCount": 2100, "pricePerDay": "1.500.000đ - 3.500.000đ/đêm", "address": "13 Đường Phạm Hồng Thái, Đà Lạt", "lat": 11.9465, "lng": 108.4378, "phoneNumber": "0263-3822-888"},
    ... (9 more)
  ],
  "cafe": [
    {"id": "tinh-yeu-coffee", "name": "Tinh Yeu Coffee", "slug": "tinh-yeu-coffee", "category": "cafe", "shortDescription": "...", "fullDescription": "...", "tags": ["#cafe"], "suitableFor": ["Cặp đôi", "Nhóm bạn"], "rating": 4.8, "reviewCount": 1850, "priceRange": "40.000đ - 90.000đ", "address": "Tam Kỳ, Phường 6, Đà Lạt", "openingHours": "6:30 - 22:00", "lat": 11.9389, "lng": 108.4412},
    ... (9 more)
  ],
  "food": [
    {"id": "lau-ga-la-e", "name": "Lẩu Gà Lá É Đà Lạt", "slug": "lau-ga-la-e", "category": "food", "shortDescription": "...", "fullDescription": "...", "tags": ["#dacsan"], "suitableFor": ["Nhóm bạn", "Gia đình"], "rating": 4.7, "reviewCount": 700, "priceRange": "150.000đ - 250.000đ/nồi", "address": "142 Khe Sanh, Phường 7, Đà Lạt", "openingHours": "10:30 - 22:00", "lat": 11.9512, "lng": 108.4499},
    ... (9 more)
  ],
  "rental": [
    {"id": "thue-xe-may-dalat-center", "name": "Thuê Xe Máy Đà Lạt Center", "slug": "thue-xe-may-dalat-center", "category": "rental", "shortDescription": "...", "fullDescription": "...", "tags": ["#thuexe"], "suitableFor": ["Solo", "Nhóm bạn"], "rating": 4.5, "reviewCount": 750, "pricePerDay": "100.000đ - 150.000đ/ngày", "address": "23 Nguyễn Thị Minh Khai, Phường 1, Đà Lạt", "openingHours": "7:00 - 21:00", "lat": 11.9405, "lng": 108.4371, "phoneNumber": "0263-123-456", "vehicleTypes": ["xe máy", "xe tay ga"], "depositRequired": "CCCD gốc hoặc 500.000đ tiền cọc"},
    ... (4 more)
  ],
  "signature": [
    {"id": "quang-truong-lam-vien", "name": "Quảng trường Lâm Viên", "slug": "quang-truong-lam-vien", "category": "signature", "shortDescription": "...", "fullDescription": "...", "tags": ["#signature"], "suitableFor": ["Tất cả"], "rating": 4.8, "reviewCount": 15000, "priceRange": "Miễn phí", "address": "Đường Trần Quốc Toản, Phường 1, Đà Lạt", "openingHours": "Cả ngày", "lat": 11.9381, "lng": 108.4449},
    ... (9 more)
  ]
}`;

// Prompt for generating personalized quick prompts
const PERSONALIZED_PROMPTS_PROMPT = `Dựa vào thông tin người dùng sau đây, hãy tạo 6 câu hỏi/prompt phù hợp để người dùng có thể hỏi chatbot:

THÔNG TIN NGƯỜI DÙNG:
- Sở thích: {{preferences}}
- Phong cách du lịch: {{travelStyles}}
- Ngân sách: {{budget}}

YÊU CẦU:
1. Tạo 6 prompt ngắn gọn, thực tế về du lịch Đà Lạt
2. Ưu tiên theo sở thích của user
3. Mỗi prompt tối đa 10 từ
4. Trả về JSON array string: ["prompt 1", "prompt 2", ...]"`;

// Prompt for generating personalized chat welcome
const PERSONALIZED_WELCOME_PROMPT = `Dựa vào thông tin người dùng sau đây, hãy tạo một tin nhắn chào mừng cá nhân hóa cho chatbot:

THÔNG TIN NGƯỜI DÙNG:
- Tên: {{name}}
- Sở thích: {{preferences}}
- Phong cách du lịch: {{travelStyles}}
- Ngân sách: {{budget}}

YÊU CẦU:
1. Tạo tin nhắn chào mừng thân thiện, ấm áp
2. Nhắc đến tên user và sở thích của họ
3. Gợi ý 1-2 địa điểm phù hợp với sở thích
4. Khuyến khích user khám phá Đà Lạt
5. Giới thiệu các quick prompts có thể hỏi
6. Độ dài khoảng 100-150 từ
7. Sử dụng emoji phù hợp`;

// Prompt for generating personalized notifications
const PERSONALIZED_NOTIFICATIONS_PROMPT = `Dựa vào thông tin người dùng sau đây, hãy tạo các notification phù hợp:

THÔNG TIN NGƯỜI DÙNG:
- Sở thích: {{preferences}}
- Phong cách du lịch: {{travelStyles}}

YÊU CẦU:
1. Tạo 5 notification đa dạng (weather, tip, promo, trip)
2. Mỗi notification có: type, title, content, iconColor, icon
3. Nội dung phù hợp với sở thích và thời điểm hiện tại
4. Trả về JSON array:
[{"type": "weather|tip|promo|trip", "title": "Tiêu đề", "content": "Nội dung", "iconColor": "bg-blue-100 text-blue-700", "icon": "🌧️"}]`;

function getBudgetLabel(budget: string): string {
  switch (budget) {
    case "budget":
      return "Tiết kiệm";
    case "mid":
      return "Vừa phải";
    case "luxury":
      return "Sang trọng";
    default:
      return "Vừa phải";
  }
}

function getTravelStyleLabel(style: string): string {
  switch (style) {
    case "couple":
      return "Cặp đôi";
    case "friends":
      return "Nhóm bạn";
    case "family":
      return "Gia đình";
    case "solo":
      return "Solo";
    default:
      return "Du lịch";
  }
}

function getPreferenceLabel(pref: string): string {
  switch (pref) {
    case "food":
      return "Ẩm thực";
    case "cafe":
      return "Cafe";
    case "checkin":
      return "Check-in";
    case "relax":
      return "Nghỉ dưỡng";
    case "nature":
      return "Thiên nhiên";
    case "night":
      return "Về đêm";
    default:
      return pref;
  }
}

export async function generatePersonalizedPlaces(userData: {
  preferences: string[];
  travelStyles: string[];
  budget: string;
}): Promise<{
  checkin: any[];
  nature: any[];
  homestay: any[];
  cafe: any[];
  food: any[];
  rental: any[];
  signature: any[];
}> {
  const budgetLabel = getBudgetLabel(userData.budget);
  const travelStylesLabel = userData.travelStyles
    .map((s) => getTravelStyleLabel(s))
    .join(", ");
  const preferencesLabel = userData.preferences
    .map((p) => getPreferenceLabel(p))
    .join(", ");

  const prompt = PERSONALIZED_PLACES_PROMPT.replace(
    "{{preferences}}",
    preferencesLabel,
  )
    .replace("{{travelStyles}}", travelStylesLabel)
    .replace("{{budget}}", budgetLabel);

  try {
    const response = await openai.chat.completions.create({
      model: defaultModel,
      messages: [
        {
          role: "system",
          content:
            "Bạn là chuyên gia du lịch Đà Lạt. Chỉ trả về JSON object với ĐÚNG 7 keys: checkin, nature, homestay, cafe, food, rental, signature. category mỗi place phải là 1 trong: cafe, food, checkin, nature, homestay, rental, signature. KHÔNG dùng category khác. KHÔNG bao gồm trường imageUrl. Số lượng: checkin=20, nature=10, homestay=20, cafe=20, food=20, rental=10, signature=10.",
        },
        { role: "user", content: prompt },
      ],
      max_completion_tokens: 8192,
      temperature: 0.7,
    });

    const content = response.choices[0]?.message?.content;
    const structuredData = safeParseAIJson<{
      checkin?: any[];
      nature?: any[];
      homestay?: any[];
      cafe?: any[];
      food?: any[];
      rental?: any[];
      signature?: any[];
    }>(content, { checkin: [], nature: [], homestay: [], cafe: [], food: [], rental: [], signature: [] });

    saveAIMauJson("generatePersonalizedPlaces", { rawAI: content, parsed: structuredData });

    // Validate & normalize mỗi category
    const normalize = (arr: any[] = [], category: string, isFeatured: boolean): any[] =>
      arr.map((p: any) => ({
        ...p,
        slug: slugify(p.name || category),
        category: validateCategory(p.category) || category,
        featured: isFeatured,
        depositRequired: category === "rental" ? "CCCD gốc hoặc 500.000đ tiền cọc" : p.depositRequired,
      }));

    const checkinList = normalize(structuredData.checkin, "checkin", true);
    const natureList = normalize(structuredData.nature, "nature", true);
    const homestayList = normalize(structuredData.homestay, "homestay", false);
    const cafeList = normalize(structuredData.cafe, "cafe", false);
    const foodList = normalize(structuredData.food, "food", false);
    const rentalList = normalize(structuredData.rental, "rental", false);
    const signatureList = normalize(structuredData.signature, "signature", true);

    const allPlaces = [...checkinList, ...natureList, ...homestayList, ...cafeList, ...foodList, ...rentalList, ...signatureList];
    console.log(`📸 Places generated: ${allPlaces.length} places`);

    // Gán placeholder image (Pexels URL sẽ được lấy riêng khi cần)
    const placesWithImages = allPlaces.map((place) => {
      return { ...place, imageUrl: getCategoryDefaultImage(place.category) };
    });

    // Tách lại theo 7 category
    const result = {
      checkin: placesWithImages.filter(p => p.category === "checkin"),
      nature: placesWithImages.filter(p => p.category === "nature"),
      homestay: placesWithImages.filter(p => p.category === "homestay"),
      cafe: placesWithImages.filter(p => p.category === "cafe"),
      food: placesWithImages.filter(p => p.category === "food"),
      rental: placesWithImages.filter(p => p.category === "rental"),
      signature: placesWithImages.filter(p => p.category === "signature"),
    };

    console.log(
      `✅ generatePersonalizedPlaces: ${result.checkin.length} checkin, ${result.nature.length} nature, ` +
      `${result.homestay.length} homestay, ${result.cafe.length} cafe, ` +
      `${result.food.length} food, ${result.rental.length} rental, ${result.signature.length} signature`
    );
    return result;
  } catch (error) {
    console.error("Error generating personalized places:", error);
    saveAIMauJson("generatePersonalizedPlaces_ERROR", { error: String(error) });
    return { checkin: [], nature: [], homestay: [], cafe: [], food: [], rental: [], signature: [] };
  }
}

/**
 * Tạo bộ dữ liệu mẫu mặc định (tổng ${TOTAL_LIMIT} places) cho tất cả user mới.
 * Gọi 1 lần khi server khởi động lần đầu (DB chưa có default places).
 * Không phụ thuộc vào preferences của user cụ thể nào.
 */
export async function generateDefaultPlaces(): Promise<{
  checkin: any[];
  nature: any[];
  homestay: any[];
  cafe: any[];
  food: any[];
  rental: any[];
  signature: any[];
}> {
  const defaultPrompt = `Bạn là chuyên gia du lịch Đà Lạt. Hãy gợi ý các địa điểm NỔI TIẾNG NHẤT, PHỔ BIẾN NHẤT ở Đà Lạt cho du khách mới.

YÊU CẦU - TRẢ VỀ JSON VỚI ĐÚNG 7 KEY:
1. "checkin": ĐÚNG ${CATEGORY_LIMITS.checkin} địa điểm check-in, bảo tàng, công trình kiến trúc nổi tiếng nhất Đà Lạt
2. "nature": ĐÚNG ${CATEGORY_LIMITS.nature} địa điểm thiên nhiên: hồ, thác, rừng, vườn, đồi chè nổi tiếng nhất
3. "homestay": ĐÚNG ${CATEGORY_LIMITS.homestay} chỗ ở/homestay/resort phổ biến nhất với đa dạng giá từ bình dân đến cao cấp
4. "cafe": ĐÚNG ${CATEGORY_LIMITS.cafe} quán cafe view đẹp, nổi tiếng nhất Đà Lạt
5. "food": ĐÚNG ${CATEGORY_LIMITS.food} quán ăn đặc sản Đà Lạt ngon và nổi tiếng nhất
6. "rental": ĐÚNG ${CATEGORY_LIMITS.rental} địa điểm thuê xe máy/xe đạp uy tín nhất Đà Lạt
7. "signature": ĐÚNG ${CATEGORY_LIMITS.signature} địa điểm mang tính biểu tượng "signature", nổi tiếng nhất của Đà Lạt (VD: Quảng trường Lâm Viên, Ga Đà Lạt, Chợ Biên Điền, Đỉnh Langbiang...)

MỖI ĐỊA ĐIỂM CẦN CÓ ĐẦY ĐỦ:
- id: string (slug dạng "ten-diem-di")
- name: string (tên thật, có thể search trên GG Maps)
- slug: string (tương tự id)
- category: CHỈ dùng 1 trong 7 giá trị: "cafe" | "food" | "checkin" | "nature" | "homestay" | "rental" | "signature"
- shortDescription: string (1-2 câu, hấp dẫn)
- fullDescription: string (mô tả đầy đủ, 3-5 câu)
- tags: string[] (VD: ["#cafe", "#viewdep"])
- suitableFor: string[] (VD: ["Cặp đôi", "Nhóm bạn"])
- rating: number (rating GG Maps, VD: 4.5)
- reviewCount: number (số review GG Maps, VD: 500)
- priceRange: string (VD: "50.000đ - 100.000đ") - cho cafe/food/checkin/nature
- pricePerDay: string (VD: "150.000đ/ngày") - cho homestay/rental
- address: string (địa chỉ đầy đủ ở Đà Lạt, Lâm Đồng)
- openingHours: string (VD: "7:00 - 22:00")
- lat: number (tọa độ GPS Đà Lạt)
- lng: number (tọa độ GPS Đà Lạt)
- vehicleTypes: string[] (cho rental)
- phoneNumber: string (nếu có)

QUAN TRỌNG:
- Chỉ gợi địa điểm THỰC TẾ ở Đà Lạt, có thể tìm trên GG Maps
- Bao gồm ĐA DẠNG mức giá từ bình dân đến cao cấp
- KHÔNG bao gồm trường imageUrl
- Số lượng: checkin=${CATEGORY_LIMITS.checkin}, nature=${CATEGORY_LIMITS.nature}, homestay=${CATEGORY_LIMITS.homestay}, cafe=${CATEGORY_LIMITS.cafe}, food=${CATEGORY_LIMITS.food}, rental=${CATEGORY_LIMITS.rental}, signature=${CATEGORY_LIMITS.signature}
- Mỗi địa điểm phải KHÁC NHAU, không trùng tên`;

  console.log(`🤖 [DEFAULT] Bắt đầu tạo ${TOTAL_LIMIT} default places bằng AI...`);

  try {
    const response = await openai.chat.completions.create({
      model: defaultModel,
      messages: [
        {
          role: "system",
          content:
            "Bạn là chuyên gia du lịch Đà Lạt. Chỉ trả về JSON object với ĐÚNG 7 keys: checkin, nature, homestay, cafe, food, rental, signature. category mỗi place phải là 1 trong: cafe, food, checkin, nature, homestay, rental, signature. KHÔNG dùng category khác. KHÔNG bao gồm trường imageUrl. Số lượng: checkin=${CATEGORY_LIMITS.checkin}, nature=${CATEGORY_LIMITS.nature}, homestay=${CATEGORY_LIMITS.homestay}, cafe=${CATEGORY_LIMITS.cafe}, food=${CATEGORY_LIMITS.food}, rental=${CATEGORY_LIMITS.rental}, signature=${CATEGORY_LIMITS.signature}.",
        },
        { role: "user", content: defaultPrompt },
      ],
      max_completion_tokens: 8192,
      temperature: 0.7,
    });

    const content = response.choices[0]?.message?.content;
    const structuredData = safeParseAIJson<{
      checkin?: any[];
      nature?: any[];
      homestay?: any[];
      cafe?: any[];
      food?: any[];
      rental?: any[];
      signature?: any[];
    }>(content, { checkin: [], nature: [], homestay: [], cafe: [], food: [], rental: [], signature: [] });

    saveAIMauJson("generateDefaultPlaces", { rawAI: content, parsed: structuredData });

    // Validate & normalize
    const normalize = (arr: any[] = [], category: string, isFeatured: boolean): any[] =>
      arr.map((p: any) => ({
        ...p,
        slug: slugify(p.name || category),
        category: validateCategory(p.category) || category,
        featured: isFeatured,
        depositRequired: category === "rental" ? "CCCD gốc hoặc 500.000đ tiền cọc" : p.depositRequired,
      }));

    const checkinList = normalize(structuredData.checkin, "checkin", true);
    const natureList = normalize(structuredData.nature, "nature", true);
    const homestayList = normalize(structuredData.homestay, "homestay", false);
    const cafeList = normalize(structuredData.cafe, "cafe", false);
    const foodList = normalize(structuredData.food, "food", false);
    const rentalList = normalize(structuredData.rental, "rental", false);
    const signatureList = normalize(structuredData.signature, "signature", true);

    const allPlaces = [...checkinList, ...natureList, ...homestayList, ...cafeList, ...foodList, ...rentalList, ...signatureList];
    console.log(`📸 [DEFAULT] Places generated: ${allPlaces.length} default places`);

    // Gán placeholder image (Pexels URL sẽ được lấy riêng khi cần)
    const placesWithImages = allPlaces.map((place) => {
      return { ...place, imageUrl: getCategoryDefaultImage(place.category) };
    });

    const result = {
      checkin: placesWithImages.filter(p => p.category === "checkin"),
      nature: placesWithImages.filter(p => p.category === "nature"),
      homestay: placesWithImages.filter(p => p.category === "homestay"),
      cafe: placesWithImages.filter(p => p.category === "cafe"),
      food: placesWithImages.filter(p => p.category === "food"),
      rental: placesWithImages.filter(p => p.category === "rental"),
      signature: placesWithImages.filter(p => p.category === "signature"),
    };

    console.log(
      `✅ [DEFAULT] generateDefaultPlaces: ${result.checkin.length} checkin, ${result.nature.length} nature, ` +
      `${result.homestay.length} homestay, ${result.cafe.length} cafe, ` +
      `${result.food.length} food, ${result.rental.length} rental, ${result.signature.length} signature`
    );
    return result;
  } catch (error) {
    console.error("❌ [DEFAULT] Error generating default places:", error);
    saveAIMauJson("generateDefaultPlaces_ERROR", { error: String(error) });
    return { checkin: [], nature: [], homestay: [], cafe: [], food: [], rental: [], signature: [] };
  }
}

export async function generatePersonalizedPrompts(userData: {
  preferences: string[];
  travelStyles: string[];
  budget: string;
}): Promise<string[]> {
  const budgetLabel = getBudgetLabel(userData.budget);
  const travelStylesLabel = userData.travelStyles
    .map((s) => getTravelStyleLabel(s))
    .join(", ");
  const preferencesLabel = userData.preferences
    .map((p) => getPreferenceLabel(p))
    .join(", ");

  const prompt = PERSONALIZED_PROMPTS_PROMPT.replace(
    "{{preferences}}",
    preferencesLabel,
  )
    .replace("{{travelStyles}}", travelStylesLabel)
    .replace("{{budget}}", budgetLabel);

  try {
    const response = await openai.chat.completions.create({
      model: defaultModel,
      messages: [
        {
          role: "system",
          content: "Chỉ trả về JSON array string, không có text khác.",
        },
        { role: "user", content: prompt },
      ],
      max_completion_tokens: 256,
      temperature: 0.7,
    });

    const content = response.choices[0]?.message?.content;
    const result = safeParseAIJson<string[]>(content, []);
    saveAIMauJson("generatePersonalizedPrompts", { rawAI: content, parsed: result });
    return result;
  } catch (error) {
    console.error("Error generating personalized prompts:", error);
    saveAIMauJson("generatePersonalizedPrompts_ERROR", { error: String(error), fallback: true });
    return [];
  }
}

export async function generatePersonalizedWelcome(userData: {
  name: string;
  preferences: string[];
  travelStyles: string[];
  budget: string;
}): Promise<string> {
  const budgetLabel = getBudgetLabel(userData.budget);
  const travelStylesLabel = userData.travelStyles
    .map((s) => getTravelStyleLabel(s))
    .join(", ");
  const preferencesLabel = userData.preferences
    .map((p) => getPreferenceLabel(p))
    .join(", ");

  const prompt = PERSONALIZED_WELCOME_PROMPT.replace("{{name}}", userData.name)
    .replace("{{preferences}}", preferencesLabel)
    .replace("{{travelStyles}}", travelStylesLabel)
    .replace("{{budget}}", budgetLabel);

  try {
    const response = await openai.chat.completions.create({
      model: defaultModel,
      messages: [
        {
          role: "system",
          content: "Bạn là trợ lý du lịch thân thiện. Trả lời bằng tiếng Việt.",
        },
        { role: "user", content: prompt },
      ],
      max_completion_tokens: 512,
      temperature: 0.7,
    });

    const content = response.choices[0]?.message?.content || "";
    saveAIMauJson("generatePersonalizedWelcome", { rawAI: content });
    return content;
  } catch (error) {
    console.error("Error generating personalized welcome:", error);
    saveAIMauJson("generatePersonalizedWelcome_ERROR", { error: String(error), fallback: true });
    return "";
  }
}

export async function generatePersonalizedNotifications(userData: {
  preferences: string[];
  travelStyles: string[];
}): Promise<any[]> {
  const travelStylesLabel = userData.travelStyles
    .map((s) => getTravelStyleLabel(s))
    .join(", ");
  const preferencesLabel = userData.preferences
    .map((p) => getPreferenceLabel(p))
    .join(", ");

  const prompt = PERSONALIZED_NOTIFICATIONS_PROMPT.replace(
    "{{preferences}}",
    preferencesLabel,
  ).replace("{{travelStyles}}", travelStylesLabel);

  try {
    const response = await openai.chat.completions.create({
      model: defaultModel,
      messages: [
        {
          role: "system",
          content: "Chỉ trả về JSON array, không có text khác.",
        },
        { role: "user", content: prompt },
      ],
      max_completion_tokens: 512,
      temperature: 0.7,
    });

    const content = response.choices[0]?.message?.content;
    const result = safeParseAIJson<any[]>(content, []);
    saveAIMauJson("generatePersonalizedNotifications", { rawAI: content, parsed: result });
    return result;
  } catch (error) {
    console.error("Error generating personalized notifications:", error);
    saveAIMauJson("generatePersonalizedNotifications_ERROR", { error: String(error), fallback: true });
    return [];
  }
}
