# 🎨 PHẠM VI CÔNG VIỆC CỦA HUY - FRONTEND DEVELOPER

## 📂 CÁC FILE/FOLDER HUY CHỊU TRÁCH NHIỆM

### 1️⃣ **DESIGN SYSTEM & GLOBAL STYLES**
```
ionic-app/src/
├── global.scss                 ✅ Design system, CSS variables, utility classes
├── theme/
│   └── variables.scss          ✅ Ionic theme customization
└── assets/                     ✅ Images, icons, fonts
```

**Nhiệm vụ:**
- Thiết kế design system (colors, spacing, typography)
- Tạo CSS variables và utility classes
- Import Google Fonts
- Customize Ionic theme

**Ví dụ code:**
```scss
:root {
  // Colors
  --color-primary: #1B5E3B;      // Pine Green
  --color-accent: #FF6B6B;       // Coral Pink
  
  // Spacing
  --spacing-xs: 4px;
  --spacing-md: 16px;
  --spacing-lg: 24px;
  
  // Border Radius
  --radius-md: 16px;
  --radius-lg: 24px;
  
  // Shadows
  --shadow-sm: 0 2px 8px rgba(0, 0, 0, 0.05);
}
```

---

### 2️⃣ **AUTHENTICATION PAGES**
```
ionic-app/src/app/pages/auth/
├── login/
│   ├── login.page.ts           ⚠️ Component logic + form validation
│   ├── login.page.html         ✅ HTML template
│   └── login.page.scss         ✅ Styling
└── register/
    ├── register.page.ts        ⚠️ Component logic + form validation
    ├── register.page.html      ✅ HTML template
    └── register.page.scss      ✅ Styling
```

#### **2.1. Login Page**

**HTML Responsibilities:**
- Hero section với gradient background
- Form layout (email, password inputs)
- Login button với loading state
- Link đến register page
- Error message display

**SCSS Responsibilities:**
- Gradient hero section
- Custom input styling
- Button styling
- Responsive layout
- Animations (fade in, slide up)

**Component Logic:**
- Form validation (email format, password length)
- Call AuthService.login()
- Display error messages
- Loading state management

**Example:**
```typescript
// login.page.ts
async onLogin() {
  if (this.loginForm.invalid) {
    this.errorMessage = 'Vui lòng nhập đầy đủ thông tin';
    return;
  }
  
  this.loading = true;
  
  try {
    const { email, password } = this.loginForm.value;
    await this.authService.login(email, password); // ← Gọi service của Anh
  } catch (error: any) {
    this.errorMessage = error.message;
  } finally {
    this.loading = false;
  }
}
```

#### **2.2. Register Page**
- Tương tự Login Page
- Thêm confirm password field
- Validation: email, password match, password strength

---

### 3️⃣ **LAYOUT (Navigation)**
```
ionic-app/src/app/pages/layout/
└── drawer-layout/
    ├── drawer-layout.page.ts   ⚠️ Menu logic, navigation
    ├── drawer-layout.page.html ✅ Drawer menu structure
    └── drawer-layout.page.scss ✅ Drawer styling
```

**Responsibilities:**
- Drawer (side menu) navigation
- Menu items (Profile, Settings, Logout)
- User avatar display
- Menu animations
- Router outlet cho tabs

**Example structure:**
```html
<ion-menu side="start" contentId="main-content">
  <ion-header>
    <ion-toolbar>
      <ion-title>Menu</ion-title>
    </ion-toolbar>
  </ion-header>
  
  <ion-content>
    <ion-list>
      <ion-item button (click)="goToProfile()">
        <ion-icon name="person" slot="start"></ion-icon>
        <ion-label>Hồ sơ</ion-label>
      </ion-item>
      
      <ion-item button (click)="logout()">
        <ion-icon name="log-out" slot="start"></ion-icon>
        <ion-label>Đăng xuất</ion-label>
      </ion-item>
    </ion-list>
  </ion-content>
</ion-menu>

<ion-router-outlet id="main-content"></ion-router-outlet>
```

---

### 4️⃣ **TABS PAGES**

#### **4.1. Chat Page**
```
ionic-app/src/app/pages/tabs/chat/
├── chat.page.ts                ⚠️ UI logic, gọi services
├── chat.page.html              ✅ Chat interface
└── chat.page.scss              ✅ Chat styling
```

**HTML Responsibilities:**
- Welcome section với suggestion chips
- Messages container
- Chat bubbles (user/bot)
- Input footer với send/camera/mic buttons
- Loading spinner
- Suggested place card

**SCSS Responsibilities:**
- Chat bubble styling (user vs bot)
- Message container layout
- Input footer styling
- Suggestion chips grid
- Smooth scrolling
- Message animations

**Component Logic:**
- Gọi ChatbotService.generateAIResponse()
- Gọi FirestoreService.addMessage()
- Subscribe getMessages() observable
- Handle camera button → gọi MediaService
- Handle send button
- Auto-scroll to bottom

**Key Features:**
```typescript
// chat.page.ts
async sendMessage() {
  if (!this.userInput.trim()) return;
  
  const userMessage = this.userInput.trim();
  this.userInput = '';
  this.loading = true;
  
  // Add user message
  await this.firestoreService.addMessage(this.currentConversationId, {
    role: 'user',
    text: userMessage
  });
  
  // Get bot response
  const response = await this.chatbotService.generateAIResponse(userMessage);
  
  // Add bot message
  await this.firestoreService.addMessage(this.currentConversationId, {
    role: 'bot',
    text: response.text,
    suggestedPlace: response.suggestedPlace
  });
  
  this.loading = false;
}
```

**UI Elements:**
- 2x2 suggestion chips grid
- Chat bubbles với avatar
- Markdown rendering cho bot messages
- Image preview trong message
- Audio player trong message
- "Save to favorites" button cho suggested places

---

#### **4.2. History Page**
```
ionic-app/src/app/pages/tabs/history/
├── history.page.ts             ⚠️ UI logic, gọi services
├── history.page.html           ✅ History list interface
└── history.page.scss           ✅ Card layout styling
```

**HTML Responsibilities:**
- Header với search bar (optional)
- Vertical list of conversation cards
- Each card shows: title, last message preview, timestamp
- Delete button (swipe action)
- Empty state (no conversations)

**SCSS Responsibilities:**
- Card-based layout
- Hover effects
- Swipe actions styling
- List spacing and shadows

**Component Logic:**
- Subscribe getConversations() observable
- Display conversations
- Handle click → navigate to chat
- Handle delete → gọi FirestoreService.deleteConversation()

**Example:**
```html
<ion-content>
  <div class="history-container">
    @for (conversation of conversations$ | async; track conversation.id) {
      <ion-card class="conversation-card" (click)="openConversation(conversation)">
        <ion-card-header>
          <ion-card-title>{{ conversation.title }}</ion-card-title>
          <ion-card-subtitle>
            {{ conversation.lastMessageAt | date:'short' }}
          </ion-card-subtitle>
        </ion-card-header>
        
        <ion-button fill="clear" (click)="deleteConversation($event, conversation)">
          <ion-icon name="trash"></ion-icon>
        </ion-button>
      </ion-card>
    }
  </div>
</ion-content>
```

---

#### **4.3. Favorites Page**
```
ionic-app/src/app/pages/tabs/favorites/
├── favorites.page.ts           ⚠️ UI logic, gọi services
├── favorites.page.html         ✅ Favorites list interface
└── favorites.page.scss         ✅ List styling
```

**HTML Responsibilities:**
- List of favorite places
- Each item shows: name, description, address
- Remove button
- Open in Maps button
- Empty state

**SCSS Responsibilities:**
- List item styling
- Icon styling
- Action buttons

**Component Logic:**
- Subscribe getFavorites() observable
- Handle remove → gọi FirestoreService.removeFavorite()
- Handle "Open Maps" → open external link

---

#### **4.4. Settings Page**
```
ionic-app/src/app/pages/tabs/settings/
├── settings.page.ts            ⚠️ UI logic, gọi services
├── settings.page.html          ✅ Settings form interface
└── settings.page.scss          ✅ Form styling
```

**HTML Responsibilities:**
- User profile section (avatar, email)
- Settings options (theme, notifications)
- Logout button
- About section

**SCSS Responsibilities:**
- Profile card styling
- Settings list styling
- Section separators

**Component Logic:**
- Display user info từ AuthService.currentUser
- Handle logout → gọi AuthService.logout()

---

### 5️⃣ **REUSABLE COMPONENTS**

#### **5.1. Chat Bubble Component**
```
ionic-app/src/app/components/chat-bubble/
├── chat-bubble.component.ts    ✅ Component logic
├── chat-bubble.component.html  ✅ Bubble template
└── chat-bubble.component.scss  ✅ Bubble styling
```

**Inputs:**
```typescript
@Input() message!: ChatMessage;
@Input() isUser: boolean = false;
```

**Features:**
- Display text message
- Display image (if localImagePath exists)
- Display audio player (if localAudioPath exists)
- Display suggested place card
- Markdown rendering cho bot messages
- Avatar display
- Timestamp

**Styling:**
- User bubble: align right, primary color
- Bot bubble: align left, white with shadow
- Different border radius
- Responsive width

---

#### **5.2. Audio Player Component**
```
ionic-app/src/app/components/audio-player/
├── audio-player.component.ts   ✅ Player logic
├── audio-player.component.html ✅ Player UI
└── audio-player.component.scss ✅ Player styling
```

**Inputs:**
```typescript
@Input() audioPath!: string;
```

**Features:**
- Play/Pause button
- Progress bar
- Current time / Total duration
- Custom audio controls

**Logic:**
- Use HTML5 Audio API
- Handle play/pause
- Update progress bar
- Format time (mm:ss)

---

#### **5.3. Media Preview Component**
```
ionic-app/src/app/components/media-preview/
├── media-preview.component.ts  ✅ Preview logic
├── media-preview.component.html ✅ Preview UI
└── media-preview.component.scss ✅ Preview styling
```

**Inputs:**
```typescript
@Input() imagePath!: string;
```

**Features:**
- Display image preview
- Fullscreen mode on click
- Close button
- Zoom in/out (optional)

---

### 6️⃣ **TABS NAVIGATION**
```
ionic-app/src/app/pages/tabs/
├── tabs.page.ts                ⚠️ Tabs logic
├── tabs.page.html              ✅ Tab bar layout
└── tabs.page.scss              ✅ Tab styling
```

**HTML:**
```html
<ion-tabs>
  <ion-tab-bar slot="bottom">
    <ion-tab-button tab="chat">
      <ion-icon name="chatbubbles"></ion-icon>
      <ion-label>Chat</ion-label>
    </ion-tab-button>
    
    <ion-tab-button tab="history">
      <ion-icon name="time"></ion-icon>
      <ion-label>Lịch sử</ion-label>
    </ion-tab-button>
    
    <ion-tab-button tab="favorites">
      <ion-icon name="heart"></ion-icon>
      <ion-label>Yêu thích</ion-label>
    </ion-tab-button>
    
    <ion-tab-button tab="settings">
      <ion-icon name="settings"></ion-icon>
      <ion-label>Cài đặt</ion-label>
    </ion-tab-button>
  </ion-tab-bar>
</ion-tabs>
```

**SCSS:**
- Tab bar background
- Selected tab highlight
- Icon colors
- Animations on tab change

---

## 🎯 QUY TRÌNH LÀM VIỆC CỦA HUY

### Phase 1: Design System (Ngày 1)
1. ✅ Thiết kế global.scss với CSS variables
2. ✅ Import Google Fonts
3. ✅ Tạo utility classes
4. ✅ Customize Ionic theme

### Phase 2: Auth Pages (Ngày 2)
1. ✅ Tạo Login page (HTML + SCSS)
2. ✅ Tạo Register page (HTML + SCSS)
3. ✅ Implement form validation
4. ✅ Add loading states & animations

### Phase 3: Layout & Navigation (Ngày 3)
1. ✅ Tạo Drawer layout
2. ✅ Tạo Tabs navigation
3. ✅ Style menu items

### Phase 4: Main Pages (Ngày 4-6)
1. ✅ Tạo Chat page (HTML + SCSS)
2. ✅ Tạo History page (HTML + SCSS)
3. ✅ Tạo Favorites page (HTML + SCSS)
4. ✅ Tạo Settings page (HTML + SCSS)

### Phase 5: Components (Ngày 7-8)
1. ✅ Tạo ChatBubble component
2. ✅ Tạo AudioPlayer component
3. ✅ Tạo MediaPreview component

### Phase 6: Refinement (Ngày 9-10)
1. ✅ Polish UI/UX
2. ✅ Add animations & transitions
3. ✅ Responsive design
4. ✅ Test on different screen sizes

---

## 🔑 KEY POINTS CHO HUY

### ✅ **HUY LÀM GÌ:**
- Thiết kế **TOÀN BỘ GIAO DIỆN** (HTML + SCSS)
- Xây dựng **components** tái sử dụng
- Xử lý **form validation**
- Tối ưu **UX** (loading, animations, transitions)
- **GỌI** các service của Anh để hiển thị data

### ❌ **HUY KHÔNG LÀM GÌ:**
- Không viết business logic (services)
- Không tích hợp Firebase
- Không xây dựng API server
- Không viết security rules

### 🤝 **TƯƠNG TÁC VỚI ANH:**
- Huy **GỌI** các service của Anh
- Anh cung cấp **interface** rõ ràng
- Huy **hiển thị** data từ services
- Thống nhất **data flow** trước khi code

---

## 📝 FORM VALIDATION RULES

### Login Form:
```typescript
this.loginForm = this.fb.group({
  email: ['', [Validators.required, Validators.email]],
  password: ['', [Validators.required, Validators.minLength(6)]]
});
```

**Error Messages:**
- Email empty: "Vui lòng nhập email"
- Email invalid: "Email không hợp lệ"
- Password empty: "Vui lòng nhập mật khẩu"
- Password too short: "Mật khẩu phải có ít nhất 6 ký tự"

### Register Form:
```typescript
this.registerForm = this.fb.group({
  email: ['', [Validators.required, Validators.email]],
  password: ['', [Validators.required, Validators.minLength(6)]],
  confirmPassword: ['', [Validators.required]]
}, {
  validators: this.passwordMatchValidator
});
```

**Additional Validation:**
- Passwords must match
- Display strength indicator (optional)

---

## 🎨 UI/UX BEST PRACTICES

### 1. Loading States
```html
<ion-button [disabled]="loading">
  <ion-spinner *ngIf="loading" name="crescent"></ion-spinner>
  <span *ngIf="!loading">Đăng nhập</span>
</ion-button>
```

### 2. Empty States
```html
<div class="empty-state" *ngIf="(conversations$ | async)?.length === 0">
  <ion-icon name="chatbubbles-outline"></ion-icon>
  <p>Chưa có cuộc trò chuyện nào</p>
</div>
```

### 3. Error States
```html
<ion-text color="danger" *ngIf="errorMessage">
  <p class="error-text">{{ errorMessage }}</p>
</ion-text>
```

### 4. Animations
```scss
.fade-in {
  animation: fadeIn 0.3s ease-in;
}

@keyframes fadeIn {
  from { opacity: 0; }
  to { opacity: 1; }
}
```

---

## 📏 DESIGN TOKENS

### Colors:
- Primary: `#1B5E3B` (Pine Green)
- Accent: `#FF6B6B` (Coral Pink)
- Background: `#F8F9F5`
- Surface: `#FFFFFF`
- Text: `#2C3E50`
- Text Light: `#7F8C8D`

### Spacing:
- XS: `4px`
- SM: `8px`
- MD: `16px`
- LG: `24px`
- XL: `32px`

### Border Radius:
- SM: `12px`
- MD: `16px`
- LG: `24px`
- Full: `999px`

### Typography:
- Font Family: `'Nunito', sans-serif`
- H1: `32px / 700`
- H2: `24px / 700`
- Body: `16px / 400`
- Caption: `14px / 400`

---

## 📝 CHECKLIST CHO HUY

### Design System:
- [ ] Setup global.scss với CSS variables
- [ ] Import Google Fonts (Nunito)
- [ ] Create utility classes
- [ ] Customize Ionic theme

### Auth Pages:
- [ ] Login page (HTML + SCSS + Validation)
- [ ] Register page (HTML + SCSS + Validation)
- [ ] Error handling
- [ ] Loading states

### Layout:
- [ ] Drawer layout
- [ ] Tabs navigation
- [ ] Menu styling

### Main Pages:
- [ ] Chat page UI
- [ ] History page UI
- [ ] Favorites page UI
- [ ] Settings page UI

### Components:
- [ ] ChatBubble component
- [ ] AudioPlayer component
- [ ] MediaPreview component

### Polish:
- [ ] Animations & transitions
- [ ] Responsive design
- [ ] Loading states everywhere
- [ ] Empty states
- [ ] Error states

---

## 🚀 CÁCH BẮT ĐẦU

1. Đọc kỹ `HUONG_DAN_TAO_DU_AN.md` - Phần 3
2. Start với Design System (global.scss)
3. Build Auth pages trước
4. Sau đó làm main pages
5. Cuối cùng polish components
6. Coordinate với Anh về service interfaces

**Good luck! 🎨**
