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
  serverTimestamp
} from '@angular/fire/firestore';
import { AuthService } from './auth.service';
import { Favorite, Place } from '../models/database.models';

@Injectable({
  providedIn: 'root'
})
export class FavoriteService {
  private firestore = inject(Firestore);
  private authService = inject(AuthService);
  private _favorites = signal<Favorite[]>([]);
  private _favoritePlaces = signal<Place[]>([]);
  private _loading = signal<boolean>(false);

  favorites = this._favorites.asReadonly();
  favoritePlaces = this._favoritePlaces.asReadonly();
  loading = this._loading.asReadonly();

  async loadFavorites(): Promise<void> {
    const userId = this.authService.getCurrentUserId();
    if (!userId) return;

    this._loading.set(true);
    try {
      const favoritesRef = collection(this.firestore, 'favorites', userId, 'places');
      const snapshot = await getDocs(favoritesRef);
      
      const favorites = snapshot.docs.map(doc => ({
        id: doc.id,
        ...doc.data()
      } as Favorite));
      
      this._favorites.set(favorites);
    } catch (error) {
      console.error('Error loading favorites:', error);
    } finally {
      this._loading.set(false);
    }
  }

  async isFavorite(placeId: string): Promise<boolean> {
    const userId = this.authService.getCurrentUserId();
    if (!userId) return false;

    const docRef = doc(this.firestore, 'favorites', userId, 'places', placeId);
    const docSnap = await getDoc(docRef);
    
    return docSnap.exists();
  }

  async addFavorite(placeId: string): Promise<void> {
    const userId = this.authService.getCurrentUserId();
    if (!userId) throw new Error('Must be logged in');

    const docRef = doc(this.firestore, 'favorites', userId, 'places', placeId);
    await setDoc(docRef, {
      placeId,
      savedAt: serverTimestamp()
    });
    
    await this.loadFavorites();
  }

  async removeFavorite(placeId: string): Promise<void> {
    const userId = this.authService.getCurrentUserId();
    if (!userId) throw new Error('Must be logged in');

    const docRef = doc(this.firestore, 'favorites', userId, 'places', placeId);
    await deleteDoc(docRef);
    
    await this.loadFavorites();
  }

  async toggleFavorite(placeId: string): Promise<boolean> {
    const isFav = await this.isFavorite(placeId);
    
    if (isFav) {
      await this.removeFavorite(placeId);
      return false;
    } else {
      await this.addFavorite(placeId);
      return true;
    }
  }

  getFavoriteIds(): string[] {
    return this._favorites().map(f => f.placeId);
  }
}
