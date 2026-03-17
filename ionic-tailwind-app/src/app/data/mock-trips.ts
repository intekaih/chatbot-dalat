// Mock Trips Data - Dalat Travel Chatbot

export interface TripItineraryItem {
  id: string;
  time: string;
  type: 'location' | 'food' | 'transport' | 'accommodation';
  title: string;
  description?: string;
  cost?: number;
  placeId?: string;
}

export interface TripDay {
  id: string;
  dayNumber: number;
  date: string;
  items: TripItineraryItem[];
  totalCost: number;
}

export interface TripBudgetCategory {
  category: string;
  icon: string;
  spent: number;
  budget: number;
}

export interface Trip {
  id: string;
  title: string;
  destination: string;
  coverImage: string;
  startDate: string;
  endDate: string;
  status: 'upcoming' | 'ongoing' | 'completed';
  days: TripDay[];
  totalBudget: number;
  spent: number;
  notes?: string;
  budgetCategories: TripBudgetCategory[];
}

export const MOCK_TRIPS: Trip[] = [
  {
    id: 'trip-1',
    title: 'Đà Lạt Weekend Chill',
    destination: 'Đà Lạt, Lâm Đồng',
    coverImage: 'https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=800&q=80',
    startDate: '2026-03-21',
    endDate: '2026-03-22',
    status: 'upcoming',
    days: [
      {
        id: 'day-1',
        dayNumber: 1,
        date: '2026-03-21',
        items: [
          {
            id: 'item-1',
            time: '08:00',
            type: 'location',
            title: 'Check-in tại Homestay',
            description: 'Nhận phòng và nghỉ ngơi',
            cost: 400000,
          },
          {
            id: 'item-2',
            time: '10:00',
            type: 'location',
            title: 'Hồ Xuân Hương',
            description: 'Tản bộ ngắm cảnh',
            placeId: 'ho-xuan-huong',
            cost: 0,
          },
          {
            id: 'item-3',
            time: '12:00',
            type: 'food',
            title: 'Bánh mì xíu mại',
            description: 'Quán nổi tiếng gần chợ Đà Lạt',
            cost: 30000,
          },
          {
            id: 'item-4',
            time: '14:00',
            type: 'location',
            title: 'Vườn hoa Đà Lạt',
            description: 'Check-in với muôn hoa',
            placeId: 'vuon-hoa-da-lat',
            cost: 50000,
          },
          {
            id: 'item-5',
            time: '18:00',
            type: 'food',
            title: 'Chợ Đêm Đà Lạt',
            description: 'Khám phá ẩm thực về đêm',
            placeId: 'cho-dem-da-lat',
            cost: 150000,
          },
        ],
        totalCost: 630000,
      },
      {
        id: 'day-2',
        dayNumber: 2,
        date: '2026-03-22',
        items: [
          {
            id: 'item-6',
            time: '07:00',
            type: 'food',
            title: 'Bữa sáng tại quán',
            description: 'Thưởng thức cà phê và bánh mì',
            cost: 50000,
          },
          {
            id: 'item-7',
            time: '09:00',
            type: 'location',
            title: 'Thác Datanla',
            description: 'Trải nghiệm trượt nước',
            placeId: 'thac-datanla',
            cost: 80000,
          },
          {
            id: 'item-8',
            time: '12:00',
            type: 'food',
            title: 'Ăn trưa tại khu vực thác',
            cost: 100000,
          },
          {
            id: 'item-9',
            time: '14:00',
            type: 'location',
            title: 'Rừng Thông Hai Mộ',
            description: 'Chụp ảnh sương mù',
            placeId: 'rung-thong-hai-mo',
            cost: 0,
          },
          {
            id: 'item-10',
            time: '17:00',
            type: 'transport',
            title: 'Ra về',
            description: 'Kết thúc chuyến đi',
            cost: 0,
          },
        ],
        totalCost: 230000,
      },
    ],
    totalBudget: 3000000,
    spent: 860000,
    notes: 'Nhớ mang theo áo khoác, trời lạnh về chiều!',
    budgetCategories: [
      { category: 'Lưu trú', icon: '🏠', spent: 400000, budget: 800000 },
      { category: 'Ẩm thực', icon: '🍜', spent: 330000, budget: 600000 },
      { category: 'Di chuyển', icon: '🚗', spent: 0, budget: 500000 },
      { category: 'Vui chơi', icon: '🎫', spent: 130000, budget: 600000 },
      { category: 'Khác', icon: '📦', spent: 0, budget: 500000 },
    ],
  },
  {
    id: 'trip-2',
    title: 'Đà Lạt Gia Đình 3N2Đ',
    destination: 'Đà Lạt, Lâm Đồng',
    coverImage: 'https://images.unsplash.com/photo-1587614382346-4ec70e388b28?w=800&q=80',
    startDate: '2026-02-15',
    endDate: '2026-02-17',
    status: 'completed',
    days: [
      {
        id: 'day-3',
        dayNumber: 1,
        date: '2026-02-15',
        items: [
          {
            id: 'item-11',
            time: '08:00',
            type: 'transport',
            title: 'Khởi hành từ Sài Gòn',
            description: 'Di chuyển bằng xe khách',
            cost: 300000,
          },
          {
            id: 'item-12',
            time: '14:00',
            type: 'accommodation',
            title: 'Check-in Hotel',
            description: 'Nhận phòng và nghỉ ngơi',
            cost: 1500000,
          },
          {
            id: 'item-13',
            time: '16:00',
            type: 'location',
            title: 'Hồ Xuân Hương',
            description: 'Dạo quanh hồ',
            placeId: 'ho-xuan-huong',
            cost: 0,
          },
          {
            id: 'item-14',
            time: '19:00',
            type: 'food',
            title: 'Ăn tối tại Chợ Đêm',
            description: 'Thưởng thức đặc sản',
            placeId: 'cho-dem-da-lat',
            cost: 400000,
          },
        ],
        totalCost: 2200000,
      },
      {
        id: 'day-4',
        dayNumber: 2,
        date: '2026-02-16',
        items: [
          {
            id: 'item-15',
            time: '07:00',
            type: 'food',
            title: 'Bữa sáng',
            description: 'Tại khách sạn',
            cost: 0,
          },
          {
            id: 'item-16',
            time: '09:00',
            type: 'location',
            title: 'Vườn hoa Đà Lạt',
            description: 'Tham quan vườn hoa',
            placeId: 'vuon-hoa-da-lat',
            cost: 150000,
          },
          {
            id: 'item-17',
            time: '12:00',
            type: 'food',
            title: 'Ăn trưa',
            description: 'Nhà hàng địa phương',
            cost: 300000,
          },
          {
            id: 'item-18',
            time: '14:00',
            type: 'location',
            title: 'Thác Datanla',
            description: 'Tham quan và trải nghiệm',
            placeId: 'thac-datanla',
            cost: 250000,
          },
          {
            id: 'item-19',
            time: '19:00',
            type: 'food',
            title: 'Ăn tối',
            description: 'Quán nổi tiếng',
            cost: 500000,
          },
        ],
        totalCost: 1200000,
      },
      {
        id: 'day-5',
        dayNumber: 3,
        date: '2026-02-17',
        items: [
          {
            id: 'item-20',
            time: '07:00',
            type: 'food',
            title: 'Bữa sáng',
            description: 'Tại khách sạn',
            cost: 0,
          },
          {
            id: 'item-21',
            time: '09:00',
            type: 'location',
            title: 'Rừng Thông Hai Mộ',
            description: 'Chụp ảnh kỷ niệm',
            placeId: 'rung-thong-hai-mo',
            cost: 0,
          },
          {
            id: 'item-22',
            time: '11:00',
            type: 'food',
            title: 'Ăn trưa',
            description: 'Trước khi về',
            cost: 350000,
          },
          {
            id: 'item-23',
            time: '13:00',
            type: 'transport',
            title: 'Về Sài Gòn',
            description: 'Kết thúc chuyến đi',
            cost: 300000,
          },
        ],
        totalCost: 650000,
      },
    ],
    totalBudget: 8000000,
    spent: 7650000,
    budgetCategories: [
      { category: 'Lưu trú', icon: '🏠', spent: 1500000, budget: 2500000 },
      { category: 'Ẩm thực', icon: '🍜', spent: 1550000, budget: 2000000 },
      { category: 'Di chuyển', icon: '🚗', spent: 900000, budget: 1500000 },
      { category: 'Vui chơi', icon: '🎫', spent: 1200000, budget: 1500000 },
      { category: 'Khác', icon: '📦', spent: 500000, budget: 500000 },
    ],
  },
];
