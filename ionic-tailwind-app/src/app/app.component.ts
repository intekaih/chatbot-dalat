import { Component, inject } from '@angular/core';
import { IonicModule } from '@ionic/angular';
import { OfflineBannerComponent } from './components/offline-banner/offline-banner.component';
import { NetworkService } from './services/network.service';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [IonicModule, OfflineBannerComponent],
  template: `
    <ion-app>
      <!-- Offline banner — hiển thị khi mất kết nối mạng -->
      <app-offline-banner></app-offline-banner>
      <ion-router-outlet></ion-router-outlet>
    </ion-app>
  `
})
export class AppComponent {
  // Inject NetworkService để kích hoạt listener ngay khi app khởi động
  private _network = inject(NetworkService);
}
