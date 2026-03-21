import { Injectable, inject } from '@angular/core';
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
    getDocs,
    setDoc,
    getDoc,
} from '@angular/fire/firestore';
import { Auth } from '@angular/fire/auth';
import { Observable, from, of, switchMap, map, catchError } from 'rxjs';

export interface FirestoreMessage {
    id?: string;
    role: 'user' | 'assistant';
    content: string;
    imageUrl?: string | null;
    imageUrls?: string[];
    timestamp: Date | Timestamp;
}

export interface FirestoreChatSession {
    id?: string;
    title: string;
    createdAt: Date | Timestamp;
    updatedAt: Date | Timestamp;
    messageCount?: number;
}

@Injectable({
    providedIn: 'root',
})
export class FirestoreChatService {
    private firestore = inject(Firestore);
    private auth = inject(Auth);

    private get uid(): string | null {
        return this.auth.currentUser?.uid ?? null;
    }

    private sessionsCol(uid: string) {
        return collection(this.firestore, `users/${uid}/chatSessions`);
    }

    private messagesCol(uid: string, sessionId: string) {
        return collection(this.firestore, `users/${uid}/chatSessions/${sessionId}/messages`);
    }

    /** Lấy danh sách chat sessions, sắp xếp mới nhất trước */
    getSessions(): Observable<FirestoreChatSession[]> {
        const uid = this.uid;
        if (!uid) return of([]);

        const q = query(this.sessionsCol(uid), orderBy('updatedAt', 'desc'));
        return (collectionData(q, { idField: 'id' }) as Observable<FirestoreChatSession[]>).pipe(
            catchError(() => of([]))
        );
    }

    /** Tạo session mới */
    async createSession(title: string = 'Cuộc trò chuyện mới'): Promise<string | null> {
        const uid = this.uid;
        if (!uid) return null;
        try {
            const ref = await addDoc(this.sessionsCol(uid), {
                title,
                createdAt: serverTimestamp(),
                updatedAt: serverTimestamp(),
                messageCount: 0,
            });
            return ref.id;
        } catch (e) {
            console.error('FirestoreChatService.createSession error:', e);
            return null;
        }
    }

    /** Xóa một session (và toàn bộ messages sub-collection) */
    async deleteSession(sessionId: string): Promise<void> {
        const uid = this.uid;
        if (!uid) return;
        try {
            // Xóa tất cả messages trước
            const msgs = await getDocs(this.messagesCol(uid, sessionId));
            const delPromises = msgs.docs.map((d) => deleteDoc(d.ref));
            await Promise.all(delPromises);
            // Rồi xóa session
            await deleteDoc(doc(this.firestore, `users/${uid}/chatSessions/${sessionId}`));
        } catch (e) {
            console.error('FirestoreChatService.deleteSession error:', e);
        }
    }

    /** Lấy messages của một session */
    getMessages(sessionId: string): Observable<FirestoreMessage[]> {
        const uid = this.uid;
        if (!uid) return of([]);

        const q = query(this.messagesCol(uid, sessionId), orderBy('timestamp', 'asc'));
        return (collectionData(q, { idField: 'id' }) as Observable<FirestoreMessage[]>).pipe(
            catchError(() => of([]))
        );
    }

    /** Thêm tin nhắn vào session */
    async addMessage(sessionId: string, message: Omit<FirestoreMessage, 'id'>): Promise<string | null> {
        const uid = this.uid;
        if (!uid) return null;
        try {
            const ref = await addDoc(this.messagesCol(uid, sessionId), {
                ...message,
                timestamp: serverTimestamp(),
            });
            // Cập nhật updatedAt và messageCount của session
            await updateDoc(doc(this.firestore, `users/${uid}/chatSessions/${sessionId}`), {
                updatedAt: serverTimestamp(),
            });
            return ref.id;
        } catch (e) {
            console.error('FirestoreChatService.addMessage error:', e);
            return null;
        }
    }

    /** Cập nhật tiêu đề session (tự động từ tin nhắn đầu tiên) */
    async updateSessionTitle(sessionId: string, title: string): Promise<void> {
        const uid = this.uid;
        if (!uid) return;
        try {
            await updateDoc(doc(this.firestore, `users/${uid}/chatSessions/${sessionId}`), { title });
        } catch (e) {
            console.error('FirestoreChatService.updateSessionTitle error:', e);
        }
    }

    /** Lấy tất cả messages của một session (one-time, không realtime) */
    async getMessagesOnce(sessionId: string): Promise<FirestoreMessage[]> {
        const uid = this.uid;
        if (!uid) return [];
        try {
            const q = query(this.messagesCol(uid, sessionId), orderBy('timestamp', 'asc'));
            const snap = await getDocs(q);
            return snap.docs.map(d => ({ id: d.id, ...d.data() } as FirestoreMessage));
        } catch (e) {
            return [];
        }
    }
}
