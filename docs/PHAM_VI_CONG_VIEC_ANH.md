# 🔧 PHẠM VI CÔNG VIỆC CỦA ANH - BACKEND DEVELOPER

## 📂 CÁC FILE/FOLDER ANH CHỊU TRÁCH NHIỆM

### 1️⃣ **SERVER (Express API)**
```
server/
├── index.ts                    ✅ Express server, API routes, OpenAI integration
├── package.json                ✅ Dependencies (express, openai, cors, dotenv)
├── .env                        ✅ Environment variables (OPENAI_API_KEY)
└── tsconfig.json              ✅ TypeScript config
```

**Nhiệm vụ:**
- Xây dựng Express server chạy trên port 3001
- Tạo API endpoint `/api/chat` để xử lý chat với AI
- Tích hợp OpenAI GPT-4o-mini
- Xử lý image input (vision API)
- Extract suggested places từ AI response

---

### 2️⃣ **MODELS (Data Structures)**
```
ionic-app/src/app/models/
├── user-profile.model.ts       ✅ Interface cho user profile
├── conversation.model.ts       ✅ Interface cho conversation
├── chat-message.model.ts       ✅ Interface cho chat message
├── favorite-place.model.ts     ✅ Interface cho favorite place
└── index.ts                    ✅ Export tất cả models
```

**Nhiệm vụ:**
- Định nghĩa tất cả TypeScript interfaces
- Đảm bảo type safety cho toàn bộ dự án
- Document các fields trong interface

**Ví dụ code:**
```typescript
// chat-message.model.ts
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

---

### 3️⃣ **SERVICES (Business Logic)**
```
ionic-app/src/app/services/
├── auth.service.ts             ✅ Firebase Authentication logic
├── firestore.service.ts        ✅ Firestore CRUD operations
├── chatbot.service.ts          ✅ AI chatbot logic, API calls
├── storage.service.ts          ✅ Capacitor Filesystem operations
├── media.service.ts            ✅ Camera/Audio handling
└── index.ts                    ✅ Export tất cả services
```

#### **3.1. AuthService**
**File:** `auth.service.ts`

**Chức năng:**
- ✅ Login với email/password
- ✅ Register user mới
- ✅ Logout
- ✅ Lưu trạng thái user hiện tại
- ✅ Check authentication status

**Methods cần implement:**
```typescript
- login(email: string, password: string): Promise<void>
- register(email: string, password: string): Promise<void>
- logout(): Promise<void>
- isAuthenticated(): boolean
- currentUser: Signal<User | null>
```

#### **3.2. FirestoreService**
**File:** `firestore.service.ts`

**Chức năng:**
- ✅ CRUD operations cho Conversations
- ✅ CRUD operations cho Messages
- ✅ CRUD operations cho Favorites

**Methods cần implement:**
```typescript
// Conversations
- getConversations(): Observable<Conversation[]>
- createConversation(title: string): Promise<string>
- updateConversationTimestamp(conversationId: string): Promise<void>
- deleteConversation(conversationId: string): Promise<void>

// Messages
- getMessages(conversationId: string): Observable<ChatMessage[]>
- addMessage(conversationId: string, message: Partial<ChatMessage>): Promise<string>

// Favorites
- getFavorites(): Observable<FavoritePlace[]>
- addFavorite(place: Partial<FavoritePlace>): Promise<string>
- removeFavorite(favoriteId: string): Promise<void>
```

**Firestore Structure:**
```
users/{uid}/
├── conversations/{conversationId}
│   ├── title: string
│   ├── createdAt: timestamp
│   ├── lastMessageAt: timestamp
│   └── messages/{messageId}
│       ├── text: string
│       ├── role: 'user' | 'bot'
│       ├── localImagePath: string
│       ├── suggestedPlace: object
│       └── createdAt: timestamp
└── favorites/{favoriteId}
    ├── name: string
    ├── description: string
    ├── address: string
    └── createdAt: timestamp
```

#### **3.3. ChatbotService**
**File:** `chatbot.service.ts`

**Chức năng:**
- ✅ Gọi Express API để chat với AI
- ✅ Xử lý AI response
- ✅ Fallback sang rule-based nếu API lỗi
- ✅ Extract suggested place

**Methods cần implement:**
```typescript
- generateAIResponse(
    userMessage: string, 
    history: ChatHistory[], 
    imageDataUrl?: string
  ): Promise<{ text: string; suggestedPlace?: DalatPlace }>
  
- generateRuleBasedResponse(
    userMessage: string
  ): { text: string; suggestedPlace?: DalatPlace }
```

**API Call:**
```typescript
POST /api/chat
Body: {
  message: string,
  history: Array<{role, content}>,
  imageBase64?: string
}
Response: {
  reply: string,
  suggestedPlace?: {
    name: string,
    description: string,
    address: string
  }
}
```

#### **3.4. StorageService**
**File:** `storage.service.ts`

**Chức năng:**
- ✅ Lưu ảnh vào Capacitor Filesystem
- ✅ Lưu audio vào Capacitor Filesystem
- ✅ Đọc file từ filesystem
- ✅ Xóa file
- ✅ Convert URI sang web-viewable URL

**Methods cần implement:**
```typescript
- saveImage(base64Data: string, fileName: string): Promise<string>
- saveAudio(base64Data: string, fileName: string): Promise<string>
- readFile(path: string): Promise<string>
- deleteFile(path: string): Promise<void>
- convertFileSrc(uri: string): string
```

**Directory Structure:**
```
Capacitor FileSystem (Directory.Data)
└── chatbot-dalat/
    ├── images/
    │   ├── {timestamp}_1.jpg
    │   ├── {timestamp}_2.jpg
    │   └── ...
    └── audio/
        ├── {timestamp}_1.mp3
        ├── {timestamp}_2.mp3
        └── ...
```

#### **3.5. MediaService**
**File:** `media.service.ts`

**Chức năng:**
- ✅ Chụp ảnh bằng Camera
- ✅ Chọn ảnh từ thư viện
- ✅ Ghi âm (nếu có)

**Methods cần implement:**
```typescript
- takePicture(): Promise<string | undefined>  // Return base64
- pickImage(): Promise<string | undefined>    // Return base64
- startRecording(): Promise<RecordingData | undefined>
```

---

### 4️⃣ **GUARDS (Route Protection)**
```
ionic-app/src/app/guards/
└── auth.guard.ts               ✅ Protect routes, redirect if not logged in
```

**Chức năng:**
- Kiểm tra authentication trước khi vào route
- Redirect về `/auth/login` nếu chưa đăng nhập

**Code:**
```typescript
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

---

### 5️⃣ **CONFIGURATION FILES**
```
ionic-app/src/
├── app/
│   ├── app.config.ts           ✅ App providers, Firebase initialization
│   └── app.routes.ts           ✅ Route configuration
├── environments/
│   ├── environment.ts          ✅ Firebase config (dev)
│   └── environment.prod.ts     ✅ Firebase config (prod)
└── main.ts                     ✅ Bootstrap app

ionic-app/
├── proxy.conf.json             ✅ Proxy config cho API server
└── capacitor.config.ts         ✅ Capacitor config

firebase/
└── firestore.rules             ✅ Firestore security rules
```

#### **app.config.ts**
```typescript
export const appConfig: ApplicationConfig = {
  providers: [
    provideRouter(routes),
    provideIonicAngular(),
    provideHttpClient(),
    provideFirebaseApp(() => initializeApp(environment.firebase)),
    provideAuth(() => getAuth()),
    provideFirestore(() => getFirestore())
  ]
};
```

#### **app.routes.ts**
```typescript
export const routes: Routes = [
  { path: '', redirectTo: 'auth/login', pathMatch: 'full' },
  { path: 'auth/login', loadComponent: ... },
  { path: 'auth/register', loadComponent: ... },
  {
    path: 'tabs',
    canActivate: [authGuard],
    children: [
      { path: 'chat', loadComponent: ... },
      { path: 'history', loadComponent: ... },
      { path: 'favorites', loadComponent: ... },
      { path: 'settings', loadComponent: ... }
    ]
  }
];
```

#### **firestore.rules**
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

---

## 🎯 QUY TRÌNH LÀM VIỆC CỦA ANH

### Phase 1: Setup (Ngày 1)
1. ✅ Tạo Firebase project
2. ✅ Enable Authentication (Email/Password)
3. ✅ Enable Firestore Database
4. ✅ Lấy Firebase config
5. ✅ Setup Express server
6. ✅ Lấy OpenAI API key

### Phase 2: Models & Config (Ngày 1-2)
1. ✅ Tạo tất cả models/interfaces
2. ✅ Config `environment.ts`
3. ✅ Config `app.config.ts`
4. ✅ Config `app.routes.ts`
5. ✅ Viết Firestore rules

### Phase 3: Services (Ngày 2-4)
1. ✅ Implement AuthService
2. ✅ Implement FirestoreService
3. ✅ Implement ChatbotService
4. ✅ Implement StorageService
5. ✅ Implement MediaService

### Phase 4: Guards & Server (Ngày 4-5)
1. ✅ Implement AuthGuard
2. ✅ Complete Express server
3. ✅ Test API endpoints

### Phase 5: Testing (Ngày 5-6)
1. ✅ Test Firebase Authentication
2. ✅ Test Firestore CRUD
3. ✅ Test AI chatbot API
4. ✅ Test file storage
5. ✅ Deploy Firestore rules

---

## 🔑 KEY POINTS CHO ANH

### ✅ **ANH LÀM GÌ:**
- Xây dựng **TOÀN BỘ LOGIC** backend
- Tích hợp **Firebase** (Auth + Firestore)
- Xây dựng **Express API** cho AI
- Quản lý **state** và **data flow**
- Xử lý **bảo mật** (guards, rules)

### ❌ **ANH KHÔNG LÀM GÌ:**
- Không thiết kế giao diện (HTML/SCSS)
- Không tạo components UI
- Không styling
- Không xử lý animations/transitions

### 🤝 **TƯƠNG TÁC VỚI HUY:**
- Huy sẽ **GỌI** các service của Anh
- Anh cần đảm bảo các service **hoạt động đúng**
- Anh cần **document** rõ ràng các methods
- Thống nhất **interface** trước khi code

---

## 📝 CHECKLIST CHO ANH

### Setup & Config:
- [ ] Tạo Firebase project
- [ ] Enable Authentication + Firestore
- [ ] Lấy Firebase config
- [ ] Setup Express server
- [ ] Lấy OpenAI API key
- [ ] Config environment files

### Models:
- [ ] UserProfile interface
- [ ] Conversation interface
- [ ] ChatMessage interface
- [ ] FavoritePlace interface

### Services:
- [ ] AuthService (login, register, logout)
- [ ] FirestoreService (CRUD conversations, messages, favorites)
- [ ] ChatbotService (AI integration)
- [ ] StorageService (filesystem operations)
- [ ] MediaService (camera, audio)

### Guards & Routes:
- [ ] AuthGuard
- [ ] Configure routes với guards

### Server:
- [ ] Express setup
- [ ] POST /api/chat endpoint
- [ ] OpenAI integration
- [ ] Place extraction logic

### Security:
- [ ] Firestore rules
- [ ] Auth guards
- [ ] API error handling

---

## 🚀 CÁCH BẮT ĐẦU

1. Đọc kỹ `HUONG_DAN_TAO_DU_AN.md` - Phần 2
2. Follow từng bước trong Phase 1-5
3. Test từng service sau khi hoàn thành
4. Document code rõ ràng cho Huy
5. Coordination với Huy về interfaces

**Good luck! 💪**
