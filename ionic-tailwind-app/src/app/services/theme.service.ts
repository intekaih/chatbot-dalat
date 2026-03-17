import { Injectable, signal, effect } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ThemeService {
  private readonly STORAGE_KEY = 'darkMode';
  
  darkMode = signal<boolean>(false);

  constructor() {
    const savedTheme = localStorage.getItem(this.STORAGE_KEY);
    const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
    this.darkMode.set(savedTheme ? savedTheme === 'true' : prefersDark);
    
    effect(() => {
      const isDark = this.darkMode();
      localStorage.setItem(this.STORAGE_KEY, String(isDark));
      
      if (isDark) {
        document.documentElement.classList.add('dark');
      } else {
        document.documentElement.classList.remove('dark');
      }
    });
  }

  toggle() {
    this.darkMode.update(v => !v);
  }

  set(value: boolean) {
    this.darkMode.set(value);
  }
}
