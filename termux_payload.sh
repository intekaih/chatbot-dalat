#!/bin/bash
export DEBIAN_FRONTEND=noninteractive

echo "========== BAT DAU FIX VA CAI DAT SERVER TRÊN TERMUX =========="
cd ~

echo "1. Cai dat trinh bien dich C++ va cac thu vien ho tro (Fix better-sqlite3)..."
# Cai dat cac goi can thiet de compile native modules trên Android
pkg install -y nodejs-lts python make clang binutils libsqlite wget curl jq cloudflared > /dev/null 2>&1

echo "2. Cau hinh moi truong build..."
# Lua node-gyp de khong doi hoi Android NDK
export ANDROID_NDK_HOME=/dev/null
export ANDROID_NDK_PATH=/dev/null

echo "3. Cai dat PM2..."
if ! command -v pm2 &> /dev/null; then
    npm install -g pm2
fi

# Giu may luon thuc
termux-wake-lock 2>/dev/null || true

# Thu muc app
mkdir -p backend_chatbot
cd backend_chatbot

echo "4. Tai ma nguon moi nhat tu may tinh..."
wget -q http://127.0.0.1:8080/backend.tar.gz -O backend.tar.gz || curl -s http://127.0.0.1:8080/backend.tar.gz -o backend.tar.gz

echo "5. Giai nen..."
tar -xzf backend.tar.gz

echo "6. Cai dat thu vien Node (Dang bien dich better-sqlite3)..."
# Force build tu source va ignore loi NDK qua bien moi truong da set o tren
npm install --build-from-source

echo "7. Thiet lap PM2 ecosystem..."
cat << 'EOF' > ecosystem.config.cjs
module.exports = {
  apps : [
    {
      name   : "chatbot-backend",
      script : "npm",
      args   : "start",
      env: {
        NODE_ENV: "production",
        PORT: 3000
      }
    },
    {
      name   : "cloudflare_tunnel",
      script : "cloudflared",
      args   : "tunnel run --token eyJhIjoiNGE2NTdhMzdlY2IwNWVmMGJlMTYyNjBmNWY2NDYxMjUiLCJ0IjoiOGM3NjEyNDYtMGE0MS00MzFiLTg2MTMtMjQ5MDUwYWViNDNiIiwicyI6Ik1tWXpZekU1Wm1NdE0yUm1OeTAwTldNMUxXSTJaVEl0Wm1KaVpUUTFOMk0wT1dGaCJ9",
      autorestart: true
    }
  ]
}
EOF

echo "8. Khoi dong lai toan bo..."
pm2 delete all > /dev/null 2>&1
pm2 start ecosystem.config.cjs
pm2 save

echo ""
echo "========== HOAN THANH! =========="
echo "[->] API Server local  : http://localhost:3000"
echo "[->] API Server public : https://chatbot.kaih.co.uk"
echo "[->] Dung 'pm2 list' de kiem tra trang thai"
echo "[->] Neu 'chatbot-backend' bao online la OK!"
