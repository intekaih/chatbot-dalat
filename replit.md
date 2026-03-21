# Đà Lạt Travel Chatbot

An AI-powered travel assistant app for Đà Lạt, Vietnam. Built with Ionic/Angular for the frontend and Express/Node.js for the backend.

## Architecture

- **Frontend**: Ionic 8 + Angular 19 (TypeScript), TailwindCSS, Firebase Auth + Storage — dev port 5000
- **Backend**: Express.js (TypeScript) with SQLite (better-sqlite3) — port 3001
- **AI**: OpenAI-compatible API (Gemini proxy) for personalized travel recommendations
- **Native**: Capacitor 8 with Camera, Geolocation, Network plugins

## Project Structure

```
ionic-tailwind-app/   # Ionic/Angular frontend
  src/
    app/
      pages/          # App pages (home, chat, explore, profile, etc.)
      services/       # API, auth, storage, geolocation, network services
      components/     # Reusable components (offline-banner, etc.)
    environments/     # environment.ts (dev), environment.prod.ts (prod — real Firebase config)
    assets/places/    # AI-generated images (5 per category: cafe, food, checkin, etc.)
  www/                # Angular production build output (served by Express in production)
  angular.json        # Angular CLI config (host: 0.0.0.0, port: 5000)

server/               # Express backend
  index.ts            # Main server: API routes + static serving of www/ + SPA fallback
  db.ts               # SQLite database setup and queries
  utils.ts            # OpenAI client config
  ai-generator.ts     # AI personalization logic
  pexels-service.ts   # AI image URL registry (HOSTING_BASE logic)
  place-image-service.ts  # Hash-based image selection per place
  dalat_chatbot.db    # SQLite database (auto-created)
```

## Image System

All images are AI-generated and stored in `ionic-tailwind-app/src/assets/places/`:
- 5 images per category: `cafe_1.png` → `cafe_5.png`, `food_1-5`, `checkin_1-5`, `nature_1-5`, `homestay_1-5`, `signature_1-5`, `rental_1-4`
- Hash of place name → stable image selection (same place always gets same image)
- `HOSTING_BASE` priority: `APP_URL` env var → `REPLIT_DEV_DOMAIN` → `dalat-chatbot.web.app`
- Auto-detection: in production, `APP_URL` is auto-set from the first request's `Host` header

## Environment Configuration

### Frontend
- Dev: `environment.ts` — `apiBaseUrl: ""` (proxy to localhost:3001 via `proxy.conf.json`)
- Prod: `environment.prod.ts` — real Firebase config embedded; `apiBaseUrl` = `window.location.origin`

### Backend
- API key: `AI_INTEGRATIONS_OPENAI_API_KEY` or `API_PROXY_BASE_URL` + `API_PROXY_KEY`
- CORS: allows `.replit.dev` and `.replit.app` domains automatically + no-origin (mobile/Capacitor)
- SQLite: pre-seeded with default places on startup

## Running the App (Development)

Two workflows are configured:
1. **Backend Server**: `cd server && npm run dev` (port 3001)
2. **Start application**: `cd ionic-tailwind-app && npx ng serve --configuration development` (port 5000)

## Deployment (Production — Replit)

Deployment config (VM target):
- **Build**: `cd ionic-tailwind-app && npx ng build --configuration production`
  - Outputs to `ionic-tailwind-app/www/` including all AI image assets
- **Run**: `cd server && npm start`
  - Express serves Angular `www/` as static files on the same port (3001)
  - API routes under `/api/*`
  - SPA fallback: any non-API route → `index.html`
  - Auto-detects `APP_URL` from first request for correct image URLs

## Features

- AI chatbot for Đà Lạt travel advice (Gemini via proxy)
- Personalized place recommendations based on user preferences
- Firebase Auth: Google OAuth + email/password
- Firebase Storage: upload chat images + avatars
- Firebase Security Rules: Firestore + Storage
- Categories: cafe, food, checkin, nature, homestay, rental, signature
- Trip planning, favorites, notifications
- Camera: take photos in chat
- Geolocation: suggest nearby places
- Network: offline banner when disconnected
- Lazy loading for all pages
- SQLite: persists users, places, chat history, trips, favorites

## Key Notes

- Firebase config is real (embedded in both `environment.ts` and `environment.prod.ts`)
- Storage rules path: `chats/{uid}/...` (matches `StorageService.uploadChatImage` path)
- Angular proxy (`proxy.conf.json`) forwards `/api/*` → `http://localhost:3001` in dev
- `disableHostCheck: true` in Angular dev server for Replit proxy compatibility
