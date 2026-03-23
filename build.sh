#!/bin/sh
set -e

echo "=== Installing server dependencies ==="
npm install --prefix server

echo "=== Installing frontend dependencies ==="
npm install --prefix ionic-tailwind-app

echo "=== Building Angular production ==="
cd ionic-tailwind-app
npx ng build --configuration production

echo "=== Build complete ==="
