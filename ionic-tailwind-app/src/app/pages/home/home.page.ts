import { Component, OnInit, inject } from "@angular/core";
import { CommonModule } from "@angular/common";
import { Router, RouterLink } from "@angular/router";
import { SearchBarComponent } from "../../components/ui/search-bar/search-bar.component";
import { WeatherWidgetComponent } from "../../components/weather/weather-widget/weather-widget.component";
import { FirestoreTripsService } from "../../services/firestore-trips.service";
import { FirestorePlacesService } from "../../services/firestore-places.service";
import { ApiService, Trip, Place, Category } from "../../services/api.service";

interface FoodItem {
  id: string;
  name: string;
  desc: string;
  price: string;
  rating: number;
  tag: string;
  image: string;
  slug?: string;
}

@Component({
  selector: "app-home",
  standalone: true,
  imports: [
    CommonModule,
    RouterLink,
    SearchBarComponent,
    WeatherWidgetComponent,
  ],
  template: `
    <div class="bg-white min-h-screen" style="padding-bottom: calc(4rem + env(safe-area-inset-bottom))">
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
              class="absolute -top-1 -right-1 min-w-[18px] h-[18px] bg-red-500 rounded-full text-white text-[10px] font-bold flex items-center justify-center px-1"
            >{{ unreadCount }}</span>
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
        <button
          type="button"
          class="relative w-full rounded-2xl overflow-hidden"
          [attr.aria-label]="'Xem chuyến đi: ' + upcomingTrip.title"
          (click)="goToTrip(upcomingTrip.id)"
        >
          <img loading="lazy"
            [src]="upcomingTrip.coverImage"
            [alt]="upcomingTrip.title"
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
        </button>
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
        <div class="flex gap-2 overflow-x-auto mx-4 pb-2 scrollbar-hide">
          <button
            *ngFor="let prompt of quickPrompts"
            (click)="goToChat(prompt)"
            class="px-4 py-2 bg-gray-50 border border-gray-200 rounded-full text-sm whitespace-nowrap"
          >
            {{ prompt }}
          </button>
        </div>
      </div>



      <!-- Địa điểm Signature -->
      <div *ngIf="signaturePlaces.length > 0" class="mb-6 relative">
        <div class="flex items-center justify-between px-4 mb-3">
          <div class="flex items-center gap-2">
            <span class="text-lg">⭐</span>
            <h3 class="text-sm font-semibold bg-clip-text text-transparent bg-gradient-to-r from-amber-500 to-orange-600">Nhất định phải đến</h3>
          </div>
          <button (click)="goToExplore('signature')" class="text-sm text-amber-600 flex items-center gap-1 font-medium">
            Xem tất cả
            <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5l7 7-7 7"/></svg>
          </button>
        </div>
        <div class="flex gap-3 overflow-x-auto mx-4 pb-2 scrollbar-hide">
          <a *ngFor="let place of signaturePlaces" [routerLink]="['/home/place', place.slug]" class="flex-shrink-0 w-44 bg-white border border-amber-100 rounded-2xl overflow-hidden shadow-sm hover:shadow-md hover:border-amber-200 transition-all active:scale-95">
            <div class="relative h-32 bg-gray-100">
              <img loading="lazy" [src]="place.imageUrl" [alt]="place.name" class="w-full h-full object-cover" (error)="onPlaceImgError($event)" />
              <div class="absolute inset-0 bg-gradient-to-t from-black/50 via-black/10 to-transparent"></div>
              <div class="absolute top-2 left-2 bg-gradient-to-r from-amber-400 to-orange-500 text-white text-[10px] font-bold px-2 py-0.5 rounded-full shadow-lg border border-white/20">MUST VISIT</div>
              <div class="absolute bottom-1 right-1 bg-black/60 text-white text-[10px] px-1.5 py-0.5 rounded-full">⭐ {{ place.rating || 4.8 }}</div>
            </div>
            <div class="p-2.5">
              <p class="text-xs font-bold text-gray-900 truncate">{{ place.name }}</p>
              <p class="text-[10px] text-gray-500 mt-0.5 truncate">{{ place.shortDescription }}</p>
            </div>
          </a>
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
            (click)="goToExplore('food')"
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
        <div class="flex gap-3 overflow-x-auto mx-4 pb-2 scrollbar-hide">
          <a
            *ngFor="let food of dalatFoods"
            [routerLink]="['/home/place', food.slug]"
            class="flex-shrink-0 w-36 bg-white border border-gray-100 rounded-2xl overflow-hidden shadow-sm hover:shadow-md hover:border-gray-200 transition-all cursor-pointer block"
          >
            <!-- Ảnh + tag overlay -->
            <div class="relative h-24 overflow-hidden">
              <img loading="lazy"
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
          </a>
        </div>
      </div>

      <!-- Cafe Đà Lạt (từ BE API) -->
      <div *ngIf="cafePlaces.length > 0" class="mb-5">
        <div class="flex items-center justify-between px-4 mb-3">
          <div class="flex items-center gap-2">
            <span class="text-lg">☕</span>
            <h3 class="text-sm font-medium text-gray-700">Cafe view đẹp</h3>
          </div>
          <button
            type="button"
            (click)="goToExplore('cafe')"
            class="text-sm text-gray-500 flex items-center gap-1"
          >
            Xem tất cả
            <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5l7 7-7 7" />
            </svg>
          </button>
        </div>
        <div class="flex gap-3 overflow-x-auto mx-4 pb-2 scrollbar-hide">
          <a
            *ngFor="let place of cafePlaces"
            [routerLink]="['/home/place', place.slug]"
            class="flex-shrink-0 w-36 bg-white border border-gray-100 rounded-2xl overflow-hidden shadow-sm hover:shadow-md hover:border-gray-200 transition-all active:scale-95"
          >
            <div class="relative h-28 bg-gray-100">
              <img loading="lazy"
                [src]="place.imageUrl"
                [alt]="place.name"
                class="w-full h-full object-cover"
                (error)="onImageError($event, place.name)"
              />
              <div class="absolute bottom-1 right-1 bg-black/60 text-white text-[10px] px-1.5 py-0.5 rounded-full">
                ⭐ {{ place.rating || 4.5 }}
              </div>
            </div>
            <div class="p-2.5">
              <p class="text-xs font-medium text-gray-800 truncate">{{ place.name }}</p>
              <p class="text-[10px] text-gray-500 mt-0.5 truncate">{{ place.shortDescription }}</p>
              <p class="text-[10px] font-medium text-pink-500 mt-1">{{ place.priceRange || '' }}</p>
            </div>
          </a>
        </div>
      </div>

      <!-- Điểm check-in — cuộn ngang -->
      <div *ngIf="checkinPlaces.length > 0" class="mb-5">
        <div class="flex items-center justify-between px-4 mb-3">
          <div class="flex items-center gap-2">
            <span class="text-lg">📸</span>
            <h3 class="text-sm font-medium text-gray-700">Điểm check-in</h3>
          </div>
          <button
            type="button"
            (click)="goToExplore('checkin')"
            class="text-sm text-gray-500 flex items-center gap-1"
          >
            Xem tất cả
            <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5l7 7-7 7" />
            </svg>
          </button>
        </div>
        <div class="flex gap-3 overflow-x-auto mx-4 pb-2 scrollbar-hide">
          <a
            *ngFor="let place of checkinPlaces"
            [routerLink]="['/home/place', place.slug]"
            class="flex-shrink-0 w-36 bg-white border border-gray-100 rounded-2xl overflow-hidden shadow-sm hover:shadow-md hover:border-gray-200 transition-all active:scale-95"
          >
            <div class="relative h-24 overflow-hidden">
              <img loading="lazy" [src]="place.imageUrl" [alt]="place.name" class="w-full h-full object-cover" (error)="onPlaceImgError($event)" />
              <div class="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent"></div>
              <span class="absolute bottom-1.5 left-2 text-[10px] text-white/90 font-medium">📸 Check-in</span>
            </div>
            <div class="p-2.5">
              <p class="text-xs font-semibold text-gray-900 truncate leading-tight mb-0.5">{{ place.name }}</p>
              <p class="text-[10px] text-gray-400 truncate mb-1.5">{{ place.shortDescription }}</p>
              <div class="flex items-center justify-between">
                <span class="text-[10px] font-medium text-gray-700">{{ place.priceRange || 'Miễn phí' }}</span>
                <div class="flex items-center gap-0.5">
                  <svg class="w-2.5 h-2.5 fill-amber-400 text-amber-400" viewBox="0 0 20 20">
                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                  </svg>
                  <span class="text-[10px] text-gray-500">{{ place.rating ?? 4.5 }}</span>
                </div>
              </div>
            </div>
          </a>
        </div>
      </div>

      <!-- Thiên nhiên Đà Lạt — cuộn ngang -->
      <div *ngIf="naturePlaces.length > 0" class="mb-5">
        <div class="flex items-center justify-between px-4 mb-3">
          <div class="flex items-center gap-2">
            <span class="text-lg">🌲</span>
            <h3 class="text-sm font-medium text-gray-700">Thiên nhiên Đà Lạt</h3>
          </div>
          <button
            type="button"
            (click)="goToExplore('nature')"
            class="text-sm text-gray-500 flex items-center gap-1"
          >
            Xem tất cả
            <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5l7 7-7 7" />
            </svg>
          </button>
        </div>
        <div class="flex gap-3 overflow-x-auto mx-4 pb-2 scrollbar-hide">
          <a
            *ngFor="let place of naturePlaces"
            [routerLink]="['/home/place', place.slug]"
            class="flex-shrink-0 w-36 bg-white border border-gray-100 rounded-2xl overflow-hidden shadow-sm hover:shadow-md hover:border-gray-200 transition-all active:scale-95"
          >
            <div class="relative h-24 overflow-hidden">
              <img loading="lazy" [src]="place.imageUrl" [alt]="place.name" class="w-full h-full object-cover" (error)="onPlaceImgError($event)" />
              <div class="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent"></div>
              <span class="absolute bottom-1.5 left-2 text-[10px] text-white/90 font-medium">🌲 Thiên nhiên</span>
            </div>
            <div class="p-2.5">
              <p class="text-xs font-semibold text-gray-900 truncate leading-tight mb-0.5">{{ place.name }}</p>
              <p class="text-[10px] text-gray-400 truncate mb-1.5">{{ place.shortDescription }}</p>
              <div class="flex items-center justify-between">
                <span class="text-[10px] font-medium text-gray-700">{{ place.priceRange || 'Miễn phí' }}</span>
                <div class="flex items-center gap-0.5">
                  <svg class="w-2.5 h-2.5 fill-amber-400 text-amber-400" viewBox="0 0 20 20">
                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                  </svg>
                  <span class="text-[10px] text-gray-500">{{ place.rating ?? 4.5 }}</span>
                </div>
              </div>
            </div>
          </a>
        </div>
      </div>

      <!-- Homestay — cuộn ngang -->
      <div *ngIf="displayHomestays.length > 0" class="mb-5">
        <div class="flex items-center justify-between px-4 mb-3">
          <div class="flex items-center gap-2">
            <span class="text-lg">🏡</span>
            <h3 class="text-sm font-medium text-gray-700">Homestay & Nghỉ dưỡng</h3>
          </div>
          <button
            type="button"
            (click)="goToExplore('homestay')"
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
        <div class="flex gap-3 overflow-x-auto mx-4 pb-2 scrollbar-hide">
          <a
            *ngFor="let place of displayHomestays"
            [routerLink]="['/home/place', place.slug]"
            class="flex-shrink-0 w-36 bg-white border border-gray-100 rounded-2xl overflow-hidden shadow-sm hover:shadow-md hover:border-gray-200 transition-all active:scale-95"
          >
            <div class="relative h-24 overflow-hidden">
              <img loading="lazy"
                [src]="place.imageUrl"
                [alt]="place.name"
                class="w-full h-full object-cover"
                (error)="onPlaceImgError($event)"
              />
              <div
                class="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent"
              ></div>
              <span
                class="absolute bottom-1.5 left-2 text-[10px] text-white/90 font-medium"
              >
                🏡 Homestay
              </span>
            </div>
            <div class="p-2.5">
              <p
                class="text-xs font-semibold text-gray-900 truncate leading-tight mb-0.5"
              >
                {{ place.name }}
              </p>
              <p class="text-[10px] text-gray-400 truncate mb-1.5">
                {{ place.shortDescription }}
              </p>
              <div class="flex items-center justify-between">
                <span class="text-[10px] font-medium text-gray-700">{{
                  place.priceRange || ""
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
                    place.rating ?? 4.5
                  }}</span>
                </div>
              </div>
            </div>
          </a>
        </div>
      </div>

      <!-- Thuê xe — cuộn ngang -->
      <div *ngIf="rentalPlaces.length > 0" class="mb-5">
        <div class="flex items-center justify-between px-4 mb-3">
          <div class="flex items-center gap-2">
            <span class="text-lg">🛵</span>
            <h3 class="text-sm font-medium text-gray-700">Thuê xe máy</h3>
          </div>
          <button
            type="button"
            (click)="goToExplore('rental')"
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
        <div class="mb-3 mx-4 px-3 py-2.5 bg-amber-50 border border-amber-100 rounded-xl flex items-start gap-2">
          <span class="text-sm flex-shrink-0 mt-0.5">💡</span>
          <p class="text-xs text-amber-800 leading-relaxed">
            Đà Lạt có nhiều dốc cao — nên chọn xe côn hoặc tay ga mạnh để di chuyển thoải mái hơn.
          </p>
        </div>
        <div class="flex gap-3 overflow-x-auto mx-4 pb-2 scrollbar-hide">
          <a
            *ngFor="let place of rentalPlaces"
            [routerLink]="['/home/place', place.slug]"
            class="flex-shrink-0 w-36 bg-white border border-gray-100 rounded-2xl overflow-hidden shadow-sm hover:shadow-md hover:border-gray-200 transition-all active:scale-95"
          >
            <div class="relative h-24 overflow-hidden">
              <img loading="lazy"
                [src]="place.imageUrl"
                [alt]="place.name"
                class="w-full h-full object-cover"
                (error)="onPlaceImgError($event)"
              />
              <div
                class="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent"
              ></div>
              <span
                class="absolute bottom-1.5 left-2 text-[10px] text-white/90 font-medium"
              >
                🛵 Thuê xe
              </span>
            </div>
            <div class="p-2.5">
              <p
                class="text-xs font-semibold text-gray-900 truncate leading-tight mb-0.5"
              >
                {{ place.name }}
              </p>
              <p class="text-[10px] text-gray-400 truncate mb-1.5">
                {{ place.shortDescription }}
              </p>
              <div class="flex items-center justify-between">
                <span class="text-[10px] font-medium text-gray-700">{{
                  place.pricePerDay || place.priceRange || ""
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
                    place.rating ?? 4.5
                  }}</span>
                </div>
              </div>
            </div>
          </a>
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
  private router = inject(Router);
  private apiService = inject(ApiService);

  quickPrompts: string[] = [];
  categories: Category[] = [];
  checkinPlaces: Place[] = [];
  naturePlaces: Place[] = [];
  homestayPlaces: Place[] = [];
  rentalPlaces: Place[] = [];
  dalatFoods: FoodItem[] = [];
  cafePlaces: Place[] = [];
  signaturePlaces: Place[] = [];

  get displayHomestays(): Place[] {
    return this.homestayPlaces;
  }
  upcomingTrip: Trip | null = null;
  unreadCount = 0;
  selectedCategory = "";
  isLoading = true;
  userName = "";
  userAvatar = "";

  private tripsService = inject(FirestoreTripsService);
  private firestorePlaces = inject(FirestorePlacesService);

  ngOnInit() {
    this.loadData();
  }

  ionViewWillEnter() {
    // Refresh notification count every time user returns to Home
    this.apiService.getNotifications().subscribe({
      next: (notifications) => {
        this.unreadCount = notifications.filter((n) => !n.isRead).length;
      },
    });
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

    // Load AI-personalized data from BE - không chờ geolocation (tránh skeleton treo)
    const applyPersonalizedData = (data: {
      quickPrompts: string[];
      categories: Category[];
      places: Place[];
    }) => {
      this.quickPrompts = data.quickPrompts;
      this.categories = data.categories.filter((c: any) => c.id !== "signature");
      this.checkinPlaces = data.places.filter((p) => p.category === "checkin");
      this.naturePlaces = data.places.filter((p) => p.category === "nature");
      this.homestayPlaces = data.places.filter((p) => p.category === "homestay");
      this.rentalPlaces = data.places.filter((p) => p.category === "rental");
      this.cafePlaces = data.places.filter((p) => p.category === "cafe");

      // Signature: ưu tiên personalized, fallback lấy từ DB
      const rawSignature = data.places.filter((p) => p.category === "signature");
      if (rawSignature.length > 0) {
        this.signaturePlaces = rawSignature;
      } else {
        this.apiService.getPlaces("signature").subscribe((places) => {
          this.signaturePlaces = places.slice(0, 10);
          this.apiService.refreshPlaceImages(this.signaturePlaces).subscribe();
        });
      }

      // Refresh ảnh: DB chỉ có Pexels → thay bằng Gemini URL (load được ở browser)
      this.apiService.refreshPlaceImages(this.checkinPlaces).subscribe();
      this.apiService.refreshPlaceImages(this.naturePlaces).subscribe();
      this.apiService.refreshPlaceImages(this.homestayPlaces).subscribe();
      this.apiService.refreshPlaceImages(this.rentalPlaces).subscribe();
      this.apiService.refreshPlaceImages(this.cafePlaces).subscribe();
      if (rawSignature.length > 0) {
        this.apiService.refreshPlaceImages(this.signaturePlaces).subscribe();
      }

      this.dalatFoods = data.places
        .filter((p) => p.category === "food")
        .slice(0, 20)
        .map((p) => ({
          id: p.id,
          name: p.name,
          desc: p.shortDescription || "",
          price: p.priceRange || "Liên hệ",
          rating: p.rating || 4.5,
          tag: p.tags?.[0] || "🍜 Ẩm thực",
          image: p.imageUrl,
          slug: p.slug,
        }));
      this.isLoading = false;

      // Nếu không có places (API lỗi/timeout/empty), load từ Firestore
      if (data.places.length === 0) {
        this.firestorePlaces.getCategories().subscribe((cats) => {
          if (this.categories.length === 0) this.categories = cats.filter((c: any) => c.id !== "signature");
        });
        this.firestorePlaces.getPlaces('signature').subscribe((places) => {
          this.signaturePlaces = places.slice(0, 10);
        });
        this.firestorePlaces.getPlaces('checkin').subscribe((places) => {
          this.checkinPlaces = places.slice(0, 20);
        });
        this.firestorePlaces.getPlaces('nature').subscribe((places) => {
          this.naturePlaces = places.slice(0, 10);
        });
        this.firestorePlaces.getPlaces('rental').subscribe((places) => {
          this.rentalPlaces = places;
        });
        this.firestorePlaces.getPlaces('homestay').subscribe((places) => {
          this.homestayPlaces = places.slice(0, 20);
        });
        this.firestorePlaces.getPlaces('food').subscribe((places) => {
          this.dalatFoods = places.slice(0, 20).map((p) => ({
            id: p.id, name: p.name,
            desc: p.shortDescription || "",
            price: p.priceRange || "Liên hệ",
            rating: p.rating || 4.5,
            tag: p.tags?.[0] || "🍜 Ẩm thỳc",
            image: p.imageUrl, slug: p.slug,
          }));
        });
        this.firestorePlaces.getPlaces('cafe').subscribe((places) => {
          this.cafePlaces = places.slice(0, 20);
        });
      }
    };

    const loadPersonalized = () => {
      this.apiService.getPersonalizedData().subscribe({
        next: (data) => applyPersonalizedData(data),
        error: () => {
          // Fallback: load từ Firestore khi getPersonalizedData fail
          this.firestorePlaces.getCategories().subscribe((cats) => {
            this.categories = cats;
          });
          this.firestorePlaces.getPlacesGrouped().subscribe((grouped) => {
            this.checkinPlaces = (grouped['checkin'] || []).slice(0, 20);
            this.naturePlaces = (grouped['nature'] || []).slice(0, 10);
            this.rentalPlaces = grouped['rental'] || [];
            this.homestayPlaces = (grouped['homestay'] || []).slice(0, 20);
            this.cafePlaces = (grouped['cafe'] || []).slice(0, 20);
            this.signaturePlaces = (grouped['signature'] || []).slice(0, 10);
            this.dalatFoods = (grouped['food'] || []).slice(0, 20).map((p) => ({
              id: p.id, name: p.name,
              desc: p.shortDescription || "",
              price: p.priceRange || "Liên hệ",
              rating: p.rating || 4.5,
              tag: p.tags?.[0] || "🍜 Ẩm thỳc",
              image: p.imageUrl, slug: p.slug,
            }));
            this.isLoading = false;
          });
        },
      });
    };

    loadPersonalized();

    // Load trips từ Firestore
    this.tripsService.getTrips().subscribe({
      next: (trips) => {
        this.upcomingTrip = trips.find((t) => t.status === 'upcoming') || null;
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
    img.src = "https://placehold.co/400x300/e2e8f0/64748b?text=Ẩm+thực";
  }

  onPlaceImgError(event: Event) {
    const img = event.target as HTMLImageElement;
    img.onerror = null; // Prevent infinite loop
    img.src = "https://placehold.co/400x300/e2e8f0/64748b?text=Đà+Lạt";
  }

  categoryLabel(place: Place): string {
    const c = this.categories.find((x) => x.id === place.category);
    return c?.label || place.category || "Địa điểm";
  }

  categoryIcon(place: Place): string {
    const c = this.categories.find((x) => x.id === place.category);
    return c?.icon || "📍";
  }

  vehicleTypesLine(place: Place): string {
    return (place.vehicleTypes ?? []).join(" · ");
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

  onImageError(event: Event, fallbackText: string) {
    const img = event.target as HTMLImageElement;
    const triedPexels = img.dataset['tried'];
    if (!triedPexels) {
      img.dataset['tried'] = 'pexels';
      img.src = `https://placehold.co/800x500/e2e8f0/64748b?text=${encodeURIComponent(fallbackText)}`;
      return;
    }
    img.onerror = null;
    img.src = `https://placehold.co/800x500/e2e8f0/64748b?text=${encodeURIComponent(fallbackText)}`;
  }

  goToTrip(tripId: string) {
    this.router.navigate(["/home/trips", tripId]);
  }
}
