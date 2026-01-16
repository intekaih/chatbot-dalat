import { Component, OnDestroy } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonicModule, AlertController, ToastController, ViewWillEnter, ViewDidLeave } from '@ionic/angular';
import { Subscription } from 'rxjs';
import { FavoritePlace } from '../../../models';
import { FirestoreService } from '../../../services';

@Component({
  selector: 'app-favorites',
  standalone: true,
  imports: [CommonModule, FormsModule, IonicModule],
  templateUrl: './favorites.page.html',
  styleUrls: ['./favorites.page.scss']
})
export class FavoritesPage implements OnDestroy, ViewWillEnter, ViewDidLeave {
  favorites: FavoritePlace[] = [];
  private subscription?: Subscription;

  constructor(
    private firestoreService: FirestoreService,
    private alertCtrl: AlertController,
    private toastCtrl: ToastController
  ) {}

  ionViewWillEnter() {
    this.loadFavorites();
  }

  ionViewDidLeave() {
    this.subscription?.unsubscribe();
  }

  ngOnDestroy() {
    this.subscription?.unsubscribe();
  }

  loadFavorites() {
    this.subscription?.unsubscribe();
    this.subscription = this.firestoreService.getFavorites().subscribe(favs => {
      this.favorites = favs;
    });
  }

  async addFavorite() {
    const alert = await this.alertCtrl.create({
      header: 'Thêm địa điểm yêu thích',
      cssClass: 'dalat-alert dalat-alert-input',
      inputs: [
        { name: 'name', type: 'text', placeholder: 'Tên địa điểm' },
        { name: 'address', type: 'text', placeholder: 'Địa chỉ' },
        { name: 'description', type: 'textarea', placeholder: 'Mô tả' }
      ],
      buttons: [
        { text: 'Hủy', role: 'cancel', cssClass: 'alert-btn-cancel' },
        {
          text: 'Thêm',
          cssClass: 'alert-btn-confirm',
          handler: async (data) => {
            if (data.name) {
              try {
                await this.firestoreService.addFavorite({
                  name: data.name,
                  address: data.address,
                  description: data.description
                });
                this.showToast('Đã thêm địa điểm!');
              } catch (error) {
                this.showToast('Lỗi khi thêm địa điểm');
              }
            }
          }
        }
      ]
    });
    await alert.present();
  }

  async removeFavorite(fav: FavoritePlace) {
    const alert = await this.alertCtrl.create({
      header: 'Xác nhận xóa',
      message: `Bạn có muốn xóa "${fav.name}" khỏi danh sách yêu thích?`,
      cssClass: 'dalat-alert dalat-alert-danger',
      buttons: [
        { text: 'Hủy', role: 'cancel', cssClass: 'alert-btn-cancel' },
        {
          text: 'Xóa',
          role: 'destructive',
          cssClass: 'alert-btn-danger',
          handler: async () => {
            try {
              await this.firestoreService.removeFavorite(fav.id);
              this.showToast('Đã xóa khỏi yêu thích');
            } catch (error) {
              this.showToast('Lỗi khi xóa');
            }
          }
        }
      ]
    });
    await alert.present();
  }

  formatDate(date: Date): string {
    return new Date(date).toLocaleDateString('vi-VN');
  }

  private async showToast(message: string) {
    const toast = await this.toastCtrl.create({
      message,
      duration: 2000,
      position: 'bottom'
    });
    toast.present();
  }
}
