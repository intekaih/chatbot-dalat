import { Injectable, signal } from "@angular/core";
import { Geolocation } from '@capacitor/geolocation';

export interface UserLocation {
  lat: number;
  lng: number;
  address?: string;
  city?: string;
}

@Injectable({
  providedIn: "root",
})
export class GeolocationService {
  private _currentLocation = signal<UserLocation | null>(null);
  private _isLoading = signal<boolean>(false);
  private _error = signal<string | null>(null);

  currentLocation = this._currentLocation.asReadonly();
  isLoading = this._isLoading.asReadonly();
  error = this._error.asReadonly();

  /**
   * Xin quyền và lấy vị trí hiện tại bằng @capacitor/geolocation
   * @param enableHighAccuracy - Sử dụng GPS chính xác (tốn pin hơn)
   * @param timeout - Thời gian chờ tối đa (ms)
   */
  async getCurrentLocation(
    enableHighAccuracy: boolean = false,
    timeout: number = 10000,
  ): Promise<UserLocation | null> {
    this._isLoading.set(true);
    this._error.set(null);

    try {
      // Xin quyền truy cập vị trí (Capacitor native)
      const permStatus = await Geolocation.requestPermissions();
      if (permStatus.location === 'denied') {
        this._error.set("Bạn đã từ chối quyền truy cập vị trí");
        this._isLoading.set(false);
        return null;
      }

      // Lấy tọa độ
      const position = await Geolocation.getCurrentPosition({
        enableHighAccuracy,
        timeout,
        maximumAge: 300000, // Cache vị trí trong 5 phút
      });

      const location: UserLocation = {
        lat: position.coords.latitude,
        lng: position.coords.longitude,
      };

      // Thử lấy địa chỉ từ tọa độ (reverse geocoding)
      try {
        const addressInfo = await this.reverseGeocode(location.lat, location.lng);
        if (addressInfo) {
          location.address = addressInfo.address;
          location.city = addressInfo.city;
        }
      } catch (e) {
        console.warn("Reverse geocoding failed:", e);
      }

      this._currentLocation.set(location);
      this._isLoading.set(false);
      return location;
    } catch (err: any) {
      let errorMessage = "Không thể lấy vị trí";
      if (err?.message?.includes('denied')) {
        errorMessage = "Bạn đã từ chối quyền truy cập vị trí";
      } else if (err?.message?.includes('timeout')) {
        errorMessage = "Hết thời gian chờ định vị";
      } else if (err?.message?.includes('unavailable')) {
        errorMessage = "Không thể xác định vị trí";
      }
      this._error.set(errorMessage);
      this._isLoading.set(false);
      return null;
    }
  }

  /**
   * Tính khoảng cách từ vị trí hiện tại đến một điểm
   * @returns Khoảng cách theo km
   */
  calculateDistance(lat1: number, lng1: number, lat2: number, lng2: number): number {
    const R = 6371; // Bán kính Trái Đất (km)
    const dLat = this.toRad(lat2 - lat1);
    const dLng = this.toRad(lng2 - lng1);
    const a =
      Math.sin(dLat / 2) * Math.sin(dLat / 2) +
      Math.cos(this.toRad(lat1)) *
      Math.cos(this.toRad(lat2)) *
      Math.sin(dLng / 2) *
      Math.sin(dLng / 2);
    const c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1 - a));
    return R * c;
  }

  /**
   * Lấy khoảng cách từ vị trí hiện tại đến một địa điểm
   */
  getDistanceToPlace(placeLat: number, placeLng: number): number | null {
    const current = this._currentLocation();
    if (!current) return null;
    return this.calculateDistance(current.lat, current.lng, placeLat, placeLng);
  }

  /**
   * Kiểm tra xem location permission đã được granted chưa
   */
  async checkPermission(): Promise<"granted" | "denied" | "prompt"> {
    try {
      const status = await Geolocation.checkPermissions();
      if (status.location === 'granted') return "granted";
      if (status.location === 'denied') return "denied";
      return "prompt";
    } catch {
      return "prompt";
    }
  }

  /**
   * Reverse Geocoding - Chuyển tọa độ thành địa chỉ
   * Sử dụng Nominatim (OpenStreetMap) - miễn phí
   */
  private async reverseGeocode(
    lat: number,
    lng: number,
  ): Promise<{ address: string; city: string } | null> {
    try {
      const response = await fetch(
        `https://nominatim.openstreetmap.org/reverse?format=json&lat=${lat}&lon=${lng}&zoom=18&addressdetails=1`,
        {
          headers: {
            "User-Agent": "DalatChatbot/1.0",
          },
        },
      );

      if (!response.ok) return null;

      const data = await response.json();
      const address = data.address;

      // Lấy tên thành phố/quận huyện
      const city =
        address.city ||
        address.town ||
        address.village ||
        address.county ||
        "Đà Lạt";

      return {
        address: data.display_name?.split(",").slice(0, 3).join(",") || "",
        city,
      };
    } catch {
      return null;
    }
  }

  private toRad(deg: number): number {
    return deg * (Math.PI / 180);
  }

  /**
   * Xóa vị trí đã lưu
   */
  clearLocation(): void {
    this._currentLocation.set(null);
    this._error.set(null);
  }
}
