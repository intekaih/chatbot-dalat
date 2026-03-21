import { Injectable, inject, signal, OnDestroy } from '@angular/core';
import { Network } from '@capacitor/network';
import { toObservable } from '@angular/core/rxjs-interop';

@Injectable({
    providedIn: 'root',
})
export class NetworkService {
    /** Signal theo dõi trạng thái online/offline */
    isOnline = signal<boolean>(true);

    /** Observable từ signal, dùng trong component/pipe */
    isOnline$ = toObservable(this.isOnline);

    private listenerHandle: any = null;

    constructor() {
        this.init();
    }

    private async init() {
        try {
            // Lấy trạng thái ban đầu
            const status = await Network.getStatus();
            this.isOnline.set(status.connected);

            // Lắng nghe thay đổi
            this.listenerHandle = await Network.addListener('networkStatusChange', (status) => {
                this.isOnline.set(status.connected);
                if (status.connected) {
                    console.log('📶 [Network] Back online');
                } else {
                    console.warn('📵 [Network] Offline');
                }
            });
        } catch (e) {
            // Fallback cho browser/web: dùng navigator.onLine
            this.isOnline.set(navigator.onLine);

            window.addEventListener('online', () => this.isOnline.set(true));
            window.addEventListener('offline', () => this.isOnline.set(false));
        }
    }

    async getCurrentStatus(): Promise<{ connected: boolean; connectionType: string }> {
        try {
            const status = await Network.getStatus();
            return status;
        } catch {
            return { connected: navigator.onLine, connectionType: 'unknown' };
        }
    }
}
