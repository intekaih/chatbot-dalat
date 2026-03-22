import { Component, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, RouterOutlet } from '@angular/router';
import { BottomTabBarComponent } from '../bottom-tab-bar/bottom-tab-bar.component';
import { ThemeService } from '../../../services/theme.service';

@Component({
  selector: 'app-main-layout',
  standalone: true,
  imports: [CommonModule, RouterModule, RouterOutlet, BottomTabBarComponent],
  template: `
    <div [class.dark]="themeService.darkMode()" class="h-dvh flex flex-col overflow-hidden bg-white dark:bg-gray-900 transition-colors">
      <main class="flex-1 overflow-y-auto overflow-x-hidden pb-16 scrollbar-hide" style="-ms-overflow-style:none;scrollbar-width:none;">
        <router-outlet></router-outlet>
      </main>
      <app-bottom-tab-bar></app-bottom-tab-bar>
    </div>
  `,
  styles: [`
    main::-webkit-scrollbar {
      display: none;
    }
  `]
})
export class MainLayoutComponent {
  themeService = inject(ThemeService);
}
