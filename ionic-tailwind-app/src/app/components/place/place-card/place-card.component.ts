import { Component, Input, Output, EventEmitter } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Router } from '@angular/router';
import { Place } from '../../../services/api.service';

@Component({
  selector: 'app-place-card',
  standalone: true,
  imports: [CommonModule, RouterModule],
  template: `
    <!-- Default Variant -->
    <a *ngIf="variant === 'default'" 
      [routerLink]="['/home/place', place.slug]"
      class="block rounded-2xl border border-gray-100 overflow-hidden hover:shadow-md transition-shadow"
    >
      <div class="relative aspect-[19/6] overflow-hidden">
        <img [src]="place.imageUrl" [alt]="place.name" class="w-full h-full object-cover" />
        <button 
          (click)="onFavoriteClick($event)"
          class="absolute top-3 right-3 w-8 h-8 rounded-full bg-white/90 flex items-center justify-center shadow-sm hover:bg-white"
        >
          <svg class="w-5 h-5" [class]="isFavorite ? 'fill-red-500 text-red-500' : 'text-gray-400'" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
          </svg>
        </button>
      </div>
      <div class="p-4">
        <div class="flex items-center gap-2 mb-2">
          <span class="px-2 py-0.5 bg-gray-100 rounded-full text-xs">{{ getCategoryLabel(place.category) }}</span>
          <div class="flex items-center gap-1" *ngIf="place.rating">
            <svg class="w-4 h-4 fill-amber-400 text-amber-400" viewBox="0 0 20 20">
              <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"/>
            </svg>
            <span class="text-sm font-medium">{{ place.rating }}</span>
            <span class="text-xs text-gray-400">({{ place.reviewCount }})</span>
          </div>
        </div>
        <h3 class="text-base font-medium text-gray-900 mb-1">{{ place.name }}</h3>
        <p class="text-sm text-gray-500 line-clamp-2 mb-2">{{ place.shortDescription }}</p>
        <div class="flex flex-wrap gap-1">
          <span *ngFor="let tag of place.tags" class="text-xs text-gray-400">{{ tag }}</span>
        </div>
      </div>
    </a>

    <!-- Compact Variant -->
    <a *ngIf="variant === 'compact'" 
      [routerLink]="['/home/place', place.slug]"
      class="flex gap-3 p-3 rounded-xl border border-gray-100"
    >
      <img [src]="place.imageUrl" [alt]="place.name" class="w-20 h-20 rounded-lg object-cover" />
      <div class="flex-1 min-w-0">
        <h3 class="text-sm font-medium text-gray-900 mb-1 truncate">{{ place.name }}</h3>
        <p class="text-xs text-gray-500 line-clamp-2 mb-1">{{ place.shortDescription }}</p>
        <div class="flex items-center gap-1" *ngIf="place.rating">
          <svg class="w-3.5 h-3.5 fill-amber-400 text-amber-400" viewBox="0 0 20 20">
            <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"/>
          </svg>
          <span class="text-xs">{{ place.rating }}</span>
        </div>
      </div>
      <button 
        (click)="onFavoriteClick($event)"
        class="self-start w-8 h-8 rounded-full hover:bg-gray-100 flex items-center justify-center"
      >
        <svg class="w-4 h-4" [class]="isFavorite ? 'fill-red-500 text-red-500' : 'text-gray-400'" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
        </svg>
      </button>
    </a>
  `,
  styles: [`
    .line-clamp-2 {
      display: -webkit-box;
      -webkit-line-clamp: 2;
      -webkit-box-orient: vertical;
      overflow: hidden;
    }
  `]
})
export class PlaceCardComponent {
  @Input() place!: Place;
  @Input() variant: 'default' | 'compact' = 'default';
  @Input() isFavorite = false;
  @Output() favorite = new EventEmitter<Place>();

  getCategoryLabel(category: string): string {
    const labels: Record<string, string> = {
      'cafe': 'Cafe',
      'restaurant': 'Ăn uống',
      'checkin': 'Check-in',
      'nature': 'Thiên nhiên',
      'homestay': 'Homestay',
      'rental': '🛵 Thuê xe'
    };
    return labels[category] || category;
  }

  onFavoriteClick(event: Event) {
    event.preventDefault();
    event.stopPropagation();
    this.isFavorite = !this.isFavorite;
    this.favorite.emit(this.place);
  }
}
