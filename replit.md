# Chatbot Tư Vấn Du Lịch Đà Lạt

## Overview
Ứng dụng di động chatbot tư vấn du lịch Đà Lạt được xây dựng với Ionic Angular + Firebase + Capacitor cho đồ án môn "Phát triển ứng dụng di động nâng cao".

## Tech Stack
- **Frontend**: Ionic 8 + Angular 20 (Standalone Components)
- **Backend**: Firebase (Auth + Firestore) - chỉ lưu metadata
- **AI**: Replit AI Integrations (OpenAI GPT-4o-mini)
- **API Server**: Express.js (port 3001)
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
│   │   ├── layout/       # Drawer navigation layout
│   │   └── tabs/         # Chat, History, Favorites, Settings
│   └── components/       # Reusable UI components
├── firebase/             # Security rules (firestore.rules only)
└── capacitor.config.ts   # Capacitor config
server/
└── index.ts              # Express API server for AI chat
```

## Design System
- **Navigation**: Drawer (side menu) thay vì tabs
- **Primary Color**: #2D7A4F (Forest green - rừng thông Đà Lạt)
- **Accent Color**: #E56B6F (Soft coral - chợ hoa)
- **Background**: #F8F9F5 (Warm off-white)
- **Font**: Nunito (Google Fonts)
- **Border Radius**: 16px cards, 24px input, 12px chips
- **Theme**: Organic/Natural với tính cách Việt Nam

## Features
- Multi-user authentication (Email/Password)
- AI-powered chatbot (GPT-4o-mini) for Da Lat travel advice
- Suggestion chips for quick questions
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
- 2026-01-16: Complete UI/UX redesign with organic/natural theme
  - Changed from Tab navigation to Drawer navigation
  - New color palette: Forest green (#2D7A4F), Coral (#E56B6F)
  - Nunito font family
  - Floating input bar with suggestion chips
  - Welcome section with quick action chips
- 2026-01-15: Integrated Replit AI (OpenAI GPT-4o-mini) for intelligent chatbot responses
- Added Express API server (port 3001) for AI chat processing
- Refactored ChatbotService to use AI with fallback to rule-based responses
- Refactored to use Capacitor Filesystem for local file storage
- Firestore now only stores metadata (text, localPath, createdAt, uid)
