// Mock Notifications Data - Dalat Travel Chatbot

export interface Notification {
  id: string;
  type: 'trip' | 'weather' | 'tip' | 'promo';
  title: string;
  content: string;
  timestamp: Date;
  isRead: boolean;
  iconColor: string;
  icon: string;
}

export const MOCK_NOTIFICATIONS: Notification[] = [
  {
    id: 'notif-1',
    type: 'trip',
    title: 'Nhắc nhở chuyến đi',
    content: 'Chuyến "Đà Lạt Weekend Chill" sắp đến! Còn 5 ngày nữa là khởi hành.',
    timestamp: new Date('2026-03-16T08:00:00'),
    isRead: false,
    iconColor: 'bg-blue-100 text-blue-700',
    icon: '🗓️',
  },
  {
    id: 'notif-2',
    type: 'weather',
    title: 'Cảnh báo thời tiết',
    content: 'Hôm nay Đà Lạt có mưa rào vào chiều tối. Bạn nên mang theo áo mưa!',
    timestamp: new Date('2026-03-15T14:30:00'),
    isRead: false,
    iconColor: 'bg-sky-100 text-sky-700',
    icon: '🌧️',
  },
  {
    id: 'notif-3',
    type: 'tip',
    title: 'Mẹo du lịch Đà Lạt',
    content: 'Đà Lạt có nhiều dốc cao - nên thuê xe côn hoặc xe tay ga mạnh để di chuyển an toàn!',
    timestamp: new Date('2026-03-14T10:00:00'),
    isRead: false,
    iconColor: 'bg-amber-100 text-amber-700',
    icon: '💡',
  },
  {
    id: 'notif-4',
    type: 'promo',
    title: 'Khuyến mãi thuê xe',
    content: 'Giảm 20% chi phí thuê xe máy cho du khách đặt online!',
    timestamp: new Date('2026-03-13T16:00:00'),
    isRead: true,
    iconColor: 'bg-green-100 text-green-700',
    icon: '🎉',
  },
  {
    id: 'notif-5',
    type: 'tip',
    title: 'Địa điểm check-in mới',
    content: 'Vườn hoa Đà Lạt vừa trồng thêm hoa tulip - check-in cực đẹp!',
    timestamp: new Date('2026-03-12T09:00:00'),
    isRead: true,
    iconColor: 'bg-amber-100 text-amber-700',
    icon: '📸',
  },
  {
    id: 'notif-6',
    type: 'trip',
    title: 'Chuyến đi đã hoàn thành',
    content: 'Cảm ơn bạn đã đồng hành cùng "Đà Lạt Gia Đình 3N2Đ"! Hãy để lại đánh giá nhé.',
    timestamp: new Date('2026-02-17T20:00:00'),
    isRead: true,
    iconColor: 'bg-blue-100 text-blue-700',
    icon: '✅',
  },
  {
    id: 'notif-7',
    type: 'weather',
    title: 'Thời tiết cuối tuần',
    content: 'Cuối tuần này Đà Lạt trời đẹp! Nhiệt độ 18-22°C, không mưa - lý tưởng cho chuyến đi!',
    timestamp: new Date('2026-03-11T07:00:00'),
    isRead: true,
    iconColor: 'bg-sky-100 text-sky-700',
    icon: '☀️',
  },
];
