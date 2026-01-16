export interface SuggestedPlace {
  name: string;
  description: string;
  address: string;
  category?: string;
}

export interface ChatMessage {
  id: string;
  text?: string;
  localImagePath?: string;
  localAudioPath?: string;
  suggestedPlace?: SuggestedPlace;
  createdAt: Date;
  uid: string;
  role: 'user' | 'bot';
  conversationId: string;
}
