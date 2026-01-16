# 🎯 HƯỚNG DẪN TẠO DỰ ÁN CHATBOT ĐÀ LẠT TỪ ĐẦU

## 📋 MỤC LỤC
1. [Setup ban đầu](#1-setup-ban-đầu)
2. [Phần của Anh - Backend/Service](#2-phần-của-anh---backendservice)
3. [Phần của Huy - Frontend/UI](#3-phần-của-huy---frontendui)
4. [Tích hợp và Test](#4-tích-hợp-và-test)

---

## 1. SETUP BAN ĐẦU

### Bước 1.1: Cài đặt công cụ

```bash
# Cài Node.js (>= 18)
# Download từ: https://nodejs.org/

# Cài Ionic CLI
npm install -g @ionic/cli

# Cài Angular CLI (optional)
npm install -g @angular/cli

# Kiểm tra version
node --version
npm --version
ionic --version
```

### Bước 1.2: Tạo project Ionic Angular mới

```bash
# Tạo thư mục dự án
mkdir chatbot-dalat
cd chatbot-dalat

# Tạo Ionic app với Angular
ionic start ionic-app blank --type=angular --capacitor

# Chọn options:
# - Framework: Angular
# - Standalone Components: Yes
# - NgModules: No
```

### Bước 1.3: Cài đặt dependencies cơ bản

```bash
cd ionic-app

# Firebase
npm install firebase @angular/fire

# Capacitor plugins
npm install @capacitor/camera @capacitor/filesystem @capacitor/haptics @capacitor/keyboard @capacitor/status-bar @capacitor-community/media

# Utilities
npm install marked
```

### Bước 1.4: Cấu trúc thư mục ban đầu

```bash
# Tạo folders
cd src/app
mkdir models services guards pages components
mkdir pages/auth pages/tabs pages/layout
mkdir components/chat-bubble components/audio-player components/media-preview
```

---

## 2. PHẦN CỦA ANH - BACKEND/SERVICE

> **Anh sẽ làm tất cả phần logic, data, API**

### Bước 2.1: Setup Firebase

#### 2.1.1: Tạo Firebase Project
1. Truy cập [Firebase Console](https://console.firebase.google.com/)
2. Tạo project mới: `chatbot-dalat`
3. Enable các services:
   - **Authentication** → Email/Password
   - **Cloud Firestore** → Start in test mode
4. Lấy Firebase config: Project Settings → Your apps → Web

#### 2.1.2: Tạo file environment

**File: `src/environments/environment.ts`**
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

**File: `src/environments/environment.prod.ts`**
```typescript
export const environment = {
  production: true,
  firebase: {
    // Same config as above
  }
};
```

### Bước 2.2: Cấu hình Firebase trong App

**File: `src/app/app.config.ts`**
```typescript
import { ApplicationConfig, provideZoneChangeDetection } from '@angular/core';
import { provideRouter } from '@angular/router';
import { provideIonicAngular } from '@ionic/angular/standalone';
import { provideHttpClient } from '@angular/common/http';
import { initializeApp, provideFirebaseApp } from '@angular/fire/app';
import { getAuth, provideAuth } from '@angular/fire/auth';
import { getFirestore, provideFirestore } from '@angular/fire/firestore';
import { routes } from './app.routes';
import { environment } from '../environments/environment';

export const appConfig: ApplicationConfig = {
  providers: [
    provideZoneChangeDetection({ eventCoalescing: true }),
    provideRouter(routes),
    provideIonicAngular(),
    provideHttpClient(),
    provideFirebaseApp(() => initializeApp(environment.firebase)),
    provideAuth(() => getAuth()),
    provideFirestore(() => getFirestore())
  ]
};
```

### Bước 2.3: Tạo Data Models

**File: `src/app/models/user-profile.model.ts`**
```typescript
export interface UserProfile {
  id?: string;
  uid: string;
  email: string;
  displayName?: string;
  photoURL?: string;
  createdAt: Date;
}
```

**File: `src/app/models/conversation.model.ts`**
```typescript
export interface Conversation {
  id?: string;
  uid: string;
  title: string;
  createdAt: Date;
  lastMessageAt: Date;
}
```

**File: `src/app/models/chat-message.model.ts`**
```typescript
export interface SuggestedPlace {
  name: string;
  description: string;
  address?: string;
}

export interface ChatMessage {
  id?: string;
  conversationId: string;
  uid: string;
  role: 'user' | 'bot';
  text?: string;
  localImagePath?: string;
  localAudioPath?: string;
  suggestedPlace?: SuggestedPlace;
  createdAt: Date;
}
```

**File: `src/app/models/favorite-place.model.ts`**
```typescript
export interface FavoritePlace {
  id?: string;
  uid: string;
  name: string;
  description: string;
  address?: string;
  category?: string;
  createdAt: Date;
}
```

**File: `src/app/models/index.ts`**
```typescript
export * from './user-profile.model';
export * from './conversation.model';
export * from './chat-message.model';
export * from './favorite-place.model';
```

### Bước 2.4: Tạo Auth Service

**File: `src/app/services/auth.service.ts`**
```typescript
import { Injectable, inject, signal } from '@angular/core';
import { 
  Auth, 
  signInWithEmailAndPassword, 
  createUserWithEmailAndPassword,
  signOut,
  user,
  User
} from '@angular/fire/auth';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private auth = inject(Auth);
  private router = inject(Router);
  
  currentUser = signal<User | null>(null);

  constructor() {
    // Subscribe to auth state
    user(this.auth).subscribe(user => {
      this.currentUser.set(user);
    });
  }

  async login(email: string, password: string): Promise<void> {
    try {
      await signInWithEmailAndPassword(this.auth, email, password);
      this.router.navigate(['/tabs/chat']);
    } catch (error: any) {
      throw new Error(error.message);
    }
  }

  async register(email: string, password: string): Promise<void> {
    try {
      await createUserWithEmailAndPassword(this.auth, email, password);
      this.router.navigate(['/tabs/chat']);
    } catch (error: any) {
      throw new Error(error.message);
    }
  }

  async logout(): Promise<void> {
    await signOut(this.auth);
    this.router.navigate(['/auth/login']);
  }

  isAuthenticated(): boolean {
    return !!this.currentUser();
  }
}
```

### Bước 2.5: Tạo Firestore Service

**File: `src/app/services/firestore.service.ts`**
```typescript
import { Injectable, inject } from '@angular/core';
import {
  Firestore,
  collection,
  doc,
  addDoc,
  updateDoc,
  deleteDoc,
  query,
  orderBy,
  serverTimestamp,
  collectionData
} from '@angular/fire/firestore';
import { Observable, map } from 'rxjs';
import { ChatMessage, Conversation, FavoritePlace } from '../models';
import { AuthService } from './auth.service';

@Injectable({
  providedIn: 'root'
})
export class FirestoreService {
  private firestore = inject(Firestore);
  private authService = inject(AuthService);

  private get uid(): string {
    return this.authService.currentUser()?.uid || '';
  }

  // ========== CONVERSATIONS ==========
  
  getConversations(): Observable<Conversation[]> {
    const ref = collection(this.firestore, `users/${this.uid}/conversations`);
    const q = query(ref, orderBy('lastMessageAt', 'desc'));
    return collectionData(q, { idField: 'id' }).pipe(
      map(docs => docs.map(d => ({
        ...d,
        createdAt: d['createdAt']?.toDate?.() || new Date(),
        lastMessageAt: d['lastMessageAt']?.toDate?.() || new Date()
      })) as Conversation[])
    );
  }

  async createConversation(title: string): Promise<string> {
    const ref = collection(this.firestore, `users/${this.uid}/conversations`);
    const docRef = await addDoc(ref, {
      title,
      uid: this.uid,
      createdAt: serverTimestamp(),
      lastMessageAt: serverTimestamp()
    });
    return docRef.id;
  }

  async updateConversationTimestamp(conversationId: string): Promise<void> {
    const ref = doc(this.firestore, `users/${this.uid}/conversations/${conversationId}`);
    await updateDoc(ref, { lastMessageAt: serverTimestamp() });
  }

  async deleteConversation(conversationId: string): Promise<void> {
    const ref = doc(this.firestore, `users/${this.uid}/conversations/${conversationId}`);
    await deleteDoc(ref);
  }

  // ========== MESSAGES ==========

  getMessages(conversationId: string): Observable<ChatMessage[]> {
    const ref = collection(this.firestore, `users/${this.uid}/conversations/${conversationId}/messages`);
    const q = query(ref, orderBy('createdAt', 'asc'));
    return collectionData(q, { idField: 'id' }).pipe(
      map(docs => docs.map(d => ({
        ...d,
        createdAt: d['createdAt']?.toDate?.() || new Date()
      })) as ChatMessage[])
    );
  }

  async addMessage(conversationId: string, message: Partial<ChatMessage>): Promise<string> {
    const ref = collection(this.firestore, `users/${this.uid}/conversations/${conversationId}/messages`);
    const messageData: Record<string, any> = {
      uid: this.uid,
      conversationId,
      createdAt: serverTimestamp()
    };
    
    if (message.text !== undefined) messageData['text'] = message.text;
    if (message.localImagePath !== undefined) messageData['localImagePath'] = message.localImagePath;
    if (message.localAudioPath !== undefined) messageData['localAudioPath'] = message.localAudioPath;
    if (message.role !== undefined) messageData['role'] = message.role;
    if (message.suggestedPlace !== undefined) messageData['suggestedPlace'] = message.suggestedPlace;
    
    const docRef = await addDoc(ref, messageData);
    await this.updateConversationTimestamp(conversationId);
    return docRef.id;
  }

  // ========== FAVORITES ==========

  getFavorites(): Observable<FavoritePlace[]> {
    const ref = collection(this.firestore, `users/${this.uid}/favorites`);
    const q = query(ref, orderBy('createdAt', 'desc'));
    return collectionData(q, { idField: 'id' }).pipe(
      map(docs => docs.map(d => ({
        ...d,
        createdAt: d['createdAt']?.toDate?.() || new Date()
      })) as FavoritePlace[])
    );
  }

  async addFavorite(place: Partial<FavoritePlace>): Promise<string> {
    const ref = collection(this.firestore, `users/${this.uid}/favorites`);
    const docRef = await addDoc(ref, {
      ...place,
      uid: this.uid,
      createdAt: serverTimestamp()
    });
    return docRef.id;
  }

  async removeFavorite(favoriteId: string): Promise<void> {
    const ref = doc(this.firestore, `users/${this.uid}/favorites/${favoriteId}`);
    await deleteDoc(ref);
  }
}
```

### Bước 2.6: Tạo Storage Service (Capacitor Filesystem)

**File: `src/app/services/storage.service.ts`**
```typescript
import { Injectable } from '@angular/core';
import { Filesystem, Directory, Encoding } from '@capacitor/filesystem';
import { Capacitor } from '@capacitor/core';

@Injectable({
  providedIn: 'root'
})
export class StorageService {
  
  async saveImage(base64Data: string, fileName: string): Promise<string> {
    try {
      const result = await Filesystem.writeFile({
        path: `chatbot-dalat/images/${fileName}`,
        data: base64Data,
        directory: Directory.Data
      });
      
      return result.uri;
    } catch (error) {
      console.error('Error saving image:', error);
      throw error;
    }
  }

  async saveAudio(base64Data: string, fileName: string): Promise<string> {
    try {
      const result = await Filesystem.writeFile({
        path: `chatbot-dalat/audio/${fileName}`,
        data: base64Data,
        directory: Directory.Data
      });
      
      return result.uri;
    } catch (error) {
      console.error('Error saving audio:', error);
      throw error;
    }
  }

  async readFile(path: string): Promise<string> {
    try {
      const result = await Filesystem.readFile({
        path: path,
        directory: Directory.Data
      });
      
      return result.data as string;
    } catch (error) {
      console.error('Error reading file:', error);
      throw error;
    }
  }

  async deleteFile(path: string): Promise<void> {
    try {
      await Filesystem.deleteFile({
        path: path,
        directory: Directory.Data
      });
    } catch (error) {
      console.error('Error deleting file:', error);
      throw error;
    }
  }

  // Convert URI to web-viewable URL
  convertFileSrc(uri: string): string {
    return Capacitor.convertFileSrc(uri);
  }
}
```

### Bước 2.7: Tạo Media Service (Camera + Audio)

**File: `src/app/services/media.service.ts`**
```typescript
import { Injectable } from '@angular/core';
import { Camera, CameraResultType, CameraSource } from '@capacitor/camera';
import { Media } from '@capacitor-community/media';

@Injectable({
  providedIn: 'root'
})
export class MediaService {

  async takePicture(): Promise<string | undefined> {
    try {
      const image = await Camera.getPhoto({
        quality: 70,
        allowEditing: false,
        resultType: CameraResultType.Base64,
        source: CameraSource.Camera
      });

      return image.base64String;
    } catch (error) {
      console.error('Error taking picture:', error);
      return undefined;
    }
  }

  async pickImage(): Promise<string | undefined> {
    try {
      const image = await Camera.getPhoto({
        quality: 70,
        allowEditing: false,
        resultType: CameraResultType.Base64,
        source: CameraSource.Photos
      });

      return image.base64String;
    } catch (error) {
      console.error('Error picking image:', error);
      return undefined;
    }
  }

  async startRecording(): Promise<{ recordDataBase64: string } | undefined> {
    try {
      // Note: Capacitor Media plugin doesn't have built-in recording
      // You'll need to implement using native code or use MediaRecorder API for web
      console.log('Recording started');
      return undefined;
    } catch (error) {
      console.error('Error recording audio:', error);
      return undefined;
    }
  }
}
```

### Bước 2.8: Tạo Chatbot Service

**File: `src/app/services/chatbot.service.ts`**
```typescript
import { Injectable, inject } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { firstValueFrom } from 'rxjs';

interface DalatPlace {
  name: string;
  description: string;
  address: string;
  category: string;
}

interface ChatHistory {
  role: 'user' | 'assistant';
  content: string;
}

@Injectable({
  providedIn: 'root'
})
export class ChatbotService {
  private http = inject(HttpClient);
  private apiUrl = '/api/chat';

  private places: DalatPlace[] = [
    { name: 'Hồ Xuân Hương', description: 'Hồ nước tự nhiên ở trung tâm thành phố', address: 'Trung tâm TP. Đà Lạt', category: 'thiên nhiên' },
    { name: 'Thung Lũng Tình Yêu', description: 'Công viên thiên nhiên với cảnh quan lãng mạn', address: 'Phường 8, TP. Đà Lạt', category: 'thiên nhiên' },
    { name: 'Langbiang', description: 'Ngọn núi cao nhất Đà Lạt', address: 'Lạc Dương, Lâm Đồng', category: 'thiên nhiên' },
    { name: 'Chợ Đà Lạt', description: 'Chợ đêm nổi tiếng với món ăn vặt', address: 'Đường Nguyễn Thị Minh Khai', category: 'ẩm thực' },
  ];

  async generateAIResponse(
    userMessage: string, 
    history: ChatHistory[] = [], 
    imageDataUrl?: string
  ): Promise<{ text: string; suggestedPlace?: DalatPlace }> {
    try {
      const payload: any = {
        message: userMessage,
        history: history.map(h => ({ role: h.role, content: h.content }))
      };
      
      if (imageDataUrl) {
        const base64Data = imageDataUrl.includes(',') ? imageDataUrl.split(',')[1] : imageDataUrl;
        payload.imageBase64 = base64Data;
      }
      
      const response = await firstValueFrom(
        this.http.post<{ reply: string; suggestedPlace?: DalatPlace }>(this.apiUrl, payload)
      );

      return {
        text: response.reply,
        suggestedPlace: response.suggestedPlace || undefined
      };
    } catch (error: any) {
      console.error('AI API error:', error);
      // Fallback to rule-based
      return this.generateRuleBasedResponse(userMessage);
    }
  }

  generateRuleBasedResponse(userMessage: string): { text: string; suggestedPlace?: DalatPlace } {
    const message = userMessage.toLowerCase();

    if (this.isGreeting(message)) {
      return { text: 'Xin chào! Tôi là chatbot tư vấn du lịch Đà Lạt. Bạn muốn khám phá điều gì hôm nay?' };
    }

    if (message.includes('ăn') || message.includes('ẩm thực')) {
      const place = this.places.find(p => p.category === 'ẩm thực')!;
      return {
        text: `🍜 Về ẩm thực, tôi gợi ý bạn đến "${place.name}"!\n\n📍 ${place.address}\n📝 ${place.description}`,
        suggestedPlace: place
      };
    }

    const randomPlace = this.places[Math.floor(Math.random() * this.places.length)];
    return {
      text: `🌸 Tôi gợi ý "${randomPlace.name}"!\n\n📍 ${randomPlace.address}\n📝 ${randomPlace.description}`,
      suggestedPlace: randomPlace
    };
  }

  private isGreeting(message: string): boolean {
    const greetingKeywords = ['xin chào', 'hello', 'hi', 'chào'];
    return greetingKeywords.some(keyword => message.includes(keyword));
  }
}
```

### Bước 2.9: Tạo Auth Guard

**File: `src/app/guards/auth.guard.ts`**
```typescript
import { inject } from '@angular/core';
import { CanActivateFn, Router } from '@angular/router';
import { AuthService } from '../services/auth.service';

export const authGuard: CanActivateFn = (route, state) => {
  const authService = inject(AuthService);
  const router = inject(Router);

  if (authService.isAuthenticated()) {
    return true;
  } else {
    router.navigate(['/auth/login']);
    return false;
  }
};
```

### Bước 2.10: Tạo Express Server (AI API)

```bash
# Tạo thư mục server ở root dự án
cd ../..  # Ra ngoài ionic-app
mkdir server
cd server
npm init -y
```

**File: `server/package.json`**
```json
{
  "name": "dalat-chatbot-server",
  "version": "1.0.0",
  "type": "module",
  "scripts": {
    "start": "tsx index.ts",
    "dev": "tsx watch index.ts"
  },
  "dependencies": {
    "cors": "^2.8.5",
    "dotenv": "^17.2.3",
    "express": "^4.18.2",
    "openai": "^4.77.0"
  },
  "devDependencies": {
    "@types/cors": "^2.8.17",
    "@types/express": "^4.17.21",
    "@types/node": "^20.10.0",
    "tsx": "^4.7.0",
    "typescript": "^5.3.0"
  }
}
```

```bash
npm install
```

**File: `server/.env.example`**
```
OPENAI_API_KEY=sk-your-api-key-here
```

**File: `server/index.ts`**
```typescript
import 'dotenv/config';
import express from 'express';
import cors from 'cors';
import OpenAI from 'openai';

const app = express();
app.use(cors());
app.use(express.json({ limit: '50mb' }));

const apiKey = process.env.OPENAI_API_KEY;
const openai = new OpenAI({ apiKey });

const DALAT_SYSTEM_PROMPT = `Bạn là chatbot tư vấn du lịch Đà Lạt. 
Bạn có kiến thức về địa điểm, ẩm thực, lịch sử Đà Lạt.
Trả lời ngắn gọn, thân thiện với emoji phù hợp.`;

app.post('/api/chat', async (req, res) => {
  try {
    const { message, history = [], imageBase64 } = req.body;

    const messages: any[] = [
      { role: 'system', content: DALAT_SYSTEM_PROMPT },
      ...history,
      { role: 'user', content: message }
    ];

    const response = await openai.chat.completions.create({
      model: 'gpt-4o-mini',
      messages,
      max_tokens: 512
    });

    const reply = response.choices[0]?.message?.content || 'Xin lỗi, tôi không thể trả lời.';

    res.json({ reply });
  } catch (error) {
    console.error('OpenAI error:', error);
    res.status(500).json({ error: 'Failed to get AI response' });
  }
});

app.get('/api/health', (req, res) => {
  res.json({ status: 'ok' });
});

const PORT = 3001;
app.listen(PORT, '0.0.0.0', () => {
  console.log(`Server running on port ${PORT}`);
});
```

**File: `ionic-app/proxy.conf.json`**
```json
{
  "/api": {
    "target": "http://localhost:3001",
    "secure": false
  }
}
```

---

## 3. PHẦN CỦA HUY - FRONTEND/UI

> **Huy sẽ làm tất cả phần giao diện, component, styling**

### Bước 3.1: Setup Design System

**File: `src/global.scss`**
```scss
@import url('https://fonts.googleapis.com/css2?family=Nunito:wght@300;400;600;700&display=swap');

:root {
  --font-family: 'Nunito', sans-serif;
  
  // Colors - Dalat Theme
  --color-primary: #1B5E3B;      // Pine Green
  --color-primary-light: #2D7A4F;
  --color-primary-dark: #0F3D24;
  --color-accent: #FF6B6B;       // Coral Pink
  --color-accent-light: #FF8989;
  
  --color-background: #F8F9F5;
  --color-surface: #FFFFFF;
  --color-text: #2C3E50;
  --color-text-light: #7F8C8D;
  
  // Spacing
  --spacing-xs: 4px;
  --spacing-sm: 8px;
  --spacing-md: 16px;
  --spacing-lg: 24px;
  --spacing-xl: 32px;
  
  // Border Radius
  --radius-sm: 12px;
  --radius-md: 16px;
  --radius-lg: 24px;
  --radius-full: 999px;
  
  // Shadows
  --shadow-sm: 0 2px 8px rgba(0, 0, 0, 0.05);
  --shadow-md: 0 4px 16px rgba(0, 0, 0, 0.08);
  --shadow-lg: 0 8px 24px rgba(0, 0, 0, 0.12);
}

* {
  font-family: var(--font-family);
}

body {
  background: var(--color-background);
}

// Utility classes
.text-primary { color: var(--color-primary); }
.text-accent { color: var(--color-accent); }
.bg-primary { background: var(--color-primary); }
.bg-surface { background: var(--color-surface); }

.card {
  background: var(--color-surface);
  border-radius: var(--radius-md);
  box-shadow: var(--shadow-sm);
  padding: var(--spacing-md);
}
```

### Bước 3.2: Tạo Login Page

**File: `src/app/pages/auth/login/login.page.ts`**
```typescript
import { Component, inject } from '@angular/core';
import { FormBuilder, FormGroup, Validators, ReactiveFormsModule } from '@angular/forms';
import { Router } from '@angular/router';
import { IonContent, IonButton, IonInput, IonText, IonSpinner } from '@ionic/angular/standalone';
import { AuthService } from '../../../services/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
  standalone: true,
  imports: [IonContent, IonButton, IonInput, IonText, IonSpinner, ReactiveFormsModule]
})
export class LoginPage {
  private fb = inject(FormBuilder);
  private authService = inject(AuthService);
  private router = inject(Router);

  loginForm: FormGroup;
  loading = false;
  errorMessage = '';

  constructor() {
    this.loginForm = this.fb.group({
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required, Validators.minLength(6)]]
    });
  }

  async onLogin() {
    if (this.loginForm.invalid) {
      this.errorMessage = 'Vui lòng nhập đầy đủ thông tin';
      return;
    }

    this.loading = true;
    this.errorMessage = '';

    try {
      const { email, password } = this.loginForm.value;
      await this.authService.login(email, password);
    } catch (error: any) {
      this.errorMessage = error.message || 'Đăng nhập thất bại';
    } finally {
      this.loading = false;
    }
  }

  goToRegister() {
    this.router.navigate(['/auth/register']);
  }
}
```

**File: `src/app/pages/auth/login/login.page.html`**
```html
<ion-content>
  <div class="login-container">
    <!-- Hero Section -->
    <div class="hero-section">
      <div class="hero-gradient"></div>
      <h1>🌲 Đà Lạt Travel</h1>
      <p>Chatbot tư vấn du lịch Đà Lạt</p>
    </div>

    <!-- Login Form -->
    <div class="form-container">
      <h2>Đăng nhập</h2>
      
      <form [formGroup]="loginForm" (ngSubmit)="onLogin()">
        <ion-input
          type="email"
          formControlName="email"
          placeholder="Email"
          fill="outline"
          class="custom-input"
        ></ion-input>

        <ion-input
          type="password"
          formControlName="password"
          placeholder="Mật khẩu"
          fill="outline"
          class="custom-input"
        ></ion-input>

        <ion-text color="danger" *ngIf="errorMessage">
          <p class="error-text">{{ errorMessage }}</p>
        </ion-text>

        <ion-button 
          expand="block" 
          type="submit" 
          [disabled]="loading"
          class="login-btn"
        >
          <ion-spinner *ngIf="loading" name="crescent"></ion-spinner>
          <span *ngIf="!loading">Đăng nhập</span>
        </ion-button>
      </form>

      <p class="register-link">
        Chưa có tài khoản? 
        <a (click)="goToRegister()">Đăng ký ngay</a>
      </p>
    </div>
  </div>
</ion-content>
```

**File: `src/app/pages/auth/login/login.page.scss`**
```scss
.login-container {
  height: 100%;
  display: flex;
  flex-direction: column;
}

.hero-section {
  position: relative;
  background: linear-gradient(135deg, var(--color-primary), var(--color-primary-light));
  padding: 60px 24px 40px;
  text-align: center;
  color: white;

  h1 {
    font-size: 32px;
    font-weight: 700;
    margin: 0 0 8px;
  }

  p {
    font-size: 16px;
    opacity: 0.9;
    margin: 0;
  }
}

.form-container {
  flex: 1;
  background: white;
  border-radius: 32px 32px 0 0;
  margin-top: -20px;
  padding: 32px 24px;

  h2 {
    font-size: 24px;
    font-weight: 700;
    margin: 0 0 24px;
    color: var(--color-text);
  }

  form {
    display: flex;
    flex-direction: column;
    gap: 16px;
  }

  .custom-input {
    --border-radius: var(--radius-lg);
    --padding-start: 16px;
    --padding-end: 16px;
    margin-bottom: 8px;
  }

  .error-text {
    font-size: 14px;
    margin: 0;
  }

  .login-btn {
    --background: var(--color-primary);
    --border-radius: var(--radius-full);
    height: 56px;
    margin-top: 16px;
    font-weight: 600;
    font-size: 16px;
  }

  .register-link {
    text-align: center;
    margin-top: 24px;
    color: var(--color-text-light);

    a {
      color: var(--color-primary);
      font-weight: 600;
      cursor: pointer;
    }
  }
}
```

### Bước 3.3: Tạo Chat Page (UI cơ bản)

**File: `src/app/pages/tabs/chat/chat.page.ts`**
```typescript
import { Component, inject, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { 
  IonContent, IonHeader, IonToolbar, IonTitle, IonFooter,
  IonTextarea, IonButton, IonIcon, IonSpinner 
} from '@ionic/angular/standalone';
import { addIcons } from 'ionicons';
import { send, camera, mic } from 'ionicons/icons';
import { ChatbotService } from '../../../services/chatbot.service';
import { FirestoreService } from '../../../services/firestore.service';
import { ChatMessage } from '../../../models';

@Component({
  selector: 'app-chat',
  templateUrl: './chat.page.html',
  styleUrls: ['./chat.page.scss'],
  standalone: true,
  imports: [
    CommonModule, FormsModule,
    IonContent, IonHeader, IonToolbar, IonTitle, IonFooter,
    IonTextarea, IonButton, IonIcon, IonSpinner
  ]
})
export class ChatPage implements OnInit {
  private chatbotService = inject(ChatbotService);
  private firestoreService = inject(FirestoreService);

  messages: ChatMessage[] = [];
  userInput = '';
  loading = false;
  currentConversationId = '';

  constructor() {
    addIcons({ send, camera, mic });
  }

  async ngOnInit() {
    // Create a new conversation
    this.currentConversationId = await this.firestoreService.createConversation('New Chat');
    
    // Load messages
    this.firestoreService.getMessages(this.currentConversationId).subscribe(messages => {
      this.messages = messages;
    });
  }

  async sendMessage() {
    if (!this.userInput.trim() || this.loading) return;

    const userMessage = this.userInput.trim();
    this.userInput = '';
    this.loading = true;

    // Add user message
    await this.firestoreService.addMessage(this.currentConversationId, {
      role: 'user',
      text: userMessage
    });

    // Get bot response
    try {
      const response = await this.chatbotService.generateAIResponse(userMessage);
      
      await this.firestoreService.addMessage(this.currentConversationId, {
        role: 'bot',
        text: response.text,
        suggestedPlace: response.suggestedPlace
      });
    } catch (error) {
      console.error('Error getting bot response:', error);
    } finally {
      this.loading = false;
    }
  }
}
```

**File: `src/app/pages/tabs/chat/chat.page.html`**
```html
<ion-header>
  <ion-toolbar>
    <ion-title>🌲 Chat Đà Lạt</ion-title>
  </ion-toolbar>
</ion-header>

<ion-content class="chat-content">
  <div class="messages-container">
    @for (message of messages; track message.id) {
      <div [class]="'message-bubble ' + message.role">
        <p>{{ message.text }}</p>
      </div>
    }
    
    @if (loading) {
      <div class="message-bubble bot">
        <ion-spinner name="dots"></ion-spinner>
      </div>
    }
  </div>
</ion-content>

<ion-footer>
  <div class="input-container">
    <ion-textarea
      [(ngModel)]="userInput"
      placeholder="Nhập tin nhắn..."
      [autoGrow]="true"
      rows="1"
    ></ion-textarea>
    
    <ion-button fill="clear" (click)="sendMessage()">
      <ion-icon name="send" slot="icon-only"></ion-icon>
    </ion-button>
  </div>
</ion-footer>
```

**File: `src/app/pages/tabs/chat/chat.page.scss`**
```scss
.chat-content {
  --background: var(--color-background);
}

.messages-container {
  padding: 16px;
  display: flex;
  flex-direction: column;
  gap: 12px;
}

.message-bubble {
  max-width: 80%;
  padding: 12px 16px;
  border-radius: var(--radius-md);
  
  &.user {
    align-self: flex-end;
    background: var(--color-primary);
    color: white;
  }
  
  &.bot {
    align-self: flex-start;
    background: white;
    color: var(--color-text);
    box-shadow: var(--shadow-sm);
  }

  p {
    margin: 0;
    line-height: 1.5;
  }
}

.input-container {
  display: flex;
  align-items: flex-end;
  gap: 8px;
  padding: 12px;
  background: white;
  border-top: 1px solid #e0e0e0;

  ion-textarea {
    flex: 1;
    --padding-start: 12px;
    --padding-end: 12px;
  }

  ion-button {
    --color: var(--color-primary);
  }
}
```

### Bước 3.4: Tạo Routes

**File: `src/app/app.routes.ts`**
```typescript
import { Routes } from '@angular/router';
import { authGuard } from './guards/auth.guard';

export const routes: Routes = [
  {
    path: '',
    redirectTo: 'auth/login',
    pathMatch: 'full'
  },
  {
    path: 'auth/login',
    loadComponent: () => import('./pages/auth/login/login.page').then(m => m.LoginPage)
  },
  {
    path: 'auth/register',
    loadComponent: () => import('./pages/auth/register/register.page').then(m => m.RegisterPage)
  },
  {
    path: 'tabs',
    canActivate: [authGuard],
    children: [
      {
        path: 'chat',
        loadComponent: () => import('./pages/tabs/chat/chat.page').then(m => m.ChatPage)
      }
    ]
  }
];
```

---

## 4. TÍCH HỢP VÀ TEST

### Bước 4.1: Chạy dự án

```bash
# Terminal 1: Start Express Server
cd server
npm start

# Terminal 2: Start Ionic App
cd ionic-app
npm start
```

### Bước 4.2: Test flow

1. Mở browser: `http://localhost:5000`
2. Đăng ký tài khoản mới
3. Đăng nhập
4. Chat với bot
5. Kiểm tra Firestore Database (Firebase Console)

### Bước 4.3: Deploy Firestore Rules

**File: `ionic-app/firebase/firestore.rules`**
```
rules_version = '2';
service cloud.firestore {
  match /databases/{database}/documents {
    match /users/{userId}/{document=**} {
      allow read, write: if request.auth != null && request.auth.uid == userId;
    }
  }
}
```

Deploy rules trên Firebase Console → Firestore → Rules

---

## 📝 CHECKLIST

### Anh (Backend):
- [ ] Setup Firebase project
- [ ] Tạo tất cả models (interfaces)
- [ ] Tạo AuthService
- [ ] Tạo FirestoreService
- [ ] Tạo ChatbotService
- [ ] Tạo StorageService
- [ ] Tạo MediaService
- [ ] Tạo AuthGuard
- [ ] Setup Express server
- [ ] Config routes & app.config

### Huy (Frontend):
- [ ] Setup design system (global.scss)
- [ ] Tạo Login page (HTML + SCSS)
- [ ] Tạo Register page (HTML + SCSS)
- [ ] Tạo Chat page (HTML + SCSS)
- [ ] Tạo History page (HTML + SCSS)
- [ ] Tạo Favorites page (HTML + SCSS)
- [ ] Tạo Settings page (HTML + SCSS)
- [ ] Tạo ChatBubble component
- [ ] Tạo AudioPlayer component
- [ ] Form validation

---

## 🎯 KẾT LUẬN

- **Anh**: Chịu trách nhiệm toàn bộ logic, data, API, services
- **Huy**: Chịu trách nhiệm toàn bộ giao diện, component, styling
- **Tích hợp**: Huy gọi các service của Anh để hiển thị dữ liệu

Hai bạn có thể làm việc song song, chỉ cần thống nhất interface của các service trước!
