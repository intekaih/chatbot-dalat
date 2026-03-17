// Mock Chat Data - Dalat Travel Chatbot

export interface Message {
  id: string;
  role: 'user' | 'assistant';
  content: string;
  timestamp: Date;
  placeIds?: string[];
}

export interface ChatSession {
  id: string;
  title: string;
  messages: Message[];
  createdAt: Date;
  updatedAt: Date;
}

export const MOCK_CHAT_SESSIONS: ChatSession[] = [
  {
    id: 'session-1',
    title: 'Lịch trình 2 ngày 1 đêm',
    messages: [
      {
        id: 'msg-1',
        role: 'user',
        content: 'Cho tôi xin lịch trình du lịch Đà Lạt 2 ngày 1 đêm với',
        timestamp: new Date('2026-03-10T10:00:00'),
      },
      {
        id: 'msg-2',
        role: 'assistant',
        content: 'Chào bạn! Đà Lạt 2 ngày 1 đêm là khoảng thời gian lý tưởng để khám phá thành phố sương mù. Dưới đây là gợi ý lịch trình của tôi:\n\n**Ngày 1:**\n• Buổi sáng: Hồ Xuân Hương - tản bộ ngắm cảnh và thưởng thức cà phê tại The Married Beans Coffee\n• Buổi trưa: Thưởng thức ẩm thực địa phương tại Chợ Đêm (có thể ghé vào buổi trưa để ăn lẩu gà lá é)\n• Buổi chiều: Vườn hoa Đà Lạt - check-in với muôn hoa\n• Buổi tối: Chợ Đêm Đà Lạt - khám phá ẩm thực về đêm\n\n**Ngày 2:**\n• Buổi sáng: Thác Datanla - trải nghiệm trượt nước\n• Buổi trưa: Ăn trưa tại khu vực gần thác\n• Buổi chiều: Rừng Thông Hai Mộ - chụp ảnh sương mù\n• Buổi tối: Kết thúc chuyến đi\n\nBạn có muốn tôi điều chỉnh lịch trình theo sở thích không?',
        timestamp: new Date('2026-03-10T10:00:15'),
        placeIds: ['ho-xuan-huong', 'the-married-beans-coffee', 'cho-dem-da-lat', 'vuon-hoa-da-lat', 'thac-datanla', 'rung-thong-hai-mo'],
      },
      {
        id: 'msg-3',
        role: 'user',
        content: 'Cảm ơn! Có thể gợi ý quán cafe view đẹp không?',
        timestamp: new Date('2026-03-10T10:05:00'),
      },
      {
        id: 'msg-4',
        role: 'assistant',
        content: 'Dưới đây là một số quán cafe view đẹp ở Đà Lạt mà bạn nên thử:\n\n**The Married Beans Coffee** ⭐ 4.9\n- View núi rừng tuyệt đẹp\n- Không gian hiện đại, thoáng mát\n- Cà phê thơm ngon, pha chế tỉ mỉ\n- Địa chỉ: Ngõ 35, Nguyễn Trung Trực\n\nBạn có muốn tôi gợi ý thêm các địa điểm khác không?',
        timestamp: new Date('2026-03-10T10:05:20'),
        placeIds: ['the-married-beans-coffee'],
      },
    ],
    createdAt: new Date('2026-03-10T10:00:00'),
    updatedAt: new Date('2026-03-10T10:05:20'),
  },
  {
    id: 'session-2',
    title: 'Địa điểm check-in hot',
    messages: [
      {
        id: 'msg-5',
        role: 'user',
        content: 'Đà Lạt có những địa điểm check-in hot nào?',
        timestamp: new Date('2026-03-12T15:30:00'),
      },
      {
        id: 'msg-6',
        role: 'assistant',
        content: 'Đà Lạt có rất nhiều địa điểm check-in tuyệt đẹp! Dưới đây là top những địa điểm được yêu thích nhất:\n\n**Vườn hoa Đà Lạt** ⭐ 4.6\n- Khu vườn hoa rộng 70,000m²\n- Hàng trăm loài hoa từ khắp thế giới\n- Check-in cực đẹp với muôn hoa rực rỡ\n\n**Hồ Xuân Hương** ⭐ 4.8\n- Hồ nước giữa lòng thành phố\n- Hoa anh đào mùa xuân cực đẹp\n- Thuyền chèo lãng mạn\n\n**Rừng Thông Hai Mộ** ⭐ 4.7\n- Sương mù huyền bí\n- Cây thông cổ thụ hàng trăm năm\n- Chụp ảnh sương mù cực chill\n\nBạn muốn tôi gợi ý thêm homestay view đẹp không?',
        timestamp: new Date('2026-03-12T15:30:25'),
        placeIds: ['vuon-hoa-da-lat', 'ho-xuan-huong', 'rung-thong-hai-mo'],
      },
    ],
    createdAt: new Date('2026-03-12T15:30:00'),
    updatedAt: new Date('2026-03-12T15:30:25'),
  },
];
