/**
 * 🔴 RESET TOÀN BỘ FIREBASE: Auth + Firestore + Storage
 * 
 * Chạy: npx tsx reset-firebase.ts
 */

import fs from "fs";
import path from "path";
import { fileURLToPath } from "url";
import { initializeApp, cert } from "firebase-admin/app";
import { getAuth } from "firebase-admin/auth";
import { getFirestore } from "firebase-admin/firestore";
import { getStorage } from "firebase-admin/storage";

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const SERVICE_ACCOUNT_PATH = path.join(__dirname, "serviceAccountKey.json");

if (!fs.existsSync(SERVICE_ACCOUNT_PATH)) {
    console.error("❌ serviceAccountKey.json not found!");
    process.exit(1);
}

const serviceAccount = JSON.parse(fs.readFileSync(SERVICE_ACCOUNT_PATH, "utf8"));
const projectId = serviceAccount.project_id;

const app = initializeApp({
    credential: cert(serviceAccount),
    storageBucket: `${projectId}.firebasestorage.app`,
});

const auth = getAuth(app);
const db = getFirestore(app);
const bucket = getStorage(app).bucket();

// ========================
// 1. DELETE ALL AUTH USERS
// ========================
async function deleteAllUsers() {
    console.log("\n🔐 [AUTH] Xóa tất cả users...");
    let totalDeleted = 0;

    const listAndDelete = async (nextPageToken?: string) => {
        const result = await auth.listUsers(1000, nextPageToken);
        if (result.users.length === 0) return;

        const uids = result.users.map((u) => u.uid);
        const deleteResult = await auth.deleteUsers(uids);
        totalDeleted += deleteResult.successCount;
        console.log(`  ✅ Xóa ${deleteResult.successCount} users (lỗi: ${deleteResult.failureCount})`);

        if (result.pageToken) {
            await listAndDelete(result.pageToken);
        }
    };

    await listAndDelete();
    console.log(`🔐 [AUTH] Tổng: xóa ${totalDeleted} users`);
}

// ========================
// 2. DELETE ALL FIRESTORE
// ========================
async function deleteCollection(collectionPath: string) {
    const colRef = db.collection(collectionPath);
    const snapshot = await colRef.limit(500).get();

    if (snapshot.empty) return 0;

    const batch = db.batch();
    snapshot.docs.forEach((doc) => batch.delete(doc.ref));
    await batch.commit();

    return snapshot.size + await deleteCollection(collectionPath);
}

async function deleteAllFirestore() {
    console.log("\n📄 [FIRESTORE] Xóa tất cả collections...");

    // Top-level collections
    const topCollections = ["places", "categories"];
    for (const col of topCollections) {
        const count = await deleteCollection(col);
        console.log(`  ✅ ${col}: xóa ${count} documents`);
    }

    // User subcollections: users/{uid}/trips, chatSessions, favorites
    const usersSnapshot = await db.collection("users").get();
    let userCount = 0;
    for (const userDoc of usersSnapshot.docs) {
        const subcollections = ["trips", "chatSessions", "favorites"];
        for (const sub of subcollections) {
            const subCount = await deleteCollection(`users/${userDoc.id}/${sub}`);
            if (subCount > 0) {
                console.log(`  ✅ users/${userDoc.id}/${sub}: xóa ${subCount} documents`);
            }
        }
        userCount++;
    }

    // Delete user documents themselves
    const count = await deleteCollection("users");
    console.log(`  ✅ users: xóa ${count} documents (${userCount} users)`);
}

// ========================
// 3. DELETE ALL STORAGE
// ========================
async function deleteAllStorage() {
    console.log("\n📦 [STORAGE] Xóa tất cả files...");

    try {
        const [files] = await bucket.getFiles();
        if (files.length === 0) {
            console.log("  ℹ️ Storage trống, không có file nào");
            return;
        }

        let deleted = 0;
        for (const file of files) {
            await file.delete();
            deleted++;
        }
        console.log(`  ✅ Xóa ${deleted} files từ Storage`);
    } catch (err: any) {
        console.error(`  ❌ Storage error: ${err?.message || err}`);
    }
}

// ========================
// RUN ALL
// ========================
async function main() {
    console.log("🔴 ========================================");
    console.log(`🔴 RESET TOÀN BỘ FIREBASE: ${projectId}`);
    console.log("🔴 ========================================");

    await deleteAllUsers();
    await deleteAllFirestore();
    await deleteAllStorage();

    console.log("\n✅ ========================================");
    console.log("✅ ĐÃ RESET TOÀN BỘ FIREBASE THÀNH CÔNG!");
    console.log("✅ ========================================\n");
}

main().catch((err) => {
    console.error("❌ Lỗi:", err);
    process.exit(1);
});
