import { Injectable, inject } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { Observable, of, map, catchError, tap } from "rxjs";

export interface WeatherData {
  temp: number;
  feelsLike: number;
  condition: string;
  icon: string;
  humidity: number;
  wind: number;
  visibility: string;
  uvIndex: number;
  forecast: ForecastDay[];
  location: string;
  updatedAt: Date;
}

export interface ForecastDay {
  day: string;
  icon: string;
  condition: string;
  high: number;
  low: number;
}

interface CacheEntry {
  data: WeatherData;
  expiresAt: number;
}

@Injectable({ providedIn: "root" })
export class WeatherService {
  private http = inject(HttpClient);

  // Toạ độ trung tâm Đà Lạt
  private readonly LAT = 11.9465;
  private readonly LON = 108.4419;
  private readonly LOCATION = "Đà Lạt, Lâm Đồng";

  private readonly API_URL = "https://api.open-meteo.com/v1/forecast";
  private readonly CACHE_TTL_MS = 15 * 60 * 1000; // 15 phút

  private cache: CacheEntry | null = null;

  /**
   * Lấy dữ liệu thời tiết thực từ Open-Meteo.
   * Kết quả được cache 15 phút để tránh gọi API quá nhiều.
   */
  getWeather(): Observable<WeatherData> {
    if (this.cache && Date.now() < this.cache.expiresAt) {
      return of(this.cache.data);
    }

    const params: Record<string, string | number> = {
      latitude: this.LAT,
      longitude: this.LON,
      current: [
        "temperature_2m",
        "relative_humidity_2m",
        "apparent_temperature",
        "weather_code",
        "wind_speed_10m",
        "visibility",
        "uv_index",
        "precipitation",
      ].join(","),
      daily: [
        "weather_code",
        "temperature_2m_max",
        "temperature_2m_min",
        "precipitation_sum",
      ].join(","),
      timezone: "Asia/Ho_Chi_Minh",
      forecast_days: 5,
      wind_speed_unit: "kmh",
    };

    return this.http.get<any>(this.API_URL, { params }).pipe(
      map((res) => this.mapResponse(res)),
      tap((data) => {
        this.cache = { data, expiresAt: Date.now() + this.CACHE_TTL_MS };
      }),
      catchError((err) => {
        console.warn("WeatherService: API call failed, using defaults.", err);
        return of(this.getDefaultData());
      }),
    );
  }

  /** Xoá cache thủ công (dùng khi cần force-refresh) */
  clearCache(): void {
    this.cache = null;
  }

  // ── Private helpers ──────────────────────────────────────────────────────

  private mapResponse(res: any): WeatherData {
    const cur = res.current ?? {};
    const daily = res.daily ?? {};

    const code: number = cur.weather_code ?? 0;
    const { icon, condition } = this.wmoToInfo(code);

    const visibilityM: number = cur.visibility ?? 10_000;
    const visibility = this.formatVisibility(visibilityM);

    const forecast = this.buildForecast(daily);

    return {
      temp: Math.round(cur.temperature_2m ?? 18),
      feelsLike: Math.round(cur.apparent_temperature ?? 15),
      condition,
      icon,
      humidity: Math.round(cur.relative_humidity_2m ?? 80),
      wind: Math.round(cur.wind_speed_10m ?? 8),
      visibility,
      uvIndex: Math.round(cur.uv_index ?? 0),
      forecast,
      location: this.LOCATION,
      updatedAt: new Date(),
    };
  }

  private buildForecast(daily: any): ForecastDay[] {
    const times: string[] = daily.time ?? [];
    const codes: number[] = daily.weather_code ?? [];
    const highs: number[] = daily.temperature_2m_max ?? [];
    const lows: number[] = daily.temperature_2m_min ?? [];

    const VI_DAYS = ["CN", "T.2", "T.3", "T.4", "T.5", "T.6", "T.7"];

    return times.slice(0, 5).map((dateStr: string, i: number) => {
      const date = new Date(dateStr + "T00:00:00");
      const dayLabel = i === 0 ? "Hôm nay" : VI_DAYS[date.getDay()];
      const { icon, condition } = this.wmoToInfo(codes[i] ?? 0);
      return {
        day: dayLabel,
        icon,
        condition,
        high: Math.round(highs[i] ?? 20),
        low: Math.round(lows[i] ?? 14),
      };
    });
  }

  /**
   * WMO Weather Interpretation Codes → icon + mô tả tiếng Việt
   * https://open-meteo.com/en/docs#weathervariables
   */
  private wmoToInfo(code: number): { icon: string; condition: string } {
    // 0
    if (code === 0) return { icon: "☀️", condition: "Trời quang" };
    // 1–3
    if (code === 1) return { icon: "🌤️", condition: "Ít mây" };
    if (code === 2) return { icon: "⛅", condition: "Có mây rải rác" };
    if (code === 3) return { icon: "☁️", condition: "Nhiều mây" };
    // 45–48 fog
    if (code === 45 || code === 48)
      return { icon: "🌫️", condition: "Sương mù" };
    // 51–55 drizzle
    if (code >= 51 && code <= 55) return { icon: "🌦️", condition: "Mưa phùn" };
    // 56–57 freezing drizzle
    if (code >= 56 && code <= 57)
      return { icon: "🌨️", condition: "Mưa phùn lạnh" };
    // 61–65 rain
    if (code === 61) return { icon: "🌧️", condition: "Mưa nhẹ" };
    if (code === 63) return { icon: "🌧️", condition: "Có mưa" };
    if (code === 65) return { icon: "🌧️", condition: "Mưa to" };
    // 66–67 freezing rain
    if (code >= 66 && code <= 67)
      return { icon: "🌨️", condition: "Mưa đá nhỏ" };
    // 71–77 snow
    if (code >= 71 && code <= 75) return { icon: "❄️", condition: "Có tuyết" };
    if (code === 77) return { icon: "❄️", condition: "Tuyết hạt" };
    // 80–82 showers
    if (code === 80) return { icon: "🌦️", condition: "Mưa rào nhẹ" };
    if (code === 81) return { icon: "🌧️", condition: "Mưa rào" };
    if (code === 82) return { icon: "⛈️", condition: "Mưa rào mạnh" };
    // 85–86 snow showers
    if (code >= 85 && code <= 86)
      return { icon: "🌨️", condition: "Mưa tuyết" };
    // 95 thunderstorm
    if (code === 95) return { icon: "⛈️", condition: "Giông bão" };
    // 96–99 thunderstorm + hail
    if (code >= 96 && code <= 99)
      return { icon: "⛈️", condition: "Giông kèm mưa đá" };
    // fallback
    return { icon: "⛅", condition: "Có mây" };
  }

  private formatVisibility(meters: number): string {
    if (meters >= 10_000) return "Tốt";
    if (meters >= 5_000) return "Khá";
    if (meters >= 1_000) return `${(meters / 1000).toFixed(1)} km`;
    return `${meters} m`;
  }

  private getDefaultData(): WeatherData {
    return {
      temp: 18,
      feelsLike: 15,
      condition: "Có mây rải rác",
      icon: "⛅",
      humidity: 82,
      wind: 8,
      visibility: "Tốt",
      uvIndex: 3,
      location: this.LOCATION,
      updatedAt: new Date(),
      forecast: [
        { day: "Hôm nay", icon: "⛅", condition: "Có mây", high: 18, low: 14 },
        { day: "T.6", icon: "☀️", condition: "Trời quang", high: 21, low: 15 },
        { day: "T.7", icon: "🌧️", condition: "Có mưa", high: 16, low: 12 },
        { day: "CN", icon: "⛅", condition: "Ít mây", high: 19, low: 14 },
        { day: "T.2", icon: "☀️", condition: "Trời quang", high: 22, low: 16 },
      ],
    };
  }
}
