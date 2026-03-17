import { Injectable, inject, signal } from '@angular/core';
import { 
  Firestore, 
  collection, 
  doc, 
  getDocs, 
  getDoc, 
  setDoc, 
  deleteDoc, 
  query, 
  where, 
  orderBy, 
  serverTimestamp,
  addDoc,
  updateDoc
} from '@angular/fire/firestore';
import { AuthService } from './auth.service';
import { ChatSession, Message } from '../models/database.models';

@Injectable({
  providedIn: 'root'
})
export class ChatService {
  private firestore = inject(Firestore);
  private authService = inject(AuthService);
  private _sessions = signal<ChatSession[]>([]);
  private _currentSession = signal<ChatSession | null>(null);
  private _loading = signal<boolean>(false);

  sessions = this._sessions.asReadonly();
  currentSession = this._currentSession.asReadonly();
  loading = this._loading.asReadonly();

  async loadSessions(): Promise<void> {
    const userId = this.authService.getCurrentUserId();
    if (!userId) return;

    this._loading.set(true);
    try {
      const sessionsRef = collection(this.firestore, 'chat_sessions');
      const q = query(
        sessionsRef, 
        where('userId', '==', userId),
        orderBy('updatedAt', 'desc')
      );
      const snapshot = await getDocs(q);
      
      const sessions = snapshot.docs.map(doc => ({
        id: doc.id,
        ...doc.data()
      } as ChatSession));
      
      this._sessions.set(sessions);
    } catch (error) {
      console.error('Error loading chat sessions:', error);
    } finally {
      this._loading.set(false);
    }
  }

  async getSessionById(id: string): Promise<ChatSession | null> {
    const docRef = doc(this.firestore, 'chat_sessions', id);
    const docSnap = await getDoc(docRef);
    
    if (docSnap.exists()) {
      const session = { id: docSnap.id, ...docSnap.data() } as ChatSession;
      this._currentSession.set(session);
      return session;
    }
    return null;
  }

  async createSession(title: string = 'New Chat', model: string = 'gpt4o'): Promise<string> {
    const userId = this.authService.getCurrentUserId();
    if (!userId) throw new Error('Must be logged in');

    const sessionsRef = collection(this.firestore, 'chat_sessions');
    const newDoc = doc(sessionsRef);
    
    const initialMessage: Message = {
      id: crypto.randomUUID(),
      role: 'assistant',
      content: 'Xin chào! Tôi là trợ lý du lịch Đà Lạt. Bạn cần tôi giúp gì hôm nay?',
      timestamp: new Date()
    };

    await setDoc(newDoc, {
      userId,
      title,
      model,
      messages: [initialMessage],
      createdAt: serverTimestamp(),
      updatedAt: serverTimestamp()
    });
    
    await this.loadSessions();
    return newDoc.id;
  }

  async addMessage(sessionId: string, message: Omit<Message, 'id' | 'timestamp'>): Promise<void> {
    const messagesRef = collection(this.firestore, 'chat_sessions', sessionId, 'messages');
    const sessionRef = doc(this.firestore, 'chat_sessions', sessionId);
    
    const newMessage: Message = {
      ...message,
      id: crypto.randomUUID(),
      timestamp: new Date()
    };

    await addDoc(messagesRef, newMessage);

    const sessionSnap = await getDoc(sessionRef);
    if (sessionSnap.exists()) {
      const sessionData = sessionSnap.data() as ChatSession;
      const messages = [...(sessionData.messages || []), newMessage];
      
      await updateDoc(sessionRef, {
        messages,
        updatedAt: serverTimestamp()
      });
    }

    await this.getSessionById(sessionId);
  }

  async updateSessionTitle(sessionId: string, title: string): Promise<void> {
    const docRef = doc(this.firestore, 'chat_sessions', sessionId);
    await setDoc(docRef, {
      title,
      updatedAt: serverTimestamp()
    }, { merge: true });
    
    await this.loadSessions();
  }

  async deleteSession(sessionId: string): Promise<void> {
    const docRef = doc(this.firestore, 'chat_sessions', sessionId);
    await deleteDoc(docRef);
    
    await this.loadSessions();
  }

  async clearAllSessions(): Promise<void> {
    const sessions = this._sessions();
    for (const session of sessions) {
      await this.deleteSession(session.id);
    }
  }

  getRecentSessions(limit: number = 5): ChatSession[] {
    return this._sessions().slice(0, limit);
  }
}
