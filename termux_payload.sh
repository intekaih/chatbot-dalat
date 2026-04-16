#!/bin/bash
export DEBIAN_FRONTEND=noninteractive

echo "========== BAT DAU CAP NHAT / CAI DAT API SERVER =========="
cd ~

echo "1. Kiem tra thu vien he thong..."
pkg install -y nodejs sqlite build-essential python wget curl jq cloudflared > /dev/null 2>&1

echo "2. Cai dat PM2 (Neu chua co)..."
if ! command -v pm2 &> /dev/null; then
    npm install -g pm2
fi

# Tu khoa giu dien thoai luon thuc (termux)
termux-wake-lock 2>/dev/null || true

# Tao thu muc chay app
mkdir -p backend_chatbot
cd backend_chatbot

echo "3. Tai code moi nhat (chuyen qua USB - port 127.0.0.1:8080)..."
wget -q http://127.0.0.1:8080/backend.tar.gz -O backend.tar.gz || curl -s http://127.0.0.1:8080/backend.tar.gz -o backend.tar.gz

echo "4. Giai nen code..."
tar -xzf backend.tar.gz

echo "5. Cai dat thu vien Node (npm install)..."
npm install

echo "6. Tao file cau hinh PM2..."
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

echo "7. Khoi dong Backend + Cloudflare Tunnel bang PM2..."
pm2 restart ecosystem.config.cjs --update-env || pm2 start ecosystem.config.cjs

echo "8. Luu trang thai PM2 (Khoi dong cung Termux)..."
pm2 save

echo ""
echo "========== HOAN THANH! =========="
echo "[->] API Server local  : http://localhost:3000"
echo "[->] API Server public : https://chatbot.kaih.co.uk"
echo "[->] pm2 list          : Xem danh sach dich vu"
echo "[->] pm2 logs          : Xem log tat ca"
echo "[->] pm2 logs chatbot-backend   : Xem log API"
echo "[->] pm2 logs cloudflare_tunnel : Xem log Tunnel"
