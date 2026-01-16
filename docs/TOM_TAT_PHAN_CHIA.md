# 📊 TÓM TẮT PHÂN CHIA CÔNG VIỆC

## 👥 TỔNG QUAN

| **Vai trò** | **Tên** | **Trách nhiệm chính** | **% Công việc** |
|-------------|---------|----------------------|-----------------|
| **Backend Developer** | Anh | Services, Logic, API, Data | ~50% |
| **Frontend Developer** | Huy | UI/UX, Components, Styling | ~50% |

---

## 🔧 ANH - BACKEND DEVELOPER

### ✅ Files của Anh:

#### **Server (Express API)**
```
server/
├── index.ts                    ✅ Express server, OpenAI integration
├── package.json               
└── .env                        
```

#### **Models**
```
ionic-app/src/app/models/
├── user-profile.model.ts       ✅ Interfaces
├── conversation.model.ts       ✅ Interfaces
├── chat-message.model.ts       ✅ Interfaces
└── favorite-place.model.ts     ✅ Interfaces
```

#### **Services**
```
ionic-app/src/app/services/
├── auth.service.ts             ✅ Firebase Auth logic
├── firestore.service.ts        ✅ Firestore CRUD
├── chatbot.service.ts          ✅ AI chatbot logic
├── storage.service.ts          ✅ Capacitor Filesystem
└── media.service.ts            ✅ Camera/Audio handling
```

#### **Guards & Config**
```
ionic-app/src/app/
├── guards/
│   └── auth.guard.ts           ✅ Route protection
├── app.config.ts               ✅ Firebase config
├── app.routes.ts               ✅ Routing
└── environments/
    ├── environment.ts          ✅ Firebase credentials
    └── environment.prod.ts     ✅ Firebase credentials
```

### 🎯 Nhiệm vụ của Anh:
1. ✅ Setup Firebase (Auth + Firestore)
2. ✅ Xây dựng Express API server
3. ✅ Tạo tất cả Models/Interfaces
4. ✅ Implement tất cả Services
5. ✅ Viết AuthGuard
6. ✅ Config routes & Firebase
7. ✅ Viết Firestore security rules

---

## 🎨 HUY - FRONTEND DEVELOPER

### ✅ Files của Huy:

#### **Design System**
```
ionic-app/src/
├── global.scss                 ✅ CSS variables, utilities
├── theme/
│   └── variables.scss          ✅ Ionic theme
└── assets/                     ✅ Images, icons
```

#### **Auth Pages**
```
ionic-app/src/app/pages/auth/
├── login/
│   ├── login.page.ts           ⚠️ UI logic + validation
│   ├── login.page.html         ✅ Template
│   └── login.page.scss         ✅ Styling
└── register/
    ├── register.page.ts        ⚠️ UI logic + validation
    ├── register.page.html      ✅ Template
    └── register.page.scss      ✅ Styling
```

#### **Layout**
```
ionic-app/src/app/pages/layout/
└── drawer-layout/
    ├── drawer-layout.page.ts   ⚠️ Menu logic
    ├── drawer-layout.page.html ✅ Drawer template
    └── drawer-layout.page.scss ✅ Drawer styling
```

#### **Main Pages**
```
ionic-app/src/app/pages/tabs/
├── chat/
│   ├── chat.page.ts            ⚠️ UI logic (gọi services)
│   ├── chat.page.html          ✅ Chat UI
│   └── chat.page.scss          ✅ Chat styling
├── history/
│   ├── history.page.ts         ⚠️ UI logic (gọi services)
│   ├── history.page.html       ✅ History UI
│   └── history.page.scss       ✅ History styling
├── favorites/
│   ├── favorites.page.ts       ⚠️ UI logic (gọi services)
│   ├── favorites.page.html     ✅ Favorites UI
│   └── favorites.page.scss     ✅ Favorites styling
└── settings/
    ├── settings.page.ts        ⚠️ UI logic (gọi services)
    ├── settings.page.html      ✅ Settings UI
    └── settings.page.scss      ✅ Settings styling
```

#### **Components**
```
ionic-app/src/app/components/
├── chat-bubble/
│   ├── chat-bubble.component.ts   ✅ Bubble logic
│   ├── chat-bubble.component.html ✅ Bubble template
│   └── chat-bubble.component.scss ✅ Bubble styling
├── audio-player/
│   ├── audio-player.component.ts   ✅ Player logic
│   ├── audio-player.component.html ✅ Player template
│   └── audio-player.component.scss ✅ Player styling
└── media-preview/
    ├── media-preview.component.ts   ✅ Preview logic
    ├── media-preview.component.html ✅ Preview template
    └── media-preview.component.scss ✅ Preview styling
```

### 🎯 Nhiệm vụ của Huy:
1. ✅ Setup Design System (global.scss)
2. ✅ Thiết kế tất cả Pages (HTML + SCSS)
3. ✅ Xây dựng Reusable Components
4. ✅ Implement form validation
5. ✅ Tối ưu UX (loading, empty, error states)
6. ✅ Add animations & transitions
7. ⚠️ Gọi services của Anh để hiển thị data

---

## 🔄 TƯƠNG TÁC GIỮA 2 BẠN

### Cách Huy gọi Services của Anh:

#### **Example 1: Login**
```typescript
// Huy (login.page.ts)
import { AuthService } from '../../../services/auth.service'; // ← Anh viết

async onLogin() {
  // Validation logic - Huy tự làm
  if (this.loginForm.invalid) {
    this.errorMessage = 'Vui lòng nhập đầy đủ thông tin';
    return;
  }
  
  // Gọi service của Anh
  try {
    await this.authService.login(email, password); // ← Anh implement
  } catch (error) {
    this.errorMessage = error.message;
  }
}
```

#### **Example 2: Chat**
```typescript
// Huy (chat.page.ts)
import { ChatbotService } from '../../../services/chatbot.service'; // ← Anh viết
import { FirestoreService } from '../../../services/firestore.service'; // ← Anh viết

async sendMessage() {
  // UI logic - Huy tự làm
  const userMessage = this.userInput.trim();
  this.loading = true;
  
  // Gọi services của Anh
  await this.firestoreService.addMessage(conversationId, {
    role: 'user',
    text: userMessage
  }); // ← Anh implement
  
  const response = await this.chatbotService.generateAIResponse(userMessage); // ← Anh implement
  
  await this.firestoreService.addMessage(conversationId, {
    role: 'bot',
    text: response.text
  }); // ← Anh implement
  
  this.loading = false;
}
```

#### **Example 3: Display Data**
```typescript
// Huy (history.page.ts)
import { FirestoreService } from '../../../services/firestore.service'; // ← Anh viết

ngOnInit() {
  // Subscribe to data từ service của Anh
  this.conversations$ = this.firestoreService.getConversations(); // ← Anh implement
}
```

```html
<!-- Huy (history.page.html) -->
<!-- Huy tự thiết kế UI -->
@for (conversation of conversations$ | async; track conversation.id) {
  <ion-card>
    <h2>{{ conversation.title }}</h2>
    <p>{{ conversation.lastMessageAt | date:'short' }}</p>
  </ion-card>
}
```

---

## 📋 CHECKLIST TỔNG HỢP

### Phase 1: Setup & Planning (Cả 2)
- [ ] **Anh**: Tạo Firebase project, lấy credentials
- [ ] **Anh**: Setup Express server
- [ ] **Huy**: Setup design system (global.scss)
- [ ] **Cả 2**: Thống nhất interfaces của services

### Phase 2: Core Development
#### **Anh làm:**
- [ ] Tạo tất cả Models/Interfaces
- [ ] Implement AuthService
- [ ] Implement FirestoreService
- [ ] Implement ChatbotService
- [ ] Implement StorageService
- [ ] Implement MediaService
- [ ] Implement AuthGuard
- [ ] Complete Express server

#### **Huy làm:**
- [ ] Thiết kế Login page (HTML + SCSS)
- [ ] Thiết kế Register page (HTML + SCSS)
- [ ] Thiết kế Chat page (HTML + SCSS)
- [ ] Thiết kế History page (HTML + SCSS)
- [ ] Thiết kế Favorites page (HTML + SCSS)
- [ ] Thiết kế Settings page (HTML + SCSS)
- [ ] Tạo ChatBubble component
- [ ] Tạo AudioPlayer component
- [ ] Tạo MediaPreview component

### Phase 3: Integration
- [ ] **Huy**: Gọi AuthService trong Login/Register
- [ ] **Huy**: Gọi ChatbotService + FirestoreService trong Chat
- [ ] **Huy**: Gọi FirestoreService trong History
- [ ] **Huy**: Gọi FirestoreService trong Favorites
- [ ] **Huy**: Implement form validation

### Phase 4: Testing & Polish
- [ ] **Anh**: Test tất cả services
- [ ] **Anh**: Deploy Firestore rules
- [ ] **Huy**: Polish UI/UX
- [ ] **Huy**: Add animations
- [ ] **Cả 2**: Integration testing
- [ ] **Cả 2**: Bug fixes

---

## 🚦 QUY TẮC LÀM VIỆC

### ✅ Anh phải:
- Code tất cả logic backend
- Đảm bảo services hoạt động đúng
- Document rõ ràng các methods
- Test từng service trước khi giao cho Huy

### ✅ Huy phải:
- Thiết kế tất cả giao diện
- Không viết business logic trong pages
- Chỉ gọi services của Anh
- Xử lý UI states (loading, error, empty)

### ⚠️ KHÔNG được:
- **Anh**: Không được sửa HTML/SCSS của Huy
- **Huy**: Không được viết logic trong services
- **Cả 2**: Không được commit code chưa test

---

## 📞 COMMUNICATION

### Anh cần thông báo cho Huy khi:
- ✅ Service đã hoàn thành và sẵn sàng sử dụng
- ✅ Interface của service có thay đổi
- ✅ API endpoint có thay đổi
- ❌ Có lỗi trong service

### Huy cần thông báo cho Anh khi:
- ✅ Cần thêm method trong service
- ✅ Gặp lỗi khi gọi service
- ✅ Cần thay đổi data structure
- ❌ UI không nhận được data

---

## 📚 TÀI LIỆU THAM KHẢO

### Dành cho Anh:
- `PHAM_VI_CONG_VIEC_ANH.md` - Chi tiết công việc
- `HUONG_DAN_TAO_DU_AN.md` - Section 2
- Firebase Docs
- OpenAI API Docs

### Dành cho Huy:
- `PHAM_VI_CONG_VIEC_HUY.md` - Chi tiết công việc
- `HUONG_DAN_TAO_DU_AN.md` - Section 3
- Ionic Docs
- Angular Docs

---

## ⏱️ TIMELINE ƯỚC TÍNH

| Ngày | Anh | Huy |
|------|-----|-----|
| 1-2 | Setup Firebase + Models + AuthService | Design System + Auth Pages |
| 3-4 | FirestoreService + ChatbotService | Chat Page + History Page |
| 5-6 | StorageService + MediaService | Favorites + Settings Pages |
| 7-8 | Express Server + Testing | Components + Animations |
| 9-10 | Bug fixes + Optimization | Polish UI/UX + Testing |

---

## 🎯 KẾT LUẬN

**2 bạn làm việc song song, chỉ cần:**
1. ✅ Thống nhất interfaces trước
2. ✅ Anh document rõ ràng services
3. ✅ Huy gọi services của Anh
4. ✅ Test thường xuyên
5. ✅ Communication tốt

**Good luck! 🚀**
