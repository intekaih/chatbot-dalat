export interface ChatMessage {
  id: string;
  text?: string;
  imageUrl?: string;
  audioUrl?: string;
  createdAt: Date;
  uid: string;
  role: 'user' | 'bot';
  conversationId: string;
}
