import { Injectable, inject, signal, computed, Injector, runInInjectionContext } from '@angular/core';
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
  signInWithCredential,
  getIdToken
} from '@angular/fire/auth';
import { Firestore, doc, setDoc, getDoc, serverTimestamp } from '@angular/fire/firestore';
import { Router } from '@angular/router';
import { firstValueFrom } from 'rxjs';
import { User } from '../models/database.models';
import { ApiService, User as ApiUser } from './api.service';
import { Capacitor } from '@capacitor/core';
import { FirebaseAuthentication } from '@capacitor-firebase/authentication';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private auth = inject(Auth);
  private firestore = inject(Firestore);
  private router = inject(Router);
  private apiService = inject(ApiService);
  private injector = inject(Injector);

  private _currentUser = signal<FirebaseUser | null>(null);
  private _userProfile = signal<User | null>(null);
  private _loading = signal<boolean>(true);

  currentUser = this._currentUser.asReadonly();
  userProfile = this._userProfile.asReadonly();
  loading = this._loading.asReadonly();
  isAuthenticated = computed(() => !!this._currentUser());

  private _initialAuthChecked = false;

  constructor() {
    onAuthStateChanged(this.auth, async (user) => {
      this._currentUser.set(user);
      if (user) {
        await this.loadUserProfile(user.uid);
      } else {
        this._userProfile.set(null);

        // Nếu không phải lần load đầu tiên & không phải guest & đang trong app
        // → user bị sign out (token hết hạn, revoke, sign out từ tab khác)
        if (this._initialAuthChecked) {
          const isGuest = localStorage.getItem('isGuest') === 'true';
          if (!isGuest && localStorage.getItem('isLoggedIn') === 'true') {
            // Clear stale auth state
            localStorage.removeItem('isLoggedIn');
            localStorage.removeItem('hasPersonalized');
            localStorage.removeItem('firebase_email');
            localStorage.removeItem('isFirebaseUser');
            localStorage.removeItem('device_id');
            sessionStorage.clear();
            this.router.navigateByUrl('/auth', { replaceUrl: true });
          }
        }
      }
      this._initialAuthChecked = true;
      this._loading.set(false);
    });

  }

  private async loadUserProfile(uid: string) {
    const userDoc = await getDoc(doc(this.firestore, 'users', uid));
    if (userDoc.exists()) {
      this._userProfile.set(userDoc.data() as User);
    }
  }

  async login(email: string, password: string): Promise<ApiUser | null> {
    // Lưu old device-id trước khi override (dùng để migrate guest data)
    const oldDeviceId = localStorage.getItem('device_id') || '';
    const result = await signInWithEmailAndPassword(this.auth, email, password);
    await this.updateLastLogin(result.user.uid);
    // Lưu Firebase email và sync backend bằng ID Token
    localStorage.setItem('firebase_email', result.user.email || '');
    localStorage.setItem('device_id', result.user.uid); // Override device_id to link with backend user
    // Lấy ID Token và sync với backend
    const idToken = await getIdToken(result.user);
    return firstValueFrom(this.apiService.syncFirebaseUser(idToken, result.user.email || '', result.user.displayName || '', result.user.photoURL || '', oldDeviceId));
  }

  async register(email: string, password: string, displayName: string): Promise<ApiUser | null> {
    // Lưu old device-id trước khi override
    const oldDeviceId = localStorage.getItem('device_id') || '';
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
    return firstValueFrom(this.apiService.syncFirebaseUser(idToken, result.user.email || '', displayName, '', oldDeviceId));
  }

  /** Helper: chạy Firebase SDK call trong injection context (tránh AngularFire zone warning) */
  private runInCtx<T>(fn: () => T): T {
    return runInInjectionContext(this.injector, fn);
  }

  async loginWithGoogle(): Promise<ApiUser | null> {
    const oldDeviceId = localStorage.getItem('device_id') || '';

    let firebaseUser: FirebaseUser;

    if (Capacitor.isNativePlatform()) {
      // Dùng native Google Sign-In (không qua browser redirect)
      const result = await FirebaseAuthentication.signInWithGoogle();
      if (!result.credential?.idToken) throw new Error('Không lấy được Google ID token');

      const credential = GoogleAuthProvider.credential(result.credential.idToken);
      const fbResult = await this.runInCtx(() => signInWithCredential(this.auth, credential));
      firebaseUser = fbResult.user;
    } else {
      // Web: dùng popup bình thường
      const provider = new GoogleAuthProvider();
      const result = await this.runInCtx(() => signInWithPopup(this.auth, provider));
      firebaseUser = result.user;
    }

    const userDoc = await this.runInCtx(() => getDoc(doc(this.firestore, 'users', firebaseUser.uid)));

    if (!userDoc.exists()) {
      const userData: User = {
        uid: firebaseUser.uid,
        email: firebaseUser.email || '',
        displayName: firebaseUser.displayName || 'User',
        photoURL: firebaseUser.photoURL || '',
        preferences: [],
        createdAt: new Date(),
        updatedAt: new Date()
      };
      await this.runInCtx(() => setDoc(doc(this.firestore, 'users', firebaseUser.uid), userData));
    }

    localStorage.setItem('firebase_email', firebaseUser.email || '');
    localStorage.setItem('device_id', firebaseUser.uid);
    const idToken = await this.runInCtx(() => getIdToken(firebaseUser));
    return firstValueFrom(this.apiService.syncFirebaseUser(idToken, firebaseUser.email || '', firebaseUser.displayName || '', firebaseUser.photoURL || '', oldDeviceId));
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

