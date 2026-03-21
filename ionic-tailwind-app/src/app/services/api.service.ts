import { Injectable, inject, signal } from "@angular/core";
import { HttpClient, HttpHeaders } from "@angular/common/http";
import { Observable, of, map, catchError, timeout, startWith } from "rxjs";
import { AI_CONFIG } from "../config/ai.config";

// Types
export interface User {
  id: string;
  name: string;
  avatar: string;
  preferences: string[];
  travelStyles: string[];
  budget: string;
  hasPersonalized: boolean;
}

export interface Place {
  id: string;
  name: string;
  slug: string;
  category: string;
  shortDescription: string;
  fullDescription: string;
  imageUrl: string;
  pexelsUrl?: never;  // Pexels URL không còn dùng — chỉ dùng imageUrl
  tags: string[];
  suitableFor: string[];
  featured?: boolean;
  rating?: number;
  reviewCount?: number;
  priceRange?: string;
  address?: string;
  openingHours?: string;
  lat?: number;
  lng?: number;
  pricePerDay?: string;
  vehicleTypes?: string[];
  phoneNumber?: string;
  depositRequired?: string;
}

export interface Category {
  id: string;
  label: string;
  icon: string;
  iconName: string;
}

export interface Notification {
  id: string;
  type: string;
  title: string;
  content: string;
  timestamp: Date;
  isRead: boolean;
  iconColor: string;
  icon: string;
}

export interface Trip {
  id: string;
  title: string;
  destination: string;
  coverImage: string;
  startDate: string;
  endDate: string;
  status: string;
  days: TripDay[];
  totalBudget: number;
  spent: number;
  notes?: string;
  budgetCategories: TripBudgetCategory[];
}

export interface TripDay {
  id: string;
  dayNumber: number;
  date: string;
  items: TripItineraryItem[];
  totalCost: number;
}

export interface TripItineraryItem {
  id: string;
  time: string;
  type: string;
  title: string;
  description?: string;
  cost?: number;
  placeId?: string;
}

export interface TripBudgetCategory {
  category: string;
  icon: string;
  spent: number;
  budget: number;
}

export interface ChatSession {
  id: string;
  title: string;
  messages: any[];
  createdAt: Date;
  updatedAt: Date;
}

export interface Review {
  id: string;
  placeId: string;
  author: string;
  avatar?: string;
  date: string;
  rating: number;
  content: string;
  helpfulCount?: number;
  isHelpful?: boolean;
}

export interface PersonalizedData {
  places: Place[];
  categories: Category[];
  quickPrompts: string[];
  welcomeMessage: string;
  notifications: any[];
  isPersonalized: boolean;
}

@Injectable({
  providedIn: "root",
})
export class ApiService {
  private http = inject(HttpClient);
  private baseUrl = AI_CONFIG.baseUrl;

  /**
   * Convert external image URL thành proxy URL để bypass CORS
   * @param imageUrl - URL ảnh từ external source (Gemini, etc.)
   * @returns Proxy URL hoặc original URL nếu là placeholder
   */
  getImageProxyUrl(imageUrl: string | null | undefined): string | null {
    if (!imageUrl) return null;

    // Không proxy: placeholder, Pexels, ảnh AI từ dev server / production domain / Firebase Hosting
    if (
      imageUrl.includes('placehold.co') ||
      imageUrl.includes('images.pexels.com') ||
      imageUrl.includes('replit.dev') ||
      imageUrl.includes('replit.app') ||
      imageUrl.includes('dalat-chatbot.web.app') ||
      imageUrl.startsWith('/')
    ) {
      return imageUrl;
    }

    // Convert external URL thành proxy URL
    return `${this.baseUrl}/api/image-proxy?url=${encodeURIComponent(imageUrl)}`;
  }

  /**
   * Convert array of image URLs thành proxy URLs
   */
  getImageProxyUrls(imageUrls: string[] | null | undefined): string[] {
    if (!imageUrls || imageUrls.length === 0) return [];
    return imageUrls.map(url => this.getImageProxyUrl(url) || url).filter(Boolean) as string[];
  }

  // Device ID for user identification (public để AIService dùng khi gọi /api/chat)
  getDeviceId(): string {
    // Tạo và lưu device ID nếu chưa có (dùng cho mọi loại user kể cả Firebase)
    let deviceId = localStorage.getItem("device_id");
    if (!deviceId) {
      deviceId =
        "device_" +
        Math.random().toString(36).substring(2) +
        Date.now().toString(36);
      localStorage.setItem("device_id", deviceId);
    }
    return deviceId;
  }

  private getHeaders(): HttpHeaders {
    return new HttpHeaders({
      "Content-Type": "application/json",
      "device-id": this.getDeviceId(),
    });
  }

  // ========== USER ENDPOINTS ==========

  /** Get current user (auto creates if not exists) */
  getUser(): Observable<User> {
    const cached = this.getUserFromLocalStorage();
    return this.http
      .get<any>(`${this.baseUrl}/api/user`, { headers: this.getHeaders() })
      .pipe(
        map((res) => ({
          id: res.id,
          name: res.name,
          avatar: res.avatar,
          preferences: res.preferences || [],
          travelStyles: res.travelStyles || [],
          budget: res.budget || "mid",
          hasPersonalized: res.hasPersonalized || false,
        })),
        startWith(cached),
        catchError(() => of(cached)),
      );
  }

  /** Fallback: đọc user từ localStorage khi API không khả dụng */
  private getUserFromLocalStorage(): User {
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
      hasPersonalized,
    };
  }

  /** Sync Firebase user with backend — dùng ID Token thay vì UID từ body */
  syncFirebaseUser(
    idToken: string,
    email = '',
    displayName = '',
    photoURL = '',
  ): Observable<User | null> {
    if (!idToken) {
      return of(null);
    }

    const headers = new HttpHeaders({
      'Content-Type': 'application/json',
      'device-id': this.getDeviceId(),
      'Authorization': `Bearer ${idToken}`,
    });

    return this.http
      .post<any>(`${this.baseUrl}/api/user/sync`, {
        email,
        displayName,
        photoURL,
      }, { headers })
      .pipe(
        map((res) => ({
          id: res.id,
          name: res.name,
          avatar: res.avatar,
          preferences: res.preferences || [],
          travelStyles: res.travelStyles || [],
          budget: res.budget || 'mid',
          hasPersonalized: res.hasPersonalized || false,
        })),
        catchError(() => of(null)),
      );
  }

  /** Save user preferences after /welcome - generates personalized data via AI */
  savePreferences(data: {
    name: string;
    avatar: string;
    preferences: string[];
    travelStyles: string[];
    budget: string;
  }): Observable<{ user: User; personalizedData: PersonalizedData }> {
    return this.http
      .post<any>(`${this.baseUrl}/api/user/preferences`, data, {
        headers: this.getHeaders(),
      })
      .pipe(
        map((res) => ({
          user: {
            id: res.user.id,
            name: res.user.name,
            avatar: res.user.avatar,
            preferences: res.user.preferences,
            travelStyles: res.user.travelStyles,
            budget: res.user.budget,
            hasPersonalized: res.user.hasPersonalized,
          },
          personalizedData: this.mapPersonalizedData(res.personalizedData),
        })),
        catchError(() =>
          of({
            user: {
              id: "",
              name: data.name,
              avatar: data.avatar,
              preferences: data.preferences,
              travelStyles: data.travelStyles,
              budget: data.budget,
              hasPersonalized: true,
            },
            personalizedData: this.getDefaultPersonalizedData(),
          }),
        ),
      );
  }

  /** Get personalized data (or default if skipped /welcome)
   * @param lat - Vĩ độ của user
   * @param lng - Kinh độ của user
   */
  getPersonalizedData(lat?: number, lng?: number): Observable<PersonalizedData> {
    let url = `${this.baseUrl}/api/personalized`;
    const params: string[] = [];

    // Thêm location nếu có
    if (lat !== undefined && lng !== undefined) {
      params.push(`lat=${lat}`);
      params.push(`lng=${lng}`);
    }

    if (params.length > 0) {
      url += "?" + params.join("&");
    }

    return this.http
      .get<any>(url, {
        headers: this.getHeaders(),
      })
      .pipe(
        timeout(20000), // 20s: nếu BE chậm (AI/Pexels) vẫn trả fallback
        map((res) => this.mapPersonalizedData(res)),
        catchError(() => of(this.getDefaultPersonalizedData())),
      );
  }

  private mapPersonalizedData(res: any): PersonalizedData {
    return {
      places: res.places || [],
      categories: res.categories || [],
      quickPrompts: res.quickPrompts || [],
      welcomeMessage: res.welcomeMessage || "",
      notifications: res.notifications || [],
      isPersonalized: res.isPersonalized || false,
    };
  }

  private getDefaultPersonalizedData(): PersonalizedData {
    return {
      places: [],
      categories: [
        { id: "signature", label: "Nhất định phải đến", icon: "⭐", iconName: "star" },
        { id: "cafe", label: "Cafe", icon: "☕", iconName: "coffee" },
        { id: "food", label: "Ăn uống", icon: "🍜", iconName: "restaurant" },
        { id: "checkin", label: "Check-in", icon: "📸", iconName: "camera" },
        { id: "nature", label: "Thiên nhiên", icon: "🌲", iconName: "tree" },
        { id: "homestay", label: "Homestay", icon: "🏠", iconName: "home" },
        { id: "rental", label: "Thuê xe", icon: "🛵", iconName: "scooter" },
      ],
      quickPrompts: [
        "Lịch trình 2 ngày 1 đêm",
        "Quán cafe đẹp ở Đà Lạt",
        "Địa điểm check-in hot nhất",
        "Ăn gì khi trời mưa?",
        "Homestay view đẹp giá rẻ",
        "Hoạt động buổi tối ở Đà Lạt",
      ],
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
          content:
            "Hôm nay trời đẹp! Nhiệt độ 18-25°C, lý tưởng cho chuyến đi!",
          iconColor: "bg-sky-100 text-sky-700",
          icon: "☀️",
        },
      ],
      isPersonalized: false,
    };
  }

  private readonly CACHE_PLACES_KEY = 'cache_places';
  private readonly CACHE_CATEGORIES_KEY = 'cache_categories';
  private readonly CACHE_TTL_MS = 6 * 60 * 60 * 1000; // 6 giờ

  /** Get all places with optional filters - có offline cache */
  getPlaces(category?: string, featured?: boolean): Observable<Place[]> {
    let url = `${this.baseUrl}/api/places`;
    const params: string[] = [];
    if (category) params.push(`category=${category}`);
    if (featured !== undefined) params.push(`featured=${featured}`);
    if (params.length > 0) url += '?' + params.join('&');

    return this.http.get<any[]>(url, { headers: this.getHeaders() }).pipe(
      map((places) => {
        const mapped = places.map((p) => this.mapPlace(p));
        // Lưu vào cache nếu không có filter (full list)
        if (!category && featured === undefined) {
          try {
            localStorage.setItem(this.CACHE_PLACES_KEY, JSON.stringify({
              data: mapped,
              ts: Date.now(),
            }));
          } catch { /* quota exceeded */ }
        }
        return mapped;
      }),
      catchError(() => {
        // Offline: đọc từ cache
        try {
          const raw = localStorage.getItem(this.CACHE_PLACES_KEY);
          if (raw) {
            const { data, ts } = JSON.parse(raw);
            if (Date.now() - ts < this.CACHE_TTL_MS) {
              let cached: Place[] = data;
              if (category) cached = cached.filter(p => p.category === category);
              if (featured !== undefined) cached = cached.filter(p => p.featured === featured);
              console.warn('📵 [ApiService] Offline — serving places from cache');
              return of(cached);
            }
          }
        } catch { }
        return of([]);
      }),
    );
  }

  /** Get place by slug */
  getPlaceBySlug(slug: string): Observable<Place | undefined> {
    return this.getPlaces().pipe(
      map((places) => places.find((p) => p.slug === slug)),
      catchError(() => of(undefined)),
    );
  }

  /** Get categories - có offline cache */
  getCategories(): Observable<Category[]> {
    return this.http
      .get<Category[]>(`${this.baseUrl}/api/categories`, { headers: this.getHeaders() })
      .pipe(
        map((categories) => {
          const sigIndex = categories.findIndex((c) => c.id === 'signature');
          if (sigIndex > -1) {
            const [sig] = categories.splice(sigIndex, 1);
            categories.unshift(sig);
          }
          // Lưu vào cache
          try {
            localStorage.setItem(this.CACHE_CATEGORIES_KEY, JSON.stringify({
              data: categories,
              ts: Date.now(),
            }));
          } catch { }
          return categories;
        }),
        catchError(() => {
          // Offline: đọc từ cache
          try {
            const raw = localStorage.getItem(this.CACHE_CATEGORIES_KEY);
            if (raw) {
              const { data, ts } = JSON.parse(raw);
              if (Date.now() - ts < this.CACHE_TTL_MS) {
                console.warn('📵 [ApiService] Offline — serving categories from cache');
                return of(data);
              }
            }
          } catch { }
          return of([]);
        })
      );
  }

  /** Get reviews for a place */
  getReviews(placeId: string): Observable<any[]> {
    return this.http
      .get<
        any[]
      >(`${this.baseUrl}/api/places/${placeId}/reviews`, { headers: this.getHeaders() })
      .pipe(catchError(() => of([])));
  }

  private mapPlace(p: any): Place {
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
      depositRequired: p.depositRequired || p.deposit_required,
    };
  }

  // ========== NOTIFICATIONS ENDPOINTS ==========

  /** Get user notifications */
  getNotifications(): Observable<Notification[]> {
    return this.http
      .get<
        any[]
      >(`${this.baseUrl}/api/notifications`, { headers: this.getHeaders() })
      .pipe(
        map((notifications) =>
          notifications.map((n) => ({
            id: n.id,
            type: n.type,
            title: n.title,
            content: n.content,
            timestamp: new Date(n.timestamp),
            isRead: n.isRead || n.is_read,
            iconColor: n.iconColor || n.icon_color,
            icon: n.icon,
          })),
        ),
        catchError(() => of([])),
      );
  }

  /** Mark notification as read */
  markNotificationRead(notificationId: string): Observable<any> {
    return this.http
      .post(
        `${this.baseUrl}/api/notifications/${notificationId}/read`,
        {},
        { headers: this.getHeaders() },
      )
      .pipe(catchError(() => of({ success: false })));
  }

  // ========== TRIPS ENDPOINTS ==========

  /** Get user trips */
  getTrips(): Observable<Trip[]> {
    return this.http
      .get<Trip[]>(`${this.baseUrl}/api/trips`, { headers: this.getHeaders() })
      .pipe(catchError(() => of([])));
  }

  /** Create new trip */
  createTrip(trip: Partial<Trip>): Observable<Trip> {
    return this.http
      .post<Trip>(`${this.baseUrl}/api/trips`, trip, {
        headers: this.getHeaders(),
      })
      .pipe(catchError(() => of({} as Trip)));
  }

  // ========== CHAT ENDPOINTS ==========

  /** Get chat sessions */
  getChatSessions(): Observable<ChatSession[]> {
    return this.http
      .get<
        any[]
      >(`${this.baseUrl}/api/chat/sessions`, { headers: this.getHeaders() })
      .pipe(
        map((sessions) =>
          sessions.map((s) => ({
            id: s.id,
            title: s.title,
            messages: s.messages || [],
            createdAt: new Date(s.createdAt || s.created_at),
            updatedAt: new Date(s.updatedAt || s.updated_at),
          })),
        ),
        catchError(() => of([])),
      );
  }

  /** Create new chat session */
  createChatSession(title?: string): Observable<ChatSession> {
    return this.http
      .post<any>(
        `${this.baseUrl}/api/chat/sessions`,
        { title },
        { headers: this.getHeaders() },
      )
      .pipe(
        map((s) => ({
          id: s.id,
          title: s.title || "Cuộc trò chuyện mới",
          messages: [],
          createdAt: new Date(),
          updatedAt: new Date(),
        })),
        catchError(() =>
          of({
            id: "",
            title: title || "Cuộc trò chuyện mới",
            messages: [],
            createdAt: new Date(),
            updatedAt: new Date(),
          }),
        ),
      );
  }

  /** Delete a chat session */
  deleteChatSession(sessionId: string): Observable<{ success: boolean }> {
    return this.http
      .delete<{
        success: boolean;
      }>(`${this.baseUrl}/api/chat/sessions/${sessionId}`, { headers: this.getHeaders() })
      .pipe(catchError(() => of({ success: false })));
  }

  // ========== FAVORITES ENDPOINTS ==========

  /** Get user favorite places */
  getFavorites(): Observable<Place[]> {
    return this.http
      .get<
        any[]
      >(`${this.baseUrl}/api/favorites`, { headers: this.getHeaders() })
      .pipe(
        map((places) => places.map((p) => this.mapPlace(p))),
        catchError(() => of([])),
      );
  }

  /** Add place to favorites */
  addFavorite(
    placeId: string,
  ): Observable<{ success: boolean; added: boolean }> {
    return this.http
      .post<{
        success: boolean;
        added: boolean;
      }>(
        `${this.baseUrl}/api/favorites`,
        { placeId },
        { headers: this.getHeaders() },
      )
      .pipe(catchError(() => of({ success: false, added: false })));
  }

  /** Remove place from favorites */
  removeFavorite(placeId: string): Observable<{ success: boolean }> {
    return this.http
      .delete<{
        success: boolean;
      }>(`${this.baseUrl}/api/favorites/${placeId}`, {
        headers: this.getHeaders(),
      })
      .pipe(catchError(() => of({ success: false })));
  }

  /** Check if a place is in favorites */
  checkFavorite(placeId: string): Observable<boolean> {
    return this.http
      .get<{
        isFavorite: boolean;
      }>(`${this.baseUrl}/api/favorites/check/${placeId}`, {
        headers: this.getHeaders(),
      })
      .pipe(
        map((res) => res.isFavorite),
        catchError(() => of(false)),
      );
  }

  /** Toggle favorite status of a place */
  toggleFavorite(placeId: string, currentState: boolean): Observable<boolean> {
    if (currentState) {
      // Nếu API fail (success=false), giữ nguyên trạng thái cũ
      return this.removeFavorite(placeId).pipe(
        map((res) => (res.success ? false : currentState)),
      );
    } else {
      // Nếu API fail (success=false), giữ nguyên trạng thái cũ
      return this.addFavorite(placeId).pipe(
        map((res) => (res.success || res.added ? true : currentState)),
      );
    }
  }

  // ========== HEALTH CHECK ==========

  /** Check if server is available */
  checkHealth(): Observable<boolean> {
    return this.http.get<{ status: string }>(`${this.baseUrl}/api/health`).pipe(
      map((res) => res.status === "ok"),
      catchError(() => of(false)),
    );
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
  getPlaceImage(
    placeId: string,
    placeName: string,
    category?: string,
    address?: string,
    skipValidation = false,
  ): Observable<{ placeId: string; imageUrl: string; imageUrls?: string[]; source: string }> {
    return this.http
      .post<{ imageUrl: string; imageUrls?: string[]; source: string }>(
        `${this.baseUrl}/api/places/get-image`,
        { placeName, category, address, skipValidation },
        { headers: this.getHeaders() },
      )
      .pipe(
        map((res) => ({
          placeId,
          imageUrl: res.imageUrl,
          imageUrls: res.imageUrls,
          source: res.source,
        })),
        catchError(() => of({ placeId, imageUrl: "", imageUrls: undefined, source: "error" })),
      );
  }

  /**
   * Batch refresh ảnh cho nhiều địa điểm qua SmartImage API.
   * Nguồn: Pexels → Placeholder (fallback)
   */
  batchGetImages(
    places: { id: string; name: string; category?: string; address?: string }[],
    skipValidation = false,
  ): Observable<Map<string, { imageUrl: string; imageUrls?: string[]; source: string }>> {
    return this.http
      .post<{ places: { id: string; imageUrl: string; imageUrls?: string[]; source: string }[] }>(
        `${this.baseUrl}/api/places/batch-get-images`,
        { places, skipValidation },
        { headers: this.getHeaders() },
      )
      .pipe(
        map((res) => {
          const map = new Map<string, { imageUrl: string; imageUrls?: string[]; source: string }>();
          for (const p of res.places || []) {
            map.set(p.id, { imageUrl: p.imageUrl, imageUrls: p.imageUrls, source: p.source });
          }
          return map;
        }),
        catchError(() => of(new Map())),
      );
  }

  /**
   * Refresh imageUrl cho tất cả place trong mảng.
   * Gọi batchGetImages, sau đó merge kết quả vào mảng place gốc.
   * Nguồn: Pexels → Placeholder (fallback)
   *
   * @param places - Mảng place cần refresh
   * @param skipValidation - true = dùng raw Pexels URL cho frontend
   */
  refreshPlaceImages(
    places: Place[],
    skipValidation = true,
  ): Observable<Place[]> {
    if (!places || places.length === 0) return of(places);

    console.log(`🔄 [Frontend] Refreshing images for ${places.length} places (skipValidation=${skipValidation})`);

    return this.batchGetImages(
      places.map((p) => ({ id: p.id, name: p.name, category: p.category, address: p.address })),
      skipValidation,
    ).pipe(
      map((imageMap) => {
        let pexelsCount = 0;
        let placeholderCount = 0;
        for (const place of places) {
          const refreshed = imageMap.get(place.id);
          if (refreshed) {
            const oldUrl = place.imageUrl;
            if (refreshed.imageUrl) {
              place.imageUrl = refreshed.imageUrl;
              if (refreshed.imageUrls && refreshed.imageUrls.length > 0) {
                (place as any).imageUrls = refreshed.imageUrls;
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
      }),
      catchError((err) => {
        console.error("❌ [Frontend] Error refreshing place images:", err);
        return of(places);
      }),
    );
  }

  // ========== AI IMAGE GENERATION ==========

  /** Generate an image via AI and return a base64 data URL */
  generateImage(prompt: string): Observable<string> {
    return this.http.post<{ dataUrl: string }>(
      `${this.baseUrl}/api/generate-image`,
      { prompt },
      { headers: this.getHeaders() },
    ).pipe(
      map((res) => res.dataUrl),
      catchError(() => of('')),
    );
  }
}
