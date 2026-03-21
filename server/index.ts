import "dotenv/config";
import express from "express";
import cors from "cors";
import { v4 as uuidv4 } from "uuid";
import {
  default as db,
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
  savePersonalizedPlaces,
  getPersonalizedPlaces,
  hasDefaultPlaces,
  saveDefaultAIPlaces,
  searchPlaces,
  type UserRow,
  type NotificationRow,
} from "./db.js";
import {
  generatePersonalizedPlaces,
  generatePersonalizedPrompts,
  generatePersonalizedWelcome,
  generatePersonalizedNotifications,
  generateDefaultPlaces,
} from "./ai-generator.js";
import { saveAIMauJson, openai, defaultModel, getAIConfigInfo, isUsingProxy, type OpenAI } from "./utils.js";

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
      // Cho phép wildcard (*) nếu có cấu hình
      if (ALLOWED_ORIGINS.includes("*")) return callback(null, true);
      if (ALLOWED_ORIGINS.includes(origin)) return callback(null, true);
      callback(new Error(`CORS blocked: ${origin}`));
    },
    methods: ["GET", "POST", "DELETE", "PUT", "PATCH", "OPTIONS"],
    allowedHeaders: ["Content-Type", "device-id"],
    credentials: true,
  }),
);
app.use(express.json({ limit: "10mb" }));

// --- Input Validation Helpers ---
const VALID_BUDGETS = ["budget", "low", "mid", "luxury", "high"];
const VALID_TRAVEL_STYLES = ["solo", "couple", "friends", "family"];
const VALID_PREFERENCES = ["food", "cafe", "checkin", "relax", "nature", "night"];

function isNonEmptyString(v: unknown): v is string {
  return typeof v === "string" && v.trim().length > 0;
}
function isStringArray(v: unknown): v is string[] {
  return Array.isArray(v) && v.every((i) => typeof i === "string");
}
function sanitizeString(v: unknown, maxLen = 200): string {
  if (typeof v !== "string") return "";
  return v.trim().slice(0, maxLen);
}

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



// --- User & Device ID Middleware ---
function getDeviceId(req: express.Request): string {
  const deviceId = req.headers["device-id"] as string;
  if (!deviceId) {
    throw new Error("Missing device-id header");
  }
  return deviceId;
}

/**
 * Trích xuất Firebase UID từ JWT ID Token trong Authorization header.
 * FORMAT: Authorization: Bearer <firebase_id_token>
 *
 * ⚠️  SECURITY NOTE: Hiện tại chỉ decode payload (base64), KHÔNG verify signature.
 * Để verify thực sự, cần firebase-admin SDK với service account key.
 * Với cách này client không thể fake UID của người khác vì họ không có private
 * key của Firebase để ký token hợp lệ — nhưng token hết hạn chưa được check.
 * TODO: Thêm firebase-admin và verifyIdToken() để verify signature + expiry.
 */
function extractUidFromBearerToken(req: express.Request): string | null {
  const authHeader = req.headers["authorization"];
  if (!authHeader || !authHeader.startsWith("Bearer ")) return null;
  const token = authHeader.slice(7).trim();
  if (!token) return null;
  try {
    // JWT format: header.payload.signature — tất cả base64url encoded
    const parts = token.split(".");
    if (parts.length !== 3) return null;
    const payload = JSON.parse(
      Buffer.from(parts[1].replace(/-/g, "+").replace(/_/g, "/"), "base64").toString("utf-8")
    ) as { user_id?: string; sub?: string; exp?: number };
    // Firebase ID token dùng `user_id` hoặc `sub` cho UID
    const uid = payload.user_id || payload.sub || null;
    if (!uid) return null;
    // Kiểm tra token chưa hết hạn (basic check không cần signature)
    if (payload.exp && Date.now() / 1000 > payload.exp) return null;
    return uid;
  } catch {
    return null;
  }
}

/** Map budget value từ DB/FE sang label tiếng Việt cho AI (FE dùng: budget, mid, luxury) */
function getBudgetLabelForAI(budget: string | null | undefined): string {
  if (!budget) return "trung bình";
  switch (budget) {
    case "budget":
    case "low":
      return "bình dân";
    case "luxury":
    case "high":
      return "sang trọng";
    case "mid":
    default:
      return "trung bình";
  }
}

// --- System Prompt ---
const DALAT_SYSTEM_PROMPT = `Bạn là một người thường xuyên đi du lịch, am hiểu tường tận như một "thổ địa" thực thụ tại Đà Lạt. Nhiệm vụ của bạn là tư vấn du lịch thật SÚC TÍCH, TRỰC QUAN và ĐÚNG TRỌNG TÂM, tránh dài dòng sáo rỗng gây mệt mỏi cho người đọc.

## KIẾN THỨC CHUYÊN SÂU:
- Địa điểm: Hồ Xuân Hương, Langbiang, Đồi Chè Cầu Đất, Dinh Bảo Đại, Thác Datanla...
- Ẩm thực: Bánh tráng nướng, Lẩu gà lá é, Bánh mì xíu mại, Kem bơ, Bún bò...
- Trải nghiệm: Đón bình minh, cắm trại, cafe view thung lũng...

## QUY TẮC TƯ VẤN BẮT BUỘC:

### 1. PHÂN LOẠI CÂU HỎI ĐỂ TRẢ LỜI ĐÚNG TRỌNG TÂM:
- NẾU NHẬN DIỆN ẢNH HOẶC HỎI MỘT ĐIỂM CỤ THỂ: Chẩn đoán ngay địa điểm đó (tên, vị trí) bằng 1-2 câu cực kỳ ngắn gọn và chính xác. Trả lời ngay vào trọng tâm (ví dụ: "Đây là Hồ Xuân Hương"). Cung cấp 1-2 gợi ý nhỏ lân cận hoặc mẹo đi lại thật ngắn nếu cần thiết. TUYỆT ĐỐI không liệt kê dài dòng các danh sách không liên quan.
- NẾU HỎI GỢI Ý CHUNG (Vd: "Đi đâu", "Ăn gì ngon"): Đưa ra ngay 3-5 lựa chọn nổi bật nhất. Không gợi ý dàn trải.
  Format:
  - **Tên địa điểm** - Mô tả 1 câu (Điểm đặc sắc nhất) - 💰 Giá tham khảo.

### 2. PHONG CÁCH TRẢ LỜI "THỔ ĐỊA" & NGẮN GỌN:
- Vô thẳng vấn đề ngay từ câu đầu tiên.
- Không nói vòng vo, không viết các đoạn văn dài lê thê. Thay vào đó dùng GẠCH ĐẦU DÒNG (bullet points) để người lười đọc cũng thấy dễ hiểu.
- Giọng văn thân thiện, nhiệt tình nhưng "chất" và thực tế. Sử dụng một vài emoji hợp lý để nổi bật ý chính.

### 3. CÁ NHÂN HÓA (Dựa vào User Context nếu có):
- Khớp ngân sách: Người đi bình dân thì chỉ gợi ý quán vỉa hè, lẩu bò, nem nướng.
- Khớp phong cách: Cặp đôi thì gợi ý chỗ chill lãng mạn, nhóm bạn thì chỗ rộng rãi ăn nhậu rôm rả.

### 4. TIPS INSIDER (CHỈ 1 COMMENT NGẮN DUY NHẤT Ở CUỐI):
- Luôn kết thúc bằng 1 mẹo sống còn thực tế (Vd: "Nhớ dậy lúc 5h30 sáng mới có sương mờ", "Mang áo ấm vì mép hồ lạnh gió").
- Đặt câu hỏi MỞ ngắn gọn để dẫn dắt tiếp (Vd: "Mình lên lịch trình nhé?").`;

const PLACE_EXTRACT_PROMPT = `Bạn là trợ lý du lịch Đà Lạt. Dựa vào câu trả lời của AI, trích xuất tất cả các địa điểm cụ thể được gợi ý.
Trả về JSON array theo format:
[{"name": "Tên địa điểm chính xác", "category": "danh_mục", "reason": "Tại sao gợi ý địa điểm này"}]
QUAN TRỌNG:
- Trường "name" phải là tên chính xác để tìm trong DB
- Trường "category" phải là một trong: "cafe", "food", "checkin", "nature", "homestay", "rental" (hoặc bỏ trống nếu không rõ)
- Chỉ trích xuất địa điểm thực tế, không trích xuất món ăn, dịch vụ, hay tips
- Nếu không có địa điểm cụ thể nào, trả về: []
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
  const { mode, details } = getAIConfigInfo();
  res.json({ mode, details, model: defaultModel });
});

// Get or create user (device-based or Firebase)
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

// Sync Firebase user with backend database
// SECURITY: Lấy UID từ JWT Bearer token — client KHÔNG thể fake UID của người khác.
app.post("/api/user/sync", async (req, res) => {
  try {
    // Bắt buộc Firebase ID Token trong Authorization header
    const firebaseUid = extractUidFromBearerToken(req);
    if (!firebaseUid) {
      return res.status(401).json({
        error: "Unauthorized: valid Firebase ID Token required in Authorization header (Bearer <token>)",
      });
    }

    const { email, displayName, photoURL } = req.body;
    if (email !== undefined && typeof email !== "string") {
      return res.status(400).json({ error: "email must be a string" });
    }

    // Check if user already exists with this firebaseUid
    const existingUser = db.prepare("SELECT * FROM users WHERE device_id = ?").get(firebaseUid) as UserRow | undefined;

    if (existingUser) {
      // Update existing user
      db.prepare(`
        UPDATE users SET 
          name = COALESCE(?, name),
          avatar = COALESCE(?, avatar),
          email = COALESCE(?, email),
          updated_at = CURRENT_TIMESTAMP
        WHERE device_id = ?
      `).run(displayName || null, photoURL || null, email || null, firebaseUid);

      const user = db.prepare("SELECT * FROM users WHERE device_id = ?").get(firebaseUid) as UserRow;
      return res.json({
        id: user.id,
        name: user.name,
        avatar: user.avatar,
        preferences: JSON.parse(user.preferences || "[]"),
        travelStyles: JSON.parse(user.travel_styles || "[]"),
        budget: user.budget,
        hasPersonalized: user.has_personalized === 1,
      });
    }

    // Create new user with firebaseUid as device_id
    const userId = uuidv4();
    db.prepare(`
      INSERT INTO users (id, device_id, name, avatar, email, preferences, travel_styles, budget, has_personalized)
      VALUES (?, ?, ?, ?, ?, '[]', '[]', 'mid', 0)
    `).run(userId, firebaseUid, displayName || "User", photoURL || "🧑‍💻", email || "");

    const user = db.prepare("SELECT * FROM users WHERE id = ?").get(userId) as UserRow;
    res.json({
      id: user.id,
      name: user.name,
      avatar: user.avatar,
      preferences: [],
      travelStyles: [],
      budget: "mid",
      hasPersonalized: false,
    });
  } catch (error) {
    console.error("Error syncing user:", error);
    res.status(500).json({ error: "Failed to sync user" });
  }
});

// Save user preferences after /welcome
app.post("/api/user/preferences", async (req, res) => {
  try {
    const deviceId = getDeviceId(req);
    const { name, avatar, preferences, travelStyles, budget } = req.body;

    // --- Validate inputs ---
    if (preferences !== undefined && !isStringArray(preferences)) {
      return res.status(400).json({ error: "preferences must be a string array" });
    }
    if (travelStyles !== undefined && !isStringArray(travelStyles)) {
      return res.status(400).json({ error: "travelStyles must be a string array" });
    }
    if (budget !== undefined && !VALID_BUDGETS.includes(budget)) {
      return res.status(400).json({ error: `budget must be one of: ${VALID_BUDGETS.join(", ")}` });
    }

    // Đảm bảo user tồn tại trước khi update (tránh lỗi undefined khi device mới)
    getOrCreateUser(deviceId);

    const user: UserRow = updateUserPreferences(deviceId, {
      name: sanitizeString(name, 50),
      avatar: sanitizeString(avatar, 10),
      preferences,
      travelStyles,
      budget,
    });

    const userRecord = getOrCreateUser(deviceId);

    // Xác định dữ liệu hiện tại để trả về ngay lập tức
    const existingUserPlaces = getPersonalizedPlaces(userRecord.id);
    const hasExistingData =
      existingUserPlaces.checkin.length > 0 || existingUserPlaces.nature.length > 0 ||
      existingUserPlaces.homestay.length > 0 || existingUserPlaces.cafe.length > 0 ||
      existingUserPlaces.food.length > 0 || existingUserPlaces.rental.length > 0;

    let currentData;
    if (hasExistingData) {
      // Trả dữ liệu cá nhân hóa CŨ
      currentData = buildPersonalizedResponse(existingUserPlaces);
    } else {
      // Trả dữ liệu mặc định
      currentData = getDefaultData();
    }

    // Trả response NGAY LẬP TỨC (không chờ AI)
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
      personalizedData: currentData,
    });

    // Fire-and-forget: AI tạo dữ liệu mới ở background
    console.log(`🤖 [BG] Bắt đầu tạo personalized data cho user ${userRecord.id}...`);
    generatePersonalizedData({
      preferences,
      travelStyles,
      budget,
    }, userRecord.id)
      .then((newData) => {
        // Tạo notifications
        if (newData.notifications && newData.notifications.length > 0) {
          for (const notif of newData.notifications) {
            createNotification(userRecord.id, notif);
          }
        }
        console.log(`✅ [BG] Hoàn thành personalized data cho user ${userRecord.id}`);
      })
      .catch((err) => {
        console.error(`❌ [BG] Lỗi tạo personalized data cho user ${userRecord.id}:`, err);
      });
  } catch (error) {
    console.error("Error saving preferences:", error);
    res.status(500).json({ error: "Failed to save preferences" });
  }
});

// Get personalized data (for users who completed /welcome)
// LOGIC MỚI: Chỉ đọc từ DB, KHÔNG BAO GIỜ gọi AI ở đây
app.get("/api/personalized", async (req, res) => {
  try {
    const deviceId = getDeviceId(req);
    const user = getOrCreateUser(deviceId);

    // Nếu user đã personalized → kiểm tra DB có places riêng không
    if (user.has_personalized === 1) {
      const userPlaces = getPersonalizedPlaces(user.id);
      const hasUserPlaces =
        userPlaces.checkin.length > 0 || userPlaces.nature.length > 0 ||
        userPlaces.homestay.length > 0 || userPlaces.cafe.length > 0 ||
        userPlaces.food.length > 0 || userPlaces.rental.length > 0;

      if (hasUserPlaces) {
        // Trả personalized places từ DB
        const response = buildPersonalizedResponse(userPlaces);
        return res.json({ ...response, isPersonalized: true });
      }
    }

    // Fallback: trả default data từ DB (places có user_id IS NULL)
    const defaultData = getDefaultData();
    return res.json({ ...defaultData, isPersonalized: false });
  } catch (error) {
    console.error("Error getting personalized data:", error);
    res.status(500).json({ error: "Failed to get personalized data" });
  }
});

// Helper: Build API response từ personalized places (DB format → FE format)
function buildPersonalizedResponse(userPlaces: {
  checkin: any[];
  nature: any[];
  homestay: any[];
  cafe: any[];
  food: any[];
  rental: any[];
  signature: any[];
}) {
  const defaultData = getDefaultData();
  return {
    places: [
      ...userPlaces.checkin,
      ...userPlaces.nature,
      ...userPlaces.homestay,
      ...userPlaces.cafe,
      ...userPlaces.food,
      ...userPlaces.rental,
      ...userPlaces.signature,
    ],
    checkinPlaces: userPlaces.checkin,
    naturePlaces: userPlaces.nature,
    homestays: userPlaces.homestay,
    cafes: userPlaces.cafe,
    foods: userPlaces.food,
    rentals: userPlaces.rental,
    signaturePlaces: userPlaces.signature,
    quickPrompts: defaultData.quickPrompts,
    welcomeMessage: defaultData.welcomeMessage,
    notifications: defaultData.notifications,
    categories: defaultData.categories,
  };
}

// Helper to generate personalized data
async function generatePersonalizedData(
  userData: {
    preferences: string[];
    travelStyles: string[];
    budget: string;
  },
  userId: string,
) {
  const defaultData = getDefaultData();

  try {
    const [aiPlacesResult, aiPrompts, aiWelcome, aiNotifications] = await Promise.all(
      [
        generatePersonalizedPlaces(userData),
        generatePersonalizedPrompts(userData),
        generatePersonalizedWelcome({ name: "Bạn", ...userData }),
        generatePersonalizedNotifications(userData),
      ],
    );

    // AI trả về object với 7 keys: checkin, nature, homestay, cafe, food, rental, signature
    const aiPlaces = aiPlacesResult;

    // Lưu personalized places vào DB
    if (aiPlaces) {
      savePersonalizedPlaces(userId, aiPlaces);
    }

    const hasAiPlaces = aiPlaces &&
      (aiPlaces.checkin?.length || aiPlaces.nature?.length ||
        aiPlaces.homestay?.length || aiPlaces.cafe?.length ||
        aiPlaces.food?.length || aiPlaces.rental?.length ||
        aiPlaces.signature?.length);

    const places = hasAiPlaces
      ? [
        ...(aiPlaces.checkin || []),
        ...(aiPlaces.nature || []),
        ...(aiPlaces.homestay || []),
        ...(aiPlaces.cafe || []),
        ...(aiPlaces.food || []),
        ...(aiPlaces.rental || []),
        ...(aiPlaces.signature || []),
      ]
      : defaultData.places;

    return {
      places,
      checkinPlaces: aiPlaces?.checkin || [],
      naturePlaces: aiPlaces?.nature || [],
      homestays: aiPlaces?.homestay || [],
      cafes: aiPlaces?.cafe || [],
      foods: aiPlaces?.food || [],
      rentals: aiPlaces?.rental || [],
      signaturePlaces: aiPlaces?.signature || [],
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
        title: "Thời tiết hôm nay",
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

    // --- Validate trip data ---
    const { title, destination, startDate, endDate } = req.body;
    if (!isNonEmptyString(title)) {
      return res.status(400).json({ error: "title is required" });
    }
    if (!isNonEmptyString(destination)) {
      return res.status(400).json({ error: "destination is required" });
    }
    if (!isNonEmptyString(startDate) || !isNonEmptyString(endDate)) {
      return res.status(400).json({ error: "startDate and endDate are required" });
    }

    const trip = createTrip(user.id, req.body);
    res.json(trip);
  } catch (error) {
    console.error("Error creating trip:", error);
    res.status(500).json({ error: "Failed to create trip" });
  }
});

// Generate image via AI (for trip covers, etc.)
app.post("/api/generate-image", async (req, res) => {
  try {
    const { prompt } = req.body;
    if (!prompt) return res.status(400).json({ error: "prompt is required" });

    const response = await (openai.images as any).generate({
      model: process.env.API_IMAGE_MODEL || "gemini-3.1-flash-image",
      prompt,
      n: 1,
      response_format: "b64_json",
    });

    const b64 = response.data?.[0]?.b64_json;
    if (!b64) return res.status(500).json({ error: "No image returned" });

    res.json({ dataUrl: `data:image/png;base64,${b64}` });
  } catch (error: any) {
    console.error("generate-image error:", error?.message || error);
    res.status(500).json({ error: "Image generation failed" });
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
  const deviceId = req.headers["device-id"] as string;
  if (!deviceId) {
    return res.status(400).json({ error: "Missing device-id header" });
  }

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

    const user = getOrCreateUser(deviceId);

    // Lấy user preferences để cá nhân hóa chat
    const userPreferences = JSON.parse(user.preferences || "[]");
    const userTravelStyles = JSON.parse(user.travel_styles || "[]");
    const userBudget = user.budget || "mid";

    // Tạo context về user để AI hiểu đã có info hay chưa
    // Context được truyền khi user CÓ preferences, không cần has_personalized flag
    const hasUserInfo = userPreferences.length > 0 || userTravelStyles.length > 0 || userBudget !== "mid";
    const userContext = hasUserInfo
      ? `\n## THÔNG TIN NGƯỜI DÙNG (đã có từ trước - KHÔNG cần hỏi lại):
- Sở thích: ${userPreferences.join(", ") || "chưa có"}
- Phong cách du lịch: ${userTravelStyles.join(", ") || "chưa có"}
- Ngân sách: ${getBudgetLabelForAI(userBudget)}
\nNếu người dùng chưa cung cấp đủ thông tin, hãy dựa vào thông tin trên để gợi ý phù hợp.`
      : "";

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
      { role: "system", content: DALAT_SYSTEM_PROMPT + userContext },
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
    if (isUsingProxy) {
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

    saveAIMauJson("chat", { reply, message, sessionId });

    // Note: Place extraction has been removed since the frontend already calls /api/extract-places separately off the main thread.

    // Save assistant message to session — chỉ khi session đã được xác minh ở trên
    if (sessionId) {
      const userSessions = getChatSessions(user.id);
      const sessionOwned = userSessions.some((s) => s.id === sessionId);
      if (sessionOwned) {
        addChatMessage(sessionId, { role: "assistant", content: reply });
      }
    }

    res.json({ reply });
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
      model: defaultModel,
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
        saveAIMauJson("extractPlace", { message, reply, extracted: suggestedPlace });
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

// Extract full Place data from AI reply — trả về đầy đủ Place fields cho FE hiển thị
app.post("/api/extract-places", rateLimiter, async (req, res) => {
  try {
    const { reply } = req.body;

    if (!reply) {
      return res.status(400).json({ error: "Reply is required" });
    }

    const extractResponse = await openai.chat.completions.create({
      model: defaultModel,
      messages: [
        { role: "system", content: PLACE_EXTRACT_PROMPT },
        { role: "user", content: `Câu trả lời: ${reply}` },
      ],
      max_completion_tokens: 512,
    });

    const extractedText = extractResponse.choices[0]?.message?.content?.trim() || "";
    let suggestedPlaces: ReturnType<typeof searchPlaces> = [];

    if (extractedText && extractedText !== "[]" && extractedText !== "null") {
      try {
        const extracted: { name: string; category?: string; reason?: string }[] = JSON.parse(extractedText);
        if (Array.isArray(extracted) && extracted.length > 0) {
          for (const item of extracted.slice(0, 6)) {
            const matched = searchPlaces(item.name);
            if (matched.length > 0) {
              // Ưu tiên đúng category nếu user chỉ định
              if (item.category && matched.length > 1) {
                const exact = matched.find((p) => p.category === item.category);
                if (exact && !suggestedPlaces.includes(exact)) {
                  suggestedPlaces.push(exact);
                  continue;
                }
              }
              if (!suggestedPlaces.includes(matched[0])) {
                suggestedPlaces.push(matched[0]);
              }
            }
          }
          saveAIMauJson("suggestedPlaces", { reply, extracted, found: suggestedPlaces });
        }
      } catch (e) {
        console.warn("Failed to parse place extraction result:", e);
      }
    }

    res.json({ suggestedPlaces });
  } catch (error) {
    console.error("Extract places error:", error);
    res.status(500).json({ error: "Failed to extract places" });
  }
});

// Streaming chat
app.post("/api/chat/stream", rateLimiter, async (req, res) => {
  try {
    const { message, history = [] } = req.body;

    if (!message) {
      return res.status(400).json({ error: "Message is required" });
    }

    // Lấy user preferences để cá nhân hóa chat (streaming)
    const deviceId = getDeviceId(req);
    const user = getOrCreateUser(deviceId);
    const userPreferences = JSON.parse(user.preferences || "[]");
    const userTravelStyles = JSON.parse(user.travel_styles || "[]");
    const userBudget = user.budget || "mid";

    // Context được truyền khi user CÓ preferences, không cần has_personalized flag
    const hasUserInfo = userPreferences.length > 0 || userTravelStyles.length > 0 || userBudget !== "mid";
    const userContext = hasUserInfo
      ? `\n## THÔNG TIN NGƯỜI DÙNG (đã có từ trước - KHÔNG cần hỏi lại):
- Sở thích: ${userPreferences.join(", ") || "chưa có"}
- Phong cách du lịch: ${userTravelStyles.join(", ") || "chưa có"}
- Ngân sách: ${getBudgetLabelForAI(userBudget)}
\nNếu người dùng chưa cung cấp đủ thông tin, hãy dựa vào thông tin trên để gợi ý phù hợp.`
      : "";

    res.setHeader("Content-Type", "text/event-stream");
    res.setHeader("Cache-Control", "no-cache");
    res.setHeader("Connection", "keep-alive");

    const messages: OpenAI.ChatCompletionMessageParam[] = [
      { role: "system", content: DALAT_SYSTEM_PROMPT + userContext },
      ...history.map((m: { role: string; content: string }) => ({
        role: m.role as "user" | "assistant",
        content: m.content,
      })),
      { role: "user", content: message },
    ];

    const stream = await openai.chat.completions.create({
      model: defaultModel,
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

// ========================
// IMAGE PROXY (Bypass CORS)
// ========================

// Proxy endpoint để fetch ảnh từ external URLs và serve lại (bypass CORS)
app.get("/api/image-proxy", async (req, res) => {
  try {
    const { url } = req.query;

    if (!url || typeof url !== "string") {
      return res.status(400).json({ error: "url parameter is required" });
    }

    // Validate URL format
    let imageUrl: URL;
    try {
      imageUrl = new URL(url);
    } catch {
      return res.status(400).json({ error: "Invalid URL format" });
    }

    // Chỉ cho phép HTTPS để bảo mật
    if (imageUrl.protocol !== "https:") {
      return res.status(400).json({ error: "Only HTTPS URLs are allowed" });
    }

    console.log(`🖼️ [ImageProxy] Fetching: ${imageUrl.hostname}${imageUrl.pathname.substring(0, 50)}...`);

    // Fetch ảnh từ external server (server-side không bị CORS)
    // Thêm timeout 10s để tránh hang
    const controller = new AbortController();
    const timeoutId = setTimeout(() => controller.abort(), 10000);

    try {
      const imageResponse = await fetch(url, {
        headers: {
          "User-Agent": "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36",
          "Referer": imageUrl.origin,
        },
        redirect: "follow",
        signal: controller.signal,
      });

      clearTimeout(timeoutId);

      if (!imageResponse.ok) {
        console.warn(`  ⚠️ Image fetch failed: ${imageResponse.status} ${imageResponse.statusText}`);
        // Return 404 với proper CORS headers để frontend có thể handle
        res.setHeader("Access-Control-Allow-Origin", "*");
        res.setHeader("Access-Control-Allow-Methods", "GET");
        return res.status(404).json({
          error: "Image not found",
          originalUrl: url,
          status: imageResponse.status
        });
      }

      // Validate content type
      const contentType = imageResponse.headers.get("content-type") || "";
      if (!contentType.startsWith("image/")) {
        console.warn(`  ⚠️ Invalid content type: ${contentType}`);
        res.setHeader("Access-Control-Allow-Origin", "*");
        res.setHeader("Access-Control-Allow-Methods", "GET");
        return res.status(400).json({ error: "Not an image", contentType });
      }

      const imageBuffer = await imageResponse.arrayBuffer();

      // Set CORS headers để frontend có thể load được
      res.setHeader("Access-Control-Allow-Origin", "*");
      res.setHeader("Access-Control-Allow-Methods", "GET");
      res.setHeader("Content-Type", contentType || "image/jpeg");
      res.setHeader("Cache-Control", "public, max-age=86400"); // Cache 1 ngày

      res.send(Buffer.from(imageBuffer));
    } catch (fetchError: any) {
      clearTimeout(timeoutId);

      // Handle timeout
      if (fetchError.name === "AbortError") {
        console.warn(`  ⚠️ Image fetch timeout: ${url.substring(0, 60)}...`);
        res.setHeader("Access-Control-Allow-Origin", "*");
        res.setHeader("Access-Control-Allow-Methods", "GET");
        return res.status(408).json({ error: "Request timeout", originalUrl: url });
      }

      // Handle DNS/network errors
      if (fetchError.code === "EAI_AGAIN" || fetchError.code === "ENOTFOUND") {
        console.warn(`  ⚠️ DNS lookup failed: ${imageUrl.hostname}`);
        res.setHeader("Access-Control-Allow-Origin", "*");
        res.setHeader("Access-Control-Allow-Methods", "GET");
        return res.status(502).json({ error: "DNS lookup failed", hostname: imageUrl.hostname });
      }

      throw fetchError; // Re-throw để catch block bên ngoài handle
    }
  } catch (error: any) {
    console.error("Image proxy error:", error);
    res.setHeader("Access-Control-Allow-Origin", "*");
    res.setHeader("Access-Control-Allow-Methods", "GET");
    res.status(500).json({
      error: "Failed to proxy image",
      message: error.message
    });
  }
});

// ========================
// SMART IMAGE ENDPOINTS (Pexels)
// ========================

// Clear image cache (dùng khi cần force refresh tất cả ảnh)
app.post("/api/places/clear-image-cache", async (req, res) => {
  try {
    const { clearImageCache } = await import("./place-image-service.js");
    clearImageCache();
    res.json({ success: true, message: "Image cache cleared" });
  } catch (error) {
    console.error("Error clearing image cache:", error);
    res.status(500).json({ error: "Failed to clear image cache" });
  }
});

// Get image for a place — Pexels API làm nguồn chính, Placeholder là fallback
app.post("/api/places/get-image", async (req, res) => {
  try {
    const { placeName, category, address, skipValidation } = req.body;

    if (!placeName) {
      return res.status(400).json({ error: "placeName is required" });
    }

    console.log(`🔍 [SmartImage] Getting image for: ${placeName} (${category}) [skipValidation=${skipValidation}]`);

    const { getPlaceImageSmart } = await import("./place-image-service.js");
    const result = await getPlaceImageSmart(placeName, category, address, skipValidation);

    console.log(`  ✅ Source: ${result.source} | URL: ${result.imageUrl.substring(0, 80)}`);

    res.json({
      imageUrl: result.imageUrl,
      imageUrls: result.imageUrls,
      source: result.source,
    });
  } catch (error) {
    console.error("Error getting place image:", error);
    res.status(500).json({ error: "Failed to get place image" });
  }
});

// Batch get images — dùng SmartImage (Pexels) theo từng place
app.post("/api/places/batch-get-images", async (req, res) => {
  try {
    const { places, skipValidation } = req.body;

    if (!places || !Array.isArray(places)) {
      return res.status(400).json({ error: "places array is required" });
    }

    console.log(`🔍 [SmartImage] Batch fetching images for ${places.length} places [skipValidation=${skipValidation}]`);

    const { getPlaceImageSmart } = await import("./place-image-service.js");

    // Xử lý batch với giới hạn 3 concurrent để tránh rate limit
    const BATCH_SIZE = 3;
    const results: any[] = [];

    for (let i = 0; i < places.length; i += BATCH_SIZE) {
      const batch = places.slice(i, i + BATCH_SIZE);
      const batchResults = await Promise.all(
        batch.map(async (place: any) => {
          const result = await getPlaceImageSmart(place.name, place.category, place.address, skipValidation);
          return {
            ...place,
            imageUrl: result.imageUrl,
            imageUrls: result.imageUrls,
            source: result.source,
          };
        })
      );
      results.push(...batchResults);
      if (i + BATCH_SIZE < places.length) {
        await new Promise((r) => setTimeout(r, 300));
      }
    }

    res.json({ places: results });
  } catch (error) {
    console.error("Error batch getting place images:", error);
    res.status(500).json({ error: "Failed to batch get place images" });
  }
});

// Pexels search endpoint
app.get("/api/pexels/search", async (req, res) => {
  try {
    const { query, per_page = 5 } = req.query;

    if (!query || typeof query !== "string") {
      return res.status(400).json({ error: "query parameter is required" });
    }

    const { searchPexels } = await import("./pexels-service.js");
    const results = await searchPexels(query, Number(per_page));

    res.json(results);
  } catch (error) {
    console.error("Pexels search error:", error);
    res.status(500).json({ error: "Failed to search Pexels" });
  }
});

// ========================
// SERVER STARTUP: AI tạo default places
// ========================

/**
 * Kiểm tra DB có default places chưa.
 * Nếu chưa → gọi AI background tạo 55 default places.
 * Nếu có rồi → skip, không gọi AI.
 */
async function initDefaultPlaces() {
  if (hasDefaultPlaces()) {
    console.log("✅ Default places đã tồn tại trong DB — skip AI generation");
    return;
  }

  console.log("🚀 DB chưa có default places — bắt đầu AI generation (background)...");
  try {
    const defaultPlaces = await generateDefaultPlaces();
    const totalPlaces =
      (defaultPlaces.checkin?.length || 0) + (defaultPlaces.nature?.length || 0) +
      (defaultPlaces.homestay?.length || 0) + (defaultPlaces.cafe?.length || 0) +
      (defaultPlaces.food?.length || 0) + (defaultPlaces.rental?.length || 0) +
      (defaultPlaces.signature?.length || 0);

    if (totalPlaces > 0) {
      saveDefaultAIPlaces(defaultPlaces);
      console.log(`✅ Đã lưu ${totalPlaces} default places vào DB`);
    } else {
      console.warn("⚠️ AI trả về 0 default places — kiểm tra API key và kết nối");
    }
  } catch (error) {
    console.error("❌ Lỗi tạo default places:", error);
  }
}

// Gọi fire-and-forget ngay khi server khởi động
initDefaultPlaces();
