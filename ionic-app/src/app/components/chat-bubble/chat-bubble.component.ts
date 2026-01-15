import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IonicModule } from '@ionic/angular';
import { ChatMessage } from '../../models';
import { AudioPlayerComponent } from '../audio-player/audio-player.component';

@Component({
  selector: 'app-chat-bubble',
  standalone: true,
  imports: [CommonModule, IonicModule, AudioPlayerComponent],
  templateUrl: './chat-bubble.component.html',
  styleUrls: ['./chat-bubble.component.scss']
})
export class ChatBubbleComponent {
  @Input() message!: ChatMessage;

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
