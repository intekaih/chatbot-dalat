# Chatbot Tư Vấn Du Lịch Đà Lạt

Ứng dụng di động chatbot tư vấn du lịch Đà Lạt được xây dựng với Ionic Angular + Firebase + Capacitor.

## Mục lục
- [Tính năng](#tính-năng)
- [Kiến trúc](#kiến-trúc)
- [Cài đặt](#cài-đặt)
- [Cấu hình Firebase](#cấu-hình-firebase)
- [Chạy ứng dụng](#chạy-ứng-dụng)
- [Build Android](#build-android)
- [Cấu trúc thư mục](#cấu-trúc-thư-mục)

## Tính năng

- **Authentication**: Đăng ký/Đăng nhập với Email
- **Chatbot Đà Lạt**: Tư vấn địa điểm, ẩm thực, lịch trình du lịch
- **Lịch sử Chat**: Xem lại các cuộc trò chuyện trước
- **Địa điểm Yêu thích**: Lưu và quản lý địa điểm yêu thích
- **Camera**: Chụp/chọn ảnh để gửi trong chat
- **Voice**: Ghi âm tin nhắn thoại
- **Multi-user**: Dữ liệu phân tách theo user

## Kiến trúc

Project được thiết kế theo mô hình **MVC + Services**:

```
src/app/
├── models/          # Data interfaces (ChatMessage, Conversation, etc.)
├── services/        # Business logic (Auth, Firestore, Storage, Media, Chatbot)
├── guards/          # Route guards (AuthGuard)
├── pages/           # Views (Login, Register, Tabs, Chat, History, etc.)
└── components/      # Reusable UI components (ChatBubble, AudioPlayer, etc.)
```

## Cài đặt

### Yêu cầu
- Node.js >= 18
- npm hoặc yarn
- (Để build Android) Android Studio + Android SDK

### Bước 1: Clone và cài đặt dependencies

```bash
cd ionic-app
npm install
```

### Bước 2: Cài đặt Ionic CLI (nếu chưa có)

```bash
npm install -g @ionic/cli
```

## Cấu hình Firebase

### Bước 1: Tạo Firebase Project

1. Truy cập [Firebase Console](https://console.firebase.google.com/)
2. Tạo project mới hoặc sử dụng project có sẵn
3. Bật các services:
   - **Authentication** > Sign-in method > Email/Password
   - **Cloud Firestore** > Create database
   - **Storage** > Get started

### Bước 2: Lấy Firebase Config

1. Project Settings > Your apps > Add app > Web
2. Copy config object

### Bước 3: Cấu hình environment

Chỉnh sửa file `src/environments/environment.ts`:

```typescript
export const environment = {
  production: false,
  firebase: {
    apiKey: "YOUR_API_KEY",
    authDomain: "YOUR_PROJECT.firebaseapp.com",
    projectId: "YOUR_PROJECT_ID",
    storageBucket: "YOUR_PROJECT.appspot.com",
    messagingSenderId: "YOUR_SENDER_ID",
    appId: "YOUR_APP_ID"
  }
};
```

### Bước 4: Deploy Security Rules

Copy nội dung từ `firebase/firestore.rules` vào Firestore Rules trên Console.
Copy nội dung từ `firebase/storage.rules` vào Storage Rules trên Console.

## Chạy ứng dụng

### Web Preview

```bash
npm start
# hoặc
ionic serve
```

Truy cập `http://localhost:5000`

## Build Android

### Bước 1: Build web assets

```bash
ionic build
```

### Bước 2: Thêm Android platform

```bash
ionic cap add android
```

### Bước 3: Sync và mở Android Studio

```bash
npm run cap:sync
npm run cap:open:android
```

### Bước 4: Build trong Android Studio

1. Wait for Gradle sync
2. Build > Build Bundle(s) / APK(s) > Build APK(s)
3. APK sẽ ở `android/app/build/outputs/apk/debug/`

### Test Camera/Mic trên Android

- **Emulator**: Camera/Mic có thể không hoạt động, cần test trên thiết bị thật
- **Thiết bị thật**: 
  1. Enable USB Debugging
  2. Connect device
  3. Run từ Android Studio

## Cấu trúc thư mục

```
ionic-app/
├── src/
│   ├── app/
│   │   ├── models/                    # Data models
│   │   │   ├── chat-message.model.ts
│   │   │   ├── conversation.model.ts
│   │   │   ├── favorite-place.model.ts
│   │   │   └── user-profile.model.ts
│   │   │
│   │   ├── services/                  # Business services
│   │   │   ├── auth.service.ts        # Authentication
│   │   │   ├── firestore.service.ts   # Database CRUD
│   │   │   ├── storage.service.ts     # File upload
│   │   │   ├── media.service.ts       # Camera/Mic
│   │   │   └── chatbot.service.ts     # Bot logic
│   │   │
│   │   ├── guards/
│   │   │   └── auth.guard.ts          # Route protection
│   │   │
│   │   ├── pages/
│   │   │   ├── auth/
│   │   │   │   ├── login/
│   │   │   │   └── register/
│   │   │   └── tabs/
│   │   │       ├── chat/              # Main chat UI
│   │   │       ├── history/           # Conversation history
│   │   │       ├── favorites/         # Saved places
│   │   │       └── settings/          # User settings
│   │   │
│   │   ├── components/
│   │   │   ├── chat-bubble/           # Message bubble
│   │   │   ├── media-preview/         # Image preview
│   │   │   └── audio-player/          # Audio playback
│   │   │
│   │   ├── app.routes.ts              # Routing config
│   │   ├── app.config.ts              # App providers
│   │   └── app.component.ts           # Root component
│   │
│   └── environments/
│       ├── environment.ts             # Dev config
│       └── environment.prod.ts        # Prod config
│
├── firebase/
│   ├── firestore.rules                # Firestore security rules
│   └── storage.rules                  # Storage security rules
│
├── capacitor.config.ts                # Capacitor config
├── angular.json                       # Angular config
├── package.json                       # Dependencies
└── README.md                          # This file
```

## Troubleshooting

### Camera không hoạt động trên web
- Camera Capacitor plugin yêu cầu HTTPS hoặc localhost
- Trên web, sẽ có popup permission request

### Mic không ghi âm được
- Check browser permissions cho microphone
- Trên Android emulator, mic có thể không khả dụng

### Firebase connection error
- Kiểm tra Firebase config trong environment.ts
- Đảm bảo đã enable các services cần thiết trên Firebase Console
- Check Firestore/Storage security rules

### Build Android lỗi
1. Đảm bảo đã cài Android Studio và SDK
2. Chạy `npm run cap:sync` trước khi open Android Studio
3. Check Gradle sync trong Android Studio

## Đồ án môn học

**Môn**: Phát triển ứng dụng di động nâng cao

**Công nghệ sử dụng**:
- Ionic Framework 8
- Angular 20
- Firebase (Auth + Firestore + Storage)
- Capacitor 6
- TypeScript + SCSS
