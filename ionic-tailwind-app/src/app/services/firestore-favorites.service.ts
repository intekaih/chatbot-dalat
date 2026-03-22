import { Injectable, inject, Injector, runInInjectionContext } from '@angular/core';
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
    private injector = inject(Injector);

    private get uid(): string | null {
        return this.auth.currentUser?.uid ?? null;
    }

    /** Kiểm tra user đã đăng nhập Firebase chưa (guest = false) */
    isAuthenticated(): boolean {
        return !!this.auth.currentUser;
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
        return runInInjectionContext(this.injector, () =>
            (collectionData(this.favoritesCol(uid), { idField: 'placeId' }) as Observable<FavoriteDoc[]>).pipe(
                map(docs => docs.map(d => d.placeId)),
                catchError(() => of([]))
            )
        );
    }

    /** Kiểm tra 1 place có trong favorites không */
    async isFavorite(placeId: string): Promise<boolean> {
        const uid = this.uid;
        if (!uid) return false;
        try {
            const snap = await runInInjectionContext(this.injector, () =>
                getDoc(this.favoriteDoc(uid, placeId))
            );
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
            const data: Record<string, any> = {
                placeId: place.id,
                placeName: place.name || '',
                addedAt: serverTimestamp(),
            };
            if (place.category) data['placeCategory'] = place.category;
            if (place.imageUrl) data['placeImageUrl'] = place.imageUrl;
            await setDoc(this.favoriteDoc(uid, place.id), data);
        } catch (e: any) {
            console.error('FirestoreFavoritesService.addFavorite error:', e?.code, e?.message, e);
            throw e;
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
            throw e;
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
