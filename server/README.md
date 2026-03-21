# Dalat Chatbot Server

Backend server cho ứng dụng Dalat Chatbot sử dụng OpenAI API hoặc API Proxy.

## 🔧 Cấu hình API

Server hỗ trợ 3 phương thức kết nối AI, theo thứ tự ưu tiên:

### 1. API Proxy (Custom Domain) - Khuyến nghị ✅

**Ưu điểm:**
- Không cần API key OpenAI
- Hỗ trợ nhiều model: Gemini, Claude, OpenAI
- **Truy cập được từ mọi IP/môi trường** (local dev, deploy, CI/CD)
- Hỗ trợ vision trong hầu hết các model

**Cách cấu hình:**

1. Tạo file `.env` từ `.env.example`:
```bash
cp .env.example .env
```

2. Sửa file `.env`:
```env
API_PROXY_BASE_URL=https://api.intekaih.id.vn/v1
API_PROXY_KEY=sk-92576e86b4664be298fb3c19e644756f
API_PROXY_MODEL=gemini-3-flash
```

**Các model khả dụng:**
- `gemini-3-flash` - Nhanh & Rẻ (Khuyến nghị)
- `gemini-3-pro-high` - Chất lượng cao
- `gemini-3-pro-low` - Chất lượng trung bình
- `gemini-2.5-flash` - Phiên bản mới
- `claude-4.5-sonnet` - Claude AI
- `claude-4.5-opus` - Claude cao cấp

### 2. Replit AI Integration

**Tự động hoạt động khi deploy trên Replit**, không cần cấu hình thêm.

Server sẽ tự động detect các biến môi trường:
- `AI_INTEGRATIONS_OPENAI_API_KEY`
- `AI_INTEGRATIONS_OPENAI_BASE_URL`

### 3. Direct OpenAI API

**Cách cấu hình:**

1. Lấy API key từ [OpenAI Platform](https://platform.openai.com/api-keys)

2. Thêm vào file `.env`:
```env
OPENAI_API_KEY=sk-your-actual-api-key-here
```

**Model sử dụng:**
- `gpt-4o` - Cho xử lý ảnh
- `gpt-4o-mini` - Cho chat text

## 🚀 Chạy Server

### Development (với auto-reload)
```bash
npm run dev
```

### Production
```bash
npm start
```

Server sẽ chạy tại: `http://localhost:3001`

## 📡 API Endpoints

### POST /api/chat
Chat với AI và nhận kết quả đầy đủ.

**Request:**
```json
{
  "message": "Gợi ý địa điểm du lịch ở Đà Lạt",
  "history": [],
  "imageBase64": "optional-base64-string"
}
```

**Response:**
```json
{
  "reply": "AI response text",
  "suggestedPlace": {
    "name": "Hồ Xuân Hương",
    "address": "Trung tâm TP. Đà Lạt",
    "description": "Hồ nước tự nhiên..."
  }
}
```

### POST /api/chat/stream
Chat với AI sử dụng Server-Sent Events (SSE).

### GET /api/health
Kiểm tra trạng thái server.

## 🔍 Kiểm tra cấu hình

Khi start server, console sẽ hiển thị cấu hình đang sử dụng:

- `🔧 Using API Proxy configuration` - Đang dùng API Proxy
- `🔧 Using Replit AI Integration` - Đang dùng Replit
- `🔧 Using Direct OpenAI API` - Đang dùng OpenAI trực tiếp

## ⚠️ Lưu ý

- File `.env` không được commit vào Git (đã có trong `.gitignore`)
- Nếu không cấu hình API key nào, server vẫn chạy nhưng API sẽ trả lỗi
- API Proxy cần chạy tool Antigravity trước khi start server
