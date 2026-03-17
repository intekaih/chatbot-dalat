import { Injectable, inject, signal, computed } from '@angular/core';
import { 
  Auth, 
  signInWithEmailAndPassword, 
  createUserWithEmailAndPassword, 
  signOut, 
  onAuthStateChanged,
  updateProfile,
  User as FirebaseUser,
  GoogleAuthProvider,
  signInWithPopup
} from '@angular/fire/auth';
import { Firestore, doc, setDoc, getDoc, serverTimestamp } from '@angular/fire/firestore';
import { Router } from '@angular/router';
import { User } from '../models/database.models';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private auth = inject(Auth);
  private firestore = inject(Firestore);
  private router = inject(Router);

  private _currentUser = signal<FirebaseUser | null>(null);
  private _userProfile = signal<User | null>(null);
  private _loading = signal<boolean>(true);

  currentUser = this._currentUser.asReadonly();
  userProfile = this._userProfile.asReadonly();
  loading = this._loading.asReadonly();
  isAuthenticated = computed(() => !!this._currentUser());

  constructor() {
    onAuthStateChanged(this.auth, async (user) => {
      this._currentUser.set(user);
      if (user) {
        await this.loadUserProfile(user.uid);
      } else {
        this._userProfile.set(null);
      }
      this._loading.set(false);
    });
  }

  private async loadUserProfile(uid: string) {
    const userDoc = await getDoc(doc(this.firestore, 'users', uid));
    if (userDoc.exists()) {
      this._userProfile.set(userDoc.data() as User);
    }
  }

  async login(email: string, password: string): Promise<void> {
    const result = await signInWithEmailAndPassword(this.auth, email, password);
    await this.updateLastLogin(result.user.uid);
  }

  async register(email: string, password: string, displayName: string): Promise<void> {
    const result = await createUserWithEmailAndPassword(this.auth, email, password);
    
    const userData: User = {
      uid: result.user.uid,
      email: result.user.email || email,
      displayName,
      photoURL: '',
      preferences: [],
      createdAt: new Date(),
      updatedAt: new Date()
    };

    await setDoc(doc(this.firestore, 'users', result.user.uid), userData);
    
    if (result.user) {
      await updateProfile(result.user, { displayName });
    }
  }

  async loginWithGoogle(): Promise<void> {
    const provider = new GoogleAuthProvider();
    const result = await signInWithPopup(this.auth, provider);
    
    const userDoc = await getDoc(doc(this.firestore, 'users', result.user.uid));
    
    if (!userDoc.exists()) {
      const userData: User = {
        uid: result.user.uid,
        email: result.user.email || '',
        displayName: result.user.displayName || 'User',
        photoURL: result.user.photoURL || '',
        preferences: [],
        createdAt: new Date(),
        updatedAt: new Date()
      };
      await setDoc(doc(this.firestore, 'users', result.user.uid), userData);
    }
  }

  async logout(): Promise<void> {
    await signOut(this.auth);
    this._userProfile.set(null);
    localStorage.removeItem('isLoggedIn');
    localStorage.removeItem('hasSeenOnboarding');
    localStorage.removeItem('hasPersonalized');
    this.router.navigateByUrl('/auth', { replaceUrl: true });
  }

  private async updateLastLogin(uid: string): Promise<void> {
    await setDoc(doc(this.firestore, 'users', uid), {
      lastLoginAt: serverTimestamp()
    }, { merge: true });
  }

  async updateUserProfile(data: Partial<User>): Promise<void> {
    const uid = this._currentUser()?.uid;
    if (!uid) return;

    await setDoc(doc(this.firestore, 'users', uid), {
      ...data,
      updatedAt: serverTimestamp()
    }, { merge: true });

    await this.loadUserProfile(uid);
  }

  getCurrentUserId(): string | null {
    return this._currentUser()?.uid || null;
  }
}
