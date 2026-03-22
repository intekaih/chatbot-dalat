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
  signInWithPopup,
  signInWithRedirect,
  getRedirectResult,
  getIdToken
} from '@angular/fire/auth';
import { Firestore, doc, setDoc, getDoc, serverTimestamp } from '@angular/fire/firestore';
import { Router } from '@angular/router';
import { firstValueFrom } from 'rxjs';
import { User } from '../models/database.models';
import { ApiService, User as ApiUser } from './api.service';
import { Capacitor } from '@capacitor/core';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private auth = inject(Auth);
  private firestore = inject(Firestore);
  private router = inject(Router);
  private apiService = inject(ApiService);

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

    if (Capacitor.isNativePlatform()) {
      getRedirectResult(this.auth).then(async (result) => {
        if (result?.user) {
          const user = result.user;
          const userDoc = await getDoc(doc(this.firestore, 'users', user.uid));
          if (!userDoc.exists()) {
            await setDoc(doc(this.firestore, 'users', user.uid), {
              uid: user.uid,
              email: user.email || '',
              displayName: user.displayName || 'User',
              photoURL: user.photoURL || '',
              preferences: [],
              createdAt: new Date(),
              updatedAt: new Date()
            });
          }
          localStorage.setItem('firebase_email', user.email || '');
          localStorage.setItem('device_id', user.uid);
          const idToken = await getIdToken(user);
          await firstValueFrom(this.apiService.syncFirebaseUser(idToken, user.email || '', user.displayName || '', user.photoURL || ''));
        }
      }).catch(() => {});
    }
  }

  private async loadUserProfile(uid: string) {
    const userDoc = await getDoc(doc(this.firestore, 'users', uid));
    if (userDoc.exists()) {
      this._userProfile.set(userDoc.data() as User);
    }
  }

  async login(email: string, password: string): Promise<ApiUser | null> {
    const result = await signInWithEmailAndPassword(this.auth, email, password);
    await this.updateLastLogin(result.user.uid);
    // Lưu Firebase email và sync backend bằng ID Token
    localStorage.setItem('firebase_email', result.user.email || '');
    localStorage.setItem('device_id', result.user.uid); // Override device_id to link with backend user
    // Lấy ID Token và sync với backend
    const idToken = await getIdToken(result.user);
    return firstValueFrom(this.apiService.syncFirebaseUser(idToken, result.user.email || '', result.user.displayName || '', result.user.photoURL || ''));
  }

  async register(email: string, password: string, displayName: string): Promise<ApiUser | null> {
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

    // Lưu Firebase email và sync với backend bằng ID Token
    localStorage.setItem('firebase_email', result.user.email || '');
    localStorage.setItem('device_id', result.user.uid); // Override device_id
    // Lấy ID Token và sync với backend
    const idToken = await getIdToken(result.user);
    return firstValueFrom(this.apiService.syncFirebaseUser(idToken, result.user.email || '', displayName, ''));
  }

  async loginWithGoogle(): Promise<ApiUser | null> {
    const provider = new GoogleAuthProvider();

    if (Capacitor.isNativePlatform()) {
      await signInWithRedirect(this.auth, provider);
      return null;
    }

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

    localStorage.setItem('firebase_email', result.user.email || '');
    localStorage.setItem('device_id', result.user.uid);
    const idToken = await getIdToken(result.user);
    return firstValueFrom(this.apiService.syncFirebaseUser(idToken, result.user.email || '', result.user.displayName || '', result.user.photoURL || ''));
  }

  async logout(): Promise<void> {
    await signOut(this.auth);
    this._userProfile.set(null);

    // ── Auth & app state ─────────────────────────────────────────
    localStorage.removeItem('isLoggedIn');
    localStorage.removeItem('hasSeenOnboarding');
    localStorage.removeItem('hasPersonalized');
    localStorage.removeItem('firebase_email');
    localStorage.removeItem('isFirebaseUser');
    localStorage.removeItem('isGuest');
    localStorage.removeItem('device_id');

    // ── Profile / preferences của user (dùng bởi ApiService & AI) ─
    localStorage.removeItem('userName');
    localStorage.removeItem('userAvatar');
    localStorage.removeItem('userPreferences');
    localStorage.removeItem('userTravelStyles');
    localStorage.removeItem('userBudget');

    // ── Xóa sessionStorage: lịch sử chat, session ID ────────────
    sessionStorage.clear();

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
