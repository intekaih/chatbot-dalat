import { Component, OnInit, ViewChild, ElementRef, OnDestroy } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { IonicModule, ToastController, AlertController } from '@ionic/angular';
import { Subscription } from 'rxjs';
import { ChatMessage } from '../../../models';
import { FirestoreService, ChatbotService, MediaService, StorageService } from '../../../services';
import { ChatBubbleComponent, MediaPreviewComponent } from '../../../components';

@Component({
  selector: 'app-chat',
  standalone: true,
  imports: [CommonModule, FormsModule, IonicModule, ChatBubbleComponent, MediaPreviewComponent],
  templateUrl: './chat.page.html',
  styleUrls: ['./chat.page.scss']
})
export class ChatPage implements OnInit, OnDestroy {
  @ViewChild('chatContent') chatContent!: ElementRef;

  messages: ChatMessage[] = [];
  newMessage = '';
  conversationId: string | null = null;
  isLoading = false;
  isRecording = false;
  pendingImage: string | null = null;

  private messagesSubscription?: Subscription;
  private queryParamSubscription?: Subscription;

  constructor(
    private route: ActivatedRoute,
    private firestoreService: FirestoreService,
    private chatbotService: ChatbotService,
    private mediaService: MediaService,
    private storageService: StorageService,
    private toastCtrl: ToastController,
    private alertCtrl: AlertController
  ) {}

  ngOnInit() {
    this.queryParamSubscription = this.route.queryParams.subscribe(params => {
      const convId = params['conversationId'];
      if (convId) {
        this.loadConversation(convId);
      } else {
        this.startNewConversation();
      }
    });
  }

  ngOnDestroy() {
    this.messagesSubscription?.unsubscribe();
    this.queryParamSubscription?.unsubscribe();
  }

  async startNewConversation() {
    this.messagesSubscription?.unsubscribe();
    this.messages = [];
    this.conversationId = null;

    const welcomeMessage: ChatMessage = {
      id: 'welcome',
      text: 'Xin chào! Tôi là chatbot tư vấn du lịch Đà Lạt. Bạn muốn khám phá điều gì hôm nay?',
      role: 'bot',
      uid: '',
      conversationId: '',
      createdAt: new Date()
    };
    this.messages = [welcomeMessage];
  }

  askSuggestion(question: string) {
    this.newMessage = question;
    this.sendMessage();
  }

  async loadConversation(convId: string) {
    this.messagesSubscription?.unsubscribe();
    this.conversationId = convId;
    this.messagesSubscription = this.firestoreService.getMessages(convId).subscribe(msgs => {
      this.messages = msgs;
      this.scrollToBottom();
    });
  }

  async sendMessage() {
    if (!this.newMessage.trim() && !this.pendingImage) return;

    this.isLoading = true;
    try {
      if (!this.conversationId) {
        const title = this.newMessage.substring(0, 30) || 'Cuộc trò chuyện mới';
        this.conversationId = await this.firestoreService.createConversation(title);
        this.messagesSubscription = this.firestoreService.getMessages(this.conversationId).subscribe(msgs => {
          this.messages = msgs;
          this.scrollToBottom();
        });
      }

      let localImagePath: string | undefined;
      if (this.pendingImage) {
        localImagePath = await this.storageService.saveImageLocally(this.pendingImage);
        this.pendingImage = null;
      }

      await this.firestoreService.addMessage(this.conversationId, {
        text: this.newMessage || undefined,
        localImagePath,
        role: 'user'
      });

      const userText = this.newMessage;
      this.newMessage = '';

      const history = this.messages
        .filter(m => m.text)
        .map(m => ({
          role: m.role === 'bot' ? 'assistant' as const : 'user' as const,
          content: m.text!
        }));

      const botResponse = await this.chatbotService.generateAIResponse(userText, history);
      await this.firestoreService.addMessage(this.conversationId, {
        text: botResponse.text,
        role: 'bot'
      });

      if (botResponse.suggestedPlace) {
        this.promptSavePlace(botResponse.suggestedPlace);
      }
    } catch (error) {
      console.error('Chat error:', error);
      this.showToast('Lỗi gửi tin nhắn: ' + (error as Error).message);
    } finally {
      this.isLoading = false;
      this.scrollToBottom();
    }
  }

  async takePhoto() {
    const image = await this.mediaService.takePhoto();
    if (image) {
      this.pendingImage = image;
    }
  }

  async pickPhoto() {
    const image = await this.mediaService.pickPhoto();
    if (image) {
      this.pendingImage = image;
    }
  }

  cancelImage() {
    this.pendingImage = null;
  }

  async toggleRecording() {
    if (this.isRecording) {
      const audioBlob = await this.mediaService.stopRecording();
      this.isRecording = false;
      if (audioBlob && this.conversationId) {
        this.isLoading = true;
        try {
          const reader = new FileReader();
          reader.readAsDataURL(audioBlob);
          reader.onloadend = async () => {
            const base64Audio = reader.result as string;
            const base64Data = base64Audio.split(',')[1];
            const localAudioPath = await this.storageService.saveAudioLocally(base64Data);
            
            await this.firestoreService.addMessage(this.conversationId!, {
              localAudioPath,
              role: 'user'
            });
            
            await this.firestoreService.addMessage(this.conversationId!, {
              text: 'Tôi đã nhận được tin nhắn thoại của bạn! Hiện tại tôi chỉ hỗ trợ trả lời văn bản. Bạn có thể gõ câu hỏi để tôi tư vấn nhé!',
              role: 'bot'
            });
            this.isLoading = false;
          };
        } catch (error) {
          this.showToast('Lỗi gửi audio');
          this.isLoading = false;
        }
      }
    } else {
      if (!this.conversationId) {
        this.conversationId = await this.firestoreService.createConversation('Tin nhắn thoại');
        this.messagesSubscription = this.firestoreService.getMessages(this.conversationId).subscribe(msgs => {
          this.messages = msgs;
        });
      }
      const started = await this.mediaService.startRecording();
      if (started) {
        this.isRecording = true;
      } else {
        this.showToast('Không thể bắt đầu ghi âm');
      }
    }
  }

  private async promptSavePlace(place: any) {
    const alert = await this.alertCtrl.create({
      header: 'Lưu địa điểm?',
      message: `Bạn có muốn lưu "${place.name}" vào danh sách yêu thích?`,
      buttons: [
        { text: 'Không', role: 'cancel' },
        {
          text: 'Lưu',
          handler: async () => {
            try {
              await this.firestoreService.addFavorite({
                name: place.name,
                description: place.description,
                address: place.address
              });
              this.showToast('Đã lưu vào yêu thích!');
            } catch (error) {
              this.showToast('Lỗi khi lưu');
            }
          }
        }
      ]
    });
    await alert.present();
  }

  private scrollToBottom() {
    setTimeout(() => {
      if (this.chatContent?.nativeElement) {
        const content = this.chatContent.nativeElement;
        content.scrollTop = content.scrollHeight;
      }
    }, 100);
  }

  private async showToast(message: string) {
    const toast = await this.toastCtrl.create({
      message,
      duration: 2000,
      position: 'bottom'
    });
    toast.present();
  }
}
