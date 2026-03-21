import { Injectable, inject } from '@angular/core';
import {
    Firestore,
    collection,
    collectionData,
    doc,
    docData,
    query,
    where,
    orderBy,
    limit,
    getDocs,
    Query,
    CollectionReference,
} from '@angular/fire/firestore';
import { Observable, of, from, forkJoin } from 'rxjs';
import { map, catchError, shareReplay } from 'rxjs/operators';

export interface FirestorePlace {
    id: string;
    name: string;
    slug: string;
    category: string;
    shortDescription: string;
    fullDescription: string;
    imageUrl: string;
    tags: string[];
    suitableFor: string[];
    featured: boolean;
    rating?: number;
    reviewCount?: number;
    priceRange?: string;
    address: string;
    openingHours?: string;
    lat?: number;
    lng?: number;
    pricePerDay?: string;
    vehicleTypes: string[];
    phoneNumber?: string;
    depositRequired?: string;
}

export interface FirestoreCategory {
    id: string;
    label: string;
    icon: string;
    iconName: string;
}

const FS_PLACES_CACHE_KEY = 'fs_cache_places';
const FS_CATEGORIES_CACHE_KEY = 'fs_cache_categories';
const FS_CACHE_TTL_MS = 24 * 60 * 60 * 1000; // 24 giờ

function saveToLocalStorage(key: string, data: any): void {
    try {
        localStorage.setItem(key, JSON.stringify({ data, ts: Date.now() }));
    } catch { /* quota exceeded */ }
}

function loadFromLocalStorage<T>(key: string): T | null {
    try {
        const raw = localStorage.getItem(key);
        if (!raw) return null;
        const { data, ts } = JSON.parse(raw);
        if (Date.now() - ts > FS_CACHE_TTL_MS) return null;
        return data as T;
    } catch { return null; }
}

@Injectable({
    providedIn: 'root',
})
export class FirestorePlacesService {
    private firestore = inject(Firestore);

    // Cache toàn bộ places — Firestore offline persistence + localStorage backup
    private allPlaces$ = this.getAllPlacesOnce().pipe(shareReplay(1));

    /** Lấy tất cả places — Firestore (có IndexedDB cache) → localStorage backup */
    private getAllPlacesOnce(): Observable<FirestorePlace[]> {
        return from(
            getDocs(collection(this.firestore, 'places') as CollectionReference<FirestorePlace>)
        ).pipe(
            map(snapshot => {
                const places = snapshot.docs.map(d => ({ ...d.data(), id: d.id }) as FirestorePlace);
                if (places.length > 0) saveToLocalStorage(FS_PLACES_CACHE_KEY, places);
                return places;
            }),
            catchError(err => {
                console.warn('[FirestorePlacesService] offline — trying localStorage backup:', err.code || err.message);
                const cached = loadFromLocalStorage<FirestorePlace[]>(FS_PLACES_CACHE_KEY);
                if (cached && cached.length > 0) {
                    console.log(`📵 [FirestorePlaces] Serving ${cached.length} places from localStorage backup`);
                    return of(cached);
                }
                return of([]);
            })
        );
    }

    /** Lấy tất cả places */
    getPlaces(category?: string): Observable<FirestorePlace[]> {
        return this.allPlaces$.pipe(
            map(places => category ? places.filter(p => p.category === category) : places)
        );
    }

    /** Lấy 1 place theo slug */
    getPlaceBySlug(slug: string): Observable<FirestorePlace | null> {
        return this.allPlaces$.pipe(
            map(places => places.find(p => p.slug === slug) ?? null)
        );
    }

    /** Lấy nhiều places theo danh sách IDs */
    getPlacesByIds(ids: string[]): Observable<FirestorePlace[]> {
        if (!ids.length) return of([]);
        return this.allPlaces$.pipe(
            map(places => places.filter(p => ids.includes(p.id)))
        );
    }

    /** Tìm kiếm places theo từ khoá */
    searchPlaces(keyword: string): Observable<FirestorePlace[]> {
        const q = keyword.toLowerCase().trim();
        if (!q) return of([]);
        return this.allPlaces$.pipe(
            map(places => places.filter(p =>
                p.name.toLowerCase().includes(q) ||
                p.slug.toLowerCase().includes(q) ||
                (p.category || '').toLowerCase().includes(q) ||
                (p.tags || []).join(' ').toLowerCase().includes(q) ||
                (p.shortDescription || '').toLowerCase().includes(q)
            ))
        );
    }

    /** Lấy danh sách categories — có localStorage backup */
    getCategories(): Observable<FirestoreCategory[]> {
        return from(
            getDocs(collection(this.firestore, 'categories') as CollectionReference<FirestoreCategory>)
        ).pipe(
            map(snapshot => {
                const cats = snapshot.docs.map(d => ({ ...d.data(), id: d.id }) as FirestoreCategory);
                const sigIdx = cats.findIndex(c => c.id === 'signature');
                if (sigIdx > 0) {
                    const [sig] = cats.splice(sigIdx, 1);
                    cats.unshift(sig);
                }
                if (cats.length > 0) saveToLocalStorage(FS_CATEGORIES_CACHE_KEY, cats);
                return cats;
            }),
            catchError(err => {
                console.warn('[FirestorePlacesService] getCategories offline:', err.code || err.message);
                const cached = loadFromLocalStorage<FirestoreCategory[]>(FS_CATEGORIES_CACHE_KEY);
                return of(cached ?? []);
            })
        );
    }

    /** Lấy places grouped theo category (dùng cho home page) */
    getPlacesGrouped(): Observable<Record<string, FirestorePlace[]>> {
        return this.allPlaces$.pipe(
            map(places => {
                const groups: Record<string, FirestorePlace[]> = {};
                for (const p of places) {
                    if (!groups[p.category]) groups[p.category] = [];
                    groups[p.category].push(p);
                }
                return groups;
            })
        );
    }
}
