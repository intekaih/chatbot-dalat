# 📊 SƠ ĐỒ PHÂN CHIA CÔNG VIỆC

![Work Division Diagram](../../README_files/work_division_diagram.png)

## 🎯 TỔNG QUAN

Dự án được chia làm 2 phần chính với 2 developers:

---

## 👨‍💻 ANH - BACKEND DEVELOPER (Màu Xanh Dương)

### 🔧 Trách nhiệm chính:
```
├── 📦 Models & Interfaces
│   └── Định nghĩa tất cả TypeScript interfaces
│
├── 🔐 Firebase Auth Service
│   └── Login, Register, Logout, Authentication
│
├── 🗄️ Firestore CRUD Service
│   └── Create, Read, Update, Delete cho Database
│
├── 🤖 AI Chatbot Service
│   └── Gọi OpenAI API, xử lý AI responses
│
├── 💾 Storage Service
│   └── Capacitor Filesystem operations
│
├── 📷 Media Service
│   └── Camera, Audio recording
│
├── 🌐 Express API Server
│   └── Backend server cho AI integration
│
└── 🔒 Security Rules
    └── Firestore security rules
```

### 📁 Files của Anh:
- `server/index.ts`
- `app/models/*.ts`
- `app/services/*.ts`
- `app/guards/*.ts`
- `app/app.config.ts`
- `app/app.routes.ts`
- `environments/*.ts`

---

## 🎨 HUY - FRONTEND DEVELOPER (Màu Xanh Lá)

### 🖌️ Trách nhiệm chính:
```
├── 🎨 Design System (CSS)
│   └── Colors, spacing, typography, variables
│
├── 🔑 Login/Register Pages
│   └── HTML, SCSS, form validation
│
├── 💬 Chat Page UI
│   └── Chat interface, bubbles, input
│
├── 📜 History Page UI
│   └── Conversation list, cards
│
├── ⭐ Favorites Page UI
│   └── Saved places list
│
├── ⚙️ Settings Page UI
│   └── User settings, profile
│
├── 🧩 Reusable Components
│   └── ChatBubble, AudioPlayer, MediaPreview
│
└── ✨ Animations & UX
    └── Transitions, loading states, polish
```

### 📁 Files của Huy:
- `global.scss`
- `theme/*.scss`
- `pages/**/*.html`
- `pages/**/*.scss`
- `pages/**/*.ts` (UI logic only)
- `components/**/*`

---

## 🔄 SERVICE CALLS & DATA FLOW

### Luồng dữ liệu:

```
┌─────────────────────────────────────────────────────┐
│  HUY (Frontend)                                      │
│  ┌──────────────────────────────────────┐           │
│  │  Login Page                           │           │
│  │  - User nhập email/password           │           │
│  │  - Click "Đăng nhập"                  │           │
│  └──────────────┬───────────────────────┘           │
│                 │ Gọi                                 │
│                 ▼                                     │
│  ┌──────────────────────────────────────┐           │
│  │  authService.login(email, password)   │◀──────   │
│  └──────────────────────────────────────┘      │    │
└─────────────────────────────────────────────────┼───┘
                                                  │
                  ┌───────────────────────────────┘
                  │ Được implement bởi
                  ▼
┌─────────────────────────────────────────────────┐
│  ANH (Backend)                                   │
│  ┌──────────────────────────────────────┐       │
│  │  AuthService                          │       │
│  │  async login(email, password) {       │       │
│  │    await signInWithEmailAndPassword() │       │
│  │    this.router.navigate(['/tabs'])    │       │
│  │  }                                     │       │
│  └──────────────────────────────────────┘       │
└─────────────────────────────────────────────────┘
```

### Các service calls phổ biến:

| Huy gọi | Anh implement | Mục đích |
|---------|---------------|----------|
| `authService.login()` | AuthService | Đăng nhập |
| `authService.register()` | AuthService | Đăng ký |
| `firestoreService.getMessages()` | FirestoreService | Lấy tin nhắn |
| `firestoreService.addMessage()` | FirestoreService | Thêm tin nhắn |
| `chatbotService.generateAIResponse()` | ChatbotService | Chat với AI |
| `storageService.saveImage()` | StorageService | Lưu ảnh |
| `mediaService.takePicture()` | MediaService | Chụp ảnh |

---

## ⏱️ TIMELINE

### Week 1: Core Development
```
Ngày 1-2: Setup & Foundation
├── Anh: Firebase setup, Models, AuthService
└── Huy: Design System, Login/Register pages

Ngày 3-4: Main Features
├── Anh: FirestoreService, ChatbotService
└── Huy: Chat page, History page

Ngày 5-6: Advanced Features
├── Anh: StorageService, MediaService
└── Huy: Favorites, Settings pages
```

### Week 2: Integration & Testing
```
Ngày 7-8: Components & Server
├── Anh: Express Server, Testing
└── Huy: Reusable Components, Animations

Ngày 9-10: Polish & Deploy
├── Anh: Bug fixes, Optimization
└── Huy: UI/UX Polish, Testing
```

---

## 🤝 QUY TẮC LÀM VIỆC

### ✅ Anh phải làm:
- Viết tất cả business logic
- Document rõ ràng methods
- Test services trước khi commit
- Thông báo Huy khi service sẵn sàng

### ✅ Huy phải làm:
- Thiết kế tất cả giao diện
- Gọi services của Anh
- Xử lý UI states
- Thông báo Anh nếu cần thêm methods

### ❌ Không được:
- Anh **không** sửa HTML/SCSS của Huy
- Huy **không** viết logic trong services
- **Không** commit code chưa test

---

## 📞 COMMUNICATION FLOW

```
Step 1: Thống nhất Interface
Anh: "Service sẽ có method login(email, password): Promise<void>"
Huy: "OK, tôi sẽ gọi trong Login page"

Step 2: Implement
Anh: [Viết code AuthService]
Huy: [Thiết kế Login page UI]

Step 3: Integration
Anh: "AuthService xong rồi, bạn có thể dùng"
Huy: [Import và gọi authService.login()]

Step 4: Test
Huy: "Service hoạt động tốt!" ✅
      hoặc
      "Có lỗi khi login: [error message]" ❌

Step 5: Fix (nếu cần)
Anh: [Fix bug và commit]
Huy: [Test lại]
```

---

## 📋 CHECKLIST

### Anh - Backend:
- [ ] ✅ Firebase project setup
- [ ] ✅ Tạo tất cả Models
- [ ] ✅ AuthService (login, register, logout)
- [ ] ✅ FirestoreService (CRUD)
- [ ] ✅ ChatbotService (AI integration)
- [ ] ✅ StorageService (filesystem)
- [ ] ✅ MediaService (camera, audio)
- [ ] ✅ AuthGuard (route protection)
- [ ] ✅ Express Server (API)
- [ ] ✅ Security Rules (Firestore)

### Huy - Frontend:
- [ ] 🎨 Design System (global.scss)
- [ ] 🎨 Login page (HTML + SCSS)
- [ ] 🎨 Register page (HTML + SCSS)
- [ ] 🎨 Chat page (HTML + SCSS)
- [ ] 🎨 History page (HTML + SCSS)
- [ ] 🎨 Favorites page (HTML + SCSS)
- [ ] 🎨 Settings page (HTML + SCSS)
- [ ] 🎨 ChatBubble component
- [ ] 🎨 AudioPlayer component
- [ ] 🎨 MediaPreview component

---

## 🎯 KẾT QUẢ MONG ĐỢI

Sau khi hoàn thành:
- ✅ App chạy mượt mà
- ✅ Login/Register hoạt động
- ✅ Chat với AI hoạt động
- ✅ Lưu lịch sử chat
- ✅ Camera/Audio hoạt động
- ✅ UI đẹp, UX tốt
- ✅ Code clean, có tổ chức

---

## 📚 TÀI LIỆU THAM KHẢO

1. **README_TAI_LIEU.md** - Tổng quan tất cả tài liệu
2. **TOM_TAT_PHAN_CHIA.md** - Bảng phân chia chi tiết
3. **HUONG_DAN_TAO_DU_AN.md** - Hướng dẫn code từ đầu
4. **PHAM_VI_CONG_VIEC_ANH.md** - Chi tiết cho Anh
5. **PHAM_VI_CONG_VIEC_HUY.md** - Chi tiết cho Huy

---

**Chúc 2 bạn code thành công! 🚀**
