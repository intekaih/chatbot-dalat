// Copy generated images from artifact dir to assets/places/ and update DB
const Database = require('better-sqlite3');
const fs = require('fs');
const path = require('path');

const db = new Database('dalat_chatbot.db');
const ARTIFACT_DIR = 'C:\\Users\\intekaih\\.gemini\\antigravity\\brain\\985472ec-7255-42d2-abc3-1a8fc7de00dc';
const ASSETS_DIR = path.resolve(__dirname, '../ionic-tailwind-app/src/assets/places');
const GENERATED_DIR = path.resolve(__dirname, 'generated-images');

// Map filename prefix → place name
const IMAGE_MAP = {
    'doha_cafe': 'Doha Cafe',
    'khu_vuon_mua_he': 'Khu Vườn Mùa Hè',
    'kimochi_coffee': 'Kimochi Coffee',
    'tasty_da_lat': 'Tasty Đà Lạt',
    'windmills_coffee': 'Windmills Coffee',
    'woodstock_da_lat': 'Woodstock Đà Lạt',
    'doi_mot_nguoi_coffee': 'Đợi Một Người Coffee',
    'banh_mi_xiu_mai': 'Bánh Mì Xíu Mại Bé Linh',
    'banh_trang_nuong': 'Bánh Tráng Nướng Dì Đinh',
    'banh_uot_long_ga': 'Bánh Ướt Lòng Gà Long',
    'bun_bo_boc_khoi': 'Bún Bò Bốc Khói Chu Gia',
    'bun_rieu_co_lan': 'Bún Riêu Cô Lan',
    'che_he_da_lat': 'Chè Hé Đà Lạt',
    'com_ga_phan_rang': 'Cơm Gà Phan Rang (Cô Phượng)',
    'com_nieu_thuan_gia': 'Cơm Niêu Thuận Gia',
    'kem_bo_thanh_thao': 'Kem Bơ Thanh Thảo',
    'lau_bo_quan_go': 'Lẩu Bò Quán Gỗ (Ba Toa)',
};

// Find and copy images
const files = fs.readdirSync(ARTIFACT_DIR).filter(f => f.endsWith('.png'));
let copied = 0;

for (const file of files) {
    // Match file to place name via prefix
    const prefix = Object.keys(IMAGE_MAP).find(key => file.startsWith(key + '_'));
    if (!prefix) continue;

    const placeName = IMAGE_MAP[prefix];
    const src = path.join(ARTIFACT_DIR, file);
    const destAssets = path.join(ASSETS_DIR, file);
    const destGen = path.join(GENERATED_DIR, file);

    // Copy to both locations
    fs.copyFileSync(src, destAssets);
    fs.copyFileSync(src, destGen);

    // Update place_images cache
    const key = placeName.toLowerCase().trim().replace(/\s+/g, ' ');
    db.prepare('INSERT INTO place_images (name_key, image_path) VALUES (?, ?) ON CONFLICT(name_key) DO UPDATE SET image_path = excluded.image_path')
        .run(key, file);

    // Update places table
    db.prepare("UPDATE places SET image_url = ? WHERE LOWER(name) = LOWER(?)")
        .run('/assets/places/' + file, placeName);

    console.log('✅ ' + placeName + ' → ' + file);
    copied++;
}

console.log('\nTotal: ' + copied + ' images copied and DB updated');
