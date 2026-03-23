/**
 * Script: Upload AI-Generated Images to Firebase Storage
 * 
 * Uploads 14 AI-generated images (2 per category × 7 categories) to Firebase Storage.
 * Outputs the download URLs to be used in image-pool.ts
 * 
 * Run: npx ts-node --esm upload-ai-images.ts
 */

import { initializeApp, cert, getApps } from "firebase-admin/app";
import { getStorage } from "firebase-admin/storage";
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
const projectId = serviceAccount.project_id;

if (!getApps().length) {
    initializeApp({
        credential: cert(serviceAccount),
        storageBucket: `${projectId}.firebasestorage.app`,
    });
}

const storage = getStorage();
const bucket = storage.bucket();

// AI images to upload: [localPath, storagePath]
const ARTIFACTS_DIR = "C:\\Users\\intekaih\\.gemini\\antigravity\\brain\\f8b32b5a-8f0a-423f-b16e-bd2ab0410985";

const AI_IMAGES: { local: string; dest: string; category: string; index: number }[] = [
    { local: path.join(ARTIFACTS_DIR, "dalat_cafe_1_1774078895028.png"), dest: "ai-images/cafe_1.png", category: "cafe", index: 1 },
    { local: path.join(ARTIFACTS_DIR, "dalat_cafe_2_1774078914143.png"), dest: "ai-images/cafe_2.png", category: "cafe", index: 2 },
    { local: path.join(ARTIFACTS_DIR, "dalat_food_1_1774078935688.png"), dest: "ai-images/food_1.png", category: "food", index: 1 },
    { local: path.join(ARTIFACTS_DIR, "dalat_food_2_1774078951823.png"), dest: "ai-images/food_2.png", category: "food", index: 2 },
    { local: path.join(ARTIFACTS_DIR, "dalat_checkin_1_1774078970731.png"), dest: "ai-images/checkin_1.png", category: "checkin", index: 1 },
    { local: path.join(ARTIFACTS_DIR, "dalat_checkin_2_1774078989100.png"), dest: "ai-images/checkin_2.png", category: "checkin", index: 2 },
    { local: path.join(ARTIFACTS_DIR, "dalat_nature_1_1774079005886.png"), dest: "ai-images/nature_1.png", category: "nature", index: 1 },
    { local: path.join(ARTIFACTS_DIR, "dalat_nature_2_1774079020648.png"), dest: "ai-images/nature_2.png", category: "nature", index: 2 },
    { local: path.join(ARTIFACTS_DIR, "dalat_homestay_1_1774079037956.png"), dest: "ai-images/homestay_1.png", category: "homestay", index: 1 },
    { local: path.join(ARTIFACTS_DIR, "dalat_homestay_2_1774079055654.png"), dest: "ai-images/homestay_2.png", category: "homestay", index: 2 },
    { local: path.join(ARTIFACTS_DIR, "dalat_rental_1_1774079072065.png"), dest: "ai-images/rental_1.png", category: "rental", index: 1 },
    { local: path.join(ARTIFACTS_DIR, "dalat_rental_2_1774079093843.png"), dest: "ai-images/rental_2.png", category: "rental", index: 2 },
    { local: path.join(ARTIFACTS_DIR, "dalat_signature_1_1774079114100.png"), dest: "ai-images/signature_1.png", category: "signature", index: 1 },
    { local: path.join(ARTIFACTS_DIR, "dalat_signature_2_1774079131631.png"), dest: "ai-images/signature_2.png", category: "signature", index: 2 },
];

async function uploadImage(localPath: string, destPath: string): Promise<string> {
    if (!fs.existsSync(localPath)) {
        throw new Error(`File not found: ${localPath}`);
    }

    const file = bucket.file(destPath);
    await bucket.upload(localPath, {
        destination: destPath,
        metadata: {
            contentType: "image/png",
            cacheControl: "public, max-age=31536000", // cache 1 năm
        },
    });

    // Make public
    await file.makePublic();

    const publicUrl = `https://storage.googleapis.com/${bucket.name}/${destPath}`;
    return publicUrl;
}

async function main() {
    console.log("🚀 Starting AI image upload to Firebase Storage...");
    console.log(`   Bucket: ${bucket.name}`);
    console.log(`   Images to upload: ${AI_IMAGES.length}`);

    const results: Record<string, string[]> = {};

    for (const img of AI_IMAGES) {
        try {
            process.stdout.write(`   📤 Uploading ${img.dest}... `);
            const url = await uploadImage(img.local, img.dest);

            if (!results[img.category]) results[img.category] = [];
            results[img.category].push(url);

            console.log(`✅`);
        } catch (err) {
            console.log(`❌ ${err}`);
        }
    }

    console.log("\n\n📋 ===== COPY THIS INTO image-pool.ts =====\n");
    console.log("const AI_IMAGE_URLS: Record<string, string[]> = {");
    for (const [category, urls] of Object.entries(results)) {
        console.log(`  ${category}: [`);
        for (const url of urls) {
            console.log(`    "${url}",`);
        }
        console.log(`  ],`);
    }
    console.log("};");
    console.log("\n==============================================\n");

    console.log(`✅ Upload complete! ${Object.values(results).flat().length}/${AI_IMAGES.length} images uploaded.`);
    process.exit(0);
}

main().catch(err => {
    console.error("❌ Upload failed:", err);
    process.exit(1);
});
