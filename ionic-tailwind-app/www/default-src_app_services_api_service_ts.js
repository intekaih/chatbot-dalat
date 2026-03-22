"use strict";
(self["webpackChunkapp"] = self["webpackChunkapp"] || []).push([["default-src_app_services_api_service_ts"],{

/***/ 5391
/*!*************************************!*\
  !*** ./src/app/config/ai.config.ts ***!
  \*************************************/
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   AI_CONFIG: () => (/* binding */ AI_CONFIG),
/* harmony export */   OPENAI_API_CONFIG: () => (/* binding */ OPENAI_API_CONFIG)
/* harmony export */ });
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../environments/environment */ 5312);

/** Base URL của Backend (server) - đọc từ environment để hỗ trợ đa môi trường
 *  Dev (Replit): environment.ts  → "" (relative, proxy tới localhost:3001)
 *  Dev (local):  environment.ts  → http://127.0.0.1:3001
 *  Prod:         environment.prod.ts → window.__API_BASE_URL__ hoặc cùng origin
 */
const AI_CONFIG = {
  baseUrl: _environments_environment__WEBPACK_IMPORTED_MODULE_0__.environment.apiBaseUrl,
  apiKey: "",
  // BE tự xử lý API key
  models: [{
    id: "gemini-3.1-pro-high",
    name: "Gemini 3.1 Pro High",
    description: "High performance model for complex tasks",
    maxTokens: 8192
  }, {
    id: "gemini-3-flash",
    name: "Gemini 3 Flash",
    description: "Fast model for quick responses",
    maxTokens: 4096
  }],
  defaultModel: "gemini-3-flash",
  temperature: 0.7,
  maxTokens: 2048
};
const OPENAI_API_CONFIG = {
  baseURL: AI_CONFIG.baseUrl,
  apiKey: AI_CONFIG.apiKey,
  defaultHeaders: {
    "Content-Type": "application/json"
  }
};

/***/ },

/***/ 3366
/*!*****************************************!*\
  !*** ./src/app/services/api.service.ts ***!
  \*****************************************/
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   ApiService: () => (/* binding */ ApiService)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 4205);
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common/http */ 3855);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs */ 9452);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs */ 1318);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! rxjs */ 271);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! rxjs */ 3037);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! rxjs */ 8764);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! rxjs */ 2354);
/* harmony import */ var _config_ai_config__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../config/ai.config */ 5391);
var _staticBlock;





class ApiService {
  constructor() {
    this.http = (0,_angular_core__WEBPACK_IMPORTED_MODULE_0__.inject)(_angular_common_http__WEBPACK_IMPORTED_MODULE_1__.HttpClient);
    this.baseUrl = _config_ai_config__WEBPACK_IMPORTED_MODULE_8__.AI_CONFIG.baseUrl;
    this.CACHE_PLACES_KEY = 'cache_places';
    this.CACHE_CATEGORIES_KEY = 'cache_categories';
    this.CACHE_TTL_MS = 6 * 60 * 60 * 1000; // 6 giờ
  }
  /**
   * Convert external image URL thành proxy URL để bypass CORS
   * @param imageUrl - URL ảnh từ external source (Gemini, etc.)
   * @returns Proxy URL hoặc original URL nếu là placeholder
   */
  getImageProxyUrl(imageUrl) {
    if (!imageUrl) return null;
    // Không proxy: placeholder, Pexels, ảnh AI từ dev server / production domain / Firebase Hosting
    if (imageUrl.includes('placehold.co') || imageUrl.includes('images.pexels.com') || imageUrl.includes('replit.dev') || imageUrl.includes('replit.app') || imageUrl.includes('dalat-chatbot.web.app') || imageUrl.startsWith('/')) {
      return imageUrl;
    }
    // Convert external URL thành proxy URL
    return `${this.baseUrl}/api/image-proxy?url=${encodeURIComponent(imageUrl)}`;
  }
  /**
   * Convert array of image URLs thành proxy URLs
   */
  getImageProxyUrls(imageUrls) {
    if (!imageUrls || imageUrls.length === 0) return [];
    return imageUrls.map(url => this.getImageProxyUrl(url) || url).filter(Boolean);
  }
  // Device ID for user identification (public để AIService dùng khi gọi /api/chat)
  getDeviceId() {
    // Tạo và lưu device ID nếu chưa có (dùng cho mọi loại user kể cả Firebase)
    let deviceId = localStorage.getItem("device_id");
    if (!deviceId) {
      deviceId = "device_" + Math.random().toString(36).substring(2) + Date.now().toString(36);
      localStorage.setItem("device_id", deviceId);
    }
    return deviceId;
  }
  getHeaders() {
    return new _angular_common_http__WEBPACK_IMPORTED_MODULE_1__.HttpHeaders({
      "Content-Type": "application/json",
      "device-id": this.getDeviceId()
    });
  }
  // ========== USER ENDPOINTS ==========
  /** Get current user (auto creates if not exists) */
  getUser() {
    const cached = this.getUserFromLocalStorage();
    return this.http.get(`${this.baseUrl}/api/user`, {
      headers: this.getHeaders()
    }).pipe((0,rxjs__WEBPACK_IMPORTED_MODULE_4__.map)(res => ({
      id: res.id,
      name: res.name,
      avatar: res.avatar,
      preferences: res.preferences || [],
      travelStyles: res.travelStyles || [],
      budget: res.budget || "mid",
      hasPersonalized: res.hasPersonalized || false
    })), (0,rxjs__WEBPACK_IMPORTED_MODULE_6__.tap)(user => this.cacheUserToLocalStorage(user)), (0,rxjs__WEBPACK_IMPORTED_MODULE_5__.startWith)(cached), (0,rxjs__WEBPACK_IMPORTED_MODULE_3__.catchError)(() => (0,rxjs__WEBPACK_IMPORTED_MODULE_2__.of)(cached)));
  }
  /** Fallback: đọc user từ localStorage khi API không khả dụng */
  getUserFromLocalStorage() {
    const hasPersonalized = localStorage.getItem("hasPersonalized") === "true";
    const prefsRaw = localStorage.getItem("userPreferences");
    const stylesRaw = localStorage.getItem("userTravelStyles");
    return {
      id: localStorage.getItem("device_id") || "",
      name: localStorage.getItem("userName") || "Khách",
      avatar: localStorage.getItem("userAvatar") || "🧑‍💻",
      preferences: prefsRaw ? JSON.parse(prefsRaw) : [],
      travelStyles: stylesRaw ? JSON.parse(stylesRaw) : [],
      budget: localStorage.getItem("userBudget") || "mid",
      hasPersonalized
    };
  }
  /** Cache user data vào localStorage (dùng làm offline fallback) */
  cacheUserToLocalStorage(user) {
    if (user.name) localStorage.setItem("userName", user.name);
    if (user.avatar) localStorage.setItem("userAvatar", user.avatar);
    localStorage.setItem("userPreferences", JSON.stringify(user.preferences || []));
    localStorage.setItem("userTravelStyles", JSON.stringify(user.travelStyles || []));
    if (user.budget) localStorage.setItem("userBudget", user.budget);
    localStorage.setItem("hasPersonalized", user.hasPersonalized ? "true" : "false");
  }
  /** Sync Firebase user with backend — dùng ID Token thay vì UID từ body */
  syncFirebaseUser(idToken, email = '', displayName = '', photoURL = '', oldDeviceId = '') {
    if (!idToken) {
      return (0,rxjs__WEBPACK_IMPORTED_MODULE_2__.of)(null);
    }
    const headers = new _angular_common_http__WEBPACK_IMPORTED_MODULE_1__.HttpHeaders({
      'Content-Type': 'application/json',
      'device-id': this.getDeviceId(),
      'Authorization': `Bearer ${idToken}`
    });
    return this.http.post(`${this.baseUrl}/api/user/sync`, {
      email,
      displayName,
      photoURL,
      oldDeviceId
    }, {
      headers
    }).pipe((0,rxjs__WEBPACK_IMPORTED_MODULE_4__.map)(res => ({
      id: res.id,
      name: res.name,
      avatar: res.avatar,
      preferences: res.preferences || [],
      travelStyles: res.travelStyles || [],
      budget: res.budget || 'mid',
      hasPersonalized: res.hasPersonalized || false
    })), (0,rxjs__WEBPACK_IMPORTED_MODULE_3__.catchError)(() => (0,rxjs__WEBPACK_IMPORTED_MODULE_2__.of)(null)));
  }
  /** Save user preferences after /welcome - generates personalized data via AI */
  savePreferences(data) {
    return this.http.post(`${this.baseUrl}/api/user/preferences`, data, {
      headers: this.getHeaders()
    }).pipe((0,rxjs__WEBPACK_IMPORTED_MODULE_4__.map)(res => ({
      user: {
        id: res.user.id,
        name: res.user.name,
        avatar: res.user.avatar,
        preferences: res.user.preferences,
        travelStyles: res.user.travelStyles,
        budget: res.user.budget,
        hasPersonalized: res.user.hasPersonalized
      },
      personalizedData: this.mapPersonalizedData(res.personalizedData)
    })), (0,rxjs__WEBPACK_IMPORTED_MODULE_3__.catchError)(() => (0,rxjs__WEBPACK_IMPORTED_MODULE_2__.of)({
      user: {
        id: "",
        name: data.name,
        avatar: data.avatar,
        preferences: data.preferences,
        travelStyles: data.travelStyles,
        budget: data.budget,
        hasPersonalized: true
      },
      personalizedData: this.getDefaultPersonalizedData()
    })));
  }
  /** Get personalized data (or default if skipped /welcome)
   * @param lat - Vĩ độ của user
   * @param lng - Kinh độ của user
   */
  getPersonalizedData(lat, lng) {
    let url = `${this.baseUrl}/api/personalized`;
    const params = [];
    // Thêm location nếu có
    if (lat !== undefined && lng !== undefined) {
      params.push(`lat=${lat}`);
      params.push(`lng=${lng}`);
    }
    if (params.length > 0) {
      url += "?" + params.join("&");
    }
    return this.http.get(url, {
      headers: this.getHeaders()
    }).pipe((0,rxjs__WEBPACK_IMPORTED_MODULE_7__.timeout)(20000),
    // 20s: nếu BE chậm (AI/Pexels) vẫn trả fallback
    (0,rxjs__WEBPACK_IMPORTED_MODULE_4__.map)(res => this.mapPersonalizedData(res)), (0,rxjs__WEBPACK_IMPORTED_MODULE_3__.catchError)(() => (0,rxjs__WEBPACK_IMPORTED_MODULE_2__.of)(this.getDefaultPersonalizedData())));
  }
  mapPersonalizedData(res) {
    return {
      places: res.places || [],
      categories: res.categories || [],
      quickPrompts: res.quickPrompts || [],
      welcomeMessage: res.welcomeMessage || "",
      notifications: res.notifications || [],
      isPersonalized: res.isPersonalized || false
    };
  }
  getDefaultPersonalizedData() {
    return {
      places: [],
      categories: [{
        id: "signature",
        label: "Nhất định phải đến",
        icon: "⭐",
        iconName: "star"
      }, {
        id: "cafe",
        label: "Cafe",
        icon: "☕",
        iconName: "coffee"
      }, {
        id: "food",
        label: "Ăn uống",
        icon: "🍜",
        iconName: "restaurant"
      }, {
        id: "checkin",
        label: "Check-in",
        icon: "📸",
        iconName: "camera"
      }, {
        id: "nature",
        label: "Thiên nhiên",
        icon: "🌲",
        iconName: "tree"
      }, {
        id: "homestay",
        label: "Homestay",
        icon: "🏠",
        iconName: "home"
      }, {
        id: "rental",
        label: "Thuê xe",
        icon: "🛵",
        iconName: "scooter"
      }],
      quickPrompts: ["Lịch trình 2 ngày 1 đêm", "Quán cafe đẹp ở Đà Lạt", "Địa điểm check-in hot nhất", "Ăn gì khi trời mưa?", "Homestay view đẹp giá rẻ", "Hoạt động buổi tối ở Đà Lạt"],
      welcomeMessage: `Chào bạn! 👋\n\nMình là trợ lý du lịch AI Đà Lạt. Mình có thể giúp bạn:\n\n🗺️ Lên lịch trình chi tiết\n☕ Gợi ý quán cafe view đẹp\n🍜 Khám phá ẩm thực địa phương\n📸 Tìm địa điểm check-in tuyệt vời\n\nBạn cần hỗ trợ gì hôm nay?`,
      notifications: [{
        type: "tip",
        title: "Mẹo du lịch Đà Lạt",
        content: "Đà Lạt có nhiều dốc cao - nên thuê xe côn hoặc xe tay ga mạnh để di chuyển an toàn!",
        iconColor: "bg-amber-100 text-amber-700",
        icon: "💡"
      }, {
        type: "weather",
        title: "Thời tiết hôm nay",
        content: "Hôm nay trời đẹp! Nhiệt độ 18-25°C, lý tưởng cho chuyến đi!",
        iconColor: "bg-sky-100 text-sky-700",
        icon: "☀️"
      }],
      isPersonalized: false
    };
  }
  /** Get all places with optional filters - có offline cache */
  getPlaces(category, featured) {
    let url = `${this.baseUrl}/api/places`;
    const params = [];
    if (category) params.push(`category=${category}`);
    if (featured !== undefined) params.push(`featured=${featured}`);
    if (params.length > 0) url += '?' + params.join('&');
    return this.http.get(url, {
      headers: this.getHeaders()
    }).pipe((0,rxjs__WEBPACK_IMPORTED_MODULE_4__.map)(places => {
      const mapped = places.map(p => this.mapPlace(p));
      // Lưu vào cache nếu không có filter (full list)
      if (!category && featured === undefined) {
        try {
          localStorage.setItem(this.CACHE_PLACES_KEY, JSON.stringify({
            data: mapped,
            ts: Date.now()
          }));
        } catch {/* quota exceeded */}
      }
      return mapped;
    }), (0,rxjs__WEBPACK_IMPORTED_MODULE_3__.catchError)(() => {
      // Offline: đọc từ cache
      try {
        const raw = localStorage.getItem(this.CACHE_PLACES_KEY);
        if (raw) {
          const {
            data,
            ts
          } = JSON.parse(raw);
          if (Date.now() - ts < this.CACHE_TTL_MS) {
            let cached = data;
            if (category) cached = cached.filter(p => p.category === category);
            if (featured !== undefined) cached = cached.filter(p => p.featured === featured);
            console.warn('📵 [ApiService] Offline — serving places from cache');
            return (0,rxjs__WEBPACK_IMPORTED_MODULE_2__.of)(cached);
          }
        }
      } catch {}
      return (0,rxjs__WEBPACK_IMPORTED_MODULE_2__.of)([]);
    }));
  }
  /** Get place by slug */
  getPlaceBySlug(slug) {
    return this.getPlaces().pipe((0,rxjs__WEBPACK_IMPORTED_MODULE_4__.map)(places => places.find(p => p.slug === slug)), (0,rxjs__WEBPACK_IMPORTED_MODULE_3__.catchError)(() => (0,rxjs__WEBPACK_IMPORTED_MODULE_2__.of)(undefined)));
  }
  /** Get categories - có offline cache */
  getCategories() {
    return this.http.get(`${this.baseUrl}/api/categories`, {
      headers: this.getHeaders()
    }).pipe((0,rxjs__WEBPACK_IMPORTED_MODULE_4__.map)(categories => {
      const sigIndex = categories.findIndex(c => c.id === 'signature');
      if (sigIndex > -1) {
        const [sig] = categories.splice(sigIndex, 1);
        categories.unshift(sig);
      }
      // Lưu vào cache
      try {
        localStorage.setItem(this.CACHE_CATEGORIES_KEY, JSON.stringify({
          data: categories,
          ts: Date.now()
        }));
      } catch {}
      return categories;
    }), (0,rxjs__WEBPACK_IMPORTED_MODULE_3__.catchError)(() => {
      // Offline: đọc từ cache
      try {
        const raw = localStorage.getItem(this.CACHE_CATEGORIES_KEY);
        if (raw) {
          const {
            data,
            ts
          } = JSON.parse(raw);
          if (Date.now() - ts < this.CACHE_TTL_MS) {
            console.warn('📵 [ApiService] Offline — serving categories from cache');
            return (0,rxjs__WEBPACK_IMPORTED_MODULE_2__.of)(data);
          }
        }
      } catch {}
      return (0,rxjs__WEBPACK_IMPORTED_MODULE_2__.of)([]);
    }));
  }
  /** Get reviews for a place */
  getReviews(placeId) {
    return this.http.get(`${this.baseUrl}/api/places/${placeId}/reviews`, {
      headers: this.getHeaders()
    }).pipe((0,rxjs__WEBPACK_IMPORTED_MODULE_3__.catchError)(() => (0,rxjs__WEBPACK_IMPORTED_MODULE_2__.of)([])));
  }
  mapPlace(p) {
    return {
      id: p.id,
      name: p.name,
      slug: p.slug,
      category: p.category,
      shortDescription: p.shortDescription || p.short_description,
      fullDescription: p.fullDescription || p.full_description,
      imageUrl: p.imageUrl || p.image_url,
      tags: p.tags || [],
      suitableFor: p.suitableFor || p.suitable_for || [],
      featured: p.featured,
      rating: p.rating,
      reviewCount: p.reviewCount || p.review_count,
      priceRange: p.priceRange || p.price_range,
      address: p.address,
      openingHours: p.openingHours || p.opening_hours,
      lat: p.lat,
      lng: p.lng,
      pricePerDay: p.pricePerDay || p.price_per_day,
      vehicleTypes: p.vehicleTypes || p.vehicle_types,
      phoneNumber: p.phoneNumber || p.phone_number,
      depositRequired: p.depositRequired || p.deposit_required
    };
  }
  // ========== NOTIFICATIONS ENDPOINTS ==========
  /** Get user notifications */
  getNotifications() {
    return this.http.get(`${this.baseUrl}/api/notifications`, {
      headers: this.getHeaders()
    }).pipe((0,rxjs__WEBPACK_IMPORTED_MODULE_4__.map)(notifications => notifications.map(n => ({
      id: n.id,
      type: n.type,
      title: n.title,
      content: n.content,
      timestamp: new Date(n.timestamp),
      isRead: n.isRead || n.is_read,
      iconColor: n.iconColor || n.icon_color,
      icon: n.icon
    }))), (0,rxjs__WEBPACK_IMPORTED_MODULE_3__.catchError)(() => (0,rxjs__WEBPACK_IMPORTED_MODULE_2__.of)([])));
  }
  /** Mark notification as read */
  markNotificationRead(notificationId) {
    return this.http.post(`${this.baseUrl}/api/notifications/${notificationId}/read`, {}, {
      headers: this.getHeaders()
    }).pipe((0,rxjs__WEBPACK_IMPORTED_MODULE_3__.catchError)(() => (0,rxjs__WEBPACK_IMPORTED_MODULE_2__.of)({
      success: false
    })));
  }
  // ========== TRIPS ENDPOINTS ==========
  /** Get user trips */
  getTrips() {
    return this.http.get(`${this.baseUrl}/api/trips`, {
      headers: this.getHeaders()
    }).pipe((0,rxjs__WEBPACK_IMPORTED_MODULE_3__.catchError)(() => (0,rxjs__WEBPACK_IMPORTED_MODULE_2__.of)([])));
  }
  /** Create new trip */
  createTrip(trip) {
    return this.http.post(`${this.baseUrl}/api/trips`, trip, {
      headers: this.getHeaders()
    }).pipe((0,rxjs__WEBPACK_IMPORTED_MODULE_3__.catchError)(() => (0,rxjs__WEBPACK_IMPORTED_MODULE_2__.of)({})));
  }
  // ========== CHAT ENDPOINTS ==========
  /** Get chat sessions */
  getChatSessions() {
    return this.http.get(`${this.baseUrl}/api/chat/sessions`, {
      headers: this.getHeaders()
    }).pipe((0,rxjs__WEBPACK_IMPORTED_MODULE_4__.map)(sessions => sessions.map(s => ({
      id: s.id,
      title: s.title,
      messages: s.messages || [],
      createdAt: new Date(s.createdAt || s.created_at),
      updatedAt: new Date(s.updatedAt || s.updated_at)
    }))), (0,rxjs__WEBPACK_IMPORTED_MODULE_3__.catchError)(() => (0,rxjs__WEBPACK_IMPORTED_MODULE_2__.of)([])));
  }
  /** Create new chat session */
  createChatSession(title) {
    return this.http.post(`${this.baseUrl}/api/chat/sessions`, {
      title
    }, {
      headers: this.getHeaders()
    }).pipe((0,rxjs__WEBPACK_IMPORTED_MODULE_4__.map)(s => ({
      id: s.id,
      title: s.title || "Cuộc trò chuyện mới",
      messages: [],
      createdAt: new Date(),
      updatedAt: new Date()
    })), (0,rxjs__WEBPACK_IMPORTED_MODULE_3__.catchError)(() => (0,rxjs__WEBPACK_IMPORTED_MODULE_2__.of)({
      id: "",
      title: title || "Cuộc trò chuyện mới",
      messages: [],
      createdAt: new Date(),
      updatedAt: new Date()
    })));
  }
  /** Delete a chat session */
  deleteChatSession(sessionId) {
    return this.http.delete(`${this.baseUrl}/api/chat/sessions/${sessionId}`, {
      headers: this.getHeaders()
    }).pipe((0,rxjs__WEBPACK_IMPORTED_MODULE_3__.catchError)(() => (0,rxjs__WEBPACK_IMPORTED_MODULE_2__.of)({
      success: false
    })));
  }
  // ========== FAVORITES (legacy REST — removed, app uses Firestore directly) ==========
  // ========== HEALTH CHECK ==========
  /** Check if server is available */
  checkHealth() {
    return this.http.get(`${this.baseUrl}/api/health`).pipe((0,rxjs__WEBPACK_IMPORTED_MODULE_4__.map)(res => res.status === "ok"), (0,rxjs__WEBPACK_IMPORTED_MODULE_3__.catchError)(() => (0,rxjs__WEBPACK_IMPORTED_MODULE_2__.of)(false)));
  }
  // ========== SMART IMAGE (Pexels) ==========
  /**
   * Lấy ảnh mới cho một địa điểm qua SmartImage API.
   * Nguồn: Pexels → Placeholder (fallback)
   * @param placeId - ID của place (để trả về trong response)
   * @param placeName - Tên địa điểm (để hỏi Pexels)
   * @param category - Category
   * @param address - Địa chỉ
   * @param skipValidation - true = trả raw Pexels URL (dùng ở frontend)
   */
  getPlaceImage(placeId, placeName, category, address, skipValidation = false) {
    return this.http.post(`${this.baseUrl}/api/places/get-image`, {
      placeName,
      category,
      address,
      skipValidation
    }, {
      headers: this.getHeaders()
    }).pipe((0,rxjs__WEBPACK_IMPORTED_MODULE_4__.map)(res => ({
      placeId,
      imageUrl: res.imageUrl,
      imageUrls: res.imageUrls,
      source: res.source
    })), (0,rxjs__WEBPACK_IMPORTED_MODULE_3__.catchError)(() => (0,rxjs__WEBPACK_IMPORTED_MODULE_2__.of)({
      placeId,
      imageUrl: "",
      imageUrls: undefined,
      source: "error"
    })));
  }
  /**
   * Batch refresh ảnh cho nhiều địa điểm qua SmartImage API.
   * Nguồn: Pexels → Placeholder (fallback)
   */
  batchGetImages(places, skipValidation = false) {
    return this.http.post(`${this.baseUrl}/api/places/batch-get-images`, {
      places,
      skipValidation
    }, {
      headers: this.getHeaders()
    }).pipe((0,rxjs__WEBPACK_IMPORTED_MODULE_4__.map)(res => {
      const map = new Map();
      for (const p of res.places || []) {
        map.set(p.id, {
          imageUrl: p.imageUrl,
          imageUrls: p.imageUrls,
          source: p.source
        });
      }
      return map;
    }), (0,rxjs__WEBPACK_IMPORTED_MODULE_3__.catchError)(() => (0,rxjs__WEBPACK_IMPORTED_MODULE_2__.of)(new Map())));
  }
  /**
   * Refresh imageUrl cho tất cả place trong mảng.
   * Gọi batchGetImages, sau đó merge kết quả vào mảng place gốc.
   * Nguồn: Pexels → Placeholder (fallback)
   *
   * @param places - Mảng place cần refresh
   * @param skipValidation - true = dùng raw Pexels URL cho frontend
   */
  refreshPlaceImages(places, skipValidation = true) {
    if (!places || places.length === 0) return (0,rxjs__WEBPACK_IMPORTED_MODULE_2__.of)(places);
    console.log(`🔄 [Frontend] Refreshing images for ${places.length} places (skipValidation=${skipValidation})`);
    return this.batchGetImages(places.map(p => ({
      id: p.id,
      name: p.name,
      category: p.category,
      address: p.address
    })), skipValidation).pipe((0,rxjs__WEBPACK_IMPORTED_MODULE_4__.map)(imageMap => {
      let pexelsCount = 0;
      let placeholderCount = 0;
      for (const place of places) {
        const refreshed = imageMap.get(place.id);
        if (refreshed) {
          const oldUrl = place.imageUrl;
          if (refreshed.imageUrl) {
            place.imageUrl = refreshed.imageUrl;
            if (refreshed.imageUrls && refreshed.imageUrls.length > 0) {
              place.imageUrls = refreshed.imageUrls;
            }
            if (refreshed.imageUrl.includes("placehold.co")) {
              placeholderCount++;
              if (oldUrl !== refreshed.imageUrl) {
                console.log(`  ⚠️ [${place.name}] Using placeholder: ${refreshed.imageUrl.substring(0, 60)}...`);
              }
            } else {
              pexelsCount++;
              if (oldUrl !== refreshed.imageUrl) {
                console.log(`  ✅ [${place.name}] Updated to Pexels URL: ${refreshed.imageUrl.substring(0, 60)}...`);
              }
            }
          }
        }
      }
      console.log(`  📊 [Result] Pexels: ${pexelsCount}, Placeholder: ${placeholderCount}, Total: ${places.length}`);
      return places;
    }), (0,rxjs__WEBPACK_IMPORTED_MODULE_3__.catchError)(err => {
      console.error("❌ [Frontend] Error refreshing place images:", err);
      return (0,rxjs__WEBPACK_IMPORTED_MODULE_2__.of)(places);
    }));
  }
  // ========== AI IMAGE GENERATION ==========
  /** Generate an image via AI and return a base64 data URL */
  generateImage(prompt) {
    return this.http.post(`${this.baseUrl}/api/generate-image`, {
      prompt
    }, {
      headers: this.getHeaders()
    }).pipe((0,rxjs__WEBPACK_IMPORTED_MODULE_4__.map)(res => res.dataUrl), (0,rxjs__WEBPACK_IMPORTED_MODULE_3__.catchError)(() => (0,rxjs__WEBPACK_IMPORTED_MODULE_2__.of)('')));
  }
  static #_ = _staticBlock = () => (this.ɵfac = function ApiService_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || ApiService)();
  }, this.ɵprov = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({
    token: ApiService,
    factory: ApiService.ɵfac,
    providedIn: "root"
  }));
}
_staticBlock();

/***/ },

/***/ 2354
/*!******************************************************************!*\
  !*** ./node_modules/rxjs/dist/esm/internal/operators/timeout.js ***!
  \******************************************************************/
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   TimeoutError: () => (/* binding */ TimeoutError),
/* harmony export */   timeout: () => (/* binding */ timeout)
/* harmony export */ });
/* harmony import */ var _scheduler_async__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../scheduler/async */ 8473);
/* harmony import */ var _util_isDate__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../util/isDate */ 5602);
/* harmony import */ var _util_lift__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../util/lift */ 3200);
/* harmony import */ var _observable_innerFrom__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../observable/innerFrom */ 2645);
/* harmony import */ var _util_createErrorClass__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../util/createErrorClass */ 2384);
/* harmony import */ var _OperatorSubscriber__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./OperatorSubscriber */ 1687);
/* harmony import */ var _util_executeSchedule__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../util/executeSchedule */ 310);







const TimeoutError = (0,_util_createErrorClass__WEBPACK_IMPORTED_MODULE_4__.createErrorClass)(_super => function TimeoutErrorImpl(info = null) {
  _super(this);
  this.message = 'Timeout has occurred';
  this.name = 'TimeoutError';
  this.info = info;
});
function timeout(config, schedulerArg) {
  const {
    first,
    each,
    with: _with = timeoutErrorFactory,
    scheduler = schedulerArg !== null && schedulerArg !== void 0 ? schedulerArg : _scheduler_async__WEBPACK_IMPORTED_MODULE_0__.asyncScheduler,
    meta = null
  } = (0,_util_isDate__WEBPACK_IMPORTED_MODULE_1__.isValidDate)(config) ? {
    first: config
  } : typeof config === 'number' ? {
    each: config
  } : config;
  if (first == null && each == null) {
    throw new TypeError('No timeout provided.');
  }
  return (0,_util_lift__WEBPACK_IMPORTED_MODULE_2__.operate)((source, subscriber) => {
    let originalSourceSubscription;
    let timerSubscription;
    let lastValue = null;
    let seen = 0;
    const startTimer = delay => {
      timerSubscription = (0,_util_executeSchedule__WEBPACK_IMPORTED_MODULE_6__.executeSchedule)(subscriber, scheduler, () => {
        try {
          originalSourceSubscription.unsubscribe();
          (0,_observable_innerFrom__WEBPACK_IMPORTED_MODULE_3__.innerFrom)(_with({
            meta,
            lastValue,
            seen
          })).subscribe(subscriber);
        } catch (err) {
          subscriber.error(err);
        }
      }, delay);
    };
    originalSourceSubscription = source.subscribe((0,_OperatorSubscriber__WEBPACK_IMPORTED_MODULE_5__.createOperatorSubscriber)(subscriber, value => {
      timerSubscription === null || timerSubscription === void 0 ? void 0 : timerSubscription.unsubscribe();
      seen++;
      subscriber.next(lastValue = value);
      each > 0 && startTimer(each);
    }, undefined, undefined, () => {
      if (!(timerSubscription === null || timerSubscription === void 0 ? void 0 : timerSubscription.closed)) {
        timerSubscription === null || timerSubscription === void 0 ? void 0 : timerSubscription.unsubscribe();
      }
      lastValue = null;
    }));
    !seen && startTimer(first != null ? typeof first === 'number' ? first : +first - scheduler.now() : each);
  });
}
function timeoutErrorFactory(info) {
  throw new TimeoutError(info);
}

/***/ }

}]);
//# sourceMappingURL=default-src_app_services_api_service_ts.js.map