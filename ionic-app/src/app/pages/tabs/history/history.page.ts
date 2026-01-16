import { Component, OnInit, OnDestroy } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IonicModule, AlertController } from '@ionic/angular';
import { Router } from '@angular/router';
import { Subscription } from 'rxjs';
import { Conversation } from '../../../models';
import { FirestoreService } from '../../../services';

@Component({
  selector: 'app-history',
  standalone: true,
  imports: [CommonModule, IonicModule],
  templateUrl: './history.page.html',
  styleUrls: ['./history.page.scss']
})
export class HistoryPage implements OnInit, OnDestroy {
  conversations: Conversation[] = [];
  private subscription?: Subscription;

  constructor(
    private firestoreService: FirestoreService,
    private router: Router,
    private alertCtrl: AlertController
  ) {}

  ngOnInit() {
    this.loadConversations();
  }

  ngOnDestroy() {
    this.subscription?.unsubscribe();
  }

  loadConversations() {
    this.subscription = this.firestoreService.getConversations().subscribe(convs => {
      this.conversations = convs;
    });
  }

  openConversation(conv: Conversation) {
    this.router.navigate(['/app/chat'], { 
      queryParams: { conversationId: conv.id } 
    });
  }

  formatDate(date: Date): string {
    return new Date(date).toLocaleDateString('vi-VN', {
      day: '2-digit',
      month: '2-digit',
      year: 'numeric',
      hour: '2-digit',
      minute: '2-digit'
    });
  }
}
