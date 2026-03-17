// Mock Reviews Data - Dalat Travel Chatbot

export interface Review {
  id: string;
  placeId: string;
  author: string;
  avatar?: string;
  date: string;
  rating: number;
  content: string;
  helpfulCount: number;
  isHelpful?: boolean;
}

export const MOCK_REVIEWS: Review[] = [
  // Hồ Xuân Hương
  {
    id: 'review-1',
    placeId: 'ho-xuan-huong',
    author: 'Nguyễn Thị Hương',
    date: '2026-03-01',
    rating: 5,
    content: 'Cảnh đẹp tuyệt vời! Buổi sáng sớm đi dạo quanh hồ rất thoải mái, không khí trong lành. Tôi đặc biệt thích hoa anh đào nở vào mùa xuân, rất lãng mạn!',
    helpfulCount: 45,
  },
  {
    id: 'review-2',
    placeId: 'ho-xuan-huong',
    author: 'Trần Văn Minh',
    date: '2026-02-15',
    rating: 4,
    content: 'Hồ đẹp, nhưng hơi đông vào cuối tuần. Nên đi sớm sáng hoặc chiều muộn để tránh đông và chụp ảnh đẹp hơn.',
    helpfulCount: 32,
  },
  // Vườn hoa Đà Lạt
  {
    id: 'review-3',
    placeId: 'vuon-hoa-da-lat',
    author: 'Lê Thị Mai',
    date: '2026-03-05',
    rating: 5,
    content: 'Khu vườn hoa rất rộng và đẹp! Có rất nhiều loài hoa tôi chưa từng thấy. Đặc biệt thích khu vườn hoa hồng và hoa tulip. Rất thích hợp để chụp ảnh check-in!',
    helpfulCount: 67,
  },
  {
    id: 'review-4',
    placeId: 'vuon-hoa-da-lat',
    author: 'Phạm Quốc Việt',
    date: '2026-02-20',
    rating: 4,
    content: 'Đẹp nhưng hơi xa trung tâm. Nên đi vào ngày trời đẹp để chụp ảnh tốt nhất. Có nhiều góc chụp đẹp, nhưng cuối tuần rất đông.',
    helpfulCount: 28,
  },
  // The Married Beans Coffee
  {
    id: 'review-5',
    placeId: 'the-married-beans-coffee',
    author: 'Hoàng Thị Lan',
    date: '2026-03-08',
    rating: 5,
    content: 'Quán cafe tuyệt vời! View núi rừng rất đẹp, không gian thoáng mát. Cà phê thơm ngon, nhân viên phục vụ nhiệt tình. Đây là quán cafe yêu thích của tôi ở Đà Lạt!',
    helpfulCount: 89,
  },
  {
    id: 'review-6',
    placeId: 'the-married-beans-coffee',
    author: 'Đặng Văn Hùng',
    date: '2026-02-28',
    rating: 5,
    content: 'Một trong những quán cafe đẹp nhất Đà Lạt! Không gian hiện đại, view đẹp, cà phê ngon. Đặc biệt thích ngồi ngoài trời vào buổi chiều.',
    helpfulCount: 54,
  },
  // Rừng Thông Hai Mộ
  {
    id: 'review-7',
    placeId: 'rung-thong-hai-mo',
    author: 'Vũ Thị Hạnh',
    date: '2026-03-02',
    rating: 5,
    content: 'Khu rừng thông rất huyền bí! Sáng sớm có sương mù tạo nên khung cảnh như trong phim. Chụp ảnh cực đẹp, nhất là với áo dài trắng.',
    helpfulCount: 76,
  },
  {
    id: 'review-8',
    placeId: 'rung-thong-hai-mo',
    author: 'Bùi Đình Nam',
    date: '2026-02-18',
    rating: 4,
    content: 'Rừng đẹp, nhưng cần đi sớm để tránh đông và chụp ảnh sương mù đẹp nhất. Nên mang theo áo ấm vì trời lạnh vào buổi sáng.',
    helpfulCount: 41,
  },
  // Chợ Đêm Đà Lạt
  {
    id: 'review-9',
    placeId: 'cho-dem-da-lat',
    author: 'Trương Thị Ngọc',
    date: '2026-03-06',
    rating: 4,
    content: 'Chợ đêm rất nhộn nhịp và có nhiều đồ ăn ngon! Đặc biệt thích bánh tráng nướng và lẩu gà lá é. Giá cả hợp lý, có thể thỏa thích ẩm thực địa phương.',
    helpfulCount: 93,
  },
  {
    id: 'review-10',
    placeId: 'cho-dem-da-lat',
    author: 'Ngô Minh Tuấn',
    date: '2026-02-25',
    rating: 5,
    content: 'Không thể bỏ lỡ khi đến Đà Lạt! Chợ đêm có rất nhiều món ăn đặc sản và đồ uống thơm ngon. Tôi đặc biệt ấn tượng với các quán bánh tráng nướng ở đây.',
    helpfulCount: 62,
  },
  // Thác Datanla
  {
    id: 'review-11',
    placeId: 'thac-datanla',
    author: 'Đỗ Thị Hồng',
    date: '2026-03-03',
    rating: 5,
    content: 'Thác nước rất đẹp và trải nghiệm trượt nước rất thú vị! Nước trong xanh, không khí mát mẻ. Đây là điểm đến không thể bỏ lỡ khi đến Đà Lạt.',
    helpfulCount: 71,
  },
  {
    id: 'review-12',
    placeId: 'thac-datanla',
    author: 'Lưu Đức Trung',
    date: '2026-02-22',
    rating: 4,
    content: 'Thác đẹp nhưng hơi xa trung tâm. Trải nghiệm trượt nước rất vui, nhưng cuối tuần rất đông nên đi sớm để không phải xếp hàng lâu.',
    helpfulCount: 48,
  },
];
