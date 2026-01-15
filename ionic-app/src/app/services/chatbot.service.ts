import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { firstValueFrom } from 'rxjs';

interface DalatPlace {
  name: string;
  description: string;
  address: string;
  category: string;
}

interface ChatHistory {
  role: 'user' | 'assistant';
  content: string;
}

@Injectable({
  providedIn: 'root'
})
export class ChatbotService {
  private apiUrl = '/api/chat';

  private places: DalatPlace[] = [
    { name: 'Hồ Xuân Hương', description: 'Hồ nước tự nhiên ở trung tâm thành phố, lý tưởng cho đạp vịt và dạo bộ.', address: 'Trung tâm TP. Đà Lạt', category: 'thiên nhiên' },
    { name: 'Thung Lũng Tình Yêu', description: 'Công viên thiên nhiên với cảnh quan lãng mạn, có hồ nước và vườn hoa.', address: 'Phường 8, TP. Đà Lạt', category: 'thiên nhiên' },
    { name: 'Đồi Chè Cầu Đất', description: 'Đồi chè xanh mướt, view đẹp cho chụp ảnh và thưởng trà.', address: 'Xã Trạm Hành, TP. Đà Lạt', category: 'thiên nhiên' },
    { name: 'Langbiang', description: 'Ngọn núi cao nhất Đà Lạt, thích hợp leo núi và ngắm cảnh.', address: 'Lạc Dương, Lâm Đồng', category: 'thiên nhiên' },
    { name: 'Chợ Đà Lạt', description: 'Chợ đêm nổi tiếng với nhiều món ăn vặt và đặc sản địa phương.', address: 'Đường Nguyễn Thị Minh Khai', category: 'ẩm thực' },
    { name: 'Crazy House', description: 'Công trình kiến trúc độc đáo hình cây cổ thụ, có phòng nghỉ.', address: 'Đường Huỳnh Thúc Kháng', category: 'kiến trúc' },
  ];

  constructor(private http: HttpClient) {}

  async generateAIResponse(userMessage: string, history: ChatHistory[] = []): Promise<{ text: string; suggestedPlace?: DalatPlace }> {
    try {
      const response = await firstValueFrom(
        this.http.post<{ reply: string }>(this.apiUrl, {
          message: userMessage,
          history: history.map(h => ({ role: h.role, content: h.content }))
        })
      );

      const reply = response.reply;
      const suggestedPlace = this.extractPlaceFromResponse(reply);

      return {
        text: reply,
        suggestedPlace
      };
    } catch (error: any) {
      console.error('AI API error:', error);
      console.error('Error details:', error?.message, error?.status, error?.statusText);
      return this.generateRuleBasedResponse(userMessage);
    }
  }

  private extractPlaceFromResponse(text: string): DalatPlace | undefined {
    for (const place of this.places) {
      if (text.includes(place.name)) {
        return place;
      }
    }
    return undefined;
  }

  generateRuleBasedResponse(userMessage: string): { text: string; suggestedPlace?: DalatPlace } {
    const message = userMessage.toLowerCase();

    if (this.isGreeting(message)) {
      return { text: 'Xin chào! Tôi là chatbot tư vấn du lịch Đà Lạt. Bạn muốn khám phá điều gì hôm nay?' };
    }

    if (message.includes('ăn') || message.includes('ẩm thực') || message.includes('món ngon')) {
      const place = this.places.find(p => p.category === 'ẩm thực')!;
      return {
        text: `🍜 Về ẩm thực, tôi gợi ý bạn đến "${place.name}"!\n\n📍 ${place.address}\n📝 ${place.description}`,
        suggestedPlace: place
      };
    }

    if (message.includes('thiên nhiên') || message.includes('cảnh đẹp')) {
      const naturePlaces = this.places.filter(p => p.category === 'thiên nhiên');
      const place = naturePlaces[Math.floor(Math.random() * naturePlaces.length)];
      return {
        text: `🌿 Về thiên nhiên, "${place.name}" là điểm đến không thể bỏ qua!\n\n📍 ${place.address}\n📝 ${place.description}`,
        suggestedPlace: place
      };
    }

    const randomPlace = this.places[Math.floor(Math.random() * this.places.length)];
    return {
      text: `🌸 Tôi gợi ý "${randomPlace.name}"!\n\n📍 ${randomPlace.address}\n📝 ${randomPlace.description}\n\nBạn có thể hỏi tôi về ẩm thực, thiên nhiên, lịch sử, cà phê hoặc lịch trình du lịch!`,
      suggestedPlace: randomPlace
    };
  }

  private isGreeting(message: string): boolean {
    const greetingKeywords = ['xin chào', 'hello', 'hi', 'chào', 'hey', 'alo'];
    return greetingKeywords.some(keyword => message.includes(keyword));
  }
}
