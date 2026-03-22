import { Injectable, inject, Injector, runInInjectionContext } from '@angular/core';
import {
    Firestore,
    collection,
    collectionData,
    doc,
    addDoc,
    deleteDoc,
    updateDoc,
    query,
    orderBy,
    serverTimestamp,
    Timestamp,
} from '@angular/fire/firestore';
import { Auth } from '@angular/fire/auth';
import { Observable, of, catchError } from 'rxjs';
import { Trip } from './api.service';

function stripUndefined<T extends Record<string, any>>(obj: T): Partial<T> {
    const result: Record<string, any> = {};
    Object.keys(obj).forEach(key => {
        if (obj[key] !== undefined && obj[key] !== null) {
            result[key] = obj[key];
        }
    });
    return result as Partial<T>;
}

@Injectable({
    providedIn: 'root',
})
export class FirestoreTripsService {
    private firestore = inject(Firestore);
    private auth = inject(Auth);
    private injector = inject(Injector);

    private get uid(): string | null {
        return this.auth.currentUser?.uid ?? null;
    }

    private tripsCol(uid: string) {
        return collection(this.firestore, `users/${uid}/trips`);
    }

    /** Lấy tất cả trips của user, sắp xếp theo ngày tạo mới nhất */
    getTrips(): Observable<Trip[]> {
        const uid = this.uid;
        if (!uid) return of([]);

        const q = query(this.tripsCol(uid), orderBy('createdAt', 'desc'));
        return runInInjectionContext(this.injector, () =>
            (collectionData(q, { idField: 'id' }) as Observable<Trip[]>).pipe(
                catchError(() => of([]))
            )
        );
    }

    /** Tạo trip mới, trả về ID của trip mới tạo */
    async createTrip(trip: Partial<Trip>): Promise<string> {
        const uid = this.uid;
        if (!uid) return '';
        try {
            const clean = stripUndefined(trip as Record<string, any>);
            const ref = await addDoc(this.tripsCol(uid), {
                ...clean,
                createdAt: serverTimestamp(),
                updatedAt: serverTimestamp(),
            });
            return ref.id;
        } catch (e: any) {
            console.error('FirestoreTripsService.createTrip error:', e?.code, e?.message, e);
            return '';
        }
    }

    /** Cập nhật trip */
    async updateTrip(tripId: string, data: Partial<Trip>): Promise<void> {
        const uid = this.uid;
        if (!uid) return;
        try {
            const clean = stripUndefined(data as Record<string, any>);
            await updateDoc(doc(this.firestore, `users/${uid}/trips/${tripId}`), {
                ...clean,
                updatedAt: serverTimestamp(),
            });
        } catch (e: any) {
            console.error('FirestoreTripsService.updateTrip error:', e?.code, e?.message, e);
        }
    }

    /** Xóa trip */
    async deleteTrip(tripId: string): Promise<void> {
        const uid = this.uid;
        if (!uid) return;
        try {
            await deleteDoc(doc(this.firestore, `users/${uid}/trips/${tripId}`));
        } catch (e) {
            console.error('FirestoreTripsService.deleteTrip error:', e);
        }
    }
}
