import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';

interface ForecastDay {
  day: string;
  icon: string;
  high: number;
  low: number;
}

@Component({
  selector: 'app-weather-widget',
  standalone: true,
  imports: [CommonModule],
  template: `
    <div class="bg-gradient-to-br from-gray-900 to-gray-800 rounded-2xl p-4 text-white">
      <div class="flex items-start justify-between mb-4">
        <div>
          <div class="flex items-baseline gap-2">
            <span class="text-4xl font-semibold">{{ temp }}°</span>
            <span class="text-lg text-gray-300">{{ condition }}</span>
          </div>
          <p class="text-sm text-gray-400">Cảm giác như {{ feelsLike }}°C</p>
        </div>
        <span class="text-5xl">{{ icon }}</span>
      </div>

      <div class="flex justify-between py-3 border-t border-gray-700">
        <div class="text-center">
          <div class="text-xs text-gray-400 mb-1">Độ ẩm</div>
          <div class="text-sm font-medium">{{ humidity }}%</div>
        </div>
        <div class="text-center">
          <div class="text-xs text-gray-400 mb-1">Gió</div>
          <div class="text-sm font-medium">{{ wind }}km/h</div>
        </div>
        <div class="text-center">
          <div class="text-xs text-gray-400 mb-1">Tầm nhìn</div>
          <div class="text-sm font-medium">{{ visibility }}</div>
        </div>
      </div>

      <div class="flex justify-between pt-3 border-t border-gray-700">
        <div *ngFor="let day of forecast" class="text-center">
          <div class="text-xs text-gray-400 mb-1">{{ day.day }}</div>
          <div class="text-xl mb-1">{{ day.icon }}</div>
          <div class="text-xs">
            <span class="font-medium">{{ day.high }}°</span>
            <span class="text-gray-400">/{{ day.low }}°</span>
          </div>
        </div>
      </div>
    </div>
  `
})
export class WeatherWidgetComponent {
  @Input() temp = 18;
  @Input() feelsLike = 15;
  @Input() condition = 'Có mây rải rác';
  @Input() icon = '⛅';
  @Input() humidity = 82;
  @Input() wind = 8;
  @Input() visibility = 'Tốt';
  @Input() forecast: ForecastDay[] = [
    { day: 'H.nay', icon: '⛅', high: 18, low: 14 },
    { day: 'T.6', icon: '☀️', high: 21, low: 15 },
    { day: 'T.7', icon: '🌧️', high: 16, low: 12 },
    { day: 'CN', icon: '⛅', high: 19, low: 14 },
    { day: 'T.2', icon: '☀️', high: 22, low: 16 },
  ];
}
