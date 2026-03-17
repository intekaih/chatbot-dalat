import { Component, OnInit } from "@angular/core";
import { CommonModule } from "@angular/common";
import { Router, RouterModule } from "@angular/router";
import { SearchBarComponent } from "../../components/ui/search-bar/search-bar.component";
import { PlaceCardComponent } from "../../components/place/place-card/place-card.component";
import { RentalCardComponent } from "../../components/place/rental-card/rental-card.component";
import { WeatherWidgetComponent } from "../../components/weather/weather-widget/weather-widget.component";
import { ApiService, Trip, Place, Category } from "../../services/api.service";

interface FoodItem {
  id: string;
  name: string;
  desc: string;
  price: string;
  rating: number;
  tag: string;
  image: string;
}

@Component({
  selector: "app-home",
  standalone: true,
  imports: [
    CommonModule,
    RouterModule,
    SearchBarComponent,
    PlaceCardComponent,
    RentalCardComponent,
    WeatherWidgetComponent,
  ],
  template: `
    <div class="bg-white">
      <!-- Header -->
      <div class="px-4 pt-12 pb-4 flex items-center justify-between">
        <div>
          <p class="text-gray-500 text-sm">Xin chào! 👋</p>
          <h1 class="text-xl font-semibold text-gray-900">
            {{
              userName ? "Chào " + userName + "!" : "Hôm nay bạn muốn đi đâu?"
            }}
          </h1>
        </div>
        <div class="flex items-center gap-3">
          <button
            (click)="goToNotifications()"
            class="relative w-10 h-10 rounded-full bg-gray-50 flex items-center justify-center"
          >
            <svg
              class="w-5 h-5 text-gray-600"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="M15 17h5l-1.405-1.405A2.032 2.032 0 0118 14.158V11a6.002 6.002 0 00-4-5.659V5a2 2 0 10-4 0v.341C7.67 6.165 6 8.388 6 11v3.159c0 .538-.214 1.055-.595 1.436L4 17h5m6 0v1a3 3 0 11-6 0v-1m6 0H9"
              />
            </svg>
            <span
              *ngIf="unreadCount > 0"
              class="absolute top-1 right-1 w-2.5 h-2.5 bg-red-500 rounded-full"
            ></span>
          </button>
          <button
            (click)="goToProfile()"
            class="w-10 h-10 rounded-full bg-gray-100 flex items-center justify-center text-xl"
          >
            {{ userAvatar || "👤" }}
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
          <img
            [src]="upcomingTrip.coverImage"
            class="w-full h-32 object-cover"
          />
          <div
            class="absolute inset-0 bg-black/55 flex flex-col justify-between p-4"
          >
            <div class="flex items-center gap-2">
              <svg
                class="w-4 h-4 text-white"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"
                />
              </svg>
              <span class="text-white text-sm">{{ upcomingTrip.title }}</span>
            </div>
            <div>
              <p class="text-white/80 text-xs">
                {{ upcomingTrip.startDate }} - {{ upcomingTrip.endDate }}
              </p>
              <span
                class="inline-block mt-1 px-2 py-0.5 bg-white/20 rounded-full text-xs text-white"
                >Sắp tới</span
              >
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
            <div
              class="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center"
            >
              <svg
                class="w-5 h-5 text-white"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="M5 3v4M3 5h4M6 17v4m-2-2h4m5-16l2.286 6.857L21 12l-5.714 2.143L13 21l-2.286-6.857L5 12l5.714-2.143L13 3z"
                />
              </svg>
            </div>
            <div>
              <h3 class="text-white font-medium">AI Trợ lý du lịch</h3>
              <p class="text-white/60 text-sm">Luôn sẵn sàng giúp bạn</p>
            </div>
          </div>
          <p class="text-white/80 text-sm">
            Chat với AI để lên lịch trình, gợi ý địa điểm và nhiều hơn nữa
          </p>
        </div>
      </div>

      <!-- Quick Prompts -->
      <div *ngIf="quickPrompts.length > 0" class="mb-6">
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
      <div *ngIf="categories.length > 0" class="mb-6">
        <div class="flex gap-2 overflow-x-auto px-4 pb-2 scrollbar-hide">
          <button
            *ngFor="let cat of categories"
            (click)="goToExplore(cat.id)"
            class="px-3 py-1.5 rounded-full border text-sm whitespace-nowrap flex items-center gap-1.5"
            [class]="
              selectedCategory === cat.id
                ? 'bg-black text-white border-transparent'
                : 'bg-white text-gray-600 border-gray-200'
            "
          >
            <span>{{ cat.icon }}</span>
            <span>{{ cat.label }}</span>
          </button>
        </div>
      </div>

      <!-- Món ngon Đà Lạt (từ BE API) -->
      <div *ngIf="dalatFoods.length > 0" class="mb-5">
        <div class="flex items-center justify-between px-4 mb-3">
          <div class="flex items-center gap-2">
            <span class="text-lg">🍽️</span>
            <h3 class="text-sm font-medium text-gray-700">Món ngon Đà Lạt</h3>
          </div>
          <button
            (click)="goToExplore('restaurant')"
            class="text-sm text-gray-500 flex items-center gap-1"
          >
            Xem tất cả
            <svg
              class="w-4 h-4"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="M9 5l7 7-7 7"
              />
            </svg>
          </button>
        </div>

        <!-- Horizontal scroll -->
        <div class="flex gap-3 overflow-x-auto px-4 pb-2 scrollbar-hide">
          <div
            *ngFor="let food of dalatFoods"
            class="flex-shrink-0 w-36 bg-white border border-gray-100 rounded-2xl overflow-hidden shadow-sm hover:shadow-md hover:border-gray-200 transition-all cursor-pointer"
            (click)="goToChat('Giới thiệu về ' + food.name + ' ở Đà Lạt')"
          >
            <!-- Ảnh + tag overlay -->
            <div class="relative h-24 overflow-hidden">
              <img
                [src]="food.image"
                [alt]="food.name"
                class="w-full h-full object-cover"
                (error)="onFoodImgError($event)"
              />
              <div
                class="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent"
              ></div>
              <span
                class="absolute bottom-1.5 left-2 text-[10px] text-white/90 font-medium"
                >{{ food.tag }}</span
              >
            </div>
            <!-- Thông tin -->
            <div class="p-2.5">
              <p
                class="text-xs font-semibold text-gray-900 truncate leading-tight mb-0.5"
              >
                {{ food.name }}
              </p>
              <p class="text-[10px] text-gray-400 truncate mb-1.5">
                {{ food.desc }}
              </p>
              <div class="flex items-center justify-between">
                <span class="text-[10px] font-medium text-gray-700">{{
                  food.price
                }}</span>
                <div class="flex items-center gap-0.5">
                  <svg
                    class="w-2.5 h-2.5 fill-amber-400 text-amber-400"
                    viewBox="0 0 20 20"
                  >
                    <path
                      d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"
                    />
                  </svg>
                  <span class="text-[10px] text-gray-500">{{
                    food.rating
                  }}</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <!-- Featured Places -->
      <div *ngIf="featuredPlaces.length > 0" class="px-4 mb-6">
        <h2 class="text-lg font-semibold text-gray-900 mb-4">
          Địa điểm nổi bật
        </h2>
        <div class="space-y-4">
          <app-place-card
            *ngFor="let place of featuredPlaces"
            [place]="place"
          ></app-place-card>
        </div>
      </div>

      <!-- Rental Section -->
      <div *ngIf="rentalPlaces.length > 0" class="px-4 mb-6">
        <h2 class="text-lg font-semibold text-gray-900 mb-4">🛵 Thuê xe máy</h2>

        <!-- Tip Banner -->
        <div class="bg-amber-50 border border-amber-100 rounded-xl p-3 mb-4">
          <p class="text-sm text-amber-800">
            💡 Đà Lạt có nhiều dốc cao — nên chọn xe côn hoặc tay ga mạnh
          </p>
        </div>

        <div class="grid grid-cols-2 gap-3">
          <app-rental-card
            *ngFor="let place of rentalPlaces"
            [place]="place"
          ></app-rental-card>
        </div>
      </div>

      <!-- Loading skeleton -->
      <div *ngIf="isLoading" class="px-4 space-y-4 pb-6">
        <div class="h-8 bg-gray-100 rounded-xl animate-pulse w-2/3"></div>
        <div class="h-32 bg-gray-100 rounded-2xl animate-pulse"></div>
        <div class="h-32 bg-gray-100 rounded-2xl animate-pulse"></div>
      </div>
    </div>
  `,
  styles: [
    `
      .scrollbar-hide {
        -ms-overflow-style: none;
        scrollbar-width: none;
      }
      .scrollbar-hide::-webkit-scrollbar {
        display: none;
      }
    `,
  ],
})
export class HomePage implements OnInit {
  quickPrompts: string[] = [];
  categories: Category[] = [];
  featuredPlaces: Place[] = [];
  rentalPlaces: Place[] = [];
  dalatFoods: FoodItem[] = [];
  upcomingTrip: Trip | null = null;
  unreadCount = 0;
  selectedCategory = "";
  isLoading = true;
  userName = "";
  userAvatar = "";

  constructor(
    private router: Router,
    private apiService: ApiService,
  ) {}

  ngOnInit() {
    this.loadData();
  }

  loadData() {
    // Load user info for personalized greeting
    this.apiService.getUser().subscribe({
      next: (user) => {
        if (user.name && user.name !== "Khách") {
          this.userName = user.name;
          this.userAvatar = user.avatar || "🧑‍💻";
        }
      },
    });

    // Load AI-personalized data from BE
    this.apiService.getPersonalizedData().subscribe({
      next: (data) => {
        this.quickPrompts = data.quickPrompts;
        this.categories = data.categories;
        this.featuredPlaces = data.places.filter((p) => p.featured);
        this.rentalPlaces = data.places.filter((p) => p.category === "rental");
        this.isLoading = false;
      },
      error: () => {
        // Fallback: gọi riêng từng endpoint nếu personalized thất bại
        this.apiService
          .getCategories()
          .subscribe((cats) => (this.categories = cats));
        this.apiService.getPlaces(undefined, true).subscribe((places) => {
          this.featuredPlaces = places;
        });
        this.apiService.getPlaces("rental").subscribe((places) => {
          this.rentalPlaces = places;
        });
        this.isLoading = false;
      },
    });

    // Load restaurant places từ BE, map sang food card format
    this.apiService.getPlaces("restaurant").subscribe({
      next: (places) => {
        this.dalatFoods = places.slice(0, 6).map((p) => ({
          id: p.id,
          name: p.name,
          desc: p.shortDescription || "",
          price: p.priceRange || "Liên hệ",
          rating: p.rating || 4.5,
          tag: p.tags?.[0] || "🍜 Ẩm thực",
          image: p.imageUrl,
        }));
      },
    });

    // Load trips từ BE
    this.apiService.getTrips().subscribe({
      next: (trips) => {
        this.upcomingTrip = trips.find((t) => t.status === "upcoming") || null;
      },
    });

    // Load notifications count từ BE
    this.apiService.getNotifications().subscribe({
      next: (notifications) => {
        this.unreadCount = notifications.filter((n) => !n.isRead).length;
      },
    });
  }

  onFoodImgError(event: Event) {
    const img = event.target as HTMLImageElement;
    img.src =
      "https://images.unsplash.com/photo-1555126634-323283e090fa?w=400&q=80";
  }

  goToNotifications() {
    this.router.navigate(["/home/notifications"]);
  }

  goToProfile() {
    this.router.navigate(["/home/profile"]);
  }

  goToChat(prompt: string) {
    this.router.navigate(["/home/chat"], { state: { prompt } });
  }

  goToExplore(categoryId: string) {
    this.router.navigate(["/home/explore"], {
      queryParams: { category: categoryId },
    });
  }

  goToTrip(tripId: string) {
    this.router.navigate(["/home/trips", tripId]);
  }
}
