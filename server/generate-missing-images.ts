/**
 * Batch generate AI images for places that don't have unique images yet.
 * Run: npx tsx generate-missing-images.ts
 */
import "dotenv/config";
import { openai } from "./utils.js";
import { savePlaceImageCache, normalizePlaceNameKey } from "./db.js";
import db from "./db.js";
import fs from "fs";
import path from "path";
import { fileURLToPath } from "url";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const ASSETS_DIR = path.resolve(__dirname, "../ionic-tailwind-app/src/assets/places");

if (!fs.existsSync(ASSETS_DIR)) fs.mkdirSync(ASSETS_DIR, { recursive: true });

// Find places without AI images
const allPlaces = db.prepare(
    "SELECT name, category FROM places WHERE user_id IS NULL ORDER BY category, name"
).all() as { name: string; category: string }[];

const missing: { name: string; category: string }[] = [];
for (const p of allPlaces) {
    const cached = db.prepare("SELECT image_path FROM place_images WHERE name_key = ?")
        .get(normalizePlaceNameKey(p.name)) as { image_path: string } | undefined;
    if (!cached) {
        // Check if we already have this name (dedup)
        if (!missing.find(m => m.name === p.name)) {
            missing.push(p);
        }
    }
}

console.log(`\n🖼️  Found ${missing.length} places without AI images\n`);

if (missing.length === 0) {
    console.log("✅ All places have unique images!");
    process.exit(0);
}

// Category-specific prompt hints
const categoryHints: Record<string, string> = {
    cafe: "a cozy cafe in Da Lat, Vietnam, misty morning, pine trees, warm lighting",
    food: "Vietnamese street food dish, Da Lat cuisine, appetizing, warm colors, rustic setting",
    homestay: "a beautiful homestay/hotel in Da Lat, surrounded by pine forests, misty atmosphere",
    checkin: "a famous landmark in Da Lat, Vietnam, scenic, tourist attraction",
    nature: "nature scenery in Da Lat, Vietnam, misty mountains, pine forests, lakes",
    rental: "motorbike rental shop in Da Lat, Vietnam",
    signature: "iconic landmark of Da Lat, Vietnam, scenic view",
};

function slugify(name: string): string {
    return name
        .toLowerCase()
        .normalize("NFD")
        .replace(/[\u0300-\u036f]/g, "")
        .replace(/đ/g, "d")
        .replace(/Đ/g, "D")
        .replace(/[^a-z0-9]+/g, "_")
        .replace(/^_|_$/g, "")
        .slice(0, 50);
}

async function generateImage(placeName: string, category: string): Promise<string | null> {
    // Kiểm tra file đã tồn tại trên disk (tránh sinh ảnh trùng dù cache bị xóa)
    const slug = slugify(placeName);
    const existingFile = fs.readdirSync(ASSETS_DIR).find(f => f.startsWith(slug + "_") && f.endsWith(".png"));
    if (existingFile) {
        console.log(`  ♻️  File đã có: ${existingFile} — bỏ qua sinh ảnh mới`);
        // Cập nhật lại DB nếu cache bị thiếu
        savePlaceImageCache(placeName, existingFile);
        db.prepare("UPDATE places SET image_url = ? WHERE LOWER(name) = LOWER(?)").run(
            `/assets/places/${existingFile}`,
            placeName,
        );
        return existingFile;
    }

    const hint = categoryHints[category] || categoryHints.signature;
    const prompt = `A beautiful photo of "${placeName}" in Da Lat, Vietnam. Style: ${hint}. High quality, vivid colors, 4K quality photo.`;

    try {
        const response = await openai.images.generate({
            model: "gemini-3.1-flash-image",
            prompt,
            n: 1,
            size: "1024x1024",
        });

        const data = response.data[0];
        const filename = `${slug}_${Date.now()}.png`;
        const assetPath = path.join(ASSETS_DIR, filename);

        if (data.b64_json) {
            const buffer = Buffer.from(data.b64_json, "base64");
            fs.writeFileSync(assetPath, buffer);
        } else if (data.url) {
            // Download from URL
            const res = await fetch(data.url);
            const arrayBuffer = await res.arrayBuffer();
            const buffer = Buffer.from(arrayBuffer);
            fs.writeFileSync(assetPath, buffer);
        } else {
            console.error(`  ❌ No image data for "${placeName}"`);
            return null;
        }

        // Save to place_images cache
        savePlaceImageCache(placeName, filename);

        // Update places table
        db.prepare("UPDATE places SET image_url = ? WHERE LOWER(name) = LOWER(?)").run(
            `/assets/places/${filename}`,
            placeName,
        );

        return filename;
    } catch (error: any) {
        console.error(`  ❌ Error generating image for "${placeName}": ${error?.message || error}`);
        return null;
    }
}

async function main() {
    let success = 0;
    let failed = 0;

    for (let i = 0; i < missing.length; i++) {
        const { name, category } = missing[i];
        console.log(`[${i + 1}/${missing.length}] Generating: "${name}" (${category})...`);

        const filename = await generateImage(name, category);
        if (filename) {
            console.log(`  ✅ ${filename}`);
            success++;
        } else {
            failed++;
        }

        // Small delay to avoid rate limiting
        if (i < missing.length - 1) {
            await new Promise(r => setTimeout(r, 1000));
        }
    }

    console.log(`\n🎉 Done! ${success} generated, ${failed} failed out of ${missing.length} total`);
    process.exit(0);
}

main();
