import { Component, OnInit } from "@angular/core";
import { CommonModule } from "@angular/common";
import { Router, ActivatedRoute } from "@angular/router";
import {
  ApiService,
  Trip,
  TripDay,
  TripItineraryItem,
} from "../../services/api.service";

@Component({
  selector: "app-trip-detail",
  standalone: true,
  imports: [CommonModule],
  template: `
    <div class="bg-white">
      <!-- Hero -->
      <div class="relative aspect-video overflow-hidden">
        <img
          [src]="trip?.coverImage"
          [alt]="trip?.title || 'Ảnh chuyến đi'"
          class="w-full h-full object-cover"
          (error)="onHeroImgError($event)"
        />
        <div
          class="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent"
        ></div>

        <!-- Back Button -->
        <button
          (click)="goBack()"
          class="absolute top-4 left-4 w-10 h-10 rounded-full bg-white/90 flex items-center justify-center shadow-md"
        >
          <svg
            class="w-5 h-5 text-gray-700"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
              d="M15 19l-7-7 7-7"
            />
          </svg>
        </button>

        <!-- Hero Content -->
        <div class="absolute bottom-0 left-0 right-0 p-4">
          <h1 class="text-2xl font-semibold text-white mb-2">
            {{ trip?.title }}
          </h1>
          <p class="text-white/80 text-sm mb-3">{{ trip?.destination }}</p>
          <span
            class="px-2 py-0.5 rounded-full text-xs text-white"
            [class]="
              trip?.status === 'upcoming'
                ? 'bg-blue-500/80'
                : trip?.status === 'completed'
                  ? 'bg-green-500/80'
                  : 'bg-amber-500/80'
            "
          >
            {{
              trip?.status === "upcoming"
                ? "Sắp tới"
                : trip?.status === "completed"
                  ? "Đã đi"
                  : "Đang đi"
            }}
          </span>
        </div>
      </div>

      <!-- Quick Info -->
      <div class="px-4 py-4 border-b border-gray-100">
        <div class="flex items-center gap-4">
          <div class="flex items-center gap-2">
            <svg
              class="w-4 h-4 text-gray-500"
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
            <span class="text-sm text-gray-600"
              >{{ trip?.startDate }} - {{ trip?.endDate }}</span
            >
          </div>
          <span *ngIf="tripNights > 0" class="px-2 py-0.5 bg-gray-100 rounded-full text-xs"
            >{{ tripNights + 1 }}N{{ tripNights }}Đ</span
          >
        </div>
      </div>

      <!-- Notes Banner -->
      <div
        *ngIf="trip?.notes && (trip?.days?.length || 0) > 0"
        class="px-4 py-3 bg-amber-50 border-b border-amber-100"
      >
        <p class="text-xs font-medium text-amber-700 mb-1">📝 Ghi chú từ AI</p>
        <p class="text-sm text-amber-800 line-clamp-3">{{ trip?.notes }}</p>
      </div>

      <!-- Tabs -->
      <div class="px-4 py-4 border-b border-gray-100">
        <div class="flex p-1 bg-gray-100 rounded-2xl">
          <button
            (click)="activeTab = 'itinerary'"
            class="flex-1 py-2 rounded-xl text-sm font-medium transition-colors"
            [class]="
              activeTab === 'itinerary' ? 'bg-white shadow-sm' : 'text-gray-500'
            "
          >
            🗓️ Lịch trình
          </button>
          <button
            (click)="activeTab = 'budget'"
            class="flex-1 py-2 rounded-xl text-sm font-medium transition-colors"
            [class]="
              activeTab === 'budget' ? 'bg-white shadow-sm' : 'text-gray-500'
            "
          >
            💰 Ngân sách
          </button>
        </div>
      </div>

      <!-- Itinerary Tab -->
      <div *ngIf="activeTab === 'itinerary'" class="p-4">
        <!-- Structured days -->
        <div *ngFor="let day of trip?.days; let i = index" class="mb-4">
          <!-- Day Header -->
          <button
            (click)="toggleDay(i)"
            class="w-full flex items-center justify-between p-3 bg-gray-50 rounded-xl mb-2"
          >
            <div class="flex items-center gap-3">
              <div
                class="w-8 h-8 rounded-full bg-black text-white flex items-center justify-center text-sm font-medium"
              >
                {{ day.dayNumber }}
              </div>
              <div class="text-left">
                <p class="text-sm font-medium">Ngày {{ day.dayNumber }}</p>
                <p class="text-xs text-gray-500">{{ day.date }}</p>
              </div>
            </div>
            <div class="flex items-center gap-3">
              <span class="text-sm text-gray-500"
                >{{ day.totalCost | number: "1.0-0" }}đ</span
              >
              <svg
                class="w-5 h-5 text-gray-400 transition-transform"
                [class]="expandedDays[i] ? 'rotate-180' : ''"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="M19 9l-7 7-7-7"
                />
              </svg>
            </div>
          </button>

          <!-- Day Items -->
          <div *ngIf="expandedDays[i]" class="space-y-3 pl-4">
            <div
              *ngFor="let item of day.items; let j = index"
              class="flex gap-3"
            >
              <!-- Timeline -->
              <div class="flex flex-col items-center">
                <div
                  class="w-8 h-8 rounded-full bg-gray-100 flex items-center justify-center text-sm"
                >
                  {{ getItemIcon(item.type) }}
                </div>
                <div
                  *ngIf="j < day.items.length - 1"
                  class="w-px h-6 bg-gray-200"
                ></div>
              </div>

              <!-- Item Content -->
              <div class="flex-1 pb-3">
                <div class="flex items-center gap-2 mb-1">
                  <span class="text-xs text-gray-500">{{ item.time }}</span>
                  <span class="text-xs text-gray-400">{{
                    getItemTypeLabel(item.type)
                  }}</span>
                </div>
                <h4 class="text-sm font-medium text-gray-900">
                  {{ item.title }}
                </h4>
                <p *ngIf="item.description" class="text-xs text-gray-500">
                  {{ item.description }}
                </p>
                <p
                  *ngIf="item.cost && item.cost > 0"
                  class="text-xs text-gray-600 mt-1"
                >
                  {{ item.cost | number: "1.0-0" }}đ
                </p>
              </div>
            </div>
          </div>
        </div>

        <!-- AI Notes view: when trip has no structured days but has notes -->
        <div *ngIf="(trip?.days?.length || 0) === 0 && trip?.notes" class="space-y-3">
          <div class="flex items-center gap-2 mb-4">
            <div class="w-8 h-8 rounded-full bg-indigo-100 flex items-center justify-center">
              <span class="text-base">🤖</span>
            </div>
            <div>
              <p class="text-sm font-semibold text-gray-900">Gợi ý từ AI</p>
              <p class="text-xs text-gray-500">Lịch trình do AI tạo ra</p>
            </div>
          </div>
          <div class="bg-gray-50 rounded-2xl p-4">
            <div class="text-sm text-gray-700 leading-relaxed whitespace-pre-line" [innerHTML]="notesHtml">
            </div>
          </div>
          <button
            (click)="goToChat()"
            class="w-full py-3 border border-gray-200 rounded-xl text-sm text-gray-600 flex items-center justify-center gap-2"
          >
            <span>✏️</span> Hỏi AI để chỉnh sửa lịch trình này
          </button>
        </div>

        <!-- Empty state: no days and no notes -->
        <div *ngIf="(trip?.days?.length || 0) === 0 && !trip?.notes" class="py-12 text-center">
          <span class="text-4xl mb-3 block">🗓️</span>
          <p class="text-gray-500 text-sm">Chưa có lịch trình. Hỏi AI để bắt đầu!</p>
        </div>
      </div>

      <!-- Budget Tab -->
      <div *ngIf="activeTab === 'budget'" class="p-4">
        <!-- Overview Card -->
        <div class="bg-gray-50 rounded-xl p-4 mb-4">
          <div class="flex items-center justify-between mb-2">
            <span class="text-sm text-gray-600">Đã chi</span>
            <span class="font-semibold"
              >{{ trip?.spent | number: "1.0-0" }}đ</span
            >
          </div>
          <div class="flex items-center justify-between mb-2">
            <span class="text-sm text-gray-600">Ngân sách</span>
            <span class="text-sm"
              >{{ trip?.totalBudget | number: "1.0-0" }}đ</span
            >
          </div>

          <!-- Progress Bar -->
          <div class="h-2 bg-gray-200 rounded-full mb-2 overflow-hidden">
            <div
              class="h-full rounded-full transition-all"
              [class]="
                getBudgetBarColor(trip?.spent || 0, trip?.totalBudget || 1)
              "
              [style.width.%]="
                ((trip?.spent || 0) / (trip?.totalBudget || 1)) * 100
              "
            ></div>
          </div>

          <div class="flex items-center justify-between text-sm">
            <span class="text-gray-500"
              >{{
                ((trip?.spent || 0) / (trip?.totalBudget || 1)) * 100
                  | number: "1.0-0"
              }}% đã sử dụng</span
            >
            <span
              [class]="
                (trip?.spent || 0) > (trip?.totalBudget || 0)
                  ? 'text-red-600'
                  : 'text-green-600'
              "
            >
              {{
                (trip?.totalBudget || 0) - (trip?.spent || 0) | number: "1.0-0"
              }}đ còn lại
            </span>
          </div>
        </div>

        <!-- Category Breakdown -->
        <div class="space-y-3">
          <div
            *ngFor="let cat of trip?.budgetCategories"
            class="flex items-center gap-3"
          >
            <div
              class="w-10 h-10 rounded-full bg-gray-100 flex items-center justify-center text-lg"
            >
              {{ cat.icon }}
            </div>
            <div class="flex-1">
              <div class="flex items-center justify-between mb-1">
                <span class="text-sm">{{ cat.category }}</span>
                <span class="text-xs text-gray-500"
                  >{{ cat.spent | number: "1.0-0" }}đ /
                  {{ cat.budget | number: "1.0-0" }}đ</span
                >
              </div>
              <div class="h-1.5 bg-gray-100 rounded-full overflow-hidden">
                <div
                  class="h-full bg-black rounded-full"
                  [style.width.%]="(cat.spent / cat.budget) * 100"
                ></div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <!-- Fixed Bottom Bar -->
      <div
        class="fixed bottom-16 left-0 right-0 bg-white border-t border-gray-200 px-4 py-3 z-40"
      >
        <button
          (click)="goToChat()"
          class="w-full py-3 bg-black text-white rounded-xl font-medium"
        >
          Hỏi AI về chuyến đi này
        </button>
      </div>
    </div>
  `,
})
export class TripDetailPage implements OnInit {
  trip: Trip | undefined;
  activeTab: "itinerary" | "budget" = "itinerary";
  expandedDays: boolean[] = [];
  notesHtml = "";
  tripNights = 0;

  constructor(
    private router: Router,
    private route: ActivatedRoute,
    private apiService: ApiService,
  ) { }

  ngOnInit() {
    const id = this.route.snapshot.paramMap.get("id");
    if (id) {
      this.apiService.getTrips().subscribe({
        next: (trips) => {
          this.trip = trips.find((t) => t.id === id);
          this.expandedDays = new Array(this.trip?.days?.length || 0).fill(true);
          if (this.trip?.notes) {
            this.notesHtml = this.renderMarkdown(this.trip.notes);
          }
          // Compute trip nights from days array
          this.tripNights = Math.max(0, (this.trip?.days?.length || 1) - 1);
        },
      });
    }
  }

  goBack() {
    this.router.navigate(["/home/favorites"], { state: { tab: 'trips' } });
  }

  goToChat() {
    const prompt = `Cho tôi thông tin về chuyến đi ${this.trip?.title}`;
    this.router.navigate(["/home/chat"], { state: { prompt } });
  }

  toggleDay(index: number) {
    this.expandedDays[index] = !this.expandedDays[index];
  }

  getItemIcon(type: string): string {
    const icons: Record<string, string> = {
      location: "📍",
      food: "🍜",
      transport: "🚗",
      accommodation: "🏠",
    };
    return icons[type] || "📌";
  }

  getItemTypeLabel(type: string): string {
    const labels: Record<string, string> = {
      location: "Địa điểm",
      food: "Ẩm thực",
      transport: "Di chuyển",
      accommodation: "Lưu trú",
    };
    return labels[type] || "";
  }

  getBudgetBarColor(spent: number, total: number): string {
    const percentage = spent / total;
    if (percentage >= 0.9) return "bg-red-400";
    if (percentage >= 0.7) return "bg-amber-400";
    return "bg-gray-800";
  }

  onHeroImgError(event: Event) {
    const img = event.target as HTMLImageElement;
    const title = encodeURIComponent(this.trip?.destination || 'Đà Lạt');
    img.src = `https://placehold.co/800x450/1a1a2e/ffffff?text=${title}`;
    img.onerror = null;
  }

  private renderMarkdown(text: string): string {
    return text
      .replace(/\*\*(.+?)\*\*/g, '<strong>$1</strong>')
      .replace(/\*(.+?)\*/g, '<em>$1</em>')
      .replace(/^#{1,3}\s+(.+)$/gm, '<p class="font-semibold text-gray-900 mt-3 mb-1">$1</p>')
      .replace(/^[-•]\s+(.+)$/gm, '<li class="ml-3 list-disc">$1</li>')
      .replace(/\n/g, '<br/>');
  }
}
