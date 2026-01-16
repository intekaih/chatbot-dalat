import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Router, RouterLink } from '@angular/router';
import { IonicModule, LoadingController, ToastController } from '@ionic/angular';
import { AuthService } from '../../../services';

@Component({
  selector: 'app-register',
  standalone: true,
  imports: [CommonModule, FormsModule, IonicModule, RouterLink],
  templateUrl: './register.page.html',
  styleUrls: ['./register.page.scss']
})
export class RegisterPage {
  displayName = '';
  email = '';
  password = '';
  confirmPassword = '';

  constructor(
    private authService: AuthService,
    private router: Router,
    private loadingCtrl: LoadingController,
    private toastCtrl: ToastController
  ) {}

  async register() {
    if (!this.email || !this.password || !this.displayName) {
      this.showToast('Vui lòng điền đầy đủ thông tin');
      return;
    }

    if (this.password !== this.confirmPassword) {
      this.showToast('Mật khẩu xác nhận không khớp');
      return;
    }

    if (this.password.length < 6) {
      this.showToast('Mật khẩu phải có ít nhất 6 ký tự');
      return;
    }

    const loading = await this.loadingCtrl.create({ message: 'Đang đăng ký...' });
    await loading.present();

    try {
      await this.authService.register(this.email, this.password, this.displayName);
      this.router.navigate(['/app/chat']);
    } catch (error: any) {
      this.showToast(error.message || 'Đăng ký thất bại');
    } finally {
      loading.dismiss();
    }
  }

  private async showToast(message: string) {
    const toast = await this.toastCtrl.create({
      message,
      duration: 3000,
      position: 'bottom'
    });
    toast.present();
  }
}
