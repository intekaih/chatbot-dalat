# ⚡ QUICK START: Cấu hình GitHub Secrets

> **Mục tiêu:** Cấu hình GitHub Secrets trong 10 phút

---

## 📋 CHECKLIST 6 BƯỚC

### ✅ Bước 1: Mở GitHub Secrets Settings (1 phút)

```
1. Vào: https://github.com/intekaih/chatbot-dalat/settings/secrets/actions
2. Đăng nhập nếu cần
```

---

### ✅ Bước 2: Copy Firebase Config (2 phút)

Mở file này trong dự án:
```
ionic-app/src/environments/environment.ts
```

Copy các giá trị sau:
```typescript
apiKey: 'AIzaSyDU5pVkB9-4V64qsPHrWYe2X70F_zo2aKk'
authDomain: 'chatbot-dalat.firebaseapp.com'
projectId: 'chatbot-dalat'
storageBucket: 'chatbot-dalat.firebasestorage.app'
messagingSenderId: '961096236864'
appId: '1:961096236864:web:00d399f0b232a0187e44a5'
```

---

### ✅ Bước 3: Tạo 6 Secrets (5 phút)

Trên trang GitHub Secrets, click **"New repository secret"** 6 lần:

| Lần | Name | Value |
|-----|------|-------|
| 1 | `FIREBASE_API_KEY` | `AIzaSyDU5pVkB9-4V64qsPHrWYe2X70F_zo2aKk` |
| 2 | `FIREBASE_AUTH_DOMAIN` | `chatbot-dalat.firebaseapp.com` |
| 3 | `FIREBASE_PROJECT_ID` | `chatbot-dalat` |
| 4 | `FIREBASE_STORAGE_BUCKET` | `chatbot-dalat.firebasestorage.app` |
| 5 | `FIREBASE_MESSAGING_SENDER_ID` | `961096236864` |
| 6 | `FIREBASE_APP_ID` | `1:961096236864:web:00d399f0b232a0187e44a5` |

**Lưu ý:** 
- Copy chính xác, không có khoảng trắng thừa
- Name phải viết HOA đúng như bảng

---

### ✅ Bước 4: Commit GitHub Workflows (1 phút)

```bash
git add .github/workflows/
git add docs/HUONG_DAN_GITHUB_SECRETS.md
git add ionic-app/.gitignore
git add ionic-app/firebase.json
git add ionic-app/firebase/firestore.indexes.json
git add ionic-app/src/environments/environment.prod.ts
git commit -m "feat: Add GitHub Actions with secrets management"
git push origin main
```

---

### ✅ Bước 5: Kiểm tra Workflow (1 phút)

1. Vào: `https://github.com/intekaih/chatbot-dalat/actions`
2. Xem workflow **"CI/CD Pipeline"** đang chạy
3. Đợi ~2-3 phút cho build hoàn thành

**Kết quả mong đợi:**
```
✅ Build and Test (hoàn thành)
✅ Security Check (hoàn thành)
```

---

### ✅ Bước 6: Verify Secrets (30 giây)

Quay lại: `https://github.com/intekaih/chatbot-dalat/settings/secrets/actions`

**Phải thấy 6 secrets:**
```
✓ FIREBASE_API_KEY          Updated X seconds ago
✓ FIREBASE_AUTH_DOMAIN      Updated X seconds ago
✓ FIREBASE_PROJECT_ID       Updated X seconds ago
✓ FIREBASE_STORAGE_BUCKET   Updated X seconds ago
✓ FIREBASE_MESSAGING_SENDER_ID  Updated X seconds ago
✓ FIREBASE_APP_ID           Updated X seconds ago
```

---

## 🎉 HOÀN THÀNH!

Dự án của bạn giờ đây:
- ✅ **Bảo mật**: Không còn hardcoded API keys
- ✅ **CI/CD**: Tự động build khi push code
- ✅ **Professional**: Đúng chuẩn industry

---

## 🔧 BONUS: Setup Firebase Deployment (Optional)

Nếu muốn auto-deploy lên Firebase Hosting:

### 1. Tạo Service Account:
```
https://console.firebase.google.com/project/chatbot-dalat/settings/serviceaccounts/adminsdk
```
- Click **"Generate new private key"**
- Download file JSON

### 2. Tạo GitHub Secret:
- Name: `FIREBASE_SERVICE_ACCOUNT`
- Value: [Paste toàn bộ nội dung file JSON]

### 3. Workflow sẽ tự động deploy khi push lên `main`

---

## 🐛 Troubleshooting Nhanh

### ❌ Workflow failed ở step "Create environment file"

**Fix:** Kiểm tra tên secrets phải chính xác:
- `FIREBASE_API_KEY` (không phải `firebase_api_key`)
- Phải viết HOA toàn bộ

### ❌ Workflow failed ở step "Build application"

**Fix:** 
```bash
# Test build locally trước:
cd ionic-app
npm install
npm run build:prod
```

### ❌ Secrets không hiện trên GitHub

**Fix:**
- Đảm bảo bạn có quyền admin/write trên repo
- Retry tạo lại secrets

---

## 📚 Chi tiết đầy đủ

Xem file: `docs/HUONG_DAN_GITHUB_SECRETS.md`

---

**Chúc bạn thành công! 🚀**
