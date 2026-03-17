import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { Place } from '../../../services/api.service';

@Component({
  selector: 'app-rental-card',
  standalone: true,
  imports: [CommonModule, RouterModule],
  template: `
    <a [routerLink]="['/home/place', place.slug]" class="block">
      <div class="bg-white border border-gray-100 rounded-2xl overflow-hidden shadow-sm hover:shadow-md transition-all group">
        <div class="relative h-36 overflow-hidden">
          <img
            [src]="place.imageUrl"
            [alt]="place.name"
            class="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
          />
          <div class="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent"></div>
          <div class="absolute bottom-2 left-3">
            <span class="text-[11px] font-semibold text-white bg-black/80 backdrop-blur-sm px-2.5 py-1 rounded-full">
              🛵 {{ place.pricePerDay }}
            </span>
          </div>
          <div *ngIf="place.rating" class="absolute top-3 right-3 flex items-center gap-1 bg-white/90 backdrop-blur-sm px-2 py-0.5 rounded-full">
            <svg class="w-3 h-3 fill-amber-400 text-amber-400" viewBox="0 0 20 20">
              <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"/>
            </svg>
            <span class="text-xs font-medium text-gray-800">{{ place.rating }}</span>
          </div>
        </div>

        <div class="p-3">
          <h3 class="font-medium text-gray-900 truncate mb-1">{{ place.name }}</h3>
          <p class="text-xs text-gray-500 line-clamp-2 mb-3">{{ place.shortDescription }}</p>

          <div *ngIf="place.vehicleTypes?.length" class="flex flex-wrap gap-1 mb-3">
            <span *ngFor="let type of vehicleBadges()" class="text-[10px] px-2 py-0.5 bg-gray-100 text-gray-600 rounded-full">
              {{ type }}
            </span>
            <span *ngIf="(place.vehicleTypes?.length || 0) > 2" class="text-[10px] px-2 py-0.5 bg-gray-100 text-gray-500 rounded-full">
              +{{ (place.vehicleTypes?.length || 0) - 2 }}
            </span>
          </div>

          <div class="flex items-center gap-2 text-[10px] text-gray-400">
            <span *ngIf="place.openingHours" class="flex items-center gap-1">
              <svg class="w-3 h-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
              {{ place.openingHours }}
            </span>
          </div>

          <div class="flex gap-2 mt-4" (click)="$event.stopPropagation()">
            <button
              (click)="callPhone($event)"
              class="flex-1 flex flex-col items-center justify-center gap-1 py-2.5 border border-gray-200 rounded-xl text-xs text-gray-700 hover:bg-gray-50 transition-colors"
            >
              <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
              </svg>
              <span>Gọi ngay</span>
            </button>
            <button
              (click)="openMaps($event)"
              class="flex-1 flex flex-col items-center justify-center gap-1 py-2.5 bg-black text-white rounded-xl text-xs hover:bg-gray-900 transition-colors"
            >
              <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
              </svg>
              <span>Chỉ đường</span>
            </button>
          </div>
        </div>
      </div>
    </a>
  `,
})
export class RentalCardComponent {
  @Input() place!: Place;

  vehicleBadges(): string[] {
    return this.place.vehicleTypes?.slice(0, 2) || [];
  }

  callPhone(event: Event) {
    event.stopPropagation();
    if (this.place.phoneNumber) {
      window.open(`tel:${this.place.phoneNumber.replace(/\s/g, '')}`, '_blank');
    }
  }

  openMaps(event: Event) {
    event.stopPropagation();
    const q = this.place.lat && this.place.lng
      ? `${this.place.lat},${this.place.lng}`
      : encodeURIComponent(`${this.place.name} Đà Lạt`);
    window.open(`https://www.google.com/maps/search/?api=1&query=${q}`, '_blank');
  }
}
