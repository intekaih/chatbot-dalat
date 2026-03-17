// Mock Places Data - Dalat Travel Chatbot

export interface Place {
  id: string;
  name: string;
  slug: string;
  category: 'cafe' | 'restaurant' | 'checkin' | 'nature' | 'homestay' | 'rental';
  shortDescription: string;
  fullDescription: string;
  imageUrl: string;
  tags: string[];
  suitableFor: string[];
  featured?: boolean;
  rating?: number;
  reviewCount?: number;
  priceRange?: string;
  address?: string;
  openingHours?: string;
  lat?: number;
  lng?: number;
  pricePerDay?: string;
  vehicleTypes?: string[];
  phoneNumber?: string;
  depositRequired?: string;
}

export interface Category {
  id: string;
  label: string;
  icon: string;
  iconName: string;
}

export const CATEGORIES: Category[] = [
  { id: 'cafe', label: 'Cafe', icon: '☕', iconName: 'coffee' },
  { id: 'restaurant', label: 'Ăn uống', icon: '🍜', iconName: 'restaurant' },
  { id: 'checkin', label: 'Check-in', icon: '📸', iconName: 'camera' },
  { id: 'nature', label: 'Thiên nhiên', icon: '🌲', iconName: 'tree' },
  { id: 'homestay', label: 'Homestay', icon: '🏠', iconName: 'home' },
  { id: 'rental', label: 'Thuê xe', icon: '🛵', iconName: 'scooter' },
];

export const QUICK_PROMPTS = [
  'Lịch trình 2 ngày 1 đêm',
  'Quán cafe đẹp ở Đà Lạt',
  'Địa điểm check-in hot nhất',
  'Ăn gì khi trời mưa?',
  'Homestay view đẹp giá rẻ',
  'Hoạt động buổi tối ở Đà Lạt',
];

export const MOCK_PLACES: Place[] = [
  {
    id: 'ho-xuan-huong',
    name: 'Hồ Xuân Hương',
    slug: 'ho-xuan-huong',
    category: 'nature',
    shortDescription: 'Hồ nước ngọt giữa lòng thành phố Đà Lạt, nơi ngắm hoa anh đào vào mùa xuân',
    fullDescription: 'Hồ Xuân Hương là hồ nước ngọt tự nhiên lớn nhất của thành phố Đà Lạt, nằm ngay trung tâm thành phố. Với vẻ đẹp lãng mạn, hồ là điểm đến lý tưởng cho du khách muốn ngắm hoa anh đào, tản bộ quanh hồ hay thuê thuyền chèo trải nghiệm cảm giác thơ mộng giữa núi rừng Tây Nguyên.',
    imageUrl: 'https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=800&q=80',
    tags: ['#hoanhda', '#ngắmcảnh', '#dạochơi'],
    suitableFor: ['Cặp đôi', 'Nhóm bạn', 'Gia đình'],
    featured: true,
    rating: 4.8,
    reviewCount: 1243,
    priceRange: 'Miễn phí',
    address: 'Đường Nguyễn Chi Thanh, Đà Lạt',
    openingHours: '24/7',
    lat: 11.9439,
    lng: 108.4373,
  },
  {
    id: 'vuon-hoa-da-lat',
    name: 'Vườn hoa Đà Lạt',
    slug: 'vuon-hoa-da-lat',
    category: 'checkin',
    shortDescription: 'Khu vườn hoa khổng lồ với hàng trăm loài hoa rực rỡ quanh năm',
    fullDescription: 'Vườn hoa Đà Lạt là điểm đến không thể bỏ lỡ với những ai yêu hoa. Khu vườn rộng hơn 70,000m² trưng bày hàng trăm loài hoa từ khắp nơi trên thế giới, từ hoa hồng, cẩm chướng, hoa tulip đến các loài hoa đặc trưng của vùng cao nguyên.',
    imageUrl: 'https://images.unsplash.com/photo-1587614382346-4ec70e388b28?w=800&q=80',
    tags: ['#hoa', '#checkin', '#chụphình'],
    suitableFor: ['Cặp đôi', 'Nhóm bạn', 'Gia đình'],
    featured: true,
    rating: 4.6,
    reviewCount: 892,
    priceRange: '50.000đ - 100.000đ',
    address: 'Đường Lê Đại Hành, Đà Lạt',
    openingHours: '7:00 - 17:00',
    lat: 11.9525,
    lng: 108.4311,
  },
  {
    id: 'the-married-beans-coffee',
    name: 'The Married Beans Coffee',
    slug: 'the-married-beans-coffee',
    category: 'cafe',
    shortDescription: 'Quán cafe độc đáo với kiến trúc hiện đại và view núi rừng tuyệt đẹp',
    fullDescription: 'The Married Beans Coffee là một trong những quán cafe được yêu thích nhất Đà Lạt. Với thiết kế không gian mở, view núi rừng tuyệt đẹp và những ly cà phê thơm ngon được pha chế tỉ mỉ, nơi đây là điểm hẹn lý tưởng cho những ai muốn thưởng thức cà phê giữa thiên nhiên.',
    imageUrl: 'https://images.unsplash.com/photo-1501339847302-ac426a4a7cbb?w=800&q=80',
    tags: ['#cafe', '#viewnúi', '#hipster'],
    suitableFor: ['Cặp đôi', 'Nhóm bạn', 'Solo'],
    featured: true,
    rating: 4.9,
    reviewCount: 567,
    priceRange: '35.000đ - 80.000đ',
    address: 'Ngõ 35, Đường Nguyễn Trung Trực, Đà Lạt',
    openingHours: '7:00 - 22:00',
    lat: 11.9462,
    lng: 108.4417,
  },
  {
    id: 'rung-thong-hai-mo',
    name: 'Rừng Thông Hai Mộ',
    slug: 'rung-thong-hai-mo',
    category: 'nature',
    shortDescription: 'Khu rừng thông cổ thụ huyền bí với những hàng cây hàng trăm năm tuổi',
    fullDescription: 'Rừng Thông Hai Mộ (Hai Mộ) là khu rừng thông trồng từ thời Pháp thuộc, với những cây thông cao vút tạo nên không gian yên bình và huyền bí. Đây là địa điểm lý tưởng cho những ai muốn hòa mình vào thiên nhiên, chụp những bức ảnh sương mù đẹp như tranh vẽ.',
    imageUrl: 'https://images.unsplash.com/photo-1518495973542-4542c06a5843?w=800&q=80',
    tags: ['#rừng', '#sươngmù', '#thiênnhiên'],
    suitableFor: ['Cặp đôi', 'Nhóm bạn', 'Solo'],
    featured: true,
    rating: 4.7,
    reviewCount: 723,
    priceRange: 'Miễn phí',
    address: 'Đường Phạm Văn Đồng, Đà Lạt',
    openingHours: '6:00 - 18:00',
    lat: 11.9328,
    lng: 108.4551,
  },
  {
    id: 'cho-dem-da-lat',
    name: 'Chợ Đêm Đà Lạt',
    slug: 'cho-dem-da-lat',
    category: 'restaurant',
    shortDescription: 'Chợ đêm sôi động với hàng trăm gian hàng ẩm thực và đặc sản Đà Lạt',
    fullDescription: 'Chợ Đêm Đà Lạt là điểm đến không thể bỏ lỡ cho du khách muốn khám phá ẩm thực địa phương. Từ các món ăn đặc sản như bánh tráng nướng, lẩu gà lá é, đến những ly rượu cần hay trà atiso, chợ đêm mang đến trải nghiệm ẩm thực phong phú.',
    imageUrl: 'https://images.unsplash.com/photo-1555126634-323283e090fa?w=800&q=80',
    tags: ['#đặcsản', '#ẩmthực', '#chợđêm'],
    suitableFor: ['Cặp đôi', 'Nhóm bạn', 'Gia đình'],
    featured: true,
    rating: 4.4,
    reviewCount: 1567,
    priceRange: '20.000đ - 200.000đ',
    address: 'Ngã 6, Đường Phạm Văn Đồng, Đà Lạt',
    openingHours: '18:00 - 23:00',
    lat: 11.9412,
    lng: 108.4298,
  },
  {
    id: 'thac-datanla',
    name: 'Thác Datanla',
    slug: 'thac-datanla',
    category: 'nature',
    shortDescription: 'Thác nước kỳ vĩ với hệ thống trượt nước và rừng nguyên sinh',
    fullDescription: 'Thác Datanla nằm cách trung tâm Đà Lạt khoảng 7km, là một trong những thác nước đẹp nhất vùng Tây Nguyên. Với chiều cao hơn 20m, thác nước đổ xuống tạo thành hồ nước xanh ngắt giữa rừng thông xanh mướt. Du khách có thể trải nghiệm máng trượt nước độc đáo ở đây.',
    imageUrl: 'https://images.unsplash.com/photo-1432405972618-c60b0225b8f9?w=800&q=80',
    tags: ['#thác', '#trượtnước', '#rừng'],
    suitableFor: ['Nhóm bạn', 'Gia đình', 'Solo'],
    rating: 4.5,
    reviewCount: 934,
    priceRange: '30.000đ - 80.000đ',
    address: 'Xã Trạm Hành, Đà Lạt',
    openingHours: '7:30 - 17:00',
    lat: 11.9098,
    lng: 108.4623,
  },
  {
    id: 'thue-xe-minh-phat',
    name: 'Thuê xe Minh Phát',
    slug: 'thue-xe-minh-phat',
    category: 'rental',
    shortDescription: 'Dịch vụ cho thuê xe máy uy tín với nhiều loại xe phù hợp địa hình Đà Lạt',
    fullDescription: 'Minh Phát là địa chỉ cho thuê xe máy được nhiều du khách tin tưởng với hơn 10 năm kinh nghiệm. Cung cấp đa dạng các loại xe từ xe số, xe ga đến xe côn, phù hợp với mọi nhu cầu và địa hình đồi núi Đà Lạt. Xe luôn được bảo dưỡng định kỳ, đảm bảo an toàn.',
    imageUrl: 'https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=800&q=80',
    tags: ['#thuêxe', '#xemáy', '#dalat'],
    suitableFor: ['Cặp đôi', 'Nhóm bạn', 'Solo'],
    rating: 4.7,
    reviewCount: 342,
    pricePerDay: '120.000đ - 350.000đ',
    address: '58 Đường Nguyễn Trung Trực, Đà Lạt',
    openingHours: '6:00 - 22:00',
    phoneNumber: '02633818999',
    vehicleTypes: ['Xe số', 'Xe ga', 'Xe côn', 'Xe tay ga cao cấp'],
    depositRequired: '500.000đ hoặc CCCD',
    lat: 11.9465,
    lng: 108.4421,
  },
  {
    id: 'dalat-motorbike-rental',
    name: 'Dalat Motorbike Rental',
    slug: 'dalat-motorbike-rental',
    category: 'rental',
    shortDescription: 'Cho thuê xe máy chất lượng cao với dịch vụ giao xe tận nơi',
    fullDescription: 'Dalat Motorbike Rental chuyên cung cấp các dòng xe máy cao cấp cho du khách khám phá Đà Lạt. Với đội xe hiện đại, đầu tư mới và dịch vụ giao nhận xe tận nơi, họ là lựa chọn hoàn hảo cho những ai muốn trải nghiệm lái xe thoải mái trên các cung đường núi.',
    imageUrl: 'https://images.unsplash.com/photo-1449426468159-d96dbf08f19f?w=800&q=80',
    tags: ['#xemáy', '#chấtlượng', '#giaoxetậnnơi'],
    suitableFor: ['Cặp đôi', 'Nhóm bạn', 'Solo'],
    rating: 4.9,
    reviewCount: 218,
    pricePerDay: '150.000đ - 500.000đ',
    address: '102 Đường Bùi Thị Xuân, Đà Lạt',
    openingHours: '7:00 - 21:00',
    phoneNumber: '0918123456',
    vehicleTypes: ['Yamaha', 'Honda', 'Piaggio', 'Suzuki'],
    depositRequired: '1.000.000đ hoặc hộ chiếu',
    lat: 11.9498,
    lng: 108.4489,
  },
  {
    id: 'xe-may-thanh-cong',
    name: 'Xe máy Thành Công',
    slug: 'xe-may-thanh-cong',
    category: 'rental',
    shortDescription: 'Cho thuê xe máy giá rẻ, phù hợp sinh viên và du khách tiết kiệm',
    fullDescription: 'Thành Công là lựa chọn tiết kiệm cho du khách với các gói thuê xe máy giá cạnh tranh nhất Đà Lạt. Dù giá rẻ nhưng chất lượng xe vẫn được đảm bảo, đội ngũ nhân viên nhiệt tình hỗ trợ du khách 24/7.',
    imageUrl: 'https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=800&q=80',
    tags: ['#giárẻ', '#tiếtkiệm', '#nhanhnón'],
    suitableFor: ['Sinh viên', 'Nhóm bạn', 'Solo'],
    rating: 4.6,
    reviewCount: 456,
    pricePerDay: '80.000đ - 200.000đ',
    address: '25 Đường Lý Thường Kiệt, Đà Lạt',
    openingHours: '6:00 - 23:00',
    phoneNumber: '02631234567',
    vehicleTypes: ['Xe số', 'Xe ga'],
    depositRequired: '300.000đ hoặc CCCD gốc',
    lat: 11.9434,
    lng: 108.4356,
  },
  {
    id: 'hoang-long-motorbike',
    name: 'Hoàng Long Motorbike',
    slug: 'hoang-long-motorbike',
    category: 'rental',
    shortDescription: 'Dịch vụ cho thuế xe máy cao cấp với đội ngũ tài xế chuyên nghiệp',
    fullDescription: 'Hoàng Long Motorbike không chỉ cho thuê xe máy mà còn cung cấp dịch vụ tài xế riêng cho những ai không muốn tự lái. Đội ngũ tài xế am hiểu địa hình, có thể đưa bạn đến những địa điểm ít người biết và chia sẻ những kinh nghiệm du lịch Đà Lạt hữu ích.',
    imageUrl: 'https://images.unsplash.com/photo-1469474968028-56623f02e42e?w=800&q=80',
    tags: ['#xecao', '#tàixế', '#dịchvụ'],
    suitableFor: ['Cặp đôi', 'Gia đình', 'Người cao tuổi'],
    rating: 4.8,
    reviewCount: 189,
    pricePerDay: '200.000đ - 600.000đ',
    address: '88 Đường Khu Hoa Lan, Đà Lạt',
    openingHours: '5:00 - 24:00',
    phoneNumber: '02634567890',
    vehicleTypes: ['Xe ga cao cấp', 'Xe côn', 'Xe có tài xế'],
    depositRequired: 'Không cần đặt cọc',
    lat: 11.9378,
    lng: 108.4512,
  },
];
