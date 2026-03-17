import "dotenv/config";
import express from "express";
import cors from "cors";
import OpenAI from "openai";
import { v4 as uuidv4 } from "uuid";
import {
  getOrCreateUser,
  updateUserPreferences,
  getPlaces,
  getCategories,
  getQuickPrompts,
  getReviews,
  getUserNotifications,
  createNotification,
  markNotificationRead,
  getTrips,
  createTrip,
  getChatSessions,
  createChatSession,
  addChatMessage,
  getFavorites,
  addFavorite,
  removeFavorite,
  isFavorite,
  deleteChatSession,
  type UserRow,
  type NotificationRow,
} from "./db.js";
import {
  generatePersonalizedPlaces,
  generatePersonalizedPrompts,
  generatePersonalizedWelcome,
  generatePersonalizedNotifications,
} from "./ai-generator.js";

const app = express();

// --- CORS: chỉ cho phép các origin được liệt kê ---
const ALLOWED_ORIGINS = (
  process.env.CORS_ORIGIN ||
  "http://localhost:8100,http://127.0.0.1:8100,http://localhost:4200,http://127.0.0.1:4200"
)
  .split(",")
  .map((o) => o.trim());
app.use(
  cors({
    origin: (origin, callback) => {
      // Cho phép requests không có origin (curl, mobile app native, Capacitor)
      if (!origin) return callback(null, true);
      if (ALLOWED_ORIGINS.includes(origin)) return callback(null, true);
      callback(new Error(`CORS blocked: ${origin}`));
    },
    methods: ["GET", "POST", "DELETE", "PUT", "PATCH", "OPTIONS"],
    allowedHeaders: ["Content-Type", "device-id"],
    credentials: true,
  }),
);
app.use(express.json({ limit: "10mb" }));

// --- Rate Limiter ---
const RATE_LIMIT = 30;
const RATE_WINDOW_MS = 60 * 1000;
const ipRequestMap = new Map<string, { count: number; resetAt: number }>();

setInterval(
  () => {
    const now = Date.now();
    for (const [ip, data] of ipRequestMap.entries()) {
      if (now > data.resetAt) ipRequestMap.delete(ip);
    }
  },
  5 * 60 * 1000,
);

function rateLimiter(
  req: express.Request,
  res: express.Response,
  next: express.NextFunction,
) {
  const ip = req.ip || req.socket.remoteAddress || "unknown";
  const now = Date.now();
  const entry = ipRequestMap.get(ip);

  if (!entry || now > entry.resetAt) {
    ipRequestMap.set(ip, { count: 1, resetAt: now + RATE_WINDOW_MS });
    return next();
  }

  if (entry.count >= RATE_LIMIT) {
    return res.status(429).json({
      error: "Quá nhiều yêu cầu. Vui lòng thử lại sau 1 phút.",
      retryAfter: Math.ceil((entry.resetAt - now) / 1000),
    });
  }

  entry.count++;
  return next();
}

// --- AI Configuration ---
const apiProxyBaseUrl = process.env.API_PROXY_BASE_URL;
const apiProxyKey = process.env.API_PROXY_KEY;
const apiProxyModel = process.env.API_PROXY_MODEL || "gemini-3-flash";

let apiKey: string | undefined;
let baseURL: string | undefined;
let defaultModel: string;

if (apiProxyBaseUrl && apiProxyKey) {
  console.log("🔧 Using API Proxy configuration");
  apiKey = apiProxyKey;
  baseURL = apiProxyBaseUrl;
  defaultModel = apiProxyModel;
} else if (process.env.AI_INTEGRATIONS_OPENAI_API_KEY) {
  console.log("🔧 Using Replit AI Integration");
  apiKey = process.env.AI_INTEGRATIONS_OPENAI_API_KEY;
  baseURL = process.env.AI_INTEGRATIONS_OPENAI_BASE_URL || undefined;
  defaultModel = "gpt-4o-mini";
} else {
  console.log("🔧 Using Direct OpenAI API");
  apiKey = process.env.OPENAI_API_KEY;
  baseURL = undefined;
  defaultModel = "gpt-4o-mini";
}

const openai = new OpenAI({
  apiKey: apiKey,
  baseURL: baseURL,
});

// --- User & Device ID Middleware ---
function getDeviceId(req: express.Request): string {
  // Use device-id header or IP as fallback
  return (
    (req.headers["device-id"] as string) ||
    req.ip ||
    req.socket.remoteAddress ||
    "unknown"
  );
}

// --- System Prompt ---
const DALAT_SYSTEM_PROMPT = `Bạn là trợ lý du lịch AI thông minh cho Đà Lạt - "Thành phố Ngàn Hoa". Bạn cần tư vấn tận tâm, chi tiết và cá nhân hóa cho từng khách du lịch.

## KIẾN THỨC CHUYÊN SÂU VỀ ĐÀ LẠT:

### 📍 Địa điểm du lịch nổi tiếng:
- **Hồ Xuân Hương** - Trung tâm thành phố, đi bộ dạo quanh hồ
- **Thung Lũng Tình Yêu** - Địa điểm check-in lãng mạn
- **Langbiang** - Núi cao nhất Đà Lạt, view 360°
- **Đồi Chè Cầu Đất** - Cảnh đẹp bạt ngàn
- **Crazy House (Nhà của Hang)** - Kiến trúc độc đáo
- **Dinh Bảo Đại** - di tích lịch sử
- **Đại học Đà Lạt** - Cổng trường check-in nổi tiếng
- **Thác Datanla** - Thác nước tự nhiên
- **Hồ Tuyền Lâm** - Hồ nước yên bình
- **Chợ Đà Lạt** - Trải nghiệm văn hóa địa phương

### 🍜 Ẩm thực đặc sản:
- **Bánh tráng nướng** - Món ăn đường phố nổi tiếng
- **Bánh mì xíu mại** - Bánh mì Việt-Pháp
- **Lẩu gà lá é** - Đặc sản Đà Lạt
- **Kem bơ** - Kem Đà Lạt nổi tiếng
- **Dâu tây** - Trái cây địa phương
- **Mực nướng** - Hải sản tương ngon
- **Trà atiso** - Thức uống địa phương

### ☕ Quán cà phê view đẹp:
- **Quán Cối Xay Gió** - View toàn cảnh thành phố
- **The Coffee House** - Không gian hiện đại
- **Café Vintaso** - View đồi núi
- **Windahills Coffee** - View thung lũng

### 🎯 Trải nghiệm & hoạt động:
- **Cắm trại** - Thung Lũng Tình Yêu, Langbiang
- **Quad bike** - Mạo hiểm ở Langbiang
- **Trồng rau** - Trải nghiệm nông trại
- **Khám phá hang động** - Hang Địa Đàng
- **Xem hoa** - Vườn hoa, phượng tím

## QUY TẮC TƯ VẤN BẮT BUỘC:

### 1. KHÔNG BAO GIỜ chỉ gợi ý 1 địa điểm duy nhất
- Luôn cung cấp TỐI THIỂU 3-5 lựa chọn cho mỗi loại câu hỏi
- Nếu user hỏi "địa điểm vui chơi" → phải liệt kê ít nhất 5-7 địa điểm
- Nếu user hỏi "quán ăn" → phải liệt kê ít nhất 5-7 quán

### 2. CÁ NHÂN HÓA - LUÔN hỏi thông tin trước khi tư vấn:
- Nếu user chưa nói rõ THỜI GIAN → Hỏi: "Bạn đi mấy ngày?"
- Nếu user chưa nói rõ SỞ THÍCH → Hỏi: "Bạn thích chill nhẹ hay khám phá mạnh?"
- Nếu user chưa nói rõ NGÂN SÁCH → Hỏi: "Ngân sách của bạn khoảng bao nhiêu?"
- Nếu user đi NHÓM → Hỏi: "Đi cùng gia đình, bạn bè hay người yêu?"

### 3. FORMAT TRẢ LỜI HIỆN ĐẠI:
Sử dụng cấu trúc rõ ràng như sau:

**🏷️ TÊN CATEGORY**
- **Tên địa điểm 1** - Mô tả ngắn - 💰 Giá/Gợi ý giá
- **Tên địa điểm 2** - Mô tả ngắn - 💰 Giá
- ...

Các category có thể dùng:
- 🏛️ Check-in &拍照
- 🎢 Vui chơi & Mạo hiểm
- ☕ Cafe & View đẹp
- 🍜 Ẩm thực đường phố
- 🍽️ Nhà hàng
- 🌙 Nightlife & Bar
- 🌿 Nature & Khám phá

### 4. CTA MẠNH - Kết thúc bằng đề xuất hành động cụ thể:
- "Mình tạo lịch trình chi tiết 2 ngày cho bạn nhé?"
- "Bạn muốn mình gợi ý combo đi + ăn + cafe không?"
- "Mình lưu các địa điểm này vào danh sách yêu thích luôn không?"
- "Bạn có muốn đặt tour hoặc hướng dẫn đường đi không?"

### 5. TIPS INSIDER (thêm vào cuối mỗi gợi ý):
- ⏰ "Nên đi vào buổi sáng sớm (6-8h) để tránh đông"
- 💡 "Mang theo áo khoác vì Đà Lạt lạnh về đêm"
- 🎫 "Mua vé combo tiết kiệm hơn"
- 📍 "Đỗ xe ở bãi rào Đồi Frai thuận tiện hơn"
- 🌤️ "Tháng 3-5 hoa phượng tím nở rực rỡ"

### 6. STYLE GIAO TIẾP:
- Thân thiện, ấm áp như người bạn địa phương
- Sử dụng emoji phù hợp để tạo không khí vui vẻ
- Dùng **bold** cho tên địa điểm quan trọng
- Trả lời đầy đủ, chi tiết, KHÔNG ngắn gọn quá
- Nếu user hỏi chung → hỏi thêm thông tin để cá nhân hóa

### 7. KHI GẶP ẢNH:
- Phân tích ảnh để nhận diện địa điểm
- Cung cấp thông tin chi tiết về địa điểm đó
- Gợi ý các địa điểm lân cận tương tự`;

const PLACE_EXTRACT_PROMPT = `Dựa vào cuộc trò chuyện, nếu có gợi ý nhiều địa điểm cụ thể, hãy trả về JSON array chứa tất cả các địa điểm được đề cập.
Trả về JSON array theo format:
[{"name": "Tên địa điểm 1", "address": "Địa chỉ cụ thể nếu biết", "description": "Mô tả ngắn"}, {"name": "Tên địa điểm 2", "address": "Địa chỉ", "description": "Mô tả"}]
QUAN TRỌNG: Trường "name" phải là tên chính xác của địa điểm để có thể tìm trên Google Maps.
Nếu không có địa điểm cụ thể nào được gợi ý, trả về: []
Chỉ trả JSON array, không có text khác.`;

// ========================
// API ENDPOINTS
// ========================

// Health check
app.get("/api/health", (req, res) => {
  res.json({ status: "ok" });
});

// Config
app.get("/api/config", (req, res) => {
  let mode: string;
  let details: string;

  if (apiProxyBaseUrl && apiProxyKey) {
    mode = "API Proxy (Antigravity Tools)";
    details = `Model: ${apiProxyModel}`;
  } else if (process.env.AI_INTEGRATIONS_OPENAI_API_KEY) {
    mode = "Replit AI Integration";
    details = "Model: gpt-4o-mini";
  } else {
    mode = "Direct OpenAI API";
    details = "Model: gpt-4o-mini";
  }

  res.json({ mode, details, model: defaultModel });
});

// Get or create user (device-based)
app.get("/api/user", (req, res) => {
  try {
    const deviceId = getDeviceId(req);
    const user = getOrCreateUser(deviceId);
    res.json({
      id: user.id,
      name: user.name,
      avatar: user.avatar,
      preferences: JSON.parse(user.preferences || "[]"),
      travelStyles: JSON.parse(user.travel_styles || "[]"),
      budget: user.budget,
      hasPersonalized: user.has_personalized === 1,
    });
  } catch (error) {
    console.error("Error getting user:", error);
    res.status(500).json({ error: "Failed to get user" });
  }
});

// Save user preferences after /welcome
app.post("/api/user/preferences", async (req, res) => {
  try {
    const deviceId = getDeviceId(req);
    const { name, avatar, preferences, travelStyles, budget } = req.body;

    // Đảm bảo user tồn tại trước khi update (tránh lỗi undefined khi device mới)
    getOrCreateUser(deviceId);

    const user: UserRow = updateUserPreferences(deviceId, {
      name,
      avatar,
      preferences,
      travelStyles,
      budget,
    });

    // Generate personalized data using AI
    const personalizedData = await generatePersonalizedData({
      preferences,
      travelStyles,
      budget,
    });

    // Create personalized notifications
    if (
      personalizedData.notifications &&
      personalizedData.notifications.length > 0
    ) {
      const userRecord = getOrCreateUser(deviceId);
      for (const notif of personalizedData.notifications) {
        createNotification(userRecord.id, notif);
      }
    }

    // Xóa cache cũ khi user cập nhật preferences
    personalizedCache.delete(`personalized_${user.id}`);

    res.json({
      success: true,
      user: {
        id: user.id,
        name: user.name,
        avatar: user.avatar,
        preferences: JSON.parse(user.preferences || "[]"),
        travelStyles: JSON.parse(user.travel_styles || "[]"),
        budget: user.budget,
        hasPersonalized: true,
      },
      personalizedData,
    });
  } catch (error) {
    console.error("Error saving preferences:", error);
    res.status(500).json({ error: "Failed to save preferences" });
  }
});

// --- In-memory cache cho personalized data (tránh gọi AI 4 lần/request) ---
interface CacheEntry {
  data: any;
  expiresAt: number;
}
const personalizedCache = new Map<string, CacheEntry>();
const CACHE_TTL_MS = 10 * 60 * 1000; // 10 phút

function getCached(key: string): any | null {
  const entry = personalizedCache.get(key);
  if (!entry) return null;
  if (Date.now() > entry.expiresAt) {
    personalizedCache.delete(key);
    return null;
  }
  return entry.data;
}
function setCache(key: string, data: any): void {
  personalizedCache.set(key, { data, expiresAt: Date.now() + CACHE_TTL_MS });
}

// Get personalized data (for users who completed /welcome)
app.get("/api/personalized", async (req, res) => {
  try {
    const deviceId = getDeviceId(req);
    const user = getOrCreateUser(deviceId);

    if (user.has_personalized !== 1) {
      const defaultData = getDefaultData();
      return res.json({ ...defaultData, isPersonalized: false });
    }

    // Trả cache nếu còn hạn
    const cacheKey = `personalized_${user.id}`;
    const cached = getCached(cacheKey);
    if (cached) {
      return res.json({ ...cached, isPersonalized: true });
    }

    const preferences = JSON.parse(user.preferences || "[]");
    const travelStyles = JSON.parse(user.travel_styles || "[]");
    const budget = user.budget ?? "mid";

    const personalizedData = await generatePersonalizedData({
      preferences,
      travelStyles,
      budget,
    });

    // Lưu cache
    setCache(cacheKey, personalizedData);

    res.json({
      ...personalizedData,
      isPersonalized: true,
    });
  } catch (error) {
    console.error("Error getting personalized data:", error);
    res.status(500).json({ error: "Failed to get personalized data" });
  }
});

// Helper to generate personalized data
async function generatePersonalizedData(userData: {
  preferences: string[];
  travelStyles: string[];
  budget: string;
}) {
  // Get default data first
  const defaultData = getDefaultData();

  try {
    // Gọi song song 4 AI requests thay vì tuần tự — giảm latency ~75%
    const [aiPlaces, aiPrompts, aiWelcome, aiNotifications] = await Promise.all(
      [
        generatePersonalizedPlaces(userData),
        generatePersonalizedPrompts(userData),
        generatePersonalizedWelcome({ name: "Bạn", ...userData }),
        generatePersonalizedNotifications(userData),
      ],
    );

    return {
      places: aiPlaces.length > 0 ? aiPlaces : defaultData.places,
      quickPrompts: aiPrompts.length > 0 ? aiPrompts : defaultData.quickPrompts,
      welcomeMessage: aiWelcome || defaultData.welcomeMessage,
      notifications:
        aiNotifications.length > 0
          ? aiNotifications
          : defaultData.notifications,
    };
  } catch (error) {
    console.error("Error generating personalized data:", error);
    return defaultData;
  }
}

// Get default data (for users who skipped /welcome)
function getDefaultData() {
  const places = getPlaces();
  const categories = getCategories();
  const prompts = getQuickPrompts().map((p) => p.prompt);

  return {
    places,
    categories,
    quickPrompts: prompts,
    welcomeMessage: `Chào bạn! 👋\n\nMình là trợ lý du lịch AI Đà Lạt. Mình có thể giúp bạn:\n\n🗺️ Lên lịch trình chi tiết\n☕ Gợi ý quán cafe view đẹp\n🍜 Khám phá ẩm thực địa phương\n📸 Tìm địa điểm check-in tuyệt vời\n\nBạn cần hỗ trợ gì hôm nay?`,
    notifications: [
      {
        type: "tip",
        title: "Mẹo du lịch Đà Lạt",
        content:
          "Đà Lạt có nhiều dốc cao - nên thuê xe côn hoặc xe tay ga mạnh để di chuyển an toàn!",
        iconColor: "bg-amber-100 text-amber-700",
        icon: "💡",
      },
      {
        type: "weather",
        title: "Thờ tiết hôm nay",
        content: "Hôm nay trời đẹp! Nhiệt độ 18-25°C, lý tưởng cho chuyến đi!",
        iconColor: "bg-sky-100 text-sky-700",
        icon: "☀️",
      },
    ],
  };
}

// Get places
app.get("/api/places", (req, res) => {
  try {
    const { category, featured } = req.query;
    const places = getPlaces(
      category as string,
      featured !== undefined ? featured === "true" : undefined,
    );
    res.json(places);
  } catch (error) {
    console.error("Error getting places:", error);
    res.status(500).json({ error: "Failed to get places" });
  }
});

// Get categories
app.get("/api/categories", (req, res) => {
  try {
    const categories = getCategories();
    res.json(categories);
  } catch (error) {
    console.error("Error getting categories:", error);
    res.status(500).json({ error: "Failed to get categories" });
  }
});

// Get reviews for a place
app.get("/api/places/:placeId/reviews", (req, res) => {
  try {
    const reviews = getReviews(req.params.placeId);
    res.json(reviews);
  } catch (error) {
    console.error("Error getting reviews:", error);
    res.status(500).json({ error: "Failed to get reviews" });
  }
});

// Get notifications
app.get("/api/notifications", (req, res) => {
  try {
    const deviceId = getDeviceId(req);
    const user = getOrCreateUser(deviceId);
    const notifications = getUserNotifications(user.id);
    res.json(
      notifications.map((n: NotificationRow) => ({
        id: n.id,
        type: n.type,
        title: n.title,
        content: n.content,
        timestamp: n.timestamp,
        isRead: n.is_read === 1,
        iconColor: n.icon_color,
        icon: n.icon,
      })),
    );
  } catch (error) {
    console.error("Error getting notifications:", error);
    res.status(500).json({ error: "Failed to get notifications" });
  }
});

// Mark notification as read — kiểm tra ownership
app.post("/api/notifications/:id/read", (req, res) => {
  try {
    const deviceId = getDeviceId(req);
    const user = getOrCreateUser(deviceId);
    const notifId = req.params.id;

    // Xác minh notification thuộc về user hiện tại
    const userNotifs = getUserNotifications(user.id);
    const owned = userNotifs.some((n) => n.id === notifId);
    if (!owned) {
      return res.status(403).json({ error: "Not authorized" });
    }

    markNotificationRead(notifId);
    res.json({ success: true });
  } catch (error) {
    console.error("Error marking notification as read:", error);
    res.status(500).json({ error: "Failed to mark notification as read" });
  }
});

// Get trips
app.get("/api/trips", (req, res) => {
  try {
    const deviceId = getDeviceId(req);
    const user = getOrCreateUser(deviceId);
    const trips = getTrips(user.id);
    res.json(trips);
  } catch (error) {
    console.error("Error getting trips:", error);
    res.status(500).json({ error: "Failed to get trips" });
  }
});

// Create trip
app.post("/api/trips", (req, res) => {
  try {
    const deviceId = getDeviceId(req);
    const user = getOrCreateUser(deviceId);
    const trip = createTrip(user.id, req.body);
    res.json(trip);
  } catch (error) {
    console.error("Error creating trip:", error);
    res.status(500).json({ error: "Failed to create trip" });
  }
});

// Get chat sessions
app.get("/api/chat/sessions", (req, res) => {
  try {
    const deviceId = getDeviceId(req);
    const user = getOrCreateUser(deviceId);
    const sessions = getChatSessions(user.id);
    res.json(
      sessions.map((s) => ({
        id: s.id,
        title: s.title,
        messages: s.messages,
        createdAt: s.createdAt,
        updatedAt: s.updatedAt,
      })),
    );
  } catch (error) {
    console.error("Error getting chat sessions:", error);
    res.status(500).json({ error: "Failed to get chat sessions" });
  }
});

// ========================
// FAVORITES ENDPOINTS
// ========================

// Get user favorites
app.get("/api/favorites", (req, res) => {
  try {
    const deviceId = getDeviceId(req);
    const user = getOrCreateUser(deviceId);
    const favorites = getFavorites(user.id);
    res.json(favorites);
  } catch (error) {
    console.error("Error getting favorites:", error);
    res.status(500).json({ error: "Failed to get favorites" });
  }
});

// Add favorite
app.post("/api/favorites", (req, res) => {
  try {
    const deviceId = getDeviceId(req);
    const user = getOrCreateUser(deviceId);
    const { placeId } = req.body;
    if (!placeId) return res.status(400).json({ error: "placeId is required" });
    const result = addFavorite(user.id, placeId);
    res.json(result);
  } catch (error) {
    console.error("Error adding favorite:", error);
    res.status(500).json({ error: "Failed to add favorite" });
  }
});

// Remove favorite
app.delete("/api/favorites/:placeId", (req, res) => {
  try {
    const deviceId = getDeviceId(req);
    const user = getOrCreateUser(deviceId);
    const result = removeFavorite(user.id, req.params.placeId);
    res.json(result);
  } catch (error) {
    console.error("Error removing favorite:", error);
    res.status(500).json({ error: "Failed to remove favorite" });
  }
});

// Check if a place is favorite
app.get("/api/favorites/check/:placeId", (req, res) => {
  try {
    const deviceId = getDeviceId(req);
    const user = getOrCreateUser(deviceId);
    const result = isFavorite(user.id, req.params.placeId);
    res.json({ isFavorite: result });
  } catch (error) {
    console.error("Error checking favorite:", error);
    res.status(500).json({ error: "Failed to check favorite" });
  }
});

// ========================
// CHAT SESSION ENDPOINTS
// ========================

// Create chat session
app.post("/api/chat/sessions", (req, res) => {
  try {
    const deviceId = getDeviceId(req);
    const user = getOrCreateUser(deviceId);
    const { title } = req.body;
    const session = createChatSession(user.id, title || "Cuộc trò chuyện mới");
    res.json(session);
  } catch (error) {
    console.error("Error creating chat session:", error);
    res.status(500).json({ error: "Failed to create chat session" });
  }
});

// Delete chat session (ownership verified)
app.delete("/api/chat/sessions/:id", (req, res) => {
  try {
    const deviceId = getDeviceId(req);
    const user = getOrCreateUser(deviceId);
    const deleted = deleteChatSession(user.id, req.params.id);
    if (!deleted) {
      return res
        .status(404)
        .json({ error: "Session not found or not authorized" });
    }
    res.json({ success: true });
  } catch (error) {
    console.error("Error deleting chat session:", error);
    res.status(500).json({ error: "Failed to delete session" });
  }
});

// Chat endpoint
app.post("/api/chat", rateLimiter, async (req, res) => {
  try {
    const {
      message,
      history = [],
      imageBase64,
      sessionId,
      model: requestedModel,
    } = req.body;

    if (!message && !imageBase64) {
      return res.status(400).json({ error: "Message or image is required" });
    }

    const deviceId = getDeviceId(req);
    const user = getOrCreateUser(deviceId);

    // Save user message to session — kiểm tra session thuộc user hiện tại
    if (sessionId) {
      const userSessions = getChatSessions(user.id);
      const sessionOwned = userSessions.some((s) => s.id === sessionId);
      if (sessionOwned) {
        addChatMessage(sessionId, { role: "user", content: message });
      }
    }

    const historyMessages: OpenAI.ChatCompletionMessageParam[] = history.map(
      (m: { role: string; content: string }) => ({
        role: m.role as "user" | "assistant",
        content: m.content,
      }),
    );

    let userContent: OpenAI.ChatCompletionContentPart[] = [];

    if (message) {
      userContent.push({ type: "text", text: message });
    }

    if (imageBase64) {
      userContent.push({
        type: "image_url",
        image_url: {
          url: `data:image/jpeg;base64,${imageBase64}`,
          detail: "low",
        },
      });
      if (!message) {
        userContent.unshift({
          type: "text",
          text: "Đây là ảnh tôi chụp. Bạn có thể cho tôi biết đây là địa điểm nào ở Đà Lạt không?",
        });
      }
    }

    const messages: OpenAI.ChatCompletionMessageParam[] = [
      { role: "system", content: DALAT_SYSTEM_PROMPT },
      ...historyMessages,
      {
        role: "user",
        content:
          userContent.length === 1 && userContent[0].type === "text"
            ? (userContent[0] as OpenAI.ChatCompletionContentPartText).text
            : userContent,
      },
    ];

    let modelToUse: string;
    if (apiProxyBaseUrl) {
      // Cho phép FE chọn model khi dùng proxy — validate whitelist
      const ALLOWED_MODELS = (process.env.ALLOWED_MODELS || "")
        .split(",")
        .map((m) => m.trim())
        .filter(Boolean);
      if (
        requestedModel &&
        (ALLOWED_MODELS.includes(requestedModel) || ALLOWED_MODELS.length === 0)
      ) {
        modelToUse = requestedModel;
      } else {
        modelToUse = defaultModel;
      }
    } else {
      modelToUse = imageBase64 ? "gpt-4o" : "gpt-4o-mini";
    }

    const response = await openai.chat.completions.create({
      model: modelToUse,
      messages,
      max_completion_tokens: 1024,
    });

    const reply =
      response.choices[0]?.message?.content ||
      "Xin lỗi, tôi không thể trả lời lúc này.";

    // Save assistant message to session — chỉ khi session đã được xác minh ở trên
    if (sessionId) {
      const userSessions = getChatSessions(user.id);
      const sessionOwned = userSessions.some((s) => s.id === sessionId);
      if (sessionOwned) {
        addChatMessage(sessionId, { role: "assistant", content: reply });
      }
    }

    res.json({ reply, suggestedPlace: null });
  } catch (error) {
    console.error("OpenAI API error:", error);
    res.status(500).json({ error: "Failed to get AI response" });
  }
});

// Extract place from chat
app.post("/api/extract-place", rateLimiter, async (req, res) => {
  try {
    const { message, reply } = req.body;

    if (!message || !reply) {
      return res.status(400).json({ error: "Message and reply are required" });
    }

    const extractResponse = await openai.chat.completions.create({
      model: apiProxyBaseUrl ? defaultModel : "gpt-4o-mini",
      messages: [
        { role: "system", content: PLACE_EXTRACT_PROMPT },
        { role: "user", content: `Câu hỏi: ${message}\nTrả lời: ${reply}` },
      ],
      max_completion_tokens: 256,
    });

    const extractedText = extractResponse.choices[0]?.message?.content?.trim();
    let suggestedPlace: unknown = null;

    if (extractedText && extractedText !== "null" && extractedText !== "[]") {
      try {
        suggestedPlace = JSON.parse(extractedText);
      } catch (e) {
        console.log("Failed to parse place extraction result");
      }
    }

    res.json({ suggestedPlace });
  } catch (error) {
    console.error("Place extraction error:", error);
    res.status(500).json({ error: "Failed to extract place info" });
  }
});

// Streaming chat
app.post("/api/chat/stream", rateLimiter, async (req, res) => {
  try {
    const { message, history = [] } = req.body;

    if (!message) {
      return res.status(400).json({ error: "Message is required" });
    }

    res.setHeader("Content-Type", "text/event-stream");
    res.setHeader("Cache-Control", "no-cache");
    res.setHeader("Connection", "keep-alive");

    const messages: OpenAI.ChatCompletionMessageParam[] = [
      { role: "system", content: DALAT_SYSTEM_PROMPT },
      ...history.map((m: { role: string; content: string }) => ({
        role: m.role as "user" | "assistant",
        content: m.content,
      })),
      { role: "user", content: message },
    ];

    const stream = await openai.chat.completions.create({
      model: apiProxyBaseUrl ? defaultModel : "gpt-4o-mini",
      messages,
      max_completion_tokens: 1024,
      stream: true,
    });

    for await (const chunk of stream) {
      const content = chunk.choices[0]?.delta?.content || "";
      if (content) {
        res.write(`data: ${JSON.stringify({ content })}\n\n`);
      }
    }

    res.write(`data: ${JSON.stringify({ done: true })}\n\n`);
    res.end();
  } catch (error) {
    console.error("OpenAI streaming error:", error);
    res.write(
      `data: ${JSON.stringify({ error: "Failed to stream response" })}\n\n`,
    );
    res.end();
  }
});

const PORT = Number(process.env.PORT) || 3001;
app.listen(PORT, "0.0.0.0", () => {
  console.log(`🚀 Server running on port ${PORT}`);
  console.log(`📍 API Base: http://localhost:${PORT}/api`);
});
