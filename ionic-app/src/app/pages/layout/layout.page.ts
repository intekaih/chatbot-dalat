import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Router } from '@angular/router';
import { IonicModule, MenuController } from '@ionic/angular';
import { AuthService } from '../../services';

@Component({
  selector: 'app-layout',
  standalone: true,
  imports: [CommonModule, RouterModule, IonicModule],
  template: `
    <ion-menu contentId="main-content" type="overlay">
      <ion-header>
        <ion-toolbar>
          <ion-title>Đà Lạt Travel</ion-title>
        </ion-toolbar>
      </ion-header>
      <ion-content>
        <ion-list lines="none">
          <ion-item 
            button 
            (click)="navigateTo('/app/chat')"
            [class.active]="isActive('/app/chat')">
            <ion-icon name="chatbubbles-outline" slot="start"></ion-icon>
            <ion-label>Tư vấn du lịch</ion-label>
          </ion-item>
          <ion-item 
            button 
            (click)="navigateTo('/app/history')"
            [class.active]="isActive('/app/history')">
            <ion-icon name="time-outline" slot="start"></ion-icon>
            <ion-label>Lịch sử chat</ion-label>
          </ion-item>
          <ion-item 
            button 
            (click)="navigateTo('/app/saved')"
            [class.active]="isActive('/app/saved')">
            <ion-icon name="bookmark-outline" slot="start"></ion-icon>
            <ion-label>Địa điểm đã lưu</ion-label>
          </ion-item>
          <ion-item 
            button 
            (click)="navigateTo('/app/settings')"
            [class.active]="isActive('/app/settings')">
            <ion-icon name="settings-outline" slot="start"></ion-icon>
            <ion-label>Cài đặt</ion-label>
          </ion-item>
        </ion-list>
        
        <div class="menu-footer">
          <ion-item button (click)="logout()" lines="none" class="logout-item">
            <ion-icon name="log-out-outline" slot="start" color="danger"></ion-icon>
            <ion-label color="danger">Đăng xuất</ion-label>
          </ion-item>
        </div>
      </ion-content>
    </ion-menu>
    
    <ion-router-outlet id="main-content"></ion-router-outlet>
  `,
  styles: [`
    ion-menu ion-header ion-toolbar {
      --background: var(--app-primary);
      --color: white;
    }
    
    ion-menu ion-content {
      --background: var(--app-surface);
    }
    
    ion-menu ion-list {
      padding: var(--spacing-lg) 0;
    }
    
    ion-menu ion-item {
      --background: transparent;
      --padding-start: var(--spacing-xl);
      --min-height: 56px;
      margin: var(--spacing-xs) var(--spacing-md);
      border-radius: var(--radius-md);
      
      ion-icon {
        font-size: 24px;
        margin-right: var(--spacing-md);
        color: var(--app-text-secondary);
      }
      
      ion-label {
        font-weight: 600;
        font-size: 16px;
      }
    }
    
    ion-menu ion-item.active {
      --background: rgba(45, 122, 79, 0.12);
      
      ion-icon {
        color: var(--app-primary);
      }
      
      ion-label {
        color: var(--app-primary);
      }
    }
    
    .menu-footer {
      position: absolute;
      bottom: 0;
      left: 0;
      right: 0;
      padding: var(--spacing-lg);
      border-top: 1px solid var(--app-border);
    }
    
    .logout-item {
      --background: transparent;
      margin: 0;
    }
  `]
})
export class LayoutPage {
  constructor(
    private router: Router,
    private menuCtrl: MenuController,
    private authService: AuthService
  ) {}

  navigateTo(path: string) {
    this.router.navigate([path]);
    this.menuCtrl.close();
  }

  isActive(path: string): boolean {
    return this.router.url.startsWith(path);
  }

  async logout() {
    await this.authService.logout();
    this.menuCtrl.close();
    this.router.navigate(['/login']);
  }
}
