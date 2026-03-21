import { Injectable, signal } from "@angular/core";

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
   * Xin quyền và lấy vị trí hiện tại
   * @param enableHighAccuracy - Sử dụng GPS chính xác (tốn pin hơn)
   * @param timeout - Thời gian chờ tối đa (ms)
   */
  async getCurrentLocation(
    enableHighAccuracy: boolean = false,
    timeout: number = 10000,
  ): Promise<UserLocation | null> {
    // Kiểm tra hỗ trợ Geolocation
    if (!navigator.geolocation) {
      this._error.set("Trình duyệt không hỗ trợ định vị");
      return null;
    }

    this._isLoading.set(true);
    this._error.set(null);

    return new Promise((resolve) => {
      navigator.geolocation.getCurrentPosition(
        async (position) => {
          const location: UserLocation = {
            lat: position.coords.latitude,
            lng: position.coords.longitude,
          };

          // Thử lấy địa chỉ từ tọa độ (reverse geocoding)
          try {
            const addressInfo = await this.reverseGeocode(
              location.lat,
              location.lng,
            );
            if (addressInfo) {
              location.address = addressInfo.address;
              location.city = addressInfo.city;
            }
          } catch (e) {
            console.warn("Reverse geocoding failed:", e);
          }

          this._currentLocation.set(location);
          this._isLoading.set(false);
          resolve(location);
        },
        (err) => {
          let errorMessage = "Không thể lấy vị trí";
          switch (err.code) {
            case err.PERMISSION_DENIED:
              errorMessage = "Bạn đã từ chối quyền truy cập vị trí";
              break;
            case err.POSITION_UNAVAILABLE:
              errorMessage = "Không thể xác định vị trí";
              break;
            case err.TIMEOUT:
              errorMessage = "Hết thời gian chờ định vị";
              break;
          }
          this._error.set(errorMessage);
          this._isLoading.set(false);
          resolve(null);
        },
        {
          enableHighAccuracy,
          timeout,
          maximumAge: 300000, // Cache vị trí trong 5 phút
        },
      );
    });
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
    // Simplified: luôn trả về "prompt" để kích hoạt xin quyền
    // Browser sẽ tự xử lý permission request khi gọi getCurrentLocation
    return "prompt";
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
