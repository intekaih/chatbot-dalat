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

@Injectable({
    providedIn: 'root',
})
export class FirestorePlacesService {
    private firestore = inject(Firestore);

    // Cache toàn bộ places để tránh re-read nhiều lần
    private allPlaces$ = this.getAllPlacesOnce().pipe(shareReplay(1));

    /** Lấy tất cả places một lần (snapshot, không realtime) */
    private getAllPlacesOnce(): Observable<FirestorePlace[]> {
        return from(
            getDocs(collection(this.firestore, 'places') as CollectionReference<FirestorePlace>)
        ).pipe(
            map(snapshot => snapshot.docs.map(d => ({ ...d.data(), id: d.id }) as FirestorePlace)),
            catchError(err => {
                console.warn('[FirestorePlacesService] getAllPlaces error:', err);
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

    /** Lấy danh sách categories */
    getCategories(): Observable<FirestoreCategory[]> {
        return from(
            getDocs(collection(this.firestore, 'categories') as CollectionReference<FirestoreCategory>)
        ).pipe(
            map(snapshot => {
                const cats = snapshot.docs.map(d => ({ ...d.data(), id: d.id }) as FirestoreCategory);
                // Đặt "signature" lên đầu
                const sigIdx = cats.findIndex(c => c.id === 'signature');
                if (sigIdx > 0) {
                    const [sig] = cats.splice(sigIdx, 1);
                    cats.unshift(sig);
                }
                return cats;
            }),
            catchError(err => {
                console.warn('[FirestorePlacesService] getCategories error:', err);
                return of([]);
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
