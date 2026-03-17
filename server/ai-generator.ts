import OpenAI from "openai";

// AI Configuration - Same as main server
const apiProxyBaseUrl = process.env.API_PROXY_BASE_URL;
const apiProxyKey = process.env.API_PROXY_KEY;
const apiProxyModel = process.env.API_PROXY_MODEL || "gemini-3-flash";

let apiKey: string | undefined;
let baseURL: string | undefined;
let defaultModel: string;

if (apiProxyBaseUrl && apiProxyKey) {
  apiKey = apiProxyKey;
  baseURL = apiProxyBaseUrl;
  defaultModel = apiProxyModel;
} else if (process.env.AI_INTEGRATIONS_OPENAI_API_KEY) {
  apiKey = process.env.AI_INTEGRATIONS_OPENAI_API_KEY;
  baseURL = process.env.AI_INTEGRATIONS_OPENAI_BASE_URL || undefined;
  defaultModel = "gpt-4o-mini";
} else {
  apiKey = process.env.OPENAI_API_KEY;
  baseURL = undefined;
  defaultModel = "gpt-4o-mini";
}

export const openai = new OpenAI({
  apiKey: apiKey,
  baseURL: baseURL,
});

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
const PERSONALIZED_PLACES_PROMPT = `Bạn là chuyên gia tư vấn du lịch cho Đà Lạt. Dựa vào thông tin người dùng sau đây, hãy gợi ý các địa điểm phù hợp nhất:

THÔNG TIN NGƯỜI DÙNG:
- Sở thích: {{preferences}}
- Phong cách du lịch: {{travelStyles}}
- Ngân sách: {{budget}}

YÊU CẦU:
1. Chỉ gợi ý các địa điểm THỰC TẾ ở Đà Lạt
2. Mỗi địa điểm phải có: id, name, slug, category, shortDescription, fullDescription, imageUrl (URL thực từ unsplash), tags, suitableFor, rating, reviewCount, priceRange/pricePerDay, address, openingHours, lat, lng
3. Trả về JSON array với tối thiểu 5-8 địa điểm phù hợp nhất với sở thích và ngân sách
4. Điều chỉnh gợi ý theo:
   - budget: "budget" (giá rẻ) → gợi địa điểm free hoặc giá rẻ
   - budget: "mid" (vừa) → gợi địa điểm trung bình
   - budget: "luxury" (sang trọng) → gợi địa điểm cao cấp
5. Phân bổ hợp lý các category theo sở thích (food, cafe, checkin, nature, relax, night)

Định dạng JSON chính xác:
[{"id": "slug-cua-dia-diem", "name": "Tên địa điểm", "slug": "slug-cua-dia-diem", "category": "cafe|restaurant|checkin|nature|homestay|rental", "shortDescription": "Mô tả ngắn", "fullDescription": "Mô tả đầy đủ", "imageUrl": "https://images.unsplash.com/...", "tags": ["#tag1", "#tag2"], "suitableFor": ["Cặp đôi", "Nhóm bạn"], "rating": 4.5, "reviewCount": 500, "priceRange": "50.000đ - 100.000đ", "address": "Địa chỉ", "openingHours": "7:00 - 17:00", "lat": 11.9, "lng": 108.4}]`;

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
}): Promise<any[]> {
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
      model: apiProxyBaseUrl ? defaultModel : "gpt-4o-mini",
      messages: [
        {
          role: "system",
          content:
            "Bạn là chuyên gia du lịch Đà Lạt. Chỉ trả về JSON array, không có text khác.",
        },
        { role: "user", content: prompt },
      ],
      max_completion_tokens: 2048,
      temperature: 0.7,
    });

    const content = response.choices[0]?.message?.content;
    return safeParseAIJson<any[]>(content, []);
  } catch (error) {
    console.error("Error generating personalized places:", error);
    return [];
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
      model: apiProxyBaseUrl ? defaultModel : "gpt-4o-mini",
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
    return safeParseAIJson<string[]>(content, []);
  } catch (error) {
    console.error("Error generating personalized prompts:", error);
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
      model: apiProxyBaseUrl ? defaultModel : "gpt-4o-mini",
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

    return response.choices[0]?.message?.content || "";
  } catch (error) {
    console.error("Error generating personalized welcome:", error);
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
      model: apiProxyBaseUrl ? defaultModel : "gpt-4o-mini",
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
    return safeParseAIJson<any[]>(content, []);
  } catch (error) {
    console.error("Error generating personalized notifications:", error);
    return [];
  }
}
