import { Component, OnInit, inject } from "@angular/core";
import { CommonModule } from "@angular/common";
import { Router } from "@angular/router";
import { ApiService, Trip } from "../../services/api.service";

@Component({
  selector: "app-trips",
  standalone: true,
  imports: [CommonModule],
  template: `
    <div class="bg-white" style="padding-bottom: calc(4rem + env(safe-area-inset-bottom))">
      <!-- Header -->
      <div class="px-4 pt-4 pb-4 flex items-center justify-between">
        <div>
          <h1 class="text-2xl font-semibold text-gray-900">Lịch trình</h1>
          <p class="text-sm text-gray-500">{{ trips.length }} chuyến đi</p>
        </div>
        <button
          (click)="createNewTrip()"
          class="px-4 py-2 bg-black text-white text-sm rounded-full font-medium"
        >
          Tạo mới
        </button>
      </div>

      <!-- Upcoming Trips -->
      <div class="px-4 mb-6">
        <h2 class="text-sm font-medium text-gray-700 mb-3">
          Sắp tới & Đang đi
        </h2>
        <div class="space-y-4">
          <button
            type="button"
            *ngFor="let trip of upcomingTrips"
            [attr.aria-label]="'Xem chi tiết: ' + trip.title"
            class="relative aspect-[19/6] w-full rounded-2xl overflow-hidden"
            (click)="goToTripDetail(trip.id)"
          >
            <img
              [src]="trip.coverImage"
              [alt]="trip.title"
              class="w-full h-full object-cover"
            />
            <div
              class="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent"
            ></div>

            <!-- Content -->
            <div class="absolute inset-0 p-4 flex flex-col justify-end">
              <h3 class="text-white font-semibold text-lg mb-1">
                {{ trip.title }}
              </h3>
              <p class="text-white/80 text-sm mb-2">
                {{ trip.startDate }} - {{ trip.endDate }}
              </p>

              <div class="flex items-center justify-between">
                <span
                  class="px-2 py-0.5 rounded-full text-xs text-white"
                  [class]="
                    trip.status === 'upcoming'
                      ? 'bg-blue-500/80'
                      : 'bg-amber-500/80'
                  "
                >
                  {{ trip.status === "upcoming" ? "Sắp tới" : "Đang đi" }}
                </span>
                <span class="text-white/80 text-xs"
                  >{{ trip.days.length }} ngày</span
                >
              </div>
            </div>

            <!-- Budget Bar -->
            <div class="absolute bottom-0 left-0 right-0 h-1 bg-white/20">
              <div
                class="h-full transition-all"
                [class]="getBudgetColor(trip.spent / trip.totalBudget)"
                [style.width.%]="(trip.spent / trip.totalBudget) * 100"
              ></div>
            </div>
          </button>
        </div>
      </div>

      <!-- Completed Trips -->
      <div class="px-4 mb-6">
        <h2 class="text-sm font-medium text-gray-700 mb-3">Đã đi</h2>
        <div class="space-y-4">
          <button
            type="button"
            *ngFor="let trip of completedTrips"
            [attr.aria-label]="'Xem chi tiết: ' + trip.title"
            class="relative aspect-[19/6] w-full rounded-2xl overflow-hidden grayscale"
            (click)="goToTripDetail(trip.id)"
          >
            <img
              [src]="trip.coverImage"
              [alt]="trip.title"
              class="w-full h-full object-cover"
            />
            <div
              class="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent"
            ></div>

            <div class="absolute inset-0 p-4 flex flex-col justify-end">
              <h3 class="text-white font-semibold text-lg mb-1">
                {{ trip.title }}
              </h3>
              <p class="text-white/80 text-sm mb-2">
                {{ trip.startDate }} - {{ trip.endDate }}
              </p>

              <div class="flex items-center justify-between">
                <span
                  class="px-2 py-0.5 bg-green-500/80 rounded-full text-xs text-white"
                  >Đã đi</span
                >
                <span class="text-white/80 text-xs"
                  >{{ trip.days.length }} ngày</span
                >
              </div>
            </div>
          </button>
        </div>
      </div>

      <!-- AI CTA -->
      <div class="px-4">
        <button
          type="button"
          (click)="createNewTrip()"
          class="w-full flex items-center justify-between p-4 border border-gray-200 rounded-xl hover:bg-gray-50 transition-colors"
        >
          <div class="flex items-center gap-3">
            <div
              class="w-10 h-10 rounded-full bg-gray-100 flex items-center justify-center"
            >
              <span class="text-lg">✨</span>
            </div>
            <div>
              <p class="font-medium text-sm">Tạo lịch trình mới</p>
              <p class="text-xs text-gray-500">Hỏi AI để được tư vấn</p>
            </div>
          </div>
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
    </div>
  `,
})
export class TripsPage implements OnInit {
  private router = inject(Router);
  private apiService = inject(ApiService);

  trips: Trip[] = [];
  upcomingTrips: Trip[] = [];
  completedTrips: Trip[] = [];
  isLoading = true;

  ngOnInit() {
    this.apiService.getTrips().subscribe({
      next: (trips) => {
        this.trips = trips;
        this.upcomingTrips = this.trips.filter(
          (t) => t.status === "upcoming" || t.status === "ongoing",
        );
        this.completedTrips = this.trips.filter(
          (t) => t.status === "completed",
        );
        this.isLoading = false;
      },
      error: () => {
        this.trips = [];
        this.isLoading = false;
      },
    });
  }

  goToTripDetail(tripId: string) {
    this.router.navigate(["/home/trips", tripId]);
  }

  createNewTrip() {
    this.router.navigate(["/home/chat"], {
      state: { prompt: "Tạo lịch trình mới" },
    });
  }

  getBudgetColor(percentage: number): string {
    if (percentage >= 0.9) return "bg-red-400";
    if (percentage >= 0.7) return "bg-amber-400";
    return "bg-gray-800";
  }
}
