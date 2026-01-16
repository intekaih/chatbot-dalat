# 🔐 HƯỚNG DẪN CẤU HÌNH GITHUB SECRETS

## 📋 MỤC LỤC
1. [Tại sao cần GitHub Secrets](#tại-sao-cần-github-secrets)
2. [Danh sách Secrets cần tạo](#danh-sách-secrets-cần-tạo)
3. [Hướng dẫn chi tiết từng bước](#hướng-dẫn-chi-tiết-từng-bước)
4. [Kiểm tra cấu hình](#kiểm-tra-cấu-hình)
5. [Troubleshooting](#troubleshooting)

---

## 🎯 TẠI SAO CẦN GITHUB SECRETS

### ❌ VẤN ĐỀ HIỆN TẠI:
Firebase API keys đang bị **hard-coded** trong file `environment.ts`:
```typescript
// ⚠️ NGUY HIỂM - API key public trên GitHub
export const environment = {
  firebase: {
    apiKey: 'AIzaSyDU5pVkB9-4V64qsPHrWYe2X70F_zo2aKk', // ❌
    // ...
  }
};
```

### ✅ LỢI ÍCH KHI DÙNG SECRETS:
- 🔒 **Bảo mật**: Credentials không bị lộ trên Git
- 🚀 **CI/CD**: Auto build/deploy an toàn
- 👥 **Team work**: Mỗi người có thể dùng credentials riêng
- 🔄 **Dễ thay đổi**: Update secrets không cần commit code

---

## 📝 DANH SÁCH SECRETS CẦN TẠO

Bạn cần tạo **6 secrets** cho Firebase configuration:

| Secret Name | Giá trị hiện tại | Mô tả |
|-------------|------------------|-------|
| `FIREBASE_API_KEY` | `AIzaSyDU5pVkB9-4V64qsPHrWYe2X70F_zo2aKk` | Firebase API Key |
| `FIREBASE_AUTH_DOMAIN` | `chatbot-dalat.firebaseapp.com` | Auth Domain URL |
| `FIREBASE_PROJECT_ID` | `chatbot-dalat` | Firebase Project ID |
| `FIREBASE_STORAGE_BUCKET` | `chatbot-dalat.firebasestorage.app` | Storage Bucket |
| `FIREBASE_MESSAGING_SENDER_ID` | `961096236864` | Messaging Sender ID |
| `FIREBASE_APP_ID` | `1:961096236864:web:00d399f0b232a0187e44a5` | Firebase App ID |

### Secret bổ sung (cho deployment):
| Secret Name | Cách lấy | Mục đích |
|-------------|----------|----------|
| `FIREBASE_SERVICE_ACCOUNT` | Firebase Console | Deploy to Firebase Hosting |

---

## 🚀 HƯỚNG DẪN CHI TIẾT TỪNG BƯỚC

### BƯỚC 1: Mở Repository Settings

1. Truy cập: `https://github.com/intekaih/chatbot-dalat`
2. Click tab **"Settings"** (ở menu trên)
3. Trong sidebar bên trái, mở **"Secrets and variables"**
4. Click **"Actions"**

### BƯỚC 2: Tạo từng Secret

Làm lặp lại các bước sau cho **TỪNG SECRET**:

#### 2.1. Click nút "New repository secret"

#### 2.2. Điền thông tin:

**Secret 1: FIREBASE_API_KEY**
- **Name:** `FIREBASE_API_KEY`
- **Secret:** `AIzaSyDU5pVkB9-4V64qsPHrWYe2X70F_zo2aKk`
- Click **"Add secret"**

**Secret 2: FIREBASE_AUTH_DOMAIN**
- **Name:** `FIREBASE_AUTH_DOMAIN`
- **Secret:** `chatbot-dalat.firebaseapp.com`
- Click **"Add secret"**

**Secret 3: FIREBASE_PROJECT_ID**
- **Name:** `FIREBASE_PROJECT_ID`
- **Secret:** `chatbot-dalat`
- Click **"Add secret"**

**Secret 4: FIREBASE_STORAGE_BUCKET**
- **Name:** `FIREBASE_STORAGE_BUCKET`
- **Secret:** `chatbot-dalat.firebasestorage.app`
- Click **"Add secret"**

**Secret 5: FIREBASE_MESSAGING_SENDER_ID**
- **Name:** `FIREBASE_MESSAGING_SENDER_ID`
- **Secret:** `961096236864`
- Click **"Add secret"**

**Secret 6: FIREBASE_APP_ID**
- **Name:** `FIREBASE_APP_ID`
- **Secret:** `1:961096236864:web:00d399f0b232a0187e44a5`
- Click **"Add secret"**

### BƯỚC 3: Tạo Firebase Service Account (cho deployment)

#### 3.1. Vào Firebase Console:
```
https://console.firebase.google.com/project/chatbot-dalat
```

#### 3.2. Tạo Service Account:
1. Click **"Project Settings"** (icon bánh răng)
2. Tab **"Service accounts"**
3. Click **"Generate new private key"**
4. Download file JSON

#### 3.3. Copy nội dung JSON:
```bash
# Mở file JSON vừa download
# Copy TOÀN BỘ nội dung (từ { đến })
```

#### 3.4. Tạo Secret trên GitHub:
- **Name:** `FIREBASE_SERVICE_ACCOUNT`
- **Secret:** [Paste toàn bộ nội dung JSON]
- Click **"Add secret"**

---

## ✅ KIỂM TRA CẤU HÌNH

### Kiểm tra Secrets đã tạo:

Vào `Settings > Secrets and variables > Actions`, bạn phải thấy **7 secrets**:

```
✅ FIREBASE_API_KEY
✅ FIREBASE_AUTH_DOMAIN
✅ FIREBASE_PROJECT_ID
✅ FIREBASE_STORAGE_BUCKET
✅ FIREBASE_MESSAGING_SENDER_ID
✅ FIREBASE_APP_ID
✅ FIREBASE_SERVICE_ACCOUNT
```

### Test GitHub Actions:

1. **Commit và push code**:
```bash
git add .github/workflows/
git commit -m "Add GitHub Actions workflows"
git push origin main
```

2. **Xem kết quả**:
- Vào tab **"Actions"** trên GitHub
- Workflow **"CI/CD Pipeline"** sẽ tự động chạy
- Kiểm tra các bước có ✅ màu xanh

3. **Kiểm tra build artifact**:
- Click vào workflow run
- Scroll xuống **"Artifacts"**
- Phải có file **"ionic-build"**

---

## 🔄 SỬ DỤNG SECRETS TRONG CODE

### Trong GitHub Actions:

```yaml
# Secrets được inject vào environment
- name: Create environment file
  run: |
    cat > environment.prod.ts << EOF
    export const environment = {
      production: true,
      firebase: {
        apiKey: '${{ secrets.FIREBASE_API_KEY }}',
        authDomain: '${{ secrets.FIREBASE_AUTH_DOMAIN }}',
        projectId: '${{ secrets.FIREBASE_PROJECT_ID }}',
        storageBucket: '${{ secrets.FIREBASE_STORAGE_BUCKET }}',
        messagingSenderId: '${{ secrets.FIREBASE_MESSAGING_SENDER_ID }}',
        appId: '${{ secrets.FIREBASE_APP_ID }}'
      }
    };
    EOF
```

### Trong Development (local):

File `ionic-app/src/environments/environment.ts` GIỮ NGUYÊN:
```typescript
// Development - dùng local config
export const environment = {
  production: false,
  firebase: {
    apiKey: 'AIzaSyDU5pVkB9-4V64qsPHrWYe2X70F_zo2aKk',
    // ... (giữ nguyên)
  }
};
```

### Trong Production:

File `environment.prod.ts` sẽ được **auto-generated** từ GitHub Secrets khi build.

---

## 🛡️ BẢO MẬT NÂNG CAO

### 1. Xóa hardcoded keys sau khi setup:

```bash
# Sau khi secrets đã hoạt động, commit này:
git add ionic-app/src/environments/
git commit -m "Remove hardcoded Firebase keys, use GitHub Secrets"
git push
```

### 2. Gitignore environment.prod.ts:

Thêm vào `ionic-app/.gitignore`:
```
# Environment files
src/environments/environment.prod.ts
```

### 3. Firebase Security Rules:

File `ionic-app/firebase/firestore.rules`:
```
rules_version = '2';
service cloud.firestore {
  match /databases/{database}/documents {
    // Chỉ user đã login mới truy cập data của họ
    match /users/{userId}/{document=**} {
      allow read, write: if request.auth != null && request.auth.uid == userId;
    }
  }
}
```

---

## 🐛 TROUBLESHOOTING

### ❌ Lỗi: "Secret not found"

**Nguyên nhân:** Tên secret không khớp

**Giải pháp:**
1. Kiểm tra tên secret phải **CHÍNH XÁC**
2. Case-sensitive: `FIREBASE_API_KEY` ≠ `firebase_api_key`
3. Không có khoảng trắng thừa

### ❌ Lỗi: "Invalid Firebase config"

**Nguyên nhân:** Giá trị secret sai

**Giải pháp:**
1. Vào Firebase Console lấy lại config
2. Copy chính xác, không có khoảng trắng
3. Update lại secret

### ❌ Workflow không chạy

**Nguyên nhân:** File workflow sai syntax

**Giải pháp:**
```bash
# Validate YAML syntax
npm install -g yaml-lint
yaml-lint .github/workflows/ci.yml
```

### ❌ Build thành công nhưng app lỗi

**Nguyên nhân:** Environment không được inject đúng

**Giải pháp:**
1. Check logs của workflow step "Create environment file"
2. Kiểm tra file `environment.prod.ts` có được tạo không
3. Verify build output có chứa Firebase config

---

## 📊 WORKFLOW HOẠT ĐỘNG NHƯ THẾ NÀO

### Khi code được push lên GitHub:

```
1. GitHub Actions trigger
   ↓
2. Checkout code
   ↓
3. Install dependencies
   ↓
4. Create environment.prod.ts
   (inject secrets vào đây)
   ↓
5. Run tests
   ↓
6. Build production app
   (sử dụng environment.prod.ts)
   ↓
7. Upload artifacts / Deploy
```

### Security flow:

```
Secrets (GitHub vault)
   ↓
   → Only accessible by GitHub Actions
   ↓
   → Injected vào runtime environment
   ↓
   → Build output (artifacts)
   ↓
   → Deploy to hosting
   
❌ KHÔNG BAO GIỜ commit secrets vào Git
✅ Secrets chỉ tồn tại trong CI/CD runtime
```

---

## 📚 TÀI LIỆU THAM KHẢO

- [GitHub Secrets Documentation](https://docs.github.com/en/actions/security-guides/encrypted-secrets)
- [Firebase Service Accounts](https://firebase.google.com/docs/admin/setup#initialize-sdk)
- [GitHub Actions Best Practices](https://docs.github.com/en/actions/security-guides/security-hardening-for-github-actions)

---

## ✅ CHECKLIST HOÀN THÀNH

- [ ] Đã tạo đủ 6 Firebase secrets
- [ ] Đã tạo Firebase Service Account secret
- [ ] Workflow CI/CD chạy thành công
- [ ] Build artifacts được tạo
- [ ] Không còn hardcoded keys trong code
- [ ] Đã test deploy thành công
- [ ] Firestore security rules đã cấu hình

---

## 🎯 KẾT LUẬN

Sau khi hoàn thành các bước trên:

✅ **Dự án đạt yêu cầu:** "Sử dụng biến môi trường trên GitHub để lưu trữ secrets"

✅ **Bảo mật:** API keys không bị lộ công khai

✅ **Automation:** CI/CD pipeline hoạt động tự động

✅ **Professional:** Đúng chuẩn industry best practices

---

**Chúc bạn cấu hình thành công! 🚀**
