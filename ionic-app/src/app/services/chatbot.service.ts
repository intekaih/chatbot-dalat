import { Injectable } from '@angular/core';

interface DalatPlace {
  name: string;
  description: string;
  address: string;
  category: string;
}

@Injectable({
  providedIn: 'root'
})
export class ChatbotService {
  private places: DalatPlace[] = [
    { name: 'Hồ Xuân Hương', description: 'Hồ nước tự nhiên ở trung tâm thành phố, lý tưởng cho đạp vịt và dạo bộ.', address: 'Trung tâm TP. Đà Lạt', category: 'thiên nhiên' },
    { name: 'Thung Lũng Tình Yêu', description: 'Công viên thiên nhiên với cảnh quan lãng mạn, có hồ nước và vườn hoa.', address: 'Phường 8, TP. Đà Lạt', category: 'thiên nhiên' },
    { name: 'Đồi Chè Cầu Đất', description: 'Đồi chè xanh mướt, view đẹp cho chụp ảnh và thưởng trà.', address: 'Xã Trạm Hành, TP. Đà Lạt', category: 'thiên nhiên' },
    { name: 'Langbiang', description: 'Ngọn núi cao nhất Đà Lạt, thích hợp leo núi và ngắm cảnh.', address: 'Lạc Dương, Lâm Đồng', category: 'thiên nhiên' },
    { name: 'Chợ Đà Lạt', description: 'Chợ đêm nổi tiếng với nhiều món ăn vặt và đặc sản địa phương.', address: 'Đường Nguyễn Thị Minh Khai', category: 'ẩm thực' },
    { name: 'Bánh Tráng Nướng', description: 'Món ăn vặt đường phố nổi tiếng, có nhiều quán ở khu trung tâm.', address: 'Khu vực chợ đêm', category: 'ẩm thực' },
    { name: 'Kem Bơ Thanh Thảo', description: 'Kem bơ đặc sản Đà Lạt, béo ngậy và thơm ngon.', address: 'Đường Trương Công Định', category: 'ẩm thực' },
    { name: 'Quán Cối Xay Gió', description: 'Quán cà phê nổi tiếng với view đẹp và không gian vintage.', address: 'Đường Hoàng Diệu', category: 'cafe' },
    { name: 'Dinh Bảo Đại', description: 'Cung điện mùa hè của vua Bảo Đại, kiến trúc Pháp cổ điển.', address: 'Đường Triệu Việt Vương', category: 'lịch sử' },
    { name: 'Nhà Thờ Domain de Marie', description: 'Nhà thờ cổ kính với kiến trúc Pháp, tọa lạc trên đồi cao.', address: 'Đường Ngô Quyền', category: 'lịch sử' },
    { name: 'Crazy House', description: 'Công trình kiến trúc độc đáo hình cây cổ thụ, có phòng nghỉ.', address: 'Đường Huỳnh Thúc Kháng', category: 'kiến trúc' },
    { name: 'Vườn Hoa Thành Phố', description: 'Vườn hoa rộng lớn với nhiều loài hoa đặc trưng Đà Lạt.', address: 'Đường Trần Nhân Tông', category: 'thiên nhiên' }
  ];

  private greetings = [
    'Xin chào! Tôi là chatbot tư vấn du lịch Đà Lạt. Bạn muốn tìm hiểu về địa điểm nào?',
    'Chào bạn! Rất vui được giúp bạn khám phá Đà Lạt. Bạn quan tâm đến thiên nhiên, ẩm thực hay lịch sử?',
    'Hello! Tôi sẵn sàng tư vấn cho bạn về thành phố ngàn hoa. Bạn cần gì nào?'
  ];

  generateResponse(userMessage: string): { text: string; suggestedPlace?: DalatPlace } {
    const message = userMessage.toLowerCase();

    if (this.isGreeting(message)) {
      return { text: this.greetings[Math.floor(Math.random() * this.greetings.length)] };
    }

    if (message.includes('ăn') || message.includes('ẩm thực') || message.includes('món ngon') || message.includes('đói')) {
      const foodPlaces = this.places.filter(p => p.category === 'ẩm thực');
      const place = foodPlaces[Math.floor(Math.random() * foodPlaces.length)];
      return {
        text: `🍜 Về ẩm thực, tôi gợi ý bạn đến "${place.name}"!\n\n📍 ${place.address}\n📝 ${place.description}\n\nBạn có muốn lưu địa điểm này vào yêu thích không?`,
        suggestedPlace: place
      };
    }

    if (message.includes('cà phê') || message.includes('cafe') || message.includes('coffee')) {
      const cafePlaces = this.places.filter(p => p.category === 'cafe');
      const place = cafePlaces[0];
      return {
        text: `☕ Nói về cà phê Đà Lạt, "${place.name}" là lựa chọn tuyệt vời!\n\n📍 ${place.address}\n📝 ${place.description}\n\nBạn muốn lưu địa điểm này không?`,
        suggestedPlace: place
      };
    }

    if (message.includes('thiên nhiên') || message.includes('cảnh đẹp') || message.includes('núi') || message.includes('hồ')) {
      const naturePlaces = this.places.filter(p => p.category === 'thiên nhiên');
      const place = naturePlaces[Math.floor(Math.random() * naturePlaces.length)];
      return {
        text: `🌿 Về thiên nhiên, "${place.name}" là điểm đến không thể bỏ qua!\n\n📍 ${place.address}\n📝 ${place.description}\n\nLưu vào yêu thích nhé?`,
        suggestedPlace: place
      };
    }

    if (message.includes('lịch sử') || message.includes('di tích') || message.includes('cổ')) {
      const historyPlaces = this.places.filter(p => p.category === 'lịch sử');
      const place = historyPlaces[Math.floor(Math.random() * historyPlaces.length)];
      return {
        text: `🏛️ Về lịch sử văn hóa, "${place.name}" rất đáng tham quan!\n\n📍 ${place.address}\n📝 ${place.description}\n\nBạn muốn lưu lại không?`,
        suggestedPlace: place
      };
    }

    if (message.includes('gợi ý') || message.includes('đề xuất') || message.includes('nên đi đâu')) {
      const place = this.places[Math.floor(Math.random() * this.places.length)];
      return {
        text: `✨ Tôi gợi ý cho bạn "${place.name}"!\n\n📍 ${place.address}\n📝 ${place.description}\n\nĐây là điểm đến được nhiều du khách yêu thích!`,
        suggestedPlace: place
      };
    }

    if (message.includes('lịch trình') || message.includes('kế hoạch')) {
      return {
        text: `📅 Gợi ý lịch trình 2 ngày 1 đêm:\n\n🌅 Ngày 1:\n- Sáng: Hồ Xuân Hương, đạp vịt\n- Trưa: Ăn bánh mì xíu mại\n- Chiều: Thung Lũng Tình Yêu\n- Tối: Chợ đêm, bánh tráng nướng\n\n🌄 Ngày 2:\n- Sáng: Langbiang hoặc Đồi Chè Cầu Đất\n- Trưa: Lẩu gà lá é\n- Chiều: Crazy House, Dinh Bảo Đại\n\nBạn thích địa điểm nào nhất?`
      };
    }

    const randomPlace = this.places[Math.floor(Math.random() * this.places.length)];
    return {
      text: `🌸 Tôi không hiểu rõ yêu cầu của bạn, nhưng tôi gợi ý "${randomPlace.name}"!\n\n📍 ${randomPlace.address}\n📝 ${randomPlace.description}\n\nBạn có thể hỏi tôi về:\n• Ẩm thực 🍜\n• Thiên nhiên 🌿\n• Lịch sử 🏛️\n• Cà phê ☕\n• Lịch trình du lịch 📅`,
      suggestedPlace: randomPlace
    };
  }

  private isGreeting(message: string): boolean {
    const greetingKeywords = ['xin chào', 'hello', 'hi', 'chào', 'hey', 'alo'];
    return greetingKeywords.some(keyword => message.includes(keyword));
  }
}
