import { Component, OnInit, inject } from "@angular/core";
import { CommonModule } from "@angular/common";
import { Router } from "@angular/router";
import { PlaceCardComponent } from "../../components/place/place-card/place-card.component";
import { EmptyStateComponent } from "../../components/ui/empty-state/empty-state.component";
import { ApiService, Place, Trip } from "../../services/api.service";
import { FirestoreFavoritesService } from "../../services/firestore-favorites.service";
import { FirestoreTripsService } from "../../services/firestore-trips.service";

@Component({
  selector: "app-favorites",
  standalone: true,
  imports: [CommonModule, PlaceCardComponent, EmptyStateComponent],
  template: `
    <div class="bg-white min-h-screen" style="padding-bottom: calc(4rem + env(safe-area-inset-bottom))">
      <!-- Header -->
      <div
        class="px-4 pt-12 pb-4 border-b border-gray-100 flex items-center justify-between"
      >
        <h1 class="text-2xl font-semibold text-gray-900">Đã lưu</h1>
        <button
          *ngIf="activeTab === 'trips'"
          (click)="createNewTrip($event)"
          class="px-3 py-1.5 bg-black text-white text-sm rounded-full font-medium"
        >
          Tạo mới
        </button>
      </div>

      <!-- Tabs -->
      <div class="relative border-b border-gray-100">
        <div class="flex">
          <button
            (click)="activeTab = 'places'"
            class="flex-1 py-3 text-sm font-medium text-center relative"
            [class]="activeTab === 'places' ? 'text-black' : 'text-gray-400'"
          >
            ❤️ Địa điểm ({{ favoritePlaces.length }})
          </button>
          <button
            (click)="activeTab = 'trips'"
            class="flex-1 py-3 text-sm font-medium text-center relative"
            [class]="activeTab === 'trips' ? 'text-black' : 'text-gray-400'"
          >
            🗓️ Lịch trình ({{ trips.length }})
          </button>
        </div>
        <div
          class="absolute bottom-0 h-0.5 bg-black rounded-full transition-all duration-300"
          [class]="activeTab === 'places' ? 'left-0 w-1/2' : 'left-1/2 w-1/2'"
        ></div>
      </div>

      <!-- Loading -->
      <div *ngIf="isLoading" class="p-4 space-y-4">
        <div
          *ngFor="let i of [1, 2, 3]"
          class="h-32 bg-gray-100 rounded-2xl animate-pulse"
        ></div>
      </div>

      <!-- Places Tab -->
      <div *ngIf="!isLoading && activeTab === 'places'" class="p-4">
        <div *ngIf="favoritePlaces.length > 0" class="space-y-4">
          <app-place-card
            *ngFor="let place of favoritePlaces"
            [place]="place"
          ></app-place-card>
        </div>

        <app-empty-state
          *ngIf="favoritePlaces.length === 0"
          icon="❤️"
          title="Chưa có địa điểm yêu thích"
          message="Nhấn ❤️ trên trang chi tiết địa điểm để lưu vào đây!"
        ></app-empty-state>
      </div>

      <!-- Trips Tab -->
      <div *ngIf="!isLoading && activeTab === 'trips'" class="p-4">
        <div *ngIf="trips.length > 0" class="space-y-4">
          <button
            type="button"
            *ngFor="let trip of trips"
            class="w-full flex items-center gap-4 p-3 border border-gray-100 rounded-xl hover:bg-gray-50 text-left"
            [attr.aria-label]="'Xem lịch trình: ' + trip.title"
            (click)="goToTrip(trip.id)"
          >
            <img
              [src]="trip.coverImage"
              [alt]="trip.title"
              class="w-20 h-20 rounded-lg object-cover flex-shrink-0"
              (error)="onImgError($event)"
            />
            <div class="flex-1 min-w-0">
              <h3 class="font-medium text-gray-900 mb-1 truncate">
                {{ trip.title }}
              </h3>
              <p class="text-xs text-gray-500 mb-1">
                {{ trip.startDate }} - {{ trip.endDate }}
              </p>
              <span
                class="inline-block px-2 py-0.5 rounded-full text-xs"
                [class]="
                  trip.status === 'upcoming'
                    ? 'bg-blue-100 text-blue-700'
                    : trip.status === 'completed'
                      ? 'bg-green-100 text-green-700'
                      : 'bg-amber-100 text-amber-700'
                "
              >
                {{
                  trip.status === "upcoming"
                    ? "Sắp tới"
                    : trip.status === "completed"
                      ? "Đã đi"
                      : "Đang đi"
                }}
              </span>
            </div>
            <svg
              class="w-5 h-5 text-gray-400 flex-shrink-0"
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

          <button
            (click)="goToAllTrips()"
            class="flex items-center justify-between w-full mt-2 p-4 border border-gray-100 rounded-xl hover:bg-gray-50"
          >
            <span class="text-sm text-gray-600">Xem tất cả lịch trình</span>
            <svg
              class="w-5 h-5 text-gray-400"
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

        <app-empty-state
          *ngIf="trips.length === 0"
          icon="🗓️"
          title="Chưa có lịch trình nào"
          message="Hỏi AI để tạo lịch trình phù hợp với bạn!"
        ></app-empty-state>
      </div>
    </div>
  `,
})
export class FavoritesPage implements OnInit {
  private router = inject(Router);
  private apiService = inject(ApiService);
  private favoritesService = inject(FirestoreFavoritesService);
  private tripsService = inject(FirestoreTripsService);

  activeTab: "places" | "trips" = "places";
  favoritePlaces: Place[] = [];
  trips: Trip[] = [];
  isLoading = true;

  ngOnInit() {
    // Kiểm tra navigation state để auto-select tab
    const nav = this.router.getCurrentNavigation();
    const state = nav?.extras?.state as { tab?: string } | undefined;
    if (state?.tab === 'trips') {
      this.activeTab = 'trips';
    }

    // Load favorite places từ Firestore (realtime)
    this.favoritesService.getFavoriteIds().subscribe((ids) => {
      if (ids.length === 0) {
        this.isLoading = false;
        this.favoritePlaces = [];
        return;
      }
      // Lấy thông tin địa điểm từ ApiService (places data vẫn ở backend)
      this.apiService.getPlaces().subscribe({
        next: (places) => {
          this.favoritePlaces = places.filter(p => ids.includes(p.id));
          this.isLoading = false;
        },
        error: () => { this.isLoading = false; },
      });
    });

    // Load trips từ Firestore (realtime)
    this.tripsService.getTrips().subscribe({
      next: (trips) => {
        this.trips = trips;
      },
    });
  }

  createNewTrip(event: Event) {
    event.stopPropagation();
    this.router.navigate(["/home/chat"], {
      state: { prompt: "Tạo lịch trình mới cho tôi ở Đà Lạt" },
    });
  }

  goToTrip(tripId: string) {
    this.router.navigate(["/home/trips", tripId]);
  }

  goToAllTrips() {
    this.router.navigate(["/home/trips"]);
  }

  onImgError(event: Event) {
    const img = event.target as HTMLImageElement;
    img.src =
      "https://placehold.co/400x300/e2e8f0/64748b?text=%C4%90%C3%A0+L%E1%BA%A1t";
  }
}
