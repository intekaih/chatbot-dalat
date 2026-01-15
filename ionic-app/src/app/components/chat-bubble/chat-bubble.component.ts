import { Component, Input, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IonicModule } from '@ionic/angular';
import { ChatMessage } from '../../models';
import { AudioPlayerComponent } from '../audio-player/audio-player.component';
import { StorageService } from '../../services';
import { Capacitor } from '@capacitor/core';

@Component({
  selector: 'app-chat-bubble',
  standalone: true,
  imports: [CommonModule, IonicModule, AudioPlayerComponent],
  templateUrl: './chat-bubble.component.html',
  styleUrls: ['./chat-bubble.component.scss']
})
export class ChatBubbleComponent implements OnInit {
  @Input() message!: ChatMessage;
  
  imageDataUrl: string | null = null;
  audioDataUrl: string | null = null;

  constructor(private storageService: StorageService) {}

  async ngOnInit() {
    if (this.message.localImagePath) {
      await this.loadLocalImage();
    }
    if (this.message.localAudioPath) {
      await this.loadLocalAudio();
    }
  }

  private async loadLocalImage() {
    try {
      if (Capacitor.isNativePlatform()) {
        const uri = await this.storageService.getLocalFileUri(this.message.localImagePath!);
        this.imageDataUrl = Capacitor.convertFileSrc(uri);
      } else {
        const base64 = await this.storageService.readLocalFile(this.message.localImagePath!);
        this.imageDataUrl = `data:image/jpeg;base64,${base64}`;
      }
    } catch (error) {
      console.error('Error loading local image:', error);
    }
  }

  private async loadLocalAudio() {
    try {
      if (Capacitor.isNativePlatform()) {
        const uri = await this.storageService.getLocalFileUri(this.message.localAudioPath!);
        this.audioDataUrl = Capacitor.convertFileSrc(uri);
      } else {
        const base64 = await this.storageService.readLocalFile(this.message.localAudioPath!);
        this.audioDataUrl = `data:audio/webm;base64,${base64}`;
      }
    } catch (error) {
      console.error('Error loading local audio:', error);
    }
  }

  get isUser(): boolean {
    return this.message.role === 'user';
  }

  formatTime(date: Date): string {
    return new Date(date).toLocaleTimeString('vi-VN', {
      hour: '2-digit',
      minute: '2-digit'
    });
  }
}
