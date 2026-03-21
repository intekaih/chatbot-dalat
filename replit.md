# Đà Lạt Travel Chatbot

An AI-powered travel assistant app for Đà Lạt, Vietnam. Built with Ionic/Angular for the frontend and Express/Node.js for the backend.

## Architecture

- **Frontend**: Ionic + Angular (TypeScript), TailwindCSS, Firebase Auth — runs on port 5000
- **Backend**: Express.js (TypeScript) with SQLite (better-sqlite3) — runs on port 3001
- **AI**: OpenAI-compatible API for personalized travel recommendations

## Project Structure

```
ionic-tailwind-app/   # Ionic/Angular frontend
  src/
    app/
      pages/          # App pages (home, chat, explore, etc.)
      services/       # API service, auth service
      components/     # Reusable components
      config/         # AI config (ai.config.ts)
    environments/     # environment.ts (dev), environment.prod.ts (prod)
  angular.json        # Angular CLI config (host: 0.0.0.0, port: 5000)

server/               # Express backend
  index.ts            # Main server with all API routes
  db.ts               # SQLite database setup and queries
  utils.ts            # OpenAI client config
  ai-generator.ts     # AI personalization logic
  dalat_chatbot.db    # SQLite database (auto-created)
```

## Environment Configuration

### Frontend
- Dev API URL is set in `ionic-tailwind-app/src/environments/environment.ts`
- Points to the Replit public domain + port 3001 for backend API calls

### Backend
- Uses `AI_INTEGRATIONS_OPENAI_API_KEY` (Replit AI Integration) if available
- Falls back to `OPENAI_API_KEY` environment variable
- Supports API proxy via `API_PROXY_BASE_URL` + `API_PROXY_KEY`
- CORS configured to allow `.replit.dev` domains automatically

## Running the App

Two workflows are configured:
1. **Backend Server**: `cd server && npm run dev` (port 3001)
2. **Start application**: `cd ionic-tailwind-app && npx ng serve --configuration development` (port 5000)

## Features

- AI chatbot for Đà Lạt travel advice
- Personalized place recommendations based on user preferences
- Firebase authentication (Google, email/password)
- Categories: cafe, food, checkin, nature, homestay, rental
- Trip planning, favorites, notifications
- Image fetching from Pexels API

## Key Notes

- The SQLite database is pre-seeded with default places on startup
- CORS allows all `.replit.dev` origins for Replit proxy compatibility
- Angular configured with `disableHostCheck: true` for Replit proxy
- Firebase config is embedded in `environment.ts` (public keys only)
