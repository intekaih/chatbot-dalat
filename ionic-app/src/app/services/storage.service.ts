import { Injectable, inject } from '@angular/core';
import { Filesystem, Directory, Encoding } from '@capacitor/filesystem';
import { AuthService } from './auth.service';

@Injectable({
  providedIn: 'root'
})
export class StorageService {
  private authService = inject(AuthService);

  private get uid(): string {
    return this.authService.currentUser?.uid || '';
  }

  async saveImageLocally(base64Data: string, fileName?: string): Promise<string> {
    const name = fileName || `image_${Date.now()}.jpg`;
    const path = `dalat-chatbot/${this.uid}/images/${name}`;

    const base64Content = base64Data.includes(',') 
      ? base64Data.split(',')[1] 
      : base64Data;

    await Filesystem.writeFile({
      path,
      data: base64Content,
      directory: Directory.Data,
      recursive: true
    });

    return path;
  }

  async saveAudioLocally(base64Data: string, fileName?: string): Promise<string> {
    const name = fileName || `audio_${Date.now()}.webm`;
    const path = `dalat-chatbot/${this.uid}/audio/${name}`;

    await Filesystem.writeFile({
      path,
      data: base64Data,
      directory: Directory.Data,
      recursive: true
    });

    return path;
  }

  async readLocalFile(path: string): Promise<string> {
    try {
      const result = await Filesystem.readFile({
        path,
        directory: Directory.Data
      });
      return result.data as string;
    } catch (error) {
      console.error('Error reading local file:', error);
      return '';
    }
  }

  async deleteLocalFile(path: string): Promise<void> {
    try {
      await Filesystem.deleteFile({
        path,
        directory: Directory.Data
      });
    } catch (error) {
      console.error('Error deleting local file:', error);
    }
  }

  async getLocalFileUri(path: string): Promise<string> {
    try {
      const result = await Filesystem.getUri({
        path,
        directory: Directory.Data
      });
      return result.uri;
    } catch (error) {
      console.error('Error getting file URI:', error);
      return '';
    }
  }
}
