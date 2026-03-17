import { Component, OnInit, AfterViewInit, ViewChild, ElementRef } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Router } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { CategoryChipComponent } from '../../components/ui/category-chip/category-chip.component';
import { PlaceCardComponent } from '../../components/place/place-card/place-card.component';
import { EmptyStateComponent } from '../../components/ui/empty-state/empty-state.component';
import { ApiService, Category, Place } from '../../services/api.service';

@Component({
  selector: 'app-search',
  standalone: true,
  imports: [
    CommonModule, 
    FormsModule, 
    CategoryChipComponent, 
    PlaceCardComponent,
    EmptyStateComponent
  ],
  template: `
    <div class="bg-white">
      <!-- Sticky Header -->
      <div class="sticky top-0 bg-white z-10 px-4 pt-12 pb-4 border-b border-gray-100">
        <div class="flex items-center gap-2 mb-4">
          <button (click)="goBack()" class="w-10 h-10 rounded-full bg-gray-50 flex items-center justify-center">
            <svg class="w-5 h-5 text-gray-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 19l-7-7 7-7" />
            </svg>
          </button>
          
          <div class="flex-1 relative">
            <input 
              #searchInput
              type="text"
              [(ngModel)]="searchQuery"
              (input)="onSearch()"
              placeholder="Tìm địa điểm..."
              class="w-full px-4 py-2.5 bg-gray-50 border border-gray-200 rounded-full text-sm focus:outline-none focus:ring-2 focus:ring-black"
            />
            <button 
              *ngIf="searchQuery"
              (click)="clearSearch()"
              class="absolute right-3 top-1/2 -translate-y-1/2"
            >
              <svg class="w-5 h-5 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>
          </div>

          <button 
            (click)="toggleSort()"
            class="w-10 h-10 rounded-full bg-gray-50 flex items-center justify-center"
          >
            <svg class="w-5 h-5 text-gray-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 6V4m0 2a2 2 0 100 4m0-4a2 2 0 110 4m-6 8a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4m6 6v10m6-2a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4" />
            </svg>
          </button>
        </div>

        <!-- Sort Dropdown -->
        <div *ngIf="showSort" class="absolute right-4 top-24 mt-2 w-48 bg-white border border-gray-200 rounded-2xl shadow-lg z-20 p-2">
          <button 
            *ngFor="let option of sortOptions"
            (click)="selectSort(option.value)"
            class="w-full flex items-center gap-2 px-3 py-2 rounded-xl hover:bg-gray-50 text-left"
            [class]="selectedSort === option.value ? 'bg-gray-100' : ''"
          >
            <span class="text-sm">{{ option.label }}</span>
            <span *ngIf="selectedSort === option.value" class="ml-auto text-xs">✓</span>
          </button>
        </div>

        <!-- Category Chips -->
        <div class="flex gap-2 overflow-x-auto scrollbar-hide pb-2 -mx-4 px-4">
          <button 
            (click)="selectCategory('all')"
            class="px-3 py-1.5 rounded-full border text-sm whitespace-nowrap transition-colors"
            [class]="selectedCategory === 'all' ? 'bg-black text-white border-transparent' : 'bg-white text-gray-600 border-gray-200'"
          >
            Tất cả
          </button>
          <app-category-chip
            *ngFor="let cat of categories"
            [label]="cat.label"
            [icon]="cat.icon"
            [active]="selectedCategory === cat.id"
            (click)="selectCategory(cat.id)"
          ></app-category-chip>
        </div>
      </div>

      <!-- Results -->
      <div class="px-4 py-4">
        <!-- Results Count -->
        <p *ngIf="searchQuery" class="text-sm text-gray-500 mb-4">
          {{ results.length }} địa điểm cho "{{ searchQuery }}"
        </p>

        <!-- Place Cards -->
        <div *ngIf="results.length > 0" class="space-y-4">
          <app-place-card 
            *ngFor="let place of results"
            [place]="place"
          ></app-place-card>
        </div>

        <!-- Empty State -->
        <app-empty-state
          *ngIf="results.length === 0 && searchQuery"
          icon="🔍"
          title="Không tìm thấy"
          message="Không có địa điểm nào phù hợp với tìm kiếm của bạn."
        >
          <a 
            href="/chat" 
            class="mt-4 px-4 py-2 bg-black text-white text-sm rounded-full"
          >
            Hỏi AI trợ lý
          </a>
        </app-empty-state>
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
export class SearchPage implements OnInit, AfterViewInit {
  searchQuery = '';
  selectedCategory = 'all';
  selectedSort = 'default';
  showSort = false;
  results: Place[] = [];
  categories: Category[] = [];
  isLoading = true;

  sortOptions = [
    { value: 'default', label: 'Mặc định' },
    { value: 'rating', label: 'Đánh giá cao' },
    { value: 'az', label: 'A → Z' },
  ];

  @ViewChild('searchInput') searchInput!: ElementRef<HTMLInputElement>;

  constructor(
    private router: Router,
    private apiService: ApiService
  ) {}

  ngAfterViewInit() {
    requestAnimationFrame(() => {
      this.searchInput?.nativeElement?.focus();
    });
  }

  ngOnInit() {
    // Load categories from API
    this.apiService.getCategories().subscribe({
      next: (cats) => {
        this.categories = cats;
      }
    });

    // Load places from API
    this.apiService.getPlaces().subscribe({
      next: (places) => {
        this.results = places;
        this.isLoading = false;
      },
      error: () => {
        this.results = [];
        this.isLoading = false;
      }
    });
  }

  goBack() {
    this.router.navigate(['/home']);
  }

  onSearch() {
    this.applyFilters();
  }

  clearSearch() {
    this.searchQuery = '';
    this.apiService.getPlaces().subscribe({
      next: (places) => {
        this.results = places;
      }
    });
  }

  selectCategory(category: string) {
    this.selectedCategory = category;
    this.applyFilters();
  }

  toggleSort() {
    this.showSort = !this.showSort;
  }

  selectSort(sort: string) {
    this.selectedSort = sort;
    this.applyFilters();
    this.showSort = false;
  }

  applyFilters() {
    let filtered = [...this.results];

    if (this.selectedCategory !== 'all') {
      filtered = filtered.filter(p => p.category === this.selectedCategory);
    }

    if (this.searchQuery) {
      const query = this.searchQuery.toLowerCase();
      filtered = filtered.filter(p => 
        p.name.toLowerCase().includes(query) ||
        p.shortDescription.toLowerCase().includes(query) ||
        p.tags.some((t: string) => t.toLowerCase().includes(query))
      );
    }

    if (this.selectedSort === 'rating') {
      filtered.sort((a, b) => (b.rating || 0) - (a.rating || 0));
    } else if (this.selectedSort === 'az') {
      filtered.sort((a, b) => a.name.localeCompare(b.name));
    }

    this.results = filtered;
  }
}
