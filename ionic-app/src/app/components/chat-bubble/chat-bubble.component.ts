import { Component, Input, Output, EventEmitter, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IonicModule } from '@ionic/angular';
import { DomSanitizer, SafeHtml } from '@angular/platform-browser';
import { ChatMessage, SuggestedPlace } from '../../models';
import { StorageService } from '../../services';
import { AudioPlayerComponent } from '../audio-player/audio-player.component';
import { Capacitor } from '@capacitor/core';
import { marked } from 'marked';

@Component({
  selector: 'app-chat-bubble',
  standalone: true,
  imports: [CommonModule, IonicModule, AudioPlayerComponent],
  templateUrl: './chat-bubble.component.html',
  styleUrls: ['./chat-bubble.component.scss']
})
export class ChatBubbleComponent implements OnInit {
  @Input() message!: ChatMessage;
  @Output() savePlace = new EventEmitter<SuggestedPlace>();
  
  isSaved = false;
  
  imageDataUrl: string | null = null;
  audioDataUrl: string | null = null;
  renderedText: SafeHtml | null = null;

  constructor(
    private storageService: StorageService,
    private sanitizer: DomSanitizer
  ) {
    marked.setOptions({
      breaks: true,
      gfm: true
    });
  }

  async ngOnInit() {
    if (this.message.localImagePath) {
      await this.loadLocalImage();
    }
    if (this.message.localAudioPath) {
      await this.loadLocalAudio();
    }
    if (this.message.text) {
      this.renderMarkdown();
    }
  }

  private renderMarkdown() {
    if (this.message.text) {
      const html = marked.parse(this.message.text) as string;
      this.renderedText = this.sanitizer.bypassSecurityTrustHtml(html);
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

  get hasSuggestedPlace(): boolean {
    return !this.isUser && !!this.message.suggestedPlace;
  }

  onSavePlace() {
    if (this.message.suggestedPlace && !this.isSaved) {
      this.savePlace.emit(this.message.suggestedPlace);
      this.isSaved = true;
    }
  }

  formatTime(date: Date): string {
    return new Date(date).toLocaleTimeString('vi-VN', {
      hour: '2-digit',
      minute: '2-digit'
    });
  }
}
