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
            const ref = await addDoc(this.tripsCol(uid), {
                ...trip,
                createdAt: serverTimestamp(),
                updatedAt: serverTimestamp(),
            });
            return ref.id;
        } catch (e) {
            console.error('FirestoreTripsService.createTrip error:', e);
            return '';
        }
    }

    /** Cập nhật trip */
    async updateTrip(tripId: string, data: Partial<Trip>): Promise<void> {
        const uid = this.uid;
        if (!uid) return;
        try {
            await updateDoc(doc(this.firestore, `users/${uid}/trips/${tripId}`), {
                ...data,
                updatedAt: serverTimestamp(),
            });
        } catch (e) {
            console.error('FirestoreTripsService.updateTrip error:', e);
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
