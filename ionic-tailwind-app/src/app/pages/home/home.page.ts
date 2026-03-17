import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Router, RouterModule } from '@angular/router';
import { SearchBarComponent } from '../../components/ui/search-bar/search-bar.component';
import { PlaceCardComponent } from '../../components/place/place-card/place-card.component';
import { RentalCardComponent } from '../../components/place/rental-card/rental-card.component';
import { WeatherWidgetComponent } from '../../components/weather/weather-widget/weather-widget.component';
import { ApiService, PersonalizedData, Trip, Notification, Place, Category } from '../../services/api.service';
import { MOCK_TRIPS, Trip as MockTrip } from '../../data/mock-trips';
import { MOCK_NOTIFICATIONS } from '../../data/mock-notifications';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [
    CommonModule, 
    RouterModule, 
    SearchBarComponent, 
    PlaceCardComponent, 
    RentalCardComponent,
    WeatherWidgetComponent
  ],
  template: `
    <div class="bg-white">
      <!-- Header -->
      <div class="px-4 pt-12 pb-4 flex items-center justify-between">
        <div>
          <p class="text-gray-500 text-sm">Xin chào! 👋</p>
          <h1 class="text-xl font-semibold text-gray-900">Hôm nay bạn muốn đi đâu?</h1>
        </div>
        <div class="flex items-center gap-3">
          <button (click)="goToNotifications()" class="relative w-10 h-10 rounded-full bg-gray-50 flex items-center justify-center">
            <svg class="w-5 h-5 text-gray-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 17h5l-1.405-1.405A2.032 2.032 0 0118 14.158V11a6.002 6.002 0 00-4-5.659V5a2 2 0 10-4 0v.341C7.67 6.165 6 8.388 6 11v3.159c0 .538-.214 1.055-.595 1.436L4 17h5m6 0v1a3 3 0 11-6 0v-1m6 0H9" />
            </svg>
            <span *ngIf="unreadCount > 0" class="absolute top-1 right-1 w-2.5 h-2.5 bg-red-500 rounded-full"></span>
          </button>
          <button (click)="goToProfile()" class="w-10 h-10 rounded-full bg-gray-100 flex items-center justify-center">
            <svg class="w-5 h-5 text-gray-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
            </svg>
          </button>
        </div>
      </div>

      <!-- Search Bar -->
      <div class="px-4 mb-6">
        <app-search-bar 
          [readOnly]="true" 
          placeholder="Bạn muốn đi đâu ở Đà Lạt?"
        ></app-search-bar>
      </div>

      <!-- Upcoming Trip Banner -->
      <div *ngIf="upcomingTrip" class="px-4 mb-6">
        <div 
          class="relative rounded-2xl overflow-hidden cursor-pointer" 
          (click)="goToTrip(upcomingTrip.id)"
        >
          <img [src]="upcomingTrip.coverImage" class="w-full h-32 object-cover" />
          <div class="absolute inset-0 bg-black/55 flex flex-col justify-between p-4">
            <div class="flex items-center gap-2">
              <svg class="w-4 h-4 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
              </svg>
              <span class="text-white text-sm">{{ upcomingTrip.title }}</span>
            </div>
            <div>
              <p class="text-white/80 text-xs">{{ upcomingTrip.startDate }} - {{ upcomingTrip.endDate }}</p>
              <span class="inline-block mt-1 px-2 py-0.5 bg-white/20 rounded-full text-xs text-white">Sắp tới</span>
            </div>
          </div>
        </div>
      </div>

      <!-- Weather Widget -->
      <div class="px-4 mb-6">
        <app-weather-widget></app-weather-widget>
      </div>

      <!-- Chat CTA -->
      <div class="px-4 mb-6">
        <div 
          class="bg-gradient-to-br from-gray-900 to-gray-800 rounded-2xl p-4 cursor-pointer"
          (click)="goToChat('')"
        >
          <div class="flex items-center gap-3 mb-2">
            <div class="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center">
              <svg class="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 3v4M3 5h4M6 17v4m-2-2h4m5-16l2.286 6.857L21 12l-5.714 2.143L13 21l-2.286-6.857L5 12l5.714-2.143L13 3z" />
              </svg>
            </div>
            <div>
              <h3 class="text-white font-medium">AI Trợ lý du lịch</h3>
              <p class="text-white/60 text-sm">Luôn sẵn sàng giúp bạn</p>
            </div>
          </div>
          <p class="text-white/80 text-sm">Chat với AI để lên lịch trình</p>
        </div>
      </div>

      <!-- Quick Prompts -->
      <div class="mb-6">
        <div class="flex gap-2 overflow-x-auto px-4 pb-2 scrollbar-hide">
          <button 
            *ngFor="let prompt of quickPrompts"
            (click)="goToChat(prompt)"
            class="px-4 py-2 bg-gray-50 border border-gray-200 rounded-full text-sm whitespace-nowrap"
          >
            {{ prompt }}
          </button>
        </div>
      </div>

      <!-- Categories -->
      <div class="mb-6">
        <div class="flex gap-2 overflow-x-auto px-4 pb-2 scrollbar-hide">
          <button 
            *ngFor="let cat of categories"
            (click)="goToExplore(cat.id)"
            class="px-3 py-1.5 rounded-full border text-sm whitespace-nowrap flex items-center gap-1.5"
            [class]="selectedCategory === cat.id ? 'bg-black text-white border-transparent' : 'bg-white text-gray-600 border-gray-200'"
          >
            <span>{{ cat.icon }}</span>
            <span>{{ cat.label }}</span>
          </button>
        </div>
      </div>

      <!-- ── Món ngon Đà Lạt ── -->
      <div class="mb-5">
        <div class="flex items-center justify-between px-4 mb-3">
          <div class="flex items-center gap-2">
            <span class="text-lg">🍽️</span>
            <h3 class="text-sm font-medium text-gray-700">Món ngon Đà Lạt</h3>
          </div>
          <button (click)="goToExplore('food')" class="text-sm text-gray-500 flex items-center gap-1">
            Xem tất cả
            <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5l7 7-7 7" />
            </svg>
          </button>
        </div>

        <!-- Horizontal scroll -->
        <div class="flex gap-3 overflow-x-auto px-4 pb-2 scrollbar-hide">
          <div *ngFor="let food of dalatFoods" class="flex-shrink-0 w-36 bg-white border border-gray-100 rounded-2xl overflow-hidden shadow-sm hover:shadow-md hover:border-gray-200 transition-all">
            <!-- Ảnh + tag overlay -->
            <div class="relative h-24 overflow-hidden">
              <img [src]="food.image" [alt]="food.name" class="w-full h-full object-cover" />
              <div class="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent"></div>
              <span class="absolute bottom-1.5 left-2 text-[10px] text-white/90 font-medium">{{ food.tag }}</span>
            </div>
            <!-- Thông tin -->
            <div class="p-2.5">
              <p class="text-xs font-semibold text-gray-900 truncate leading-tight mb-0.5">{{ food.name }}</p>
              <p class="text-[10px] text-gray-400 truncate mb-1.5">{{ food.desc }}</p>
              <div class="flex items-center justify-between">
                <span class="text-[10px] font-medium text-gray-700">{{ food.price }}</span>
                <div class="flex items-center gap-0.5">
                  <svg class="w-2.5 h-2.5 fill-amber-400 text-amber-400" viewBox="0 0 20 20">
                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"/>
                  </svg>
                  <span class="text-[10px] text-gray-500">{{ food.rating }}</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <!-- Featured Places -->
      <div class="px-4 mb-6">
        <h2 class="text-lg font-semibold text-gray-900 mb-4">Địa điểm nổi bật</h2>
        <div class="space-y-4">
          <app-place-card 
            *ngFor="let place of featuredPlaces"
            [place]="place"
          ></app-place-card>
        </div>
      </div>

      <!-- Rental Section -->
      <div class="px-4 mb-6">
        <h2 class="text-lg font-semibold text-gray-900 mb-4">🛵 Thuê xe máy</h2>
        
        <!-- Tip Banner -->
        <div class="bg-amber-50 border border-amber-100 rounded-xl p-3 mb-4">
          <p class="text-sm text-amber-800">💡 Đà Lạt có nhiều dốc cao — nên chọn xe côn hoặc tay ga mạnh</p>
        </div>

        <div class="grid grid-cols-2 gap-3">
          <app-rental-card 
            *ngFor="let place of rentalPlaces"
            [place]="place"
          ></app-rental-card>
        </div>
      </div>
    </div>
  `,
  styles: [`
    .scrollbar-hide {
      -ms-overflow-style: none;
      scrollbar-width: none;
    }
    .scrollbar-hide::-webkit-scrollbar {
      display: none;
    }
  `]
})
export class HomePage implements OnInit {
  quickPrompts: string[] = [];
  categories: Category[] = [];
  featuredPlaces: Place[] = [];
  rentalPlaces: Place[] = [];
  upcomingTrip: Trip | null = null;
  unreadCount = 0;
  selectedCategory = '';
  isLoading = true;

  dalatFoods = [
    { id: 'f1', name: 'Bánh mì xíu mại', desc: 'Đặc sản buổi sáng', price: '15.000đ', rating: 4.8, tag: '🥖 Bánh mì', image: 'https://images.unsplash.com/photo-1763703686238-bb654515259c?w=400&q=80' },
    { id: 'f2', name: 'Lẩu thả Đà Lạt', desc: 'Ấm lòng mùa lạnh', price: '89.000đ', rating: 4.9, tag: '🍲 Lẩu', image: 'https://images.unsplash.com/photo-1710702418104-6bf5419ab03d?w=400&q=80' },
    { id: 'f3', name: 'Bún bò Huế', desc: 'Cay nồng đậm vị', price: '45.000đ', rating: 4.7, tag: '🍜 Bún', image: 'https://images.unsplash.com/photo-1648003497161-d8317d2b7163?w=400&q=80' },
    { id: 'f4', name: 'Bắp nướng bơ', desc: 'Vỉa hè thơm lừng', price: '20.000đ', rating: 4.6, tag: '🌽 Vặt', image: 'https://images.unsplash.com/photo-1675876027916-c15f004a019d?w=400&q=80' },
    { id: 'f5', name: 'Dâu tây tươi', desc: 'Trái cây đặc sản', price: '35.000đ/hộp', rating: 4.9, tag: '🍓 Tráng miệng', image: 'https://images.unsplash.com/photo-1698929901707-ce2b943713f1?w=400&q=80' },
    { id: 'f6', name: 'Sinh tố bơ Đà Lạt', desc: 'Béo ngậy, mát lạnh', price: '30.000đ', rating: 4.8, tag: '🥤 Đồ uống', image: 'https://images.unsplash.com/photo-1583835746194-0208e3d6282d?w=400&q=80' },
  ];

  constructor(
    private router: Router,
    private apiService: ApiService
  ) {}

  ngOnInit() {
    this.loadData();
  }

  loadData() {
    // Load personalized data from API
    this.apiService.getPersonalizedData().subscribe({
      next: (data) => {
        this.quickPrompts = data.quickPrompts;
        this.categories = data.categories;
        this.featuredPlaces = data.places.filter((p) => p.featured);
        this.rentalPlaces = data.places.filter((p) => p.category === 'rental');
        this.isLoading = false;
      },
      error: () => {
        // Fallback to mock data if API fails
        this.loadFallbackData();
      }
    });

    // Load trips from API
    this.apiService.getTrips().subscribe({
      next: (trips) => {
        this.upcomingTrip = trips.find((t) => t.status === 'upcoming') || null;
      },
      error: () => {
        // Fallback to mock data
        this.upcomingTrip = MOCK_TRIPS.find((t) => t.status === 'upcoming') || null;
      }
    });

    // Load notifications from API
    this.apiService.getNotifications().subscribe({
      next: (notifications) => {
        this.unreadCount = notifications.filter((n) => !n.isRead).length;
      },
      error: () => {
        // Fallback to mock data
        this.unreadCount = MOCK_NOTIFICATIONS.filter(n => !n.isRead).length;
      }
    });
  }

  loadFallbackData() {
    // Fallback to mock data if API fails
    import('../../data/mock-places').then(module => {
      this.quickPrompts = module.QUICK_PROMPTS;
      this.categories = module.CATEGORIES;
      this.featuredPlaces = module.MOCK_PLACES.filter((p) => p.featured);
      this.rentalPlaces = module.MOCK_PLACES.filter((p) => p.category === 'rental');
    });
    this.upcomingTrip = MOCK_TRIPS.find((t) => t.status === 'upcoming') || null;
    this.unreadCount = MOCK_NOTIFICATIONS.filter(n => !n.isRead).length;
    this.isLoading = false;
  }

  goToNotifications() {
    this.router.navigate(['/home/notifications']);
  }

  goToProfile() {
    this.router.navigate(['/home/profile']);
  }

  goToChat(prompt: string) {
    this.router.navigate(['/home/chat'], { state: { prompt } });
  }

  goToExplore(categoryId: string) {
    this.router.navigate(['/home/explore'], { queryParams: { category: categoryId } });
  }

  goToTrip(tripId: string) {
    this.router.navigate(['/home/trips', tripId]);
  }
}
