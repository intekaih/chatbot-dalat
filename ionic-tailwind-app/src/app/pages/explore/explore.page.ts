import { Component, OnInit, HostListener, ElementRef, ViewChild } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Router, ActivatedRoute } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { SearchBarComponent } from '../../components/ui/search-bar/search-bar.component';
import { CategoryChipComponent } from '../../components/ui/category-chip/category-chip.component';
import { PlaceCardComponent } from '../../components/place/place-card/place-card.component';
import { EmptyStateComponent } from '../../components/ui/empty-state/empty-state.component';
import { ApiService, Category, Place } from '../../services/api.service';

type SortOption = 'featured' | 'rating' | 'open';

@Component({
  selector: 'app-explore',
  standalone: true,
  imports: [
    CommonModule,
    FormsModule,
    SearchBarComponent,
    CategoryChipComponent,
    PlaceCardComponent,
    EmptyStateComponent
  ],
  template: `
    <div class="bg-white">
      <!-- Sticky Header -->
      <div class="sticky top-0 bg-white z-10 px-4 pt-12 pb-4 border-b border-gray-100">
        <div class="flex items-center justify-between mb-4">
          <h1 class="text-2xl font-semibold text-gray-900">Khám phá</h1>
          <button 
            (click)="toggleFilter()"
            class="flex items-center gap-2 px-3 py-2 rounded-xl border"
            [class]="showFilter ? 'bg-black text-white border-black' : 'bg-white text-gray-600 border-gray-200'"
          >
            <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 4a1 1 0 011-1h16a1 1 0 011 1v2.586a1 1 0 01-.293.707l-6.414 6.414a1 1 0 00-.293.707V17l-4 4v-6.586a1 1 0 00-.293-.707L3.293 7.293A1 1 0 013 6.586V4z" />
            </svg>
            <span class="text-sm">Lọc</span>
            <span *ngIf="hasActiveFilter" class="w-2 h-2 bg-white rounded-full"></span>
          </button>
        </div>

        <!-- Filter Dropdown -->
        <div #filterDropdown *ngIf="showFilter" class="absolute right-4 top-24 mt-2 w-48 bg-white border border-gray-200 rounded-2xl shadow-lg z-20 p-2">
          <button 
            *ngFor="let option of sortOptions"
            (click)="selectSort(option.value)"
            class="w-full flex items-center gap-2 px-3 py-2 rounded-xl hover:bg-gray-50 text-left"
            [class]="selectedSort === option.value ? 'bg-gray-100' : ''"
          >
            <span class="text-sm">{{ option.icon }}</span>
            <span class="text-sm text-gray-900">{{ option.label }}</span>
            <span *ngIf="selectedSort === option.value" class="ml-auto text-xs">✓</span>
          </button>
        </div>

        <!-- Search Bar -->
        <div class="mb-4">
          <app-search-bar 
            [(value)]="searchQuery"
            placeholder="Tìm địa điểm..."
            (search)="onSearch()"
          ></app-search-bar>
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
            [isPremium]="cat.id === 'signature'"
            (click)="selectCategory(cat.id)"
          ></app-category-chip>
        </div>
      </div>

      <!-- Results -->
      <div class="px-4 py-4">
        <!-- Results Count -->
        <div class="flex items-center justify-between mb-4">
          <p class="text-sm text-gray-500">{{ filteredPlaces.length }} địa điểm</p>
          <button 
            *ngIf="hasActiveFilter"
            (click)="clearFilters()"
            class="text-sm text-gray-500 underline"
          >
            Bỏ lọc
          </button>
        </div>

        <!-- Place Cards -->
        <div *ngIf="filteredPlaces.length > 0" class="space-y-4">
          <app-place-card 
            *ngFor="let place of filteredPlaces"
            [place]="place"
          ></app-place-card>
        </div>

        <!-- Empty State -->
        <app-empty-state
          *ngIf="filteredPlaces.length === 0"
          icon="🔍"
          title="Không tìm thấy"
          message="Không có địa điểm nào phù hợp với tìm kiếm của bạn."
        ></app-empty-state>
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
export class ExplorePage implements OnInit {
  @ViewChild('filterDropdown') filterDropdown!: ElementRef;

  categories: Category[] = [];
  places: Place[] = [];
  filteredPlaces: Place[] = [];
  searchQuery = '';
  selectedCategory = 'all';
  selectedSort: SortOption = 'featured';
  showFilter = false;
  isLoading = true;

  sortOptions = [
    { value: 'featured' as SortOption, label: 'Mặc định', icon: '✦' },
    { value: 'rating' as SortOption, label: 'Đánh giá cao nhất', icon: '⭐' },
    { value: 'open' as SortOption, label: 'Đang mở cửa', icon: '🕐' },
  ];

  constructor(
    private router: Router,
    private route: ActivatedRoute,
    private apiService: ApiService
  ) { }

  ngOnInit() {
    // Load categories from API
    this.apiService.getCategories().subscribe({
      next: (cats) => {
        this.categories = cats;
      },
      error: () => {
        // Fallback - use empty array, will use default
        this.categories = [];
      }
    });

    // Load places from API
    this.apiService.getPlaces().subscribe({
      next: (places) => {
        this.places = places;
        this.applyFilters();
        this.isLoading = false;
        // Refresh ảnh: DB chỉ có Pexels → thay bằng Gemini URL (load được ở browser)
        this.apiService.refreshPlaceImages(this.places).subscribe();
      },
      error: () => {
        // Fallback
        this.places = [];
        this.isLoading = false;
      }
    });

    this.route.queryParams.subscribe(params => {
      if (params['category']) {
        this.selectedCategory = params['category'];
      }
    });
  }

  get hasActiveFilter(): boolean {
    return this.selectedCategory !== 'all' || this.searchQuery !== '' || this.selectedSort !== 'featured';
  }

  selectCategory(category: string) {
    this.selectedCategory = category;
    this.applyFilters();
  }

  selectSort(sort: SortOption) {
    this.selectedSort = sort;
    this.applyFilters();
    this.showFilter = false;
  }

  toggleFilter() {
    this.showFilter = !this.showFilter;
  }

  @HostListener('document:click', ['$event'])
  onDocumentClick(event: MouseEvent) {
    if (this.showFilter && this.filterDropdown) {
      const clickedInside = this.filterDropdown.nativeElement.contains(event.target);
      const filterButton = (event.target as HTMLElement).closest('button');
      const isFilterButton = filterButton?.textContent?.includes('Lọc');

      if (!clickedInside && !isFilterButton) {
        this.showFilter = false;
      }
    }
  }

  onSearch() {
    this.applyFilters();
  }

  clearFilters() {
    this.selectedCategory = 'all';
    this.searchQuery = '';
    this.selectedSort = 'featured';
    this.applyFilters();
  }

  applyFilters() {
    let filtered = [...this.places];

    if (this.selectedCategory !== 'all') {
      filtered = filtered.filter(p => p.category === this.selectedCategory);
    }

    if (this.searchQuery) {
      const query = this.searchQuery.toLowerCase();
      filtered = filtered.filter(p =>
        p.name.toLowerCase().includes(query) ||
        p.shortDescription.toLowerCase().includes(query) ||
        p.tags.some(t => t.toLowerCase().includes(query))
      );
    }

    if (this.selectedSort === 'rating') {
      filtered.sort((a, b) => (b.rating || 0) - (a.rating || 0));
    } else if (this.selectedSort === 'featured') {
      filtered.sort((a, b) => (b.featured ? 1 : 0) - (a.featured ? 1 : 0));
    }

    this.filteredPlaces = filtered;
  }
}
