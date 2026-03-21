import Database, { type Database as DatabaseType } from "better-sqlite3";
import { v4 as uuidv4 } from "uuid";

const db: DatabaseType = new Database("dalat_chatbot.db");

// Row types for typed DB results (avoid 'unknown' in index.ts)
export interface UserRow {
  id: string;
  device_id: string;
  name: string | null;
  avatar: string | null;
  preferences: string | null;
  travel_styles: string | null;
  budget: string | null;
  has_personalized: number;
  created_at: string;
  updated_at: string;
}

export interface NotificationRow {
  id: string;
  user_id: string;
  type: string;
  title: string;
  content: string;
  timestamp: string;
  is_read: number;
  icon_color: string | null;
  icon: string | null;
}

// Initialize tables
db.exec(`
  -- Users table (device-based or Firebase)
  CREATE TABLE IF NOT EXISTS users (
    id TEXT PRIMARY KEY,
    device_id TEXT UNIQUE,
    name TEXT,
    avatar TEXT,
    email TEXT,
    preferences TEXT DEFAULT '[]',
    travel_styles TEXT DEFAULT '[]',
    budget TEXT DEFAULT 'mid',
    has_personalized INTEGER DEFAULT 0,
    created_at TEXT DEFAULT CURRENT_TIMESTAMP,
    updated_at TEXT DEFAULT CURRENT_TIMESTAMP
  );

  -- Places table
  CREATE TABLE IF NOT EXISTS places (
    id TEXT PRIMARY KEY,
    name TEXT NOT NULL,
    slug TEXT UNIQUE,
    category TEXT,
    short_description TEXT,
    full_description TEXT,
    image_url TEXT,
    tags TEXT DEFAULT '[]',
    suitable_for TEXT DEFAULT '[]',
    featured INTEGER DEFAULT 0,
    rating REAL,
    review_count INTEGER,
    price_range TEXT,
    address TEXT,
    opening_hours TEXT,
    lat REAL,
    lng REAL,
    price_per_day TEXT,
    vehicle_types TEXT DEFAULT '[]',
    phone_number TEXT,
    deposit_required TEXT,
    user_id TEXT,
    created_at TEXT DEFAULT CURRENT_TIMESTAMP,
    FOREIGN KEY (user_id) REFERENCES users(id)
  );

  -- Index for faster user-specific places lookup
  CREATE INDEX IF NOT EXISTS idx_places_user_id ON places(user_id);

  -- Categories table
  CREATE TABLE IF NOT EXISTS categories (
    id TEXT PRIMARY KEY,
    label TEXT,
    icon TEXT,
    icon_name TEXT
  );

  -- Reviews table
  CREATE TABLE IF NOT EXISTS reviews (
    id TEXT PRIMARY KEY,
    place_id TEXT,
    author TEXT,
    avatar TEXT,
    date TEXT,
    rating REAL,
    content TEXT,
    helpful_count INTEGER DEFAULT 0,
    created_at TEXT DEFAULT CURRENT_TIMESTAMP,
    FOREIGN KEY (place_id) REFERENCES places(id)
  );

  -- Chat sessions table
  CREATE TABLE IF NOT EXISTS chat_sessions (
    id TEXT PRIMARY KEY,
    user_id TEXT,
    title TEXT,
    created_at TEXT DEFAULT CURRENT_TIMESTAMP,
    updated_at TEXT DEFAULT CURRENT_TIMESTAMP,
    FOREIGN KEY (user_id) REFERENCES users(id)
  );

  -- Chat messages table
  CREATE TABLE IF NOT EXISTS chat_messages (
    id TEXT PRIMARY KEY,
    session_id TEXT,
    role TEXT,
    content TEXT,
    timestamp TEXT DEFAULT CURRENT_TIMESTAMP,
    place_ids TEXT DEFAULT '[]',
    FOREIGN KEY (session_id) REFERENCES chat_sessions(id)
  );

  -- Trips table
  CREATE TABLE IF NOT EXISTS trips (
    id TEXT PRIMARY KEY,
    user_id TEXT,
    title TEXT,
    destination TEXT,
    cover_image TEXT,
    start_date TEXT,
    end_date TEXT,
    status TEXT DEFAULT 'upcoming',
    total_budget REAL DEFAULT 0,
    spent REAL DEFAULT 0,
    notes TEXT,
    created_at TEXT DEFAULT CURRENT_TIMESTAMP,
    updated_at TEXT DEFAULT CURRENT_TIMESTAMP,
    FOREIGN KEY (user_id) REFERENCES users(id)
  );

  -- Trip days table
  CREATE TABLE IF NOT EXISTS trip_days (
    id TEXT PRIMARY KEY,
    trip_id TEXT,
    day_number INTEGER,
    date TEXT,
    total_cost REAL DEFAULT 0,
    FOREIGN KEY (trip_id) REFERENCES trips(id)
  );

  -- Trip items table
  CREATE TABLE IF NOT EXISTS trip_items (
    id TEXT PRIMARY KEY,
    day_id TEXT,
    time TEXT,
    type TEXT,
    title TEXT,
    description TEXT,
    cost REAL DEFAULT 0,
    place_id TEXT,
    FOREIGN KEY (day_id) REFERENCES trip_days(id),
    FOREIGN KEY (place_id) REFERENCES places(id)
  );

  -- Trip budget categories table
  CREATE TABLE IF NOT EXISTS trip_budget_categories (
    id TEXT PRIMARY KEY,
    trip_id TEXT,
    category TEXT,
    icon TEXT,
    spent REAL DEFAULT 0,
    budget REAL DEFAULT 0,
    FOREIGN KEY (trip_id) REFERENCES trips(id)
  );

  -- Notifications table
  CREATE TABLE IF NOT EXISTS notifications (
    id TEXT PRIMARY KEY,
    user_id TEXT,
    type TEXT,
    title TEXT,
    content TEXT,
    timestamp TEXT DEFAULT CURRENT_TIMESTAMP,
    is_read INTEGER DEFAULT 0,
    icon_color TEXT,
    icon TEXT,
    FOREIGN KEY (user_id) REFERENCES users(id)
  );

  -- Quick prompts table
  CREATE TABLE IF NOT EXISTS quick_prompts (
    id TEXT PRIMARY KEY,
    prompt TEXT,
    sort_order INTEGER DEFAULT 0
  );

  -- Place image cache (AI-generated images, cached by place name)
  CREATE TABLE IF NOT EXISTS place_images (
    name_key TEXT PRIMARY KEY,
    image_path TEXT NOT NULL,
    created_at TEXT DEFAULT CURRENT_TIMESTAMP
  );

  -- Favorites table
  CREATE TABLE IF NOT EXISTS favorites (
    id TEXT PRIMARY KEY,
    user_id TEXT,
    place_id TEXT,
    saved_at TEXT DEFAULT CURRENT_TIMESTAMP,
    FOREIGN KEY (user_id) REFERENCES users(id),
    FOREIGN KEY (place_id) REFERENCES places(id),
    UNIQUE(user_id, place_id)
  );
`);

// Seed default data function
export function seedDefaultData() {
  // Check if categories already exist
  const categoryCount = db
    .prepare("SELECT COUNT(*) as count FROM categories")
    .get() as { count: number };

  if (categoryCount.count === 0) {
    // Seed categories
    const categories = [
      { id: "signature", label: "Nhất định phải đến", icon: "⭐", iconName: "star" },
      { id: "cafe", label: "Cafe", icon: "☕", iconName: "coffee" },
      { id: "food", label: "Ăn uống", icon: "🍜", iconName: "restaurant" },
      { id: "checkin", label: "Check-in", icon: "📸", iconName: "camera" },
      { id: "nature", label: "Thiên nhiên", icon: "🌲", iconName: "tree" },
      { id: "homestay", label: "Homestay", icon: "🏠", iconName: "home" },
      { id: "rental", label: "Thuê xe", icon: "🛵", iconName: "scooter" },
    ];

    const insertCategory = db.prepare(
      "INSERT INTO categories (id, label, icon, icon_name) VALUES (?, ?, ?, ?)",
    );
    categories.forEach((cat) => {
      insertCategory.run(cat.id, cat.label, cat.icon, cat.iconName);
    });
  }

  // Default places are now generated by AI at server startup (see index.ts)
  // No hardcoded seed places needed anymore

  // Reviews will be loaded dynamically or left empty for default AI generated places
  // (Old mock reviews removed)

  // Check if quick prompts already exist
  const promptCount = db
    .prepare("SELECT COUNT(*) as count FROM quick_prompts")
    .get() as { count: number };

  if (promptCount.count === 0) {
    // Seed quick prompts
    const prompts = [
      { id: uuidv4(), prompt: "Lịch trình 2 ngày 1 đêm", sortOrder: 0 },
      { id: uuidv4(), prompt: "Quán cafe đẹp ở Đà Lạt", sortOrder: 1 },
      { id: uuidv4(), prompt: "Địa điểm check-in hot nhất", sortOrder: 2 },
      { id: uuidv4(), prompt: "Ăn gì khi trời mưa?", sortOrder: 3 },
      { id: uuidv4(), prompt: "Homestay view đẹp giá rẻ", sortOrder: 4 },
      { id: uuidv4(), prompt: "Hoạt động buổi tối ở Đà Lạt", sortOrder: 5 },
    ];

    const insertPrompt = db.prepare(
      "INSERT INTO quick_prompts (id, prompt, sort_order) VALUES (?, ?, ?)",
    );
    prompts.forEach((p) => {
      insertPrompt.run(p.id, p.prompt, p.sortOrder);
    });
  }

  // Check if notifications template exist (for creating user notifications)
  // We'll seed default notifications template but user notifications will be created per user
}

// Export database instance and helper functions
export default db;

export function getOrCreateUser(deviceId: string): UserRow {
  let user = db
    .prepare("SELECT * FROM users WHERE device_id = ?")
    .get(deviceId) as UserRow | undefined;

  if (!user) {
    const id = uuidv4();
    db.prepare(
      `
      INSERT INTO users (id, device_id, name, avatar, preferences, travel_styles, budget, has_personalized)
      VALUES (?, ?, ?, ?, ?, ?, ?, ?)
    `,
    ).run(id, deviceId, "Khách", "🧑‍💻", '["food"]', '["solo"]', "mid", 0);

    user = db.prepare("SELECT * FROM users WHERE id = ?").get(id) as UserRow;
  }

  return user;
}

export function updateUserPreferences(
  deviceId: string,
  data: {
    name?: string;
    avatar?: string;
    preferences?: string[];
    travelStyles?: string[];
    budget?: string;
  },
): UserRow {
  const updates: string[] = [];
  const values: any[] = [];

  if (data.name !== undefined) {
    updates.push("name = ?");
    values.push(data.name);
  }
  if (data.avatar !== undefined) {
    updates.push("avatar = ?");
    values.push(data.avatar);
  }
  if (data.preferences !== undefined) {
    updates.push("preferences = ?");
    values.push(JSON.stringify(data.preferences));
  }
  if (data.travelStyles !== undefined) {
    updates.push("travel_styles = ?");
    values.push(JSON.stringify(data.travelStyles));
  }
  if (data.budget !== undefined) {
    updates.push("budget = ?");
    values.push(data.budget);
  }

  updates.push("has_personalized = 1");
  updates.push("updated_at = CURRENT_TIMESTAMP");

  values.push(deviceId);

  db.prepare(`UPDATE users SET ${updates.join(", ")} WHERE device_id = ?`).run(
    ...values,
  );

  return db
    .prepare("SELECT * FROM users WHERE device_id = ?")
    .get(deviceId) as UserRow;
}

export function getPlaces(category?: string, featured?: boolean, userId?: string) {
  let query = "SELECT * FROM places WHERE 1=1";
  const params: any[] = [];

  if (category) {
    query += " AND category = ?";
    params.push(category);
  }
  if (featured !== undefined) {
    query += " AND featured = ?";
    params.push(featured ? 1 : 0);
  }
  if (userId) {
    query += " AND user_id = ?";
    params.push(userId);
  }

  const places = db.prepare(query).all(...params) as any[];

  return places.map((p) => ({
    id: p.id,
    name: p.name,
    slug: p.slug,
    category: p.category,
    shortDescription: p.short_description,
    fullDescription: p.full_description,
    imageUrl: p.image_url,
    tags: JSON.parse(p.tags || "[]"),
    suitableFor: JSON.parse(p.suitable_for || "[]"),
    featured: p.featured === 1,
    rating: p.rating,
    reviewCount: p.review_count,
    priceRange: p.price_range,
    address: p.address,
    openingHours: p.opening_hours,
    lat: p.lat,
    lng: p.lng,
    pricePerDay: p.price_per_day,
    vehicleTypes: p.vehicle_types ? JSON.parse(p.vehicle_types) : undefined,
    phoneNumber: p.phone_number,
    depositRequired: p.deposit_required,
  }));
}

/**
 * Search places by name (case-insensitive, partial match)
 * Dùng để AI trích xuất tên địa điểm từ chat rồi lookup đầy đủ Place data
 */
export function searchPlaces(query: string): ReturnType<typeof getPlaces> {
  const allPlaces = getPlaces();
  const q = query.toLowerCase().trim();
  if (!q) return [];

  return allPlaces.filter((p) =>
    p.name.toLowerCase().includes(q)
  );
}

/**
 * Save personalized places to DB for a specific user
 * Xóa places cũ của user trước khi lưu mới
 */
export function savePersonalizedPlaces(userId: string, places: {
  checkin?: any[];
  nature?: any[];
  homestay?: any[];
  cafe?: any[];
  food?: any[];
  rental?: any[];
  signature?: any[];
}): void {
  // Xóa places cũ của user
  db.prepare("DELETE FROM places WHERE user_id = ?").run(userId);

  // Map category từ AI response sang DB category (đã thống nhất - dùng trực tiếp)
  const insertStmt = db.prepare(`
    INSERT INTO places (id, name, slug, category, short_description, full_description, image_url, tags, suitable_for, featured, rating, review_count, price_range, address, opening_hours, lat, lng, price_per_day, vehicle_types, phone_number, user_id)
    VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?)
  `);

  const existingSlugs = new Set<string>();
  const allPlaces = db.prepare("SELECT slug FROM places WHERE slug IS NOT NULL").all() as { slug: string }[];
  for (const r of allPlaces) existingSlugs.add(r.slug);

  const insertMany = (items: any[], category: string, featured: boolean) => {
    for (const p of items) {
      let baseSlug = p.slug || (p.name || "place").toLowerCase().replace(/\s+/g, "-").replace(/[^a-z0-9-]/g, "");
      let slug = baseSlug;
      let suffix = 1;
      while (existingSlugs.has(slug)) {
        slug = `${baseSlug}-${suffix++}`;
      }
      existingSlugs.add(slug);

      const id = `${userId}_${slug}`;
      insertStmt.run(
        id,
        p.name,
        slug,
        category,
        p.shortDescription || "",
        p.fullDescription || "",
        p.imageUrl || "",
        JSON.stringify(p.tags || []),
        JSON.stringify(p.suitableFor || []),
        featured ? 1 : 0,
        p.rating || null,
        p.reviewCount || null,
        p.priceRange || null,
        p.address || "",
        p.openingHours || "",
        p.lat || null,
        p.lng || null,
        p.pricePerDay || null,
        JSON.stringify(p.vehicleTypes || []),
        p.phoneNumber || null,
        userId,
      );
    }
  };

  // featured = true cho checkin và nature (địa điểm nổi bật), false cho cafe, food, homestay, rental
  if (places.checkin) insertMany(places.checkin, "checkin", true);
  if (places.nature) insertMany(places.nature, "nature", true);
  if (places.homestay) insertMany(places.homestay, "homestay", false);
  if (places.cafe) insertMany(places.cafe, "cafe", false);
  if (places.food) insertMany(places.food, "food", false);
  if (places.rental) insertMany(places.rental, "rental", false);
  if (places.signature) insertMany(places.signature, "signature", true);

  const total = (places.checkin?.length || 0) + (places.nature?.length || 0) +
    (places.homestay?.length || 0) + (places.cafe?.length || 0) +
    (places.food?.length || 0) + (places.rental?.length || 0) + (places.signature?.length || 0);
  console.log(`💾 Saved personalized places for user ${userId}: ${total} places`);
}

/**
 * Kiểm tra DB đã có default places (user_id IS NULL) chưa
 */
export function hasDefaultPlaces(): boolean {
  const count = db
    .prepare("SELECT COUNT(*) as count FROM places WHERE user_id IS NULL")
    .get() as { count: number };
  return count.count > 0;
}

/**
 * Lưu default places do AI sinh ra (user_id = NULL).
 * Xóa default places cũ nếu có, rồi insert mới.
 */
export function saveDefaultAIPlaces(places: {
  checkin?: any[];
  nature?: any[];
  homestay?: any[];
  cafe?: any[];
  food?: any[];
  rental?: any[];
  signature?: any[];
}): void {
  // Xóa các bảng có khoá ngoại tham chiếu đến default places trước khi xóa
  const defaultPlaceIds = db.prepare("SELECT id FROM places WHERE user_id IS NULL").all() as { id: string }[];
  if (defaultPlaceIds.length > 0) {
    const ids = defaultPlaceIds.map(r => `'${r.id}'`).join(',');
    db.prepare(`DELETE FROM reviews WHERE place_id IN (${ids})`).run();
    db.prepare(`DELETE FROM favorites WHERE place_id IN (${ids})`).run();
    db.prepare(`DELETE FROM trip_items WHERE place_id IN (${ids})`).run();
  }

  // Tiền hành xóa default places cũ
  db.prepare("DELETE FROM places WHERE user_id IS NULL").run();

  const insertStmt = db.prepare(`
    INSERT INTO places (id, name, slug, category, short_description, full_description, image_url, tags, suitable_for, featured, rating, review_count, price_range, address, opening_hours, lat, lng, price_per_day, vehicle_types, phone_number, deposit_required, user_id)
    VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, NULL)
  `);

  const existingSlugs = new Set<string>();
  const allPlaces = db.prepare("SELECT slug FROM places WHERE slug IS NOT NULL").all() as { slug: string }[];
  for (const r of allPlaces) existingSlugs.add(r.slug);


  const insertMany = (items: any[], category: string, featured: boolean) => {
    for (const p of items) {
      let baseSlug = p.slug || (p.name || "place").toLowerCase().replace(/\s+/g, "-").replace(/[^a-z0-9-]/g, "");
      let slug = baseSlug;
      let suffix = 1;
      while (existingSlugs.has(slug)) {
        slug = `${baseSlug}-${suffix++}`;
      }
      existingSlugs.add(slug);

      const id = `default_${slug}`;
      insertStmt.run(
        id,
        p.name,
        slug,
        category,
        p.shortDescription || "",
        p.fullDescription || "",
        p.imageUrl || "",
        JSON.stringify(p.tags || []),
        JSON.stringify(p.suitableFor || []),
        featured ? 1 : 0,
        p.rating || null,
        p.reviewCount || null,
        p.priceRange || null,
        p.address || "",
        p.openingHours || "",
        p.lat || null,
        p.lng || null,
        p.pricePerDay || null,
        JSON.stringify(p.vehicleTypes || []),
        p.phoneNumber || null,
        p.depositRequired || null,
      );
    }
  };

  if (places.checkin) insertMany(places.checkin, "checkin", true);
  if (places.nature) insertMany(places.nature, "nature", true);
  if (places.homestay) insertMany(places.homestay, "homestay", false);
  if (places.cafe) insertMany(places.cafe, "cafe", false);
  if (places.food) insertMany(places.food, "food", false);
  if (places.rental) insertMany(places.rental, "rental", false);
  if (places.signature) insertMany(places.signature, "signature", true);

  const total = (places.checkin?.length || 0) + (places.nature?.length || 0) +
    (places.homestay?.length || 0) + (places.cafe?.length || 0) +
    (places.food?.length || 0) + (places.rental?.length || 0) + (places.signature?.length || 0);
  console.log(`💾 [DEFAULT] Saved ${total} default AI places to DB`);
}

/**
 * Get personalized places for a user from DB
 */
export function getPersonalizedPlaces(userId: string): {
  checkin: any[];
  nature: any[];
  homestay: any[];
  cafe: any[];
  food: any[];
  rental: any[];
  signature: any[];
} {
  const userPlaces = getPlaces(undefined, undefined, userId);

  return {
    checkin: userPlaces.filter(p => p.category === "checkin"),
    nature: userPlaces.filter(p => p.category === "nature"),
    homestay: userPlaces.filter(p => p.category === "homestay"),
    cafe: userPlaces.filter(p => p.category === "cafe"),
    food: userPlaces.filter(p => p.category === "food"),
    rental: userPlaces.filter(p => p.category === "rental"),
    signature: userPlaces.filter(p => p.category === "signature"),
  };
}

export function getCategories() {
  const cats = db.prepare("SELECT * FROM categories").all() as any[];
  const sigIndex = cats.findIndex((c) => c.id === "signature");
  if (sigIndex > -1) {
    const [sig] = cats.splice(sigIndex, 1);
    cats.unshift(sig);
  }
  return cats;
}

export function getQuickPrompts() {
  return db
    .prepare("SELECT prompt FROM quick_prompts ORDER BY sort_order")
    .all() as { prompt: string }[];
}

export function getReviews(placeId: string) {
  return db
    .prepare(
      "SELECT * FROM reviews WHERE place_id = ? ORDER BY helpful_count DESC",
    )
    .all(placeId);
}

export function getUserNotifications(userId: string): NotificationRow[] {
  return db
    .prepare(
      "SELECT * FROM notifications WHERE user_id = ? ORDER BY timestamp DESC",
    )
    .all(userId) as NotificationRow[];
}

export function createNotification(
  userId: string,
  data: {
    type: string;
    title: string;
    content: string;
    iconColor: string;
    icon: string;
  },
) {
  const id = uuidv4();
  db.prepare(
    `
    INSERT INTO notifications (id, user_id, type, title, content, icon_color, icon)
    VALUES (?, ?, ?, ?, ?, ?, ?)
  `,
  ).run(
    id,
    userId,
    data.type,
    data.title,
    data.content,
    data.iconColor,
    data.icon,
  );

  return db.prepare("SELECT * FROM notifications WHERE id = ?").get(id);
}

export function markNotificationRead(notificationId: string) {
  db.prepare("UPDATE notifications SET is_read = 1 WHERE id = ?").run(
    notificationId,
  );
}

export function getTrips(userId: string) {
  const trips = db
    .prepare("SELECT * FROM trips WHERE user_id = ? ORDER BY start_date DESC")
    .all(userId) as any[];

  return trips.map((trip) => {
    const days = db
      .prepare("SELECT * FROM trip_days WHERE trip_id = ? ORDER BY day_number")
      .all(trip.id) as any[];

    const daysWithItems = days.map((day) => {
      const items = db
        .prepare("SELECT * FROM trip_items WHERE day_id = ? ORDER BY time")
        .all(day.id) as any[];
      return {
        ...day,
        items: items.map((item) => ({
          ...item,
          placeId: item.place_id,
        })),
      };
    });

    const budgetCategories = db
      .prepare("SELECT * FROM trip_budget_categories WHERE trip_id = ?")
      .all(trip.id) as any[];

    return {
      id: trip.id,
      title: trip.title,
      destination: trip.destination,
      coverImage: trip.cover_image,
      startDate: trip.start_date,
      endDate: trip.end_date,
      status: trip.status,
      notes: trip.notes,
      totalBudget: trip.total_budget,
      spent: trip.spent,
      days: daysWithItems.map((d) => ({
        id: d.id,
        dayNumber: d.day_number,
        date: d.date,
        items: d.items,
        totalCost: d.total_cost,
      })),
      budgetCategories: budgetCategories.map((bc) => ({
        category: bc.category,
        icon: bc.icon,
        spent: bc.spent,
        budget: bc.budget,
      })),
    };
  });
}

export function createTrip(userId: string, tripData: any) {
  const id = uuidv4();

  db.prepare(
    `
    INSERT INTO trips (id, user_id, title, destination, cover_image, start_date, end_date, status, total_budget, spent, notes)
    VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?)
  `,
  ).run(
    id,
    userId,
    tripData.title,
    tripData.destination,
    tripData.coverImage,
    tripData.startDate,
    tripData.endDate,
    tripData.status || "upcoming",
    tripData.totalBudget || 0,
    tripData.spent || 0,
    tripData.notes || null,
  );

  // Create trip days and items
  if (tripData.days) {
    tripData.days.forEach((day: any) => {
      const dayId = uuidv4();
      db.prepare(
        `
        INSERT INTO trip_days (id, trip_id, day_number, date, total_cost)
        VALUES (?, ?, ?, ?, ?)
      `,
      ).run(dayId, id, day.dayNumber, day.date, day.totalCost || 0);

      if (day.items) {
        day.items.forEach((item: any) => {
          db.prepare(
            `
            INSERT INTO trip_items (id, day_id, time, type, title, description, cost, place_id)
            VALUES (?, ?, ?, ?, ?, ?, ?, ?)
          `,
          ).run(
            uuidv4(),
            dayId,
            item.time,
            item.type,
            item.title,
            item.description || null,
            item.cost || 0,
            item.placeId || null,
          );
        });
      }
    });
  }

  // Create budget categories
  if (tripData.budgetCategories) {
    tripData.budgetCategories.forEach((bc: any) => {
      db.prepare(
        `
        INSERT INTO trip_budget_categories (id, trip_id, category, icon, spent, budget)
        VALUES (?, ?, ?, ?, ?, ?)
      `,
      ).run(uuidv4(), id, bc.category, bc.icon, bc.spent || 0, bc.budget || 0);
    });
  }

  return db.prepare("SELECT * FROM trips WHERE id = ?").get(id);
}

export function getChatSessions(userId: string) {
  const sessions = db
    .prepare(
      "SELECT * FROM chat_sessions WHERE user_id = ? ORDER BY updated_at DESC",
    )
    .all(userId) as any[];

  return sessions.map((session) => {
    const messages = db
      .prepare(
        "SELECT * FROM chat_messages WHERE session_id = ? ORDER BY timestamp",
      )
      .all(session.id) as any[];

    return {
      ...session,
      messages: messages.map((m) => ({
        ...m,
        placeIds: m.place_ids ? JSON.parse(m.place_ids) : [],
      })),
      createdAt: session.created_at,
      updatedAt: session.updated_at,
    };
  });
}

export function createChatSession(userId: string, title: string) {
  const id = uuidv4();
  db.prepare(
    `
    INSERT INTO chat_sessions (id, user_id, title)
    VALUES (?, ?, ?)
  `,
  ).run(id, userId, title);

  return db.prepare("SELECT * FROM chat_sessions WHERE id = ?").get(id);
}

export function addChatMessage(
  sessionId: string,
  message: {
    role: "user" | "assistant";
    content: string;
    placeIds?: string[];
  },
) {
  const id = uuidv4();
  db.prepare(
    `
    INSERT INTO chat_messages (id, session_id, role, content, place_ids)
    VALUES (?, ?, ?, ?, ?)
  `,
  ).run(
    id,
    sessionId,
    message.role,
    message.content,
    JSON.stringify(message.placeIds || []),
  );

  // Update session updated_at
  db.prepare(
    "UPDATE chat_sessions SET updated_at = CURRENT_TIMESTAMP WHERE id = ?",
  ).run(sessionId);

  return db.prepare("SELECT * FROM chat_messages WHERE id = ?").get(id);
}

// ========================
// FAVORITES
// ========================

export function getFavorites(userId: string) {
  const rows = db
    .prepare(
      `
    SELECT p.id, p.name, p.slug, p.category, p.short_description, p.full_description,
           p.image_url, p.tags, p.suitable_for, p.featured, p.rating, p.review_count,
           p.price_range, p.address, p.opening_hours, p.lat, p.lng,
           p.price_per_day, p.vehicle_types, p.phone_number, p.deposit_required,
           f.saved_at
    FROM favorites f
    JOIN places p ON f.place_id = p.id
    WHERE f.user_id = ?
    ORDER BY f.saved_at DESC
  `,
    )
    .all(userId) as any[];

  return rows.map((p) => ({
    id: p.id,
    name: p.name,
    slug: p.slug,
    category: p.category,
    shortDescription: p.short_description,
    fullDescription: p.full_description,
    imageUrl: p.image_url,
    tags: JSON.parse(p.tags || "[]"),
    suitableFor: JSON.parse(p.suitable_for || "[]"),
    featured: p.featured === 1,
    rating: p.rating,
    reviewCount: p.review_count,
    priceRange: p.price_range,
    address: p.address,
    openingHours: p.opening_hours,
    lat: p.lat,
    lng: p.lng,
    pricePerDay: p.price_per_day,
    vehicleTypes: p.vehicle_types ? JSON.parse(p.vehicle_types) : undefined,
    phoneNumber: p.phone_number,
    depositRequired: p.deposit_required,
  }));
}

export function addFavorite(userId: string, placeId: string) {
  const existing = db
    .prepare("SELECT id FROM favorites WHERE user_id = ? AND place_id = ?")
    .get(userId, placeId);
  if (!existing) {
    const id = uuidv4();
    db.prepare(
      "INSERT INTO favorites (id, user_id, place_id) VALUES (?, ?, ?)",
    ).run(id, userId, placeId);
  }
  return { success: true, added: !existing };
}

export function removeFavorite(userId: string, placeId: string) {
  db.prepare("DELETE FROM favorites WHERE user_id = ? AND place_id = ?").run(
    userId,
    placeId,
  );
  return { success: true };
}

export function isFavorite(userId: string, placeId: string): boolean {
  const row = db
    .prepare("SELECT 1 FROM favorites WHERE user_id = ? AND place_id = ?")
    .get(userId, placeId);
  return !!row;
}

export function deleteChatSession(userId: string, sessionId: string): boolean {
  // Kiểm tra session tồn tại và thuộc về user
  const session = db
    .prepare("SELECT id FROM chat_sessions WHERE id = ? AND user_id = ?")
    .get(sessionId, userId);
  if (!session) return false;

  // Xóa messages trước (không có ON DELETE CASCADE)
  db.prepare("DELETE FROM chat_messages WHERE session_id = ?").run(sessionId);
  // Xóa session
  db.prepare("DELETE FROM chat_sessions WHERE id = ? AND user_id = ?").run(
    sessionId,
    userId,
  );
  return true;
}

// ── Place image cache helpers ──────────────────────────────────────────────

/** Chuẩn hóa tên địa điểm thành cache key */
export function normalizePlaceNameKey(name: string): string {
  return name.toLowerCase().trim().replace(/\s+/g, " ");
}

/** Lấy path ảnh đã cache (null nếu chưa có) */
export function getCachedPlaceImage(placeName: string): string | null {
  const key = normalizePlaceNameKey(placeName);
  const row = db.prepare("SELECT image_path FROM place_images WHERE name_key = ?").get(key) as { image_path: string } | undefined;
  return row?.image_path ?? null;
}

/** Lưu path ảnh vào cache */
export function savePlaceImageCache(placeName: string, imagePath: string): void {
  const key = normalizePlaceNameKey(placeName);
  db.prepare(`
    INSERT INTO place_images (name_key, image_path)
    VALUES (?, ?)
    ON CONFLICT(name_key) DO UPDATE SET image_path = excluded.image_path
  `).run(key, imagePath);
}

/** Cập nhật image_url cho tất cả places trong DB cùng tên */
export function updatePlaceImageUrl(placeName: string, imageUrl: string): void {
  db.prepare("UPDATE places SET image_url = ? WHERE name = ?").run(imageUrl, placeName);
}

// Initialize default data
seedDefaultData();

console.log("✅ Database initialized with default data");
