import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IonicModule, AlertController, LoadingController } from '@ionic/angular';
import { Router } from '@angular/router';
import { AuthService } from '../../../services';

@Component({
  selector: 'app-settings',
  standalone: true,
  imports: [CommonModule, IonicModule],
  templateUrl: './settings.page.html',
  styleUrls: ['./settings.page.scss']
})
export class SettingsPage implements OnInit {
  userEmail = '';
  userName = '';

  constructor(
    private authService: AuthService,
    private router: Router,
    private alertCtrl: AlertController,
    private loadingCtrl: LoadingController
  ) {}

  ngOnInit() {
    const user = this.authService.currentUser;
    if (user) {
      this.userEmail = user.email || '';
      this.userName = user.displayName || user.email?.split('@')[0] || '';
    }
  }

  async confirmLogout() {
    const alert = await this.alertCtrl.create({
      header: 'Đăng xuất',
      message: 'Bạn có chắc muốn đăng xuất?',
      buttons: [
        { text: 'Hủy', role: 'cancel' },
        {
          text: 'Đăng xuất',
          role: 'destructive',
          handler: () => this.logout()
        }
      ]
    });
    await alert.present();
  }

  private async logout() {
    const loading = await this.loadingCtrl.create({ message: 'Đang đăng xuất...' });
    await loading.present();

    try {
      await this.authService.logout();
      this.router.navigate(['/login']);
    } catch (error) {
      console.error('Logout error:', error);
    } finally {
      loading.dismiss();
    }
  }
}
