/**
 * Recommendation Engine — scores và re-ranks default places theo user profile.
 * Thay thế hoàn toàn 7 AI calls generatePersonalizedPlaces.
 */

import { getPlaces } from "./db.js";
import { getCategoryImages } from "./image-pool.js";

// Duplicated from ai-generator.ts to avoid circular import
const CATEGORY_LIMITS: Record<string, number> = {
    checkin: 20,
    nature: 10,
    homestay: 20,
    cafe: 20,
    food: 20,
    rental: 10,
    signature: 10,
};

export interface UserProfile {
    preferences: string[];   // ['food', 'cafe', 'checkin', 'nature', 'relax', 'night']
    travelStyles: string[];  // ['solo', 'couple', 'friends', 'family']
    budget: string;          // 'budget' | 'mid' | 'luxury'
}

// Map preference → related categories
const PREFERENCE_TO_CATEGORIES: Record<string, string[]> = {
    food: ["food"],
    cafe: ["cafe"],
    checkin: ["checkin", "signature"],
    nature: ["nature"],
    relax: ["homestay", "nature", "cafe"],
    night: ["food", "cafe", "checkin"],
};

// Map travelStyle → suitableFor keywords (Vietnamese)
const STYLE_TO_SUITABLE: Record<string, string[]> = {
    solo: ["Solo", "solo", "1 người", "cá nhân"],
    couple: ["Cặp đôi", "couple", "lãng mạn", "romantic"],
    friends: ["Nhóm bạn", "friends", "bạn bè", "nhóm"],
    family: ["Gia đình", "family", "trẻ em", "an toàn"],
};

// Budget → price range thresholds (approximate from priceRange strings)
const BUDGET_KEYWORDS: Record<string, { cheap: string[]; expensive: string[] }> = {
    budget: {
        cheap: ["miễn phí", "free", "10.000", "15.000", "20.000", "25.000", "30.000", "40.000", "50.000"],
        expensive: ["500.000", "1.000.000", "1.500.000", "2.000.000", "3.000.000", "5.000.000"],
    },
    mid: {
        cheap: [],
        expensive: ["2.000.000", "3.000.000", "5.000.000", "10.000.000"],
    },
    luxury: {
        cheap: [],
        expensive: [],
    },
};

/**
 * Tính điểm relevance cho 1 place dựa trên user profile.
 */
function scorePlace(
    place: ReturnType<typeof getPlaces>[0],
    profile: UserProfile,
): number {
    let score = 0;

    // 1. Category matches user preference → +3
    const preferredCategories = new Set(
        profile.preferences.flatMap(p => PREFERENCE_TO_CATEGORIES[p] || [])
    );
    if (preferredCategories.has(place.category || "")) {
        score += 3;
    }

    // 2. suitableFor matches travelStyle → +2
    const suitableFor = (place.suitableFor || []).map((s: string) => s.toLowerCase());
    const styleKeywords = profile.travelStyles.flatMap(
        s => (STYLE_TO_SUITABLE[s] || []).map(k => k.toLowerCase())
    );
    const styleMatch = styleKeywords.some(k => suitableFor.some((sf: string) => sf.includes(k)));
    if (styleMatch) {
        score += 2;
    }

    // 3. Budget fit → +2 (hoặc -2 nếu quá đắt cho budget thấp)
    const priceStr = (place.priceRange || place.pricePerDay || "").toLowerCase();
    if (priceStr) {
        const budgetInfo = BUDGET_KEYWORDS[profile.budget] || BUDGET_KEYWORDS.mid;

        if (profile.budget === "budget") {
            // Budget thấp: thưởng nếu rẻ, phạt nếu đắt
            const isCheap = budgetInfo.cheap.some(k => priceStr.includes(k)) || priceStr.includes("miễn phí");
            const isExpensive = budgetInfo.expensive.some(k => priceStr.includes(k));
            if (isCheap) score += 2;
            if (isExpensive) score -= 2;
        } else if (profile.budget === "luxury") {
            // Luxury: thưởng nếu sang, không phạt rẻ
            const hasHighPrice = ["500.000", "1.000.000", "1.500.000", "2.000.000"].some(k => priceStr.includes(k));
            if (hasHighPrice) score += 2;
        }
        // mid: không bonus/penalty đặc biệt
    }

    // 4. High rating → +1
    if (place.rating && place.rating >= 4.5) {
        score += 1;
    }

    // 5. High review count (social proof) → +1
    if (place.reviewCount && place.reviewCount >= 500) {
        score += 1;
    }

    return score;
}

/**
 * Re-rank default places cho user, trả về format giống generatePersonalizedPlaces.
 * Không gọi AI — pure code scoring.
 */
export function getRerankedPlaces(profile: UserProfile): {
    checkin: any[];
    nature: any[];
    homestay: any[];
    cafe: any[];
    food: any[];
    rental: any[];
    signature: any[];
} {
    // Lấy tất cả default places (user_id IS NULL)
    const allPlaces = getPlaces();

    // Score mỗi place
    const scored = allPlaces.map(place => ({
        ...place,
        _score: scorePlace(place, profile),
    }));

    // Sort by score (desc), then rating (desc)
    scored.sort((a, b) => b._score - a._score || (b.rating || 0) - (a.rating || 0));

    // Group by category, lấy top N theo CATEGORY_LIMITS
    const result: Record<string, any[]> = {
        checkin: [], nature: [], homestay: [], cafe: [], food: [], rental: [], signature: [],
    };

    for (const place of scored) {
        const cat = place.category || "";
        if (cat in result) {
            const limit = (CATEGORY_LIMITS as Record<string, number>)[cat] || 10;
            if (result[cat].length < limit) {
                // Remove internal score field before saving
                const { _score, ...cleanPlace } = place;
                result[cat].push(cleanPlace);
            }
        }
    }

    // Reassign images: cycle through available images per category to avoid duplicates
    for (const [cat, places] of Object.entries(result)) {
        const images = getCategoryImages(cat);
        for (let i = 0; i < places.length; i++) {
            places[i].imageUrl = images[i % images.length];
        }
    }

    const total = Object.values(result).reduce((s, a) => s + a.length, 0);
    console.log(
        `🎯 [Recommender] Re-ranked ${total} places — ` +
        Object.entries(result).map(([k, v]) => `${k}:${v.length}`).join(", ")
    );

    return result as any;
}
