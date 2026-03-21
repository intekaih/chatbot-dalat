/**
 * Migration Script: SQLite → Firestore
 * 
 * Đọc places và categories từ SQLite database và seed vào Firestore.
 * Chạy: npx ts-node migrate-to-firestore.ts
 * 
 * Yêu cầu: Firebase Admin SDK service account key
 * - Tải từ: Firebase Console > Project Settings > Service Accounts > Generate new private key
 * - Lưu file JSON vào: server/serviceAccountKey.json
 */

import { initializeApp, cert } from "firebase-admin/app";
import { getFirestore, Timestamp } from "firebase-admin/firestore";
import Database from "better-sqlite3";
import * as path from "path";
import * as fs from "fs";
import { fileURLToPath } from "url";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// ===================== CONFIG =====================
const DB_PATH = path.join(__dirname, "dalat_chatbot.db");
const SERVICE_ACCOUNT_PATH = path.join(__dirname, "serviceAccountKey.json");
const BATCH_SIZE = 400; // Firestore giới hạn 500 operations/batch
// =================================================

// Kiểm tra service account key tồn tại
if (!fs.existsSync(SERVICE_ACCOUNT_PATH)) {
    console.error(`
❌ Không tìm thấy serviceAccountKey.json!

Hướng dẫn:
1. Mở Firebase Console: https://console.firebase.google.com/project/dalat-chatbot/settings/serviceaccounts
2. Click "Generate new private key"
3. Lưu file JSON vào: ${SERVICE_ACCOUNT_PATH}
4. Chạy lại: npx ts-node migrate-to-firestore.ts
`);
    process.exit(1);
}

// Khởi tạo Firebase Admin
const serviceAccount = JSON.parse(fs.readFileSync(SERVICE_ACCOUNT_PATH, "utf8"));
initializeApp({ credential: cert(serviceAccount) });
const firestore = getFirestore();

// Kết nối SQLite
const db = new Database(DB_PATH, { readonly: true });

interface PlaceRow {
    id: string;
    name: string;
    slug: string;
    category: string;
    short_description: string;
    full_description: string;
    image_url: string;
    tags: string;
    suitable_for: string;
    featured: number;
    rating: number | null;
    review_count: number | null;
    price_range: string | null;
    address: string;
    opening_hours: string | null;
    lat: number | null;
    lng: number | null;
    price_per_day: string | null;
    vehicle_types: string;
    phone_number: string | null;
    deposit_required: string | null;
}

interface CategoryRow {
    id: string;
    label: string;
    icon: string;
    icon_name: string;
}

function mapPlace(row: PlaceRow) {
    return {
        id: row.id,
        name: row.name,
        slug: row.slug,
        category: row.category,
        shortDescription: row.short_description || "",
        fullDescription: row.full_description || "",
        imageUrl: row.image_url || "",
        tags: (() => { try { return JSON.parse(row.tags || "[]"); } catch { return []; } })(),
        suitableFor: (() => { try { return JSON.parse(row.suitable_for || "[]"); } catch { return []; } })(),
        featured: row.featured === 1,
        rating: row.rating ?? null,
        reviewCount: row.review_count ?? null,
        priceRange: row.price_range ?? null,
        address: row.address || "",
        openingHours: row.opening_hours ?? null,
        lat: row.lat ?? null,
        lng: row.lng ?? null,
        pricePerDay: row.price_per_day ?? null,
        vehicleTypes: (() => { try { return JSON.parse(row.vehicle_types || "[]"); } catch { return []; } })(),
        phoneNumber: row.phone_number ?? null,
        depositRequired: row.deposit_required ?? null,
        syncedAt: Timestamp.now(),
    };
}

async function migrateCategories() {
    console.log("\n📂 Migrating categories...");
    const rows = db.prepare("SELECT * FROM categories").all() as CategoryRow[];

    const batch = firestore.batch();
    for (const row of rows) {
        const ref = firestore.collection("categories").doc(row.id);
        batch.set(ref, {
            id: row.id,
            label: row.label,
            icon: row.icon,
            iconName: row.icon_name,
            syncedAt: Timestamp.now(),
        });
    }
    await batch.commit();
    console.log(`✅ Migrated ${rows.length} categories`);
}

async function migratePlaces() {
    console.log("\n📍 Migrating places...");
    // Chỉ migrate default places (user_id IS NULL) — places chung cho tất cả user
    const rows = db.prepare("SELECT * FROM places WHERE user_id IS NULL").all() as PlaceRow[];
    console.log(`   Found ${rows.length} default places in SQLite`);

    if (rows.length === 0) {
        console.log("⚠️  Không có default places! Hãy khởi động server trước để AI sinh places.");
        return;
    }

    // Chia thành batches
    let migrated = 0;
    for (let i = 0; i < rows.length; i += BATCH_SIZE) {
        const chunk = rows.slice(i, i + BATCH_SIZE);
        const batch = firestore.batch();

        for (const row of chunk) {
            const ref = firestore.collection("places").doc(row.id);
            batch.set(ref, mapPlace(row));
        }

        await batch.commit();
        migrated += chunk.length;
        console.log(`   ✅ Batch ${Math.floor(i / BATCH_SIZE) + 1}: ${migrated}/${rows.length} places`);
    }

    // Thống kê theo category
    const stats: Record<string, number> = {};
    for (const row of rows) {
        stats[row.category] = (stats[row.category] || 0) + 1;
    }
    console.log("\n📊 Places by category:");
    Object.entries(stats).forEach(([cat, count]) => console.log(`   ${cat}: ${count}`));
}

async function main() {
    console.log("🚀 Starting SQLite → Firestore migration");
    console.log(`   DB: ${DB_PATH}`);
    console.log(`   Project: dalat-chatbot`);

    try {
        await migrateCategories();
        await migratePlaces();

        console.log("\n🎉 Migration completed successfully!");
        console.log("\nNext steps:");
        console.log("  1. Kiểm tra dữ liệu trên Firebase Console");
        console.log("  2. Cập nhật Firestore Rules để public read places/categories");
        console.log("  3. Frontend sẽ đọc từ Firestore thay vì Express API");
    } catch (err) {
        console.error("❌ Migration failed:", err);
        process.exit(1);
    } finally {
        db.close();
        process.exit(0);
    }
}

main();
