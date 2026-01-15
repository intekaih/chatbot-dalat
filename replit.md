# Chatbot Tư Vấn Du Lịch Đà Lạt

## Overview
Ứng dụng di động chatbot tư vấn du lịch Đà Lạt được xây dựng với Ionic Angular + Firebase + Capacitor cho đồ án môn "Phát triển ứng dụng di động nâng cao".

## Tech Stack
- **Frontend**: Ionic 8 + Angular 20 (Standalone Components)
- **Backend**: Firebase (Auth + Firestore) - chỉ lưu metadata
- **Local Storage**: Capacitor Filesystem (lưu ảnh/audio local)
- **Native**: Capacitor 6 (Camera, Audio, Filesystem)
- **Language**: TypeScript + SCSS

## Project Structure
```
ionic-app/
├── src/app/
│   ├── models/           # Data interfaces (MVC - Model)
│   ├── services/         # Business logic (MVC - Controller logic)
│   ├── guards/           # Route protection
│   ├── pages/            # Views (MVC - View)
│   │   ├── auth/         # Login, Register
│   │   └── tabs/         # Chat, History, Favorites, Settings
│   └── components/       # Reusable UI components
├── firebase/             # Security rules (firestore.rules only)
└── capacitor.config.ts   # Capacitor config
```

## Features
- Multi-user authentication (Email/Password)
- Rule-based chatbot for Da Lat travel advice
- Chat history with Firestore persistence
- Favorite places management
- Camera integration for photo messages
- Voice recording for audio messages
- Local file storage using Capacitor Filesystem

## Storage Architecture
- **Ảnh/Audio**: Lưu local trên thiết bị sử dụng Capacitor Filesystem
- **Firestore chỉ lưu metadata**:
  - text: nội dung tin nhắn
  - localImagePath / localAudioPath: đường dẫn local
  - createdAt: timestamp
  - uid: user ID
  - role: 'user' | 'bot'

## Setup Required
1. Create Firebase project at console.firebase.google.com
2. Enable Auth (Email/Password), Firestore Database
3. Copy Firebase config to `src/environments/environment.ts`
4. Deploy Firestore rules from `firebase/firestore.rules`

## Running
- Web: `cd ionic-app && npm start`
- Android: `cd ionic-app && npm run cap:android`

## Recent Changes
- 2026-01-15: Refactored to use Capacitor Filesystem for local file storage
- Firestore now only stores metadata (text, localPath, createdAt, uid)
- Removed Firebase Storage dependency
- Updated ChatMessage model with localImagePath/localAudioPath
