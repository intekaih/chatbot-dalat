import { Injectable, inject } from '@angular/core';
import { Storage, ref, uploadBytes, getDownloadURL } from '@angular/fire/storage';
import { AuthService } from './auth.service';

@Injectable({
  providedIn: 'root'
})
export class StorageService {
  private storage = inject(Storage);
  private authService = inject(AuthService);

  private get uid(): string {
    return this.authService.currentUser?.uid || '';
  }

  async uploadImage(base64Data: string, fileName?: string): Promise<string> {
    const name = fileName || `image_${Date.now()}.jpg`;
    const path = `users/${this.uid}/images/${name}`;
    const storageRef = ref(this.storage, path);

    const base64Content = base64Data.includes(',') 
      ? base64Data.split(',')[1] 
      : base64Data;
    
    const byteString = atob(base64Content);
    const ab = new ArrayBuffer(byteString.length);
    const ia = new Uint8Array(ab);
    for (let i = 0; i < byteString.length; i++) {
      ia[i] = byteString.charCodeAt(i);
    }
    const blob = new Blob([ab], { type: 'image/jpeg' });

    await uploadBytes(storageRef, blob);
    return getDownloadURL(storageRef);
  }

  async uploadAudio(blob: Blob, fileName?: string): Promise<string> {
    const name = fileName || `audio_${Date.now()}.webm`;
    const path = `users/${this.uid}/audio/${name}`;
    const storageRef = ref(this.storage, path);

    await uploadBytes(storageRef, blob);
    return getDownloadURL(storageRef);
  }
}
