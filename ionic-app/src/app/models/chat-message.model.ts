export interface ChatMessage {
  id: string;
  text?: string;
  localImagePath?: string;
  localAudioPath?: string;
  createdAt: Date;
  uid: string;
  role: 'user' | 'bot';
  conversationId: string;
}
