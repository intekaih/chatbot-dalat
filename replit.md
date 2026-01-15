# Chatbot Tư Vấn Du Lịch Đà Lạt

## Overview
Ứng dụng di động chatbot tư vấn du lịch Đà Lạt được xây dựng với Ionic Angular + Firebase + Capacitor cho đồ án môn "Phát triển ứng dụng di động nâng cao".

## Tech Stack
- **Frontend**: Ionic 8 + Angular 20 (Standalone Components)
- **Backend**: Firebase (Auth + Firestore + Storage)
- **Native**: Capacitor 6 (Camera, Audio)
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
├── firebase/             # Security rules
└── capacitor.config.ts   # Capacitor config
```

## Features
- Multi-user authentication (Email/Password)
- Rule-based chatbot for Da Lat travel advice
- Chat history with Firestore persistence
- Favorite places management
- Camera integration for photo messages
- Voice recording for audio messages

## Setup Required
1. Create Firebase project at console.firebase.google.com
2. Enable Auth (Email/Password), Firestore, Storage
3. Copy Firebase config to `src/environments/environment.ts`
4. Deploy security rules from `firebase/` folder

## Running
- Web: `cd ionic-app && npm start`
- Android: `cd ionic-app && npm run cap:android`

## Recent Changes
- Initial project setup with full MVC architecture
- Implemented all core features: Auth, Chat, History, Favorites
- Added Camera and Audio recording support
- Created Firebase security rules
