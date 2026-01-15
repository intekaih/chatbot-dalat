import { Injectable, inject } from '@angular/core';
import {
  Auth,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  signOut,
  user,
  User
} from '@angular/fire/auth';
import { Firestore, doc, setDoc, serverTimestamp } from '@angular/fire/firestore';
import { Observable } from 'rxjs';
import { UserProfile } from '../models';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private auth = inject(Auth);
  private firestore = inject(Firestore);

  currentUser$: Observable<User | null> = user(this.auth);

  get currentUser(): User | null {
    return this.auth.currentUser;
  }

  async register(email: string, password: string, displayName?: string): Promise<User> {
    const credential = await createUserWithEmailAndPassword(this.auth, email, password);
    const userProfile: Partial<UserProfile> = {
      uid: credential.user.uid,
      email: credential.user.email || email,
      displayName: displayName || email.split('@')[0],
      createdAt: new Date()
    };
    await setDoc(doc(this.firestore, `users/${credential.user.uid}`), {
      ...userProfile,
      createdAt: serverTimestamp()
    });
    return credential.user;
  }

  async login(email: string, password: string): Promise<User> {
    const credential = await signInWithEmailAndPassword(this.auth, email, password);
    return credential.user;
  }

  async logout(): Promise<void> {
    await signOut(this.auth);
  }
}
