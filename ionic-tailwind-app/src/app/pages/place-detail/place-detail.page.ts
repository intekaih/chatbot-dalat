import { Component, OnInit } from "@angular/core";
import { CommonModule } from "@angular/common";
import { Router, ActivatedRoute } from "@angular/router";
import { Browser } from '@capacitor/browser';
import { PlaceCardComponent } from "../../components/place/place-card/place-card.component";
import { ApiService, Place, Review } from "../../services/api.service";
import { FirestoreFavoritesService } from "../../services/firestore-favorites.service";

@Component({
  selector: "app-place-detail",
  standalone: true,
  imports: [CommonModule, PlaceCardComponent],
  template: `
    <div class="bg-white pb-24">
      <!-- Hero Image -->
      <div class="relative aspect-video overflow-hidden">
        <img loading="lazy"
          [src]="place?.imageUrl"
          [alt]="place?.name"
          class="w-full h-full object-cover"
          (error)="onHeroImgError($event)"
        />

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

        <!-- Action Buttons -->
        <div class="absolute top-4 right-4 flex gap-2">
          <button
            class="w-10 h-10 rounded-full bg-white/90 flex items-center justify-center shadow-md"
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
                d="M8.684 13.342C8.886 12.938 9 12.482 9 12c0-.482-.114-.938-.316-1.342m0 2.684a3 3 0 110-2.684m0 2.684l6.632 3.316m-6.632-6l6.632-3.316m0 0a3 3 0 105.367-2.684 3 3 0 00-5.367 2.684zm0 9.316a3 3 0 105.368 2.684 3 3 0 00-5.368-2.684z"
              />
            </svg>
          </button>
          <button
            (click)="toggleFavorite()"
            class="w-10 h-10 rounded-full bg-white/90 flex items-center justify-center shadow-md"
          >
            <svg
              class="w-5 h-5"
              [class]="
                isFavorite ? 'fill-red-500 text-red-500' : 'text-gray-700'
              "
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z"
              />
            </svg>
          </button>
        </div>
      </div>

      <!-- Content Sheet -->
      <div class="px-5 pt-6 relative bg-white -mt-5 rounded-t-3xl z-10">
        <!-- Category Badge -->
        <span
          class="inline-block px-3 py-1.5 rounded-full text-[11px] font-bold uppercase tracking-wider mb-3 shadow-sm border"
          [ngClass]="getCategoryClasses(place?.category)"
          >{{ getCategoryLabel(place?.category) }}</span
        >

        <!-- Title -->
        <h1 class="text-2xl font-semibold text-gray-900 mb-2">
          {{ place?.name }}
        </h1>

        <!-- Rating -->
        <div class="flex items-center gap-2 mb-3">
          <div class="flex items-center gap-1" *ngIf="place?.rating">
            <svg
              class="w-5 h-5 fill-amber-400 text-amber-400"
              viewBox="0 0 20 20"
            >
              <path
                d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"
              />
            </svg>
            <span class="font-medium">{{ place?.rating }}</span>
            <span class="text-gray-400"
              >({{ place?.reviewCount }} đánh giá)</span
            >
          </div>
        </div>

        <!-- Meta Chips -->
        <div class="flex flex-wrap gap-2.5 mb-5">
          <span
            *ngIf="place?.priceRange"
            class="px-3 py-1.5 bg-gray-50 border border-gray-100 text-gray-700 rounded-xl text-[13px] font-medium flex items-center gap-2"
            >💰 {{ place?.priceRange }}</span
          >
          <span
            *ngIf="place?.openingHours"
            class="px-3 py-1.5 bg-gray-50 border border-gray-100 text-gray-700 rounded-xl text-[13px] font-medium flex items-center gap-2"
            >⏰ {{ place?.openingHours }}</span
          >
        </div>

        <!-- Description -->
        <p class="text-gray-600 leading-relaxed text-[15px] mb-4">{{ place?.shortDescription }}</p>
        <p class="text-gray-600 leading-relaxed text-[15px] mb-6">{{ place?.fullDescription }}</p>

        <!-- Tags -->
        <div *ngIf="place?.tags?.length" class="mb-5">
          <h3 class="text-sm font-bold text-gray-900 mb-3">Điểm nổi bật</h3>
          <div class="flex flex-wrap gap-2">
            <span
              *ngFor="let tag of place?.tags"
              class="px-3.5 py-1.5 bg-blue-50/70 text-blue-600 border border-blue-100/80 rounded-xl text-[13px] font-medium tracking-wide"
              >{{ tag }}</span
            >
          </div>
        </div>

        <!-- Suitable For -->
        <div *ngIf="place?.suitableFor?.length" class="mb-6">
          <h3 class="text-sm font-bold text-gray-900 mb-3">Phù hợp với</h3>
          <div class="flex flex-wrap gap-2">
            <span
              *ngFor="let item of place?.suitableFor"
              class="px-3.5 py-1.5 bg-gray-800 text-white rounded-xl text-[13px] font-medium tracking-wide shadow-sm"
              >{{ item }}</span
            >
          </div>
        </div>

        <!-- Location -->
        <div *ngIf="place?.address" class="mb-6">
          <h3 class="text-sm font-medium text-gray-700 mb-2">Địa chỉ</h3>
          <div class="border border-gray-200 rounded-xl p-4">
            <p class="text-sm text-gray-600 mb-3">{{ place?.address }}</p>
            <button
              (click)="openMaps()"
              class="w-full py-2 bg-black text-white rounded-xl text-sm font-medium"
            >
              Mở Google Maps
            </button>
          </div>
        </div>

        <!-- Rental Section -->
        <div *ngIf="place?.category === 'rental'" class="mb-6">
          <div class="border border-gray-200 rounded-xl p-4">
            <div class="grid grid-cols-2 gap-4 mb-4">
              <div>
                <p class="text-xs text-gray-400 mb-1">Giá thuê</p>
                <p class="font-medium">{{ place?.pricePerDay }}</p>
              </div>
              <div>
                <p class="text-xs text-gray-400 mb-1">Giờ mở cửa</p>
                <p class="font-medium">{{ place?.openingHours }}</p>
              </div>
            </div>

            <div *ngIf="place?.vehicleTypes?.length" class="mb-4">
              <p class="text-xs text-gray-400 mb-2">Loại xe</p>
              <ul class="space-y-1">
                <li
                  *ngFor="let type of place?.vehicleTypes"
                  class="flex items-center gap-2 text-sm"
                >
                  <span class="w-1.5 h-1.5 bg-black rounded-full"></span>
                  {{ type }}
                </li>
              </ul>
            </div>

            <div
              *ngIf="place?.depositRequired"
              class="bg-blue-50 border border-blue-100 rounded-lg p-3 mb-4"
            >
              <p class="text-sm text-blue-700">
                Đặt cọc: {{ place?.depositRequired }}
              </p>
            </div>

            <a
              [href]="'tel:' + place?.phoneNumber"
              class="w-full py-2 bg-black text-white rounded-xl text-sm font-medium block text-center"
            >
              Gọi đặt xe
            </a>
          </div>
        </div>

        <!-- Reviews Section -->
        <div *ngIf="reviews.length > 0" class="mb-6">
          <h3 class="text-lg font-semibold text-gray-900 mb-4">Đánh giá</h3>

          <!-- Rating Summary -->
          <div class="flex items-center gap-4 mb-4 p-4 bg-gray-50 rounded-xl">
            <div class="text-center">
              <p class="text-3xl font-semibold">{{ place?.rating }}</p>
              <div class="flex gap-0.5 justify-center my-1">
                <svg
                  *ngFor="let i of [1, 2, 3, 4, 5]"
                  class="w-4 h-4"
                  [class]="
                    i <= (place?.rating || 0)
                      ? 'fill-amber-400 text-amber-400'
                      : 'fill-gray-200 text-gray-200'
                  "
                  viewBox="0 0 20 20"
                >
                  <path
                    d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"
                  />
                </svg>
              </div>
              <p class="text-xs text-gray-400">
                {{ place?.reviewCount }} đánh giá
              </p>
            </div>
          </div>

          <!-- Review List -->
          <div class="space-y-4">
            <div
              *ngFor="let review of reviews"
              class="border-b border-gray-100 pb-4"
            >
              <div class="flex items-start justify-between mb-2">
                <div class="flex items-center gap-3">
                  <div
                    class="w-10 h-10 rounded-full bg-gray-200 flex items-center justify-center"
                  >
                    <span class="text-sm font-medium">{{
                      review.author.charAt(0)
                    }}</span>
                  </div>
                  <div>
                    <p class="font-medium text-sm">{{ review.author }}</p>
                    <p class="text-xs text-gray-400">{{ review.date }}</p>
                  </div>
                </div>
                <div class="flex gap-0.5">
                  <svg
                    *ngFor="let i of [1, 2, 3, 4, 5]"
                    class="w-3.5 h-3.5"
                    [class]="
                      i <= review.rating
                        ? 'fill-amber-400 text-amber-400'
                        : 'fill-gray-200 text-gray-200'
                    "
                    viewBox="0 0 20 20"
                  >
                    <path
                      d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"
                    />
                  </svg>
                </div>
              </div>
              <p class="text-sm text-gray-600 mb-2">{{ review.content }}</p>
              <button
                (click)="toggleHelpful(review)"
                class="text-xs text-gray-400 flex items-center gap-1"
                [class]="review.isHelpful ? 'text-black' : ''"
              >
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
                    d="M14 10h4.764a2 2 0 011.789 2.894l-3.5 7A2 2 0 0115.263 21h-4.017c-.163 0-.326-.02-.485-.06L7 20m7-10V5a2 2 0 00-2-2h-.095c-.5 0-.905.405-.905.905 0 .714-.211 1.412-.608 2.006L7 11v9m7-10h-2M7 20H5a2 2 0 01-2-2v-6a2 2 0 012-2h2.5"
                  />
                </svg>
                Hữu ích ({{ review.helpfulCount }})
              </button>
            </div>
          </div>
        </div>

        <!-- Related Places -->
        <div *ngIf="relatedPlaces.length > 0" class="mb-6">
          <h3 class="text-lg font-semibold text-gray-900 mb-4">
            Địa điểm liên quan
          </h3>
          <div class="space-y-3">
            <app-place-card
              *ngFor="let p of relatedPlaces"
              [place]="p"
              variant="compact"
            ></app-place-card>
          </div>
        </div>
      </div>

      <!-- Fixed Bottom Bar -->
      <div
        class="fixed bottom-16 pb-4 pt-3 px-5 left-0 right-0 bg-white/90 backdrop-blur-md border-t border-gray-100/50 z-40"
      >
        <button
          (click)="goToChat()"
          class="w-full py-4 bg-gradient-to-r from-blue-600 to-indigo-600 shadow-[0_8px_16px_-4px_rgba(79,70,229,0.3)] shadow-blue-500/25 active:scale-[0.98] transition-transform text-white rounded-2xl font-semibold flex items-center justify-center text-sm tracking-wide gap-2"
        >
          ✨ Hỏi AI về địa điểm này
        </button>
      </div>
    </div>
  `,
})
export class PlaceDetailPage implements OnInit {
  place: Place | undefined;
  reviews: Review[] = [];
  relatedPlaces: Place[] = [];
  isFavorite = false;
  isLoading = true;

  constructor(
    private router: Router,
    private route: ActivatedRoute,
    private apiService: ApiService,
    private favoritesService: FirestoreFavoritesService,
  ) { }

  ngOnInit() {
    const slug = this.route.snapshot.paramMap.get("slug");

    // Load all places and find current one
    this.apiService.getPlaces().subscribe({
      next: (places) => {
        this.place = places.find((p) => p.slug === slug);
        this.relatedPlaces = places
          .filter(
            (p) =>
              p.category === this.place?.category && p.id !== this.place?.id,
          )
          .slice(0, 3);
        this.isLoading = false;

        // Load reviews for this place
        if (this.place) {
          this.loadReviews(this.place.id);
          // Kiểm tra favorites từ Firestore
          this.favoritesService.isFavorite(this.place.id).then(isFav => {
            this.isFavorite = isFav;
          });
          // Refresh ảnh: DB chỉ có Pexels → thay bằng Gemini URL cho hero
          this.apiService.getPlaceImage(
            this.place.id,
            this.place.name,
            this.place.category,
            this.place.address,
            true, // skipValidation = true → raw Pexels URL
          ).subscribe((res) => {
            if (res.imageUrl) this.place!.imageUrl = res.imageUrl;
          });
        }
      },
      error: () => {
        this.isLoading = false;
      },
    });
  }

  loadReviews(placeId: string) {
    this.apiService.getReviews(placeId).subscribe({
      next: (reviews) => {
        this.reviews = reviews;
      },
    });
  }

  getCategoryLabel(category?: string): string {
    const labels: Record<string, string> = {
      signature: "⭐ Đặc Trưng (Must-visit)",
      cafe: "☕ Cafe View Đẹp",
      food: "🍜 Ẩm Thực",
      checkin: "📸 Điểm Check-in",
      nature: "🌲 Thiên Nhiên",
      homestay: "🏡 Homestay",
      rental: "🛵 Thuê Xe",
    };
    return labels[category || ""] || category || "";
  }

  getCategoryClasses(category?: string): string {
    switch (category) {
      case "signature":
        return "bg-gradient-to-r from-amber-400 to-orange-500 text-white border-transparent shadow-sm shadow-orange-500/20";
      case "cafe":
        return "bg-amber-50 text-amber-700 border-amber-200";
      case "food":
        return "bg-orange-50 text-orange-700 border-orange-200";
      case "checkin":
        return "bg-pink-50 text-pink-700 border-pink-200";
      case "nature":
        return "bg-emerald-50 text-emerald-700 border-emerald-200";
      case "homestay":
        return "bg-blue-50 text-blue-700 border-blue-200";
      case "rental":
        return "bg-violet-50 text-violet-700 border-violet-200";
      default:
        return "bg-gray-50 text-gray-700 border-gray-200";
    }
  }

  goBack() {
    this.router.navigate(["/home/explore"]);
  }

  toggleFavorite() {
    if (!this.place) return;
    this.favoritesService.toggleFavorite({
      id: this.place.id,
      name: this.place.name,
      category: this.place.category,
      imageUrl: this.place.imageUrl,
    }).then((newState) => {
      this.isFavorite = newState;
    });
  }

  async openMaps() {
    const defaultQuery = encodeURIComponent(`${this.place?.name} Đà Lạt`);
    const q = this.place?.address
      ? encodeURIComponent(`${this.place.name}, ${this.place.address}`)
      : defaultQuery;

    // Dùng @capacitor/browser để mở Google Maps (native browser trên thiết bị)
    await Browser.open({
      url: `https://www.google.com/maps/search/?api=1&query=${q}`,
      presentationStyle: 'popover',
    });
  }

  goToChat() {
    const prompt = `Cho tôi thông tin về ${this.place?.name}`;
    this.router.navigate(["/home/chat"], { state: { prompt } });
  }

  toggleHelpful(review: Review) {
    review.isHelpful = !review.isHelpful;
  }

  onHeroImgError(event: Event) {
    const img = event.target as HTMLImageElement;
    img.onerror = null;
    const categoryPlaceholders: Record<string, string> = {
      signature: "https://placehold.co/1200x600/e2e8f0/64748b?text=Đặc+trưng",
      cafe: "https://placehold.co/1200x600/e2e8f0/64748b?text=Cafe",
      food: "https://placehold.co/1200x600/e2e8f0/64748b?text=Ăn+uống",
      checkin: "https://placehold.co/1200x600/e2e8f0/64748b?text=Check-in",
      nature: "https://placehold.co/1200x600/e2e8f0/64748b?text=Thiên+nhiên",
      homestay: "https://placehold.co/1200x600/e2e8f0/64748b?text=Homestay",
      rental: "https://placehold.co/1200x600/e2e8f0/64748b?text=Thuê+xe",
    };
    img.src = categoryPlaceholders[this.place?.category || ""] ||
      "https://placehold.co/1200x600/e2e8f0/64748b?text=Đà+Lạt";
  }
}
