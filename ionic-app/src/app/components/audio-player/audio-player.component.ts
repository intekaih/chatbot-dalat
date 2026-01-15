import { Component, Input, ElementRef, ViewChild, OnDestroy } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IonicModule } from '@ionic/angular';

@Component({
  selector: 'app-audio-player',
  standalone: true,
  imports: [CommonModule, IonicModule],
  templateUrl: './audio-player.component.html',
  styleUrls: ['./audio-player.component.scss']
})
export class AudioPlayerComponent implements OnDestroy {
  @Input() audioUrl!: string;
  @ViewChild('audioElement') audioElement!: ElementRef<HTMLAudioElement>;

  isPlaying = false;
  duration = 0;
  currentTime = 0;

  ngOnDestroy() {
    this.pause();
  }

  togglePlay() {
    if (this.isPlaying) {
      this.pause();
    } else {
      this.play();
    }
  }

  play() {
    const audio = this.audioElement?.nativeElement;
    if (audio) {
      audio.play();
      this.isPlaying = true;
    }
  }

  pause() {
    const audio = this.audioElement?.nativeElement;
    if (audio) {
      audio.pause();
      this.isPlaying = false;
    }
  }

  onTimeUpdate(event: Event) {
    const audio = event.target as HTMLAudioElement;
    this.currentTime = audio.currentTime;
  }

  onLoadedMetadata(event: Event) {
    const audio = event.target as HTMLAudioElement;
    this.duration = audio.duration;
  }

  onEnded() {
    this.isPlaying = false;
    this.currentTime = 0;
  }

  formatTime(seconds: number): string {
    if (!seconds || !isFinite(seconds)) return '0:00';
    const mins = Math.floor(seconds / 60);
    const secs = Math.floor(seconds % 60);
    return `${mins}:${secs.toString().padStart(2, '0')}`;
  }
}
