import { Injectable, inject, signal } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable, of, map, catchError } from 'rxjs';
import { AI_CONFIG } from '../config/ai.config';

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
  providedIn: 'root'
})
export class ApiService {
  private http = inject(HttpClient);
  private baseUrl = AI_CONFIG.baseUrl;

  // Device ID for user identification
  private getDeviceId(): string {
    let deviceId = localStorage.getItem('device_id');
    if (!deviceId) {
      deviceId = 'device_' + Math.random().toString(36).substring(2) + Date.now().toString(36);
      localStorage.setItem('device_id', deviceId);
    }
    return deviceId;
  }

  private getHeaders(): HttpHeaders {
    return new HttpHeaders({
      'Content-Type': 'application/json',
      'device-id': this.getDeviceId()
    });
  }

  // ========== USER ENDPOINTS ==========

  /** Get current user (auto creates if not exists) */
  getUser(): Observable<User> {
    return this.http.get<any>(`${this.baseUrl}/api/user`, { headers: this.getHeaders() }).pipe(
      map(res => ({
        id: res.id,
        name: res.name,
        avatar: res.avatar,
        preferences: res.preferences || [],
        travelStyles: res.travelStyles || [],
        budget: res.budget || 'mid',
        hasPersonalized: res.hasPersonalized || false
      })),
      catchError(() => of({
        id: '',
        name: 'Khách',
        avatar: '🧑‍💻',
        preferences: [],
        travelStyles: [],
        budget: 'mid',
        hasPersonalized: false
      }))
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
    return this.http.post<any>(`${this.baseUrl}/api/user/preferences`, data, { headers: this.getHeaders() }).pipe(
      map(res => ({
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
      })),
      catchError(() => of({
        user: {
          id: '',
          name: data.name,
          avatar: data.avatar,
          preferences: data.preferences,
          travelStyles: data.travelStyles,
          budget: data.budget,
          hasPersonalized: true
        },
        personalizedData: this.getDefaultPersonalizedData()
      }))
    );
  }

  /** Get personalized data (or default if skipped /welcome) */
  getPersonalizedData(): Observable<PersonalizedData> {
    return this.http.get<any>(`${this.baseUrl}/api/personalized`, { headers: this.getHeaders() }).pipe(
      map(res => this.mapPersonalizedData(res)),
      catchError(() => of(this.getDefaultPersonalizedData()))
    );
  }

  private mapPersonalizedData(res: any): PersonalizedData {
    return {
      places: res.places || [],
      categories: res.categories || [],
      quickPrompts: res.quickPrompts || [],
      welcomeMessage: res.welcomeMessage || '',
      notifications: res.notifications || [],
      isPersonalized: res.isPersonalized || false
    };
  }

  private getDefaultPersonalizedData(): PersonalizedData {
    return {
      places: [],
      categories: [
        { id: 'cafe', label: 'Cafe', icon: '☕', iconName: 'coffee' },
        { id: 'restaurant', label: 'Ăn uống', icon: '🍜', iconName: 'restaurant' },
        { id: 'checkin', label: 'Check-in', icon: '📸', iconName: 'camera' },
        { id: 'nature', label: 'Thiên nhiên', icon: '🌲', iconName: 'tree' },
        { id: 'homestay', label: 'Homestay', icon: '🏠', iconName: 'home' },
        { id: 'rental', label: 'Thuê xe', icon: '🛵', iconName: 'scooter' }
      ],
      quickPrompts: [
        'Lịch trình 2 ngày 1 đêm',
        'Quán cafe đẹp ở Đà Lạt',
        'Địa điểm check-in hot nhất',
        'Ăn gì khi trời mưa?',
        'Homestay view đẹp giá rẻ',
        'Hoạt động buổi tối ở Đà Lạt'
      ],
      welcomeMessage: `Chào bạn! 👋\n\nMình là trợ lý du lịch AI Đà Lạt. Mình có thể giúp bạn:\n\n🗺️ Lên lịch trình chi tiết\n☕ Gợi ý quán cafe view đẹp\n🍜 Khám phá ẩm thực địa phương\n📸 Tìm địa điểm check-in tuyệt vời\n\nBạn cần hỗ trợ gì hôm nay?`,
      notifications: [
        { type: 'tip', title: 'Mẹo du lịch Đà Lạt', content: 'Đà Lạt có nhiều dốc cao - nên thuê xe côn hoặc xe tay ga mạnh để di chuyển an toàn!', iconColor: 'bg-amber-100 text-amber-700', icon: '💡' },
        { type: 'weather', title: 'Thờ tiết hôm nay', content: 'Hôm nay trời đẹp! Nhiệt độ 18-25°C, lý tưởng cho chuyến đi!', iconColor: 'bg-sky-100 text-sky-700', icon: '☀️' }
      ],
      isPersonalized: false
    };
  }

  // ========== PLACES ENDPOINTS ==========

  /** Get all places with optional filters */
  getPlaces(category?: string, featured?: boolean): Observable<Place[]> {
    let url = `${this.baseUrl}/api/places`;
    const params: string[] = [];
    if (category) params.push(`category=${category}`);
    if (featured !== undefined) params.push(`featured=${featured}`);
    if (params.length > 0) url += '?' + params.join('&');

    return this.http.get<any[]>(url, { headers: this.getHeaders() }).pipe(
      map(places => places.map(p => this.mapPlace(p))),
      catchError(() => of([]))
    );
  }

  /** Get place by slug */
  getPlaceBySlug(slug: string): Observable<Place | undefined> {
    return this.getPlaces().pipe(
      map(places => places.find(p => p.slug === slug)),
      catchError(() => of(undefined))
    );
  }

  /** Get categories */
  getCategories(): Observable<Category[]> {
    return this.http.get<Category[]>(`${this.baseUrl}/api/categories`, { headers: this.getHeaders() }).pipe(
      catchError(() => of([]))
    );
  }

  /** Get reviews for a place */
  getReviews(placeId: string): Observable<any[]> {
    return this.http.get<any[]>(`${this.baseUrl}/api/places/${placeId}/reviews`, { headers: this.getHeaders() }).pipe(
      catchError(() => of([]))
    );
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
      depositRequired: p.depositRequired || p.deposit_required
    };
  }

  // ========== NOTIFICATIONS ENDPOINTS ==========

  /** Get user notifications */
  getNotifications(): Observable<Notification[]> {
    return this.http.get<any[]>(`${this.baseUrl}/api/notifications`, { headers: this.getHeaders() }).pipe(
      map(notifications => notifications.map(n => ({
        id: n.id,
        type: n.type,
        title: n.title,
        content: n.content,
        timestamp: new Date(n.timestamp),
        isRead: n.isRead || n.is_read,
        iconColor: n.iconColor || n.icon_color,
        icon: n.icon
      }))),
      catchError(() => of([]))
    );
  }

  /** Mark notification as read */
  markNotificationRead(notificationId: string): Observable<any> {
    return this.http.post(`${this.baseUrl}/api/notifications/${notificationId}/read`, {}, { headers: this.getHeaders() }).pipe(
      catchError(() => of({ success: false }))
    );
  }

  // ========== TRIPS ENDPOINTS ==========

  /** Get user trips */
  getTrips(): Observable<Trip[]> {
    return this.http.get<Trip[]>(`${this.baseUrl}/api/trips`, { headers: this.getHeaders() }).pipe(
      catchError(() => of([]))
    );
  }

  /** Create new trip */
  createTrip(trip: Partial<Trip>): Observable<Trip> {
    return this.http.post<Trip>(`${this.baseUrl}/api/trips`, trip, { headers: this.getHeaders() }).pipe(
      catchError(() => of({} as Trip))
    );
  }

  // ========== CHAT ENDPOINTS ==========

  /** Get chat sessions */
  getChatSessions(): Observable<ChatSession[]> {
    return this.http.get<any[]>(`${this.baseUrl}/api/chat/sessions`, { headers: this.getHeaders() }).pipe(
      map(sessions => sessions.map(s => ({
        id: s.id,
        title: s.title,
        messages: s.messages || [],
        createdAt: new Date(s.createdAt || s.created_at),
        updatedAt: new Date(s.updatedAt || s.updated_at)
      }))),
      catchError(() => of([]))
    );
  }

  /** Create new chat session */
  createChatSession(title?: string): Observable<ChatSession> {
    return this.http.post<any>(`${this.baseUrl}/api/chat/sessions`, { title }, { headers: this.getHeaders() }).pipe(
      map(s => ({
        id: s.id,
        title: s.title || 'Cuộc trò chuyện mới',
        messages: [],
        createdAt: new Date(),
        updatedAt: new Date()
      })),
      catchError(() => of({
        id: '',
        title: title || 'Cuộc trò chuyện mới',
        messages: [],
        createdAt: new Date(),
        updatedAt: new Date()
      }))
    );
  }

  // ========== HEALTH CHECK ==========

  /** Check if server is available */
  checkHealth(): Observable<boolean> {
    return this.http.get<{ status: string }>(`${this.baseUrl}/api/health`).pipe(
      map(res => res.status === 'ok'),
      catchError(() => of(false))
    );
  }
}
