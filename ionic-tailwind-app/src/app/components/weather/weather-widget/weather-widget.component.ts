import { Component, OnInit, OnDestroy } from "@angular/core";
import { CommonModule } from "@angular/common";
import { WeatherService, WeatherData } from "../../../services/weather.service";
import { Subscription } from "rxjs";

@Component({
  selector: "app-weather-widget",
  standalone: true,
  imports: [CommonModule],
  template: `
    <!-- Loading skeleton -->
    <div
      *ngIf="isLoading"
      class="bg-gradient-to-br from-gray-900 to-gray-800 rounded-2xl p-4 animate-pulse"
    >
      <div class="flex items-start justify-between mb-4">
        <div class="space-y-2">
          <div class="h-10 w-28 bg-white/10 rounded-lg"></div>
          <div class="h-4 w-36 bg-white/10 rounded-lg"></div>
        </div>
        <div class="w-14 h-14 bg-white/10 rounded-full"></div>
      </div>
      <div class="flex justify-between py-3 border-t border-white/10">
        <div *ngFor="let i of [1, 2, 3, 4]" class="text-center space-y-1">
          <div class="h-3 w-10 bg-white/10 rounded mx-auto"></div>
          <div class="h-4 w-8 bg-white/10 rounded mx-auto"></div>
        </div>
      </div>
      <div class="flex justify-between pt-3 border-t border-white/10">
        <div *ngFor="let i of [1, 2, 3, 4, 5]" class="text-center space-y-1">
          <div class="h-3 w-8 bg-white/10 rounded mx-auto"></div>
          <div class="h-6 w-6 bg-white/10 rounded mx-auto"></div>
          <div class="h-3 w-10 bg-white/10 rounded mx-auto"></div>
        </div>
      </div>
    </div>

    <!-- Error state -->
    <div
      *ngIf="!isLoading && hasError"
      class="bg-gradient-to-br from-gray-900 to-gray-800 rounded-2xl p-4 text-white"
    >
      <div class="flex items-center justify-between">
        <div>
          <p class="text-sm text-gray-400 mb-1">
            {{ weather?.location || "Đà Lạt" }}
          </p>
          <div class="flex items-baseline gap-2">
            <span class="text-4xl font-semibold"
              >{{ weather?.temp ?? "--" }}°</span
            >
            <span class="text-lg text-gray-300">{{ weather?.condition }}</span>
          </div>
        </div>
        <span class="text-5xl">{{ weather?.icon ?? "⛅" }}</span>
      </div>
      <div class="mt-3 flex items-center justify-between">
        <p class="text-xs text-red-400/80 flex items-center gap-1">
          <svg
            class="w-3 h-3"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
              d="M12 9v2m0 4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
            />
          </svg>
          Đang dùng dữ liệu tạm
        </p>
        <button
          (click)="refresh()"
          class="text-xs text-blue-400 flex items-center gap-1 hover:text-blue-300"
        >
          <svg
            class="w-3 h-3"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
              d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15"
            />
          </svg>
          Thử lại
        </button>
      </div>
    </div>

    <!-- Data loaded -->
    <div
      *ngIf="!isLoading && weather && !hasError"
      class="bg-gradient-to-br from-gray-900 to-gray-800 rounded-2xl p-4 text-white"
    >
      <!-- Header row -->
      <div class="flex items-start justify-between mb-1">
        <div>
          <p class="text-xs text-gray-400 mb-1 flex items-center gap-1">
            <svg
              class="w-3 h-3"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"
              />
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"
              />
            </svg>
            {{ weather.location }}
          </p>
          <div class="flex items-baseline gap-2">
            <span class="text-4xl font-semibold">{{ weather.temp }}°C</span>
            <span class="text-base text-gray-300">{{ weather.condition }}</span>
          </div>
          <p class="text-sm text-gray-400 mt-0.5">
            Cảm giác như {{ weather.feelsLike }}°C
          </p>
        </div>

        <div class="flex flex-col items-end gap-1">
          <span class="text-5xl leading-none">{{ weather.icon }}</span>
          <button
            (click)="refresh()"
            [disabled]="isRefreshing"
            class="flex items-center gap-1 text-[10px] text-gray-500 hover:text-gray-300 transition-colors"
          >
            <svg
              class="w-3 h-3 transition-transform"
              [class.animate-spin]="isRefreshing"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15"
              />
            </svg>
            {{ updatedLabel }}
          </button>
        </div>
      </div>

      <!-- Stats row -->
      <div class="flex justify-between py-3 border-t border-white/10 mt-3">
        <div class="text-center">
          <div class="text-[10px] text-gray-400 mb-1">💧 Độ ẩm</div>
          <div class="text-sm font-medium">{{ weather.humidity }}%</div>
        </div>
        <div class="text-center">
          <div class="text-[10px] text-gray-400 mb-1">💨 Gió</div>
          <div class="text-sm font-medium">{{ weather.wind }} km/h</div>
        </div>
        <div class="text-center">
          <div class="text-[10px] text-gray-400 mb-1">👁️ Tầm nhìn</div>
          <div class="text-sm font-medium">{{ weather.visibility }}</div>
        </div>
        <div class="text-center">
          <div class="text-[10px] text-gray-400 mb-1">☀️ UV</div>
          <div
            class="text-sm font-medium"
            [class]="getUvClass(weather.uvIndex)"
          >
            {{ getUvLabel(weather.uvIndex) }}
          </div>
        </div>
      </div>

      <!-- 5-day forecast -->
      <div class="flex justify-between pt-3 border-t border-white/10">
        <div
          *ngFor="let day of weather.forecast; let i = index"
          class="text-center flex-1"
          [class.opacity-100]="i === 0"
          [class.opacity-80]="i > 0"
        >
          <div class="text-[10px] text-gray-400 mb-1 font-medium">
            {{ day.day }}
          </div>
          <div class="text-xl mb-1" [title]="day.condition">{{ day.icon }}</div>
          <div class="text-[10px]">
            <span class="font-semibold text-white">{{ day.high }}°</span>
            <span class="text-gray-500">/{{ day.low }}°</span>
          </div>
        </div>
      </div>
    </div>
  `,
})
export class WeatherWidgetComponent implements OnInit, OnDestroy {
  weather: WeatherData | null = null;
  isLoading = true;
  isRefreshing = false;
  hasError = false;

  private sub: Subscription | null = null;
  private updateTimer: ReturnType<typeof setInterval> | null = null;

  constructor(private weatherService: WeatherService) {}

  ngOnInit(): void {
    this.loadWeather();

    // Tự động refresh mỗi 15 phút
    this.updateTimer = setInterval(
      () => {
        this.weatherService.clearCache();
        this.loadWeather(true);
      },
      15 * 60 * 1000,
    );
  }

  ngOnDestroy(): void {
    this.sub?.unsubscribe();
    if (this.updateTimer) clearInterval(this.updateTimer);
  }

  refresh(): void {
    this.weatherService.clearCache();
    this.loadWeather(true);
  }

  get updatedLabel(): string {
    if (!this.weather?.updatedAt) return "";
    const diff = Math.floor(
      (Date.now() - this.weather.updatedAt.getTime()) / 60_000,
    );
    if (diff < 1) return "Vừa cập nhật";
    if (diff < 60) return `${diff} phút trước`;
    return `${Math.floor(diff / 60)}h trước`;
  }

  getUvLabel(uv: number): string {
    if (uv <= 2) return "Thấp";
    if (uv <= 5) return "TB";
    if (uv <= 7) return "Cao";
    if (uv <= 10) return "Rất cao";
    return "Nguy hiểm";
  }

  getUvClass(uv: number): string {
    if (uv <= 2) return "text-green-400";
    if (uv <= 5) return "text-yellow-400";
    if (uv <= 7) return "text-orange-400";
    return "text-red-400";
  }

  private loadWeather(silent = false): void {
    if (!silent) this.isLoading = true;
    else this.isRefreshing = true;

    this.sub?.unsubscribe();
    this.sub = this.weatherService.getWeather().subscribe({
      next: (data) => {
        this.weather = data;
        this.hasError = false;
        this.isLoading = false;
        this.isRefreshing = false;
      },
      error: () => {
        this.hasError = true;
        this.isLoading = false;
        this.isRefreshing = false;
      },
    });
  }
}
