import { Injectable, inject } from '@angular/core';
import {
  Firestore,
  collection,
  doc,
  addDoc,
  updateDoc,
  deleteDoc,
  query,
  orderBy,
  serverTimestamp,
  collectionData,
  docData
} from '@angular/fire/firestore';
import { Observable, map } from 'rxjs';
import { ChatMessage, Conversation, FavoritePlace } from '../models';
import { AuthService } from './auth.service';

@Injectable({
  providedIn: 'root'
})
export class FirestoreService {
  private firestore = inject(Firestore);
  private authService = inject(AuthService);

  private get uid(): string {
    return this.authService.currentUser?.uid || '';
  }

  getConversations(): Observable<Conversation[]> {
    const ref = collection(this.firestore, `users/${this.uid}/conversations`);
    const q = query(ref, orderBy('lastMessageAt', 'desc'));
    return collectionData(q, { idField: 'id' }).pipe(
      map(docs => docs.map(d => ({
        ...d,
        createdAt: d['createdAt']?.toDate?.() || new Date(),
        lastMessageAt: d['lastMessageAt']?.toDate?.() || new Date()
      })) as Conversation[])
    );
  }

  async createConversation(title: string): Promise<string> {
    const ref = collection(this.firestore, `users/${this.uid}/conversations`);
    const docRef = await addDoc(ref, {
      title,
      uid: this.uid,
      createdAt: serverTimestamp(),
      lastMessageAt: serverTimestamp()
    });
    return docRef.id;
  }

  async updateConversationTimestamp(conversationId: string): Promise<void> {
    const ref = doc(this.firestore, `users/${this.uid}/conversations/${conversationId}`);
    await updateDoc(ref, { lastMessageAt: serverTimestamp() });
  }

  getMessages(conversationId: string): Observable<ChatMessage[]> {
    const ref = collection(this.firestore, `users/${this.uid}/conversations/${conversationId}/messages`);
    const q = query(ref, orderBy('createdAt', 'asc'));
    return collectionData(q, { idField: 'id' }).pipe(
      map(docs => docs.map(d => ({
        ...d,
        createdAt: d['createdAt']?.toDate?.() || new Date()
      })) as ChatMessage[])
    );
  }

  async addMessage(conversationId: string, message: Partial<ChatMessage>): Promise<string> {
    const ref = collection(this.firestore, `users/${this.uid}/conversations/${conversationId}/messages`);
    const docRef = await addDoc(ref, {
      ...message,
      uid: this.uid,
      conversationId,
      createdAt: serverTimestamp()
    });
    await this.updateConversationTimestamp(conversationId);
    return docRef.id;
  }

  getFavorites(): Observable<FavoritePlace[]> {
    const ref = collection(this.firestore, `users/${this.uid}/favorites`);
    const q = query(ref, orderBy('createdAt', 'desc'));
    return collectionData(q, { idField: 'id' }).pipe(
      map(docs => docs.map(d => ({
        ...d,
        createdAt: d['createdAt']?.toDate?.() || new Date()
      })) as FavoritePlace[])
    );
  }

  async addFavorite(place: Partial<FavoritePlace>): Promise<string> {
    const ref = collection(this.firestore, `users/${this.uid}/favorites`);
    const docRef = await addDoc(ref, {
      ...place,
      uid: this.uid,
      createdAt: serverTimestamp()
    });
    return docRef.id;
  }

  async removeFavorite(favoriteId: string): Promise<void> {
    const ref = doc(this.firestore, `users/${this.uid}/favorites/${favoriteId}`);
    await deleteDoc(ref);
  }
}
