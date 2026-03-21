import { Injectable, inject, signal } from '@angular/core';
import {
    Storage,
    ref,
    uploadBytes,
    getDownloadURL,
    deleteObject,
} from '@angular/fire/storage';
import { Auth } from '@angular/fire/auth';
import { from, Observable, catchError, of, switchMap } from 'rxjs';

@Injectable({
    providedIn: 'root',
})
export class StorageService {
    private storage = inject(Storage);
    private auth = inject(Auth);

    private get uid(): string {
        return this.auth.currentUser?.uid ?? 'anonymous';
    }

    /**
     * Upload ảnh chat lên Firebase Storage
     * @param dataUrl - Base64 data URL (từ Camera hoặc FileReader)
     * @returns Observable<string> - Firebase Storage download URL
     */
    uploadChatImage(dataUrl: string): Observable<string> {
        return new Observable<string>((observer) => {
            // Convert base64 data URL → Blob
            const byteString = atob(dataUrl.split(',')[1]);
            const mimeString = dataUrl.split(',')[0].split(':')[1].split(';')[0];
            const ab = new ArrayBuffer(byteString.length);
            const ia = new Uint8Array(ab);
            for (let i = 0; i < byteString.length; i++) {
                ia[i] = byteString.charCodeAt(i);
            }
            const blob = new Blob([ab], { type: mimeString });

            // Upload lên Storage
            const ext = mimeString.split('/')[1] || 'jpg';
            const filename = `${Date.now()}.${ext}`;
            const storagePath = `chats/${this.uid}/${filename}`;
            const storageRef = ref(this.storage, storagePath);

            uploadBytes(storageRef, blob)
                .then((snapshot) => getDownloadURL(snapshot.ref))
                .then((url) => {
                    observer.next(url);
                    observer.complete();
                })
                .catch((err) => {
                    console.error('StorageService.uploadChatImage error:', err);
                    observer.error(err);
                });
        }).pipe(
            catchError((err) => {
                console.warn('Upload failed, returning original dataUrl as fallback');
                return of(dataUrl); // Fallback: trả lại base64 nếu upload fail
            })
        );
    }

    /**
     * Upload avatar người dùng
     * @param file - File ảnh
     * @returns Observable<string> - Download URL
     */
    uploadAvatar(file: File): Observable<string> {
        return new Observable<string>((observer) => {
            const ext = file.name.split('.').pop() || 'jpg';
            const storagePath = `avatars/${this.uid}/avatar.${ext}`;
            const storageRef = ref(this.storage, storagePath);

            uploadBytes(storageRef, file)
                .then((snapshot) => getDownloadURL(snapshot.ref))
                .then((url) => {
                    observer.next(url);
                    observer.complete();
                })
                .catch((err) => observer.error(err));
        }).pipe(
            catchError(() => of(''))
        );
    }

    /**
     * Xóa file khỏi Storage theo URL
     */
    async deleteFile(downloadUrl: string): Promise<void> {
        try {
            const storageRef = ref(this.storage, downloadUrl);
            await deleteObject(storageRef);
        } catch (e) {
            console.warn('StorageService.deleteFile error:', e);
        }
    }
}
