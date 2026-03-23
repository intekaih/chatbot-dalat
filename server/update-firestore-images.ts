/**
 * Script: Cập nhật imageUrl trong Firestore với ảnh AI
 * 
 * Batch update tất cả documents trong collection "places"
 * để dùng ảnh AI thay vì ảnh placeholder cũ.
 * 
 * Run: npx ts-node --esm update-firestore-images.ts
 */

import { initializeApp, cert } from "firebase-admin/app";
import { getFirestore } from "firebase-admin/firestore";
import * as fs from "fs";
import * as path from "path";
import { fileURLToPath } from "url";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const SERVICE_ACCOUNT_PATH = path.join(__dirname, "serviceAccountKey.json");
if (!fs.existsSync(SERVICE_ACCOUNT_PATH)) {
    console.error("❌ serviceAccountKey.json not found!");
    process.exit(1);
}

const serviceAccount = JSON.parse(fs.readFileSync(SERVICE_ACCOUNT_PATH, "utf8"));
initializeApp({ credential: cert(serviceAccount) });
const db = getFirestore();

// ===== AI Image URLs (giống với image-pool.ts) =====
const HOSTING_BASE = "https://dalat-chatbot.web.app/assets/places";

const AI_IMAGE_URLS: Record<string, string[]> = {
    cafe: [`${HOSTING_BASE}/cafe_1.png`, `${HOSTING_BASE}/cafe_2.png`],
    food: [`${HOSTING_BASE}/food_1.png`, `${HOSTING_BASE}/food_2.png`],
    checkin: [`${HOSTING_BASE}/checkin_1.png`, `${HOSTING_BASE}/checkin_2.png`],
    nature: [`${HOSTING_BASE}/nature_1.png`, `${HOSTING_BASE}/nature_2.png`],
    homestay: [`${HOSTING_BASE}/homestay_1.png`, `${HOSTING_BASE}/homestay_2.png`],
    rental: [`${HOSTING_BASE}/rental_1.png`, `${HOSTING_BASE}/rental_2.png`],
    signature: [`${HOSTING_BASE}/signature_1.png`, `${HOSTING_BASE}/signature_2.png`],
};

function hashString(str: string): number {
    let h = 0;
    for (let i = 0; i < str.length; i++) {
        h = (h << 5) - h + str.charCodeAt(i);
        h |= 0;
    }
    return Math.abs(h);
}

function getAIImage(name: string, category: string): { imageUrl: string; imageUrls: string[] } {
    const urls = AI_IMAGE_URLS[category] || AI_IMAGE_URLS["signature"];
    const idx = hashString(name) % urls.length;
    return { imageUrl: urls[idx], imageUrls: urls };
}

async function updatePlacesImages() {
    console.log("📍 Fetching all places from Firestore...");
    const snapshot = await db.collection("places").get();

    if (snapshot.empty) {
        console.log("⚠️  Collection 'places' is empty or does not exist!");
        return 0;
    }

    console.log(`   Found ${snapshot.size} places. Updating images...`);

    const BATCH_SIZE = 400;
    let updated = 0;
    const docs = snapshot.docs;

    for (let i = 0; i < docs.length; i += BATCH_SIZE) {
        const chunk = docs.slice(i, i + BATCH_SIZE);
        const batch = db.batch();

        for (const doc of chunk) {
            const data = doc.data();
            const { imageUrl, imageUrls } = getAIImage(data.name || doc.id, data.category || "signature");

            batch.update(doc.ref, {
                imageUrl,
                imageUrls,
                imageSource: "ai-generated",
            });
        }

        await batch.commit();
        updated += chunk.length;
        console.log(`   ✅ Batch ${Math.floor(i / BATCH_SIZE) + 1}: ${updated}/${docs.length} places updated`);
    }

    return updated;
}

async function updateUserPlacesImages() {
    console.log("\n👥 Fetching user-specific places...");

    // Lấy tất cả users
    const usersSnap = await db.collection("users").get();
    if (usersSnap.empty) {
        console.log("   No users found, skipping.");
        return 0;
    }

    let totalUpdated = 0;

    for (const userDoc of usersSnap.docs) {
        const placesSnap = await db.collection("users").doc(userDoc.id).collection("places").get();
        if (placesSnap.empty) continue;

        const batch = db.batch();
        for (const doc of placesSnap.docs) {
            const data = doc.data();
            const { imageUrl, imageUrls } = getAIImage(data.name || doc.id, data.category || "signature");
            batch.update(doc.ref, { imageUrl, imageUrls, imageSource: "ai-generated" });
        }
        await batch.commit();
        totalUpdated += placesSnap.size;
        console.log(`   ✅ User ${userDoc.id}: ${placesSnap.size} places updated`);
    }

    return totalUpdated;
}

async function main() {
    console.log("🚀 Updating Firestore places with AI images...\n");

    try {
        const placesUpdated = await updatePlacesImages();
        const userPlacesUpdated = await updateUserPlacesImages();

        console.log(`\n🎉 Done!`);
        console.log(`   📍 Default places updated: ${placesUpdated}`);
        console.log(`   👥 User places updated: ${userPlacesUpdated}`);
        console.log(`   🖼️  All using AI-generated images from: ${HOSTING_BASE}`);
    } catch (err) {
        console.error("❌ Update failed:", err);
        process.exit(1);
    } finally {
        process.exit(0);
    }
}

main();
