import Database from 'better-sqlite3';
import { v4 as uuidv4 } from 'uuid';

const db = new Database('dalat_chatbot.db');

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
  -- Users table (device-based)
  CREATE TABLE IF NOT EXISTS users (
    id TEXT PRIMARY KEY,
    device_id TEXT UNIQUE,
    name TEXT,
    avatar TEXT,
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
    created_at TEXT DEFAULT CURRENT_TIMESTAMP
  );

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
`);

// Seed default data function
export function seedDefaultData() {
  // Check if categories already exist
  const categoryCount = db.prepare('SELECT COUNT(*) as count FROM categories').get() as { count: number };
  
  if (categoryCount.count === 0) {
    // Seed categories
    const categories = [
      { id: 'cafe', label: 'Cafe', icon: '☕', iconName: 'coffee' },
      { id: 'restaurant', label: 'Ăn uống', icon: '🍜', iconName: 'restaurant' },
      { id: 'checkin', label: 'Check-in', icon: '📸', iconName: 'camera' },
      { id: 'nature', label: 'Thiên nhiên', icon: '🌲', iconName: 'tree' },
      { id: 'homestay', label: 'Homestay', icon: '🏠', iconName: 'home' },
      { id: 'rental', label: 'Thuê xe', icon: '🛵', iconName: 'scooter' },
    ];

    const insertCategory = db.prepare('INSERT INTO categories (id, label, icon, icon_name) VALUES (?, ?, ?, ?)');
    categories.forEach(cat => {
      insertCategory.run(cat.id, cat.label, cat.icon, cat.iconName);
    });
  }

  // Check if places already exist
  const placeCount = db.prepare('SELECT COUNT(*) as count FROM places').get() as { count: number };
  
  if (placeCount.count === 0) {
    // Seed places (same as mock data)
    const places = [
      {
        id: 'ho-xuan-huong',
        name: 'Hồ Xuân Hương',
        slug: 'ho-xuan-huong',
        category: 'nature',
        shortDescription: 'Hồ nước ngọt giữa lòng thành phố Đà Lạt',
        fullDescription: 'Hồ Xuân Hương là hồ nước ngọt tự nhiên lớn nhất của thành phố Đà Lạt.',
        imageUrl: 'https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=800&q=80',
        tags: JSON.stringify(['#hoanhda', '#ngắmcảnh', '#dạochơi']),
        suitableFor: JSON.stringify(['Cặp đôi', 'Nhóm bạn', 'Gia đình']),
        featured: 1,
        rating: 4.8,
        reviewCount: 1243,
        priceRange: 'Miễn phí',
        address: 'Đường Nguyễn Chi Thanh, Đà Lạt',
        openingHours: '24/7',
        lat: 11.9439,
        lng: 108.4373,
      },
      {
        id: 'vuon-hoa-da-lat',
        name: 'Vườn hoa Đà Lạt',
        slug: 'vuon-hoa-da-lat',
        category: 'checkin',
        shortDescription: 'Khu vườn hoa khổng lồ với hàng trăm loài hoa',
        fullDescription: 'Vườn hoa Đà Lạt là điểm đến không thể bỏ lỡ.',
        imageUrl: 'https://images.unsplash.com/photo-1587614382346-4ec70e388b28?w=800&q=80',
        tags: JSON.stringify(['#hoa', '#checkin', '#chụphình']),
        suitableFor: JSON.stringify(['Cặp đôi', 'Nhóm bạn', 'Gia đình']),
        featured: 1,
        rating: 4.6,
        reviewCount: 892,
        priceRange: '50.000đ - 100.000đ',
        address: 'Đường Lê Đại Hành, Đà Lạt',
        openingHours: '7:00 - 17:00',
        lat: 11.9525,
        lng: 108.4311,
      },
      {
        id: 'the-married-beans-coffee',
        name: 'The Married Beans Coffee',
        slug: 'the-married-beans-coffee',
        category: 'cafe',
        shortDescription: 'Quán cafe độc đáo với view núi rừng tuyệt đẹp',
        fullDescription: 'The Married Beans Coffee là một trong những quán cafe được yêu thích nhất Đà Lạt.',
        imageUrl: 'https://images.unsplash.com/photo-1501339847302-ac426a4a7cbb?w=800&q=80',
        tags: JSON.stringify(['#cafe', '#viewnúi', '#hipster']),
        suitableFor: JSON.stringify(['Cặp đôi', 'Nhóm bạn', 'Solo']),
        featured: 1,
        rating: 4.9,
        reviewCount: 567,
        priceRange: '35.000đ - 80.000đ',
        address: 'Ngõ 35, Đường Nguyễn Trung Trực, Đà Lạt',
        openingHours: '7:00 - 22:00',
        lat: 11.9462,
        lng: 108.4417,
      },
      {
        id: 'rung-thong-hai-mo',
        name: 'Rừng Thông Hai Mộ',
        slug: 'rung-thong-hai-mo',
        category: 'nature',
        shortDescription: 'Khu rừng thông cổ thụ huyền bí',
        fullDescription: 'Rừng Thông Hai Mộ là khu rừng thông trồng từ thời Pháp thuộc.',
        imageUrl: 'https://images.unsplash.com/photo-1518495973542-4542c06a5843?w=800&q=80',
        tags: JSON.stringify(['#rừng', '#sươngmù', '#thiênnhiên']),
        suitableFor: JSON.stringify(['Cặp đôi', 'Nhóm bạn', 'Solo']),
        featured: 1,
        rating: 4.7,
        reviewCount: 723,
        priceRange: 'Miễn phí',
        address: 'Đường Phạm Văn Đồng, Đà Lạt',
        openingHours: '6:00 - 18:00',
        lat: 11.9328,
        lng: 108.4551,
      },
      {
        id: 'cho-dem-da-lat',
        name: 'Chợ Đêm Đà Lạt',
        slug: 'cho-dem-da-lat',
        category: 'restaurant',
        shortDescription: 'Chợ đêm sôi động với hàng trăm gian hàng ẩm thực',
        fullDescription: 'Chợ Đêm Đà Lạt là điểm đến không thể bỏ lỡ.',
        imageUrl: 'https://images.unsplash.com/photo-1555126634-323283e090fa?w=800&q=80',
        tags: JSON.stringify(['#đặcsản', '#ẩmthực', '#chợđêm']),
        suitableFor: JSON.stringify(['Cặp đôi', 'Nhóm bạn', 'Gia đình']),
        featured: 1,
        rating: 4.4,
        reviewCount: 1567,
        priceRange: '20.000đ - 200.000đ',
        address: 'Ngã 6, Đường Phạm Văn Đồng, Đà Lạt',
        openingHours: '18:00 - 23:00',
        lat: 11.9412,
        lng: 108.4298,
      },
      {
        id: 'thac-datanla',
        name: 'Thác Datanla',
        slug: 'thac-datanla',
        category: 'nature',
        shortDescription: 'Thác nước kỳ vĩ với hệ thống trượt nước',
        fullDescription: 'Thác Datanla nằm cách trung tâm Đà Lạt khoảng 7km.',
        imageUrl: 'https://images.unsplash.com/photo-1432405972618-c60b0225b8f9?w=800&q=80',
        tags: JSON.stringify(['#thác', '#trượtnước', '#rừng']),
        suitableFor: JSON.stringify(['Nhóm bạn', 'Gia đình', 'Solo']),
        rating: 4.5,
        reviewCount: 934,
        priceRange: '30.000đ - 80.000đ',
        address: 'Xã Trạm Hành, Đà Lạt',
        openingHours: '7:30 - 17:00',
        lat: 11.9098,
        lng: 108.4623,
      },
      {
        id: 'thue-xe-minh-phat',
        name: 'Thuê xe Minh Phát',
        slug: 'thue-xe-minh-phat',
        category: 'rental',
        shortDescription: 'Dịch vụ cho thuê xe máy uy tín',
        fullDescription: 'Minh Phát là địa chỉ cho thuê xe máy được nhiều du khách tin tưởng.',
        imageUrl: 'https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=800&q=80',
        tags: JSON.stringify(['#thuêxe', '#xemáy', '#dalat']),
        suitableFor: JSON.stringify(['Cặp đôi', 'Nhóm bạn', 'Solo']),
        rating: 4.7,
        reviewCount: 342,
        pricePerDay: '120.000đ - 350.000đ',
        address: '58 Đường Nguyễn Trung Trực, Đà Lạt',
        openingHours: '6:00 - 22:00',
        phoneNumber: '02633818999',
        vehicleTypes: JSON.stringify(['Xe số', 'Xe ga', 'Xe côn']),
        depositRequired: '500.000đ hoặc CCCD',
        lat: 11.9465,
        lng: 108.4421,
      },
      {
        id: 'dalat-motorbike-rental',
        name: 'Dalat Motorbike Rental',
        slug: 'dalat-motorbike-rental',
        category: 'rental',
        shortDescription: 'Cho thuê xe máy chất lượng cao',
        fullDescription: 'Dalat Motorbike Rental chuyên cung cấp các dòng xe máy cao cấp.',
        imageUrl: 'https://images.unsplash.com/photo-1449426468159-d96dbf08f19f?w=800&q=80',
        tags: JSON.stringify(['#xemáy', '#chấtlượng']),
        suitableFor: JSON.stringify(['Cặp đôi', 'Nhóm bạn', 'Solo']),
        rating: 4.9,
        reviewCount: 218,
        pricePerDay: '150.000đ - 500.000đ',
        address: '102 Đường Bùi Thị Xuân, Đà Lạt',
        openingHours: '7:00 - 21:00',
        phoneNumber: '0918123456',
        vehicleTypes: JSON.stringify(['Yamaha', 'Honda', 'Piaggio']),
        depositRequired: '1.000.000đ',
        lat: 11.9498,
        lng: 108.4489,
      },
    ];

    const insertPlace = db.prepare(`
      INSERT INTO places (id, name, slug, category, short_description, full_description, image_url, tags, suitable_for, featured, rating, review_count, price_range, address, opening_hours, lat, lng, price_per_day, phone_number, vehicle_types, deposit_required)
      VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?)
    `);

    places.forEach(p => {
      insertPlace.run(
        p.id, p.name, p.slug, p.category, p.shortDescription, p.fullDescription,
        p.imageUrl, p.tags, p.suitableFor, p.featured, p.rating, p.reviewCount,
        p.priceRange, p.address, p.openingHours, p.lat, p.lng,
        p.pricePerDay || null, p.phoneNumber || null, p.vehicleTypes || null, p.depositRequired || null
      );
    });
  }

  // Check if reviews already exist
  const reviewCount = db.prepare('SELECT COUNT(*) as count FROM reviews').get() as { count: number };
  
  if (reviewCount.count === 0) {
    // Seed reviews
    const reviews = [
      { id: 'review-1', placeId: 'ho-xuan-huong', author: 'Nguyễn Thị Hương', date: '2026-03-01', rating: 5, content: 'Cảnh đẹp tuyệt vời! Buổi sáng sớm đi dạo quanh hồ rất thoải mái.', helpfulCount: 45 },
      { id: 'review-2', placeId: 'ho-xuan-huong', author: 'Trần Văn Minh', date: '2026-02-15', rating: 4, content: 'Hồ đẹp, nhưng hơi đông vào cuối tuần.', helpfulCount: 32 },
      { id: 'review-3', placeId: 'vuon-hoa-da-lat', author: 'Lê Thị Mai', date: '2026-03-05', rating: 5, content: 'Khu vườn hoa rất rộng và đẹp!', helpfulCount: 67 },
      { id: 'review-4', placeId: 'the-married-beans-coffee', author: 'Hoàng Thị Lan', date: '2026-03-08', rating: 5, content: 'Quán cafe tuyệt vời! View núi rừng rất đẹp.', helpfulCount: 89 },
      { id: 'review-5', placeId: 'rung-thong-hai-mo', author: 'Vũ Thị Hạnh', date: '2026-03-02', rating: 5, content: 'Khu rừng thông rất huyền bí!', helpfulCount: 76 },
      { id: 'review-6', placeId: 'cho-dem-da-lat', author: 'Trương Thị Ngọc', date: '2026-03-06', rating: 4, content: 'Chợ đêm rất nhộn nhịp và có nhiều đồ ăn ngon!', helpfulCount: 93 },
      { id: 'review-7', placeId: 'thac-datanla', author: 'Đỗ Thị Hồng', date: '2026-03-03', rating: 5, content: 'Thác nước rất đẹp và trải nghiệm trượt nước rất thú vị!', helpfulCount: 71 },
    ];

    const insertReview = db.prepare('INSERT INTO reviews (id, place_id, author, date, rating, content, helpful_count) VALUES (?, ?, ?, ?, ?, ?, ?)');
    reviews.forEach(r => {
      insertReview.run(r.id, r.placeId, r.author, r.date, r.rating, r.content, r.helpfulCount);
    });
  }

  // Check if quick prompts already exist
  const promptCount = db.prepare('SELECT COUNT(*) as count FROM quick_prompts').get() as { count: number };
  
  if (promptCount.count === 0) {
    // Seed quick prompts
    const prompts = [
      { id: uuidv4(), prompt: 'Lịch trình 2 ngày 1 đêm', sortOrder: 0 },
      { id: uuidv4(), prompt: 'Quán cafe đẹp ở Đà Lạt', sortOrder: 1 },
      { id: uuidv4(), prompt: 'Địa điểm check-in hot nhất', sortOrder: 2 },
      { id: uuidv4(), prompt: 'Ăn gì khi trời mưa?', sortOrder: 3 },
      { id: uuidv4(), prompt: 'Homestay view đẹp giá rẻ', sortOrder: 4 },
      { id: uuidv4(), prompt: 'Hoạt động buổi tối ở Đà Lạt', sortOrder: 5 },
    ];

    const insertPrompt = db.prepare('INSERT INTO quick_prompts (id, prompt, sort_order) VALUES (?, ?, ?)');
    prompts.forEach(p => {
      insertPrompt.run(p.id, p.prompt, p.sortOrder);
    });
  }

  // Check if notifications template exist (for creating user notifications)
  // We'll seed default notifications template but user notifications will be created per user
}

// Export database instance and helper functions
export default db;

export function getOrCreateUser(deviceId: string): UserRow {
  let user = db.prepare('SELECT * FROM users WHERE device_id = ?').get(deviceId) as UserRow | undefined;
  
  if (!user) {
    const id = uuidv4();
    db.prepare(`
      INSERT INTO users (id, device_id, name, avatar, preferences, travel_styles, budget, has_personalized)
      VALUES (?, ?, ?, ?, ?, ?, ?, ?)
    `).run(id, deviceId, 'Khách', '🧑‍💻', '["food"]', '["solo"]', 'mid', 0);
    
    user = db.prepare('SELECT * FROM users WHERE id = ?').get(id) as UserRow;
  }
  
  return user;
}

export function updateUserPreferences(deviceId: string, data: {
  name?: string;
  avatar?: string;
  preferences?: string[];
  travelStyles?: string[];
  budget?: string;
}): UserRow {
  const updates: string[] = [];
  const values: any[] = [];

  if (data.name !== undefined) {
    updates.push('name = ?');
    values.push(data.name);
  }
  if (data.avatar !== undefined) {
    updates.push('avatar = ?');
    values.push(data.avatar);
  }
  if (data.preferences !== undefined) {
    updates.push('preferences = ?');
    values.push(JSON.stringify(data.preferences));
  }
  if (data.travelStyles !== undefined) {
    updates.push('travel_styles = ?');
    values.push(JSON.stringify(data.travelStyles));
  }
  if (data.budget !== undefined) {
    updates.push('budget = ?');
    values.push(data.budget);
  }

  updates.push('has_personalized = 1');
  updates.push('updated_at = CURRENT_TIMESTAMP');
  
  values.push(deviceId);

  db.prepare(`UPDATE users SET ${updates.join(', ')} WHERE device_id = ?`).run(...values);
  
  return db.prepare('SELECT * FROM users WHERE device_id = ?').get(deviceId) as UserRow;
}

export function getPlaces(category?: string, featured?: boolean) {
  let query = 'SELECT * FROM places WHERE 1=1';
  const params: any[] = [];

  if (category) {
    query += ' AND category = ?';
    params.push(category);
  }
  if (featured !== undefined) {
    query += ' AND featured = ?';
    params.push(featured ? 1 : 0);
  }

  const places = db.prepare(query).all(...params) as any[];
  
  return places.map(p => ({
    id: p.id,
    name: p.name,
    slug: p.slug,
    category: p.category,
    shortDescription: p.short_description,
    fullDescription: p.full_description,
    imageUrl: p.image_url,
    tags: JSON.parse(p.tags || '[]'),
    suitableFor: JSON.parse(p.suitable_for || '[]'),
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

export function getCategories() {
  return db.prepare('SELECT * FROM categories').all();
}

export function getQuickPrompts() {
  return db.prepare('SELECT prompt FROM quick_prompts ORDER BY sort_order').all() as { prompt: string }[];
}

export function getReviews(placeId: string) {
  return db.prepare('SELECT * FROM reviews WHERE place_id = ? ORDER BY helpful_count DESC').all(placeId);
}

export function getUserNotifications(userId: string): NotificationRow[] {
  return db.prepare('SELECT * FROM notifications WHERE user_id = ? ORDER BY timestamp DESC').all(userId) as NotificationRow[];
}

export function createNotification(userId: string, data: {
  type: string;
  title: string;
  content: string;
  iconColor: string;
  icon: string;
}) {
  const id = uuidv4();
  db.prepare(`
    INSERT INTO notifications (id, user_id, type, title, content, icon_color, icon)
    VALUES (?, ?, ?, ?, ?, ?, ?)
  `).run(id, userId, data.type, data.title, data.content, data.iconColor, data.icon);
  
  return db.prepare('SELECT * FROM notifications WHERE id = ?').get(id);
}

export function markNotificationRead(notificationId: string) {
  db.prepare('UPDATE notifications SET is_read = 1 WHERE id = ?').run(notificationId);
}

export function getTrips(userId: string) {
  const trips = db.prepare('SELECT * FROM trips WHERE user_id = ? ORDER BY start_date DESC').all(userId) as any[];
  
  return trips.map(trip => {
    const days = db.prepare('SELECT * FROM trip_days WHERE trip_id = ? ORDER BY day_number').all(trip.id) as any[];
    
    const daysWithItems = days.map(day => {
      const items = db.prepare('SELECT * FROM trip_items WHERE day_id = ? ORDER BY time').all(day.id) as any[];
      return {
        ...day,
        items: items.map(item => ({
          ...item,
          placeId: item.place_id,
        })),
      };
    });

    const budgetCategories = db.prepare('SELECT * FROM trip_budget_categories WHERE trip_id = ?').all(trip.id) as any[];
    
    return {
      ...trip,
      days: daysWithItems.map(d => ({
        id: d.id,
        dayNumber: d.day_number,
        date: d.date,
        items: d.items,
        totalCost: d.total_cost,
      })),
      budgetCategories: budgetCategories.map(bc => ({
        category: bc.category,
        icon: bc.icon,
        spent: bc.spent,
        budget: bc.budget,
      })),
      totalBudget: trip.total_budget,
      spent: trip.spent,
    };
  });
}

export function createTrip(userId: string, tripData: any) {
  const id = uuidv4();
  
  db.prepare(`
    INSERT INTO trips (id, user_id, title, destination, cover_image, start_date, end_date, status, total_budget, spent, notes)
    VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?)
  `).run(
    id, userId, tripData.title, tripData.destination, tripData.coverImage,
    tripData.startDate, tripData.endDate, tripData.status || 'upcoming',
    tripData.totalBudget || 0, tripData.spent || 0, tripData.notes || null
  );

  // Create trip days and items
  if (tripData.days) {
    tripData.days.forEach((day: any) => {
      const dayId = uuidv4();
      db.prepare(`
        INSERT INTO trip_days (id, trip_id, day_number, date, total_cost)
        VALUES (?, ?, ?, ?, ?)
      `).run(dayId, id, day.dayNumber, day.date, day.totalCost || 0);

      if (day.items) {
        day.items.forEach((item: any) => {
          db.prepare(`
            INSERT INTO trip_items (id, day_id, time, type, title, description, cost, place_id)
            VALUES (?, ?, ?, ?, ?, ?, ?, ?)
          `).run(uuidv4(), dayId, item.time, item.type, item.title, item.description || null, item.cost || 0, item.placeId || null);
        });
      }
    });
  }

  // Create budget categories
  if (tripData.budgetCategories) {
    tripData.budgetCategories.forEach((bc: any) => {
      db.prepare(`
        INSERT INTO trip_budget_categories (id, trip_id, category, icon, spent, budget)
        VALUES (?, ?, ?, ?, ?, ?)
      `).run(uuidv4(), id, bc.category, bc.icon, bc.spent || 0, bc.budget || 0);
    });
  }

  return db.prepare('SELECT * FROM trips WHERE id = ?').get(id);
}

export function getChatSessions(userId: string) {
  const sessions = db.prepare('SELECT * FROM chat_sessions WHERE user_id = ? ORDER BY updated_at DESC').all(userId) as any[];
  
  return sessions.map(session => {
    const messages = db.prepare('SELECT * FROM chat_messages WHERE session_id = ? ORDER BY timestamp').all(session.id) as any[];
    
    return {
      ...session,
      messages: messages.map(m => ({
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
  db.prepare(`
    INSERT INTO chat_sessions (id, user_id, title)
    VALUES (?, ?, ?)
  `).run(id, userId, title);
  
  return db.prepare('SELECT * FROM chat_sessions WHERE id = ?').get(id);
}

export function addChatMessage(sessionId: string, message: {
  role: 'user' | 'assistant';
  content: string;
  placeIds?: string[];
}) {
  const id = uuidv4();
  db.prepare(`
    INSERT INTO chat_messages (id, session_id, role, content, place_ids)
    VALUES (?, ?, ?, ?, ?)
  `).run(id, sessionId, message.role, message.content, JSON.stringify(message.placeIds || []));

  // Update session updated_at
  db.prepare('UPDATE chat_sessions SET updated_at = CURRENT_TIMESTAMP WHERE id = ?').run(sessionId);

  return db.prepare('SELECT * FROM chat_messages WHERE id = ?').get(id);
}

// Initialize default data
seedDefaultData();

console.log('✅ Database initialized with default data');
