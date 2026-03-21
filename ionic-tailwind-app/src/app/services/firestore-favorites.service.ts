import { Injectable, inject } from '@angular/core';
import {
    Firestore,
    collection,
    collectionData,
    doc,
    setDoc,
    deleteDoc,
    getDoc,
    serverTimestamp,
} from '@angular/fire/firestore';
import { Auth } from '@angular/fire/auth';
import { Observable, from, of, catchError, map } from 'rxjs';
import { Place } from './api.service';

export interface FavoriteDoc {
    placeId: string;
    placeName: string;
    placeCategory?: string;
    placeImageUrl?: string;
    addedAt: any;
}

@Injectable({
    providedIn: 'root',
})
export class FirestoreFavoritesService {
    private firestore = inject(Firestore);
    private auth = inject(Auth);

    private get uid(): string | null {
        return this.auth.currentUser?.uid ?? null;
    }

    private favoritesCol(uid: string) {
        return collection(this.firestore, `users/${uid}/favorites`);
    }

    private favoriteDoc(uid: string, placeId: string) {
        return doc(this.firestore, `users/${uid}/favorites/${placeId}`);
    }

    /** Lấy danh sách favorite place IDs realtime */
    getFavoriteIds(): Observable<string[]> {
        const uid = this.uid;
        if (!uid) return of([]);
        return (collectionData(this.favoritesCol(uid), { idField: 'placeId' }) as Observable<FavoriteDoc[]>).pipe(
            map(docs => docs.map(d => d.placeId)),
            catchError(() => of([]))
        );
    }

    /** Kiểm tra 1 place có trong favorites không */
    async isFavorite(placeId: string): Promise<boolean> {
        const uid = this.uid;
        if (!uid) return false;
        try {
            const snap = await getDoc(this.favoriteDoc(uid, placeId));
            return snap.exists();
        } catch {
            return false;
        }
    }

    /** Thêm place vào favorites */
    async addFavorite(place: Pick<Place, 'id' | 'name' | 'category' | 'imageUrl'>): Promise<void> {
        const uid = this.uid;
        if (!uid) return;
        try {
            await setDoc(this.favoriteDoc(uid, place.id), {
                placeId: place.id,
                placeName: place.name,
                placeCategory: place.category,
                placeImageUrl: place.imageUrl,
                addedAt: serverTimestamp(),
            });
        } catch (e) {
            console.error('FirestoreFavoritesService.addFavorite error:', e);
        }
    }

    /** Xóa place khỏi favorites */
    async removeFavorite(placeId: string): Promise<void> {
        const uid = this.uid;
        if (!uid) return;
        try {
            await deleteDoc(this.favoriteDoc(uid, placeId));
        } catch (e) {
            console.error('FirestoreFavoritesService.removeFavorite error:', e);
        }
    }

    /** Toggle favorite */
    async toggleFavorite(place: Pick<Place, 'id' | 'name' | 'category' | 'imageUrl'>): Promise<boolean> {
        const currentState = await this.isFavorite(place.id);
        if (currentState) {
            await this.removeFavorite(place.id);
            return false;
        } else {
            await this.addFavorite(place);
            return true;
        }
    }
}
