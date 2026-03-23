const Database = require('better-sqlite3');
const db = new Database('dalat_chatbot.db');

// Find places without AI-generated images
const allPlaces = db.prepare(
    "SELECT p.name, p.category FROM places p WHERE p.user_id IS NULL ORDER BY p.category, p.name"
).all();

let missing = [];
for (const p of allPlaces) {
    const cached = db.prepare("SELECT image_path FROM place_images WHERE name_key = ?").get(p.name.toLowerCase());
    if (!cached) {
        missing.push(p);
    }
}

console.log('=== Places missing AI images: ' + missing.length + ' ===');
const byCat = {};
for (const p of missing) {
    if (!byCat[p.category]) byCat[p.category] = [];
    byCat[p.category].push(p.name);
}
for (const [cat, names] of Object.entries(byCat)) {
    console.log('\n' + cat + ' (' + names.length + '):');
    names.forEach(n => console.log('  - ' + n));
}
