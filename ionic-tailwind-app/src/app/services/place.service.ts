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
  limit,
  serverTimestamp,
  Timestamp
} from '@angular/fire/firestore';
import { Place } from '../models/database.models';

@Injectable({
  providedIn: 'root'
})
export class PlaceService {
  private firestore = inject(Firestore);
  private _places = signal<Place[]>([]);
  private _loading = signal<boolean>(false);

  places = this._places.asReadonly();
  loading = this._loading.asReadonly();

  async loadPlaces(): Promise<void> {
    this._loading.set(true);
    try {
      const placesRef = collection(this.firestore, 'places');
      const q = query(placesRef, orderBy('rating', 'desc'));
      const snapshot = await getDocs(q);
      
      const places = snapshot.docs.map(doc => ({
        id: doc.id,
        ...doc.data()
      } as Place));
      
      this._places.set(places);
    } catch (error) {
      console.error('Error loading places:', error);
    } finally {
      this._loading.set(false);
    }
  }

  async getPlaceById(id: string): Promise<Place | null> {
    const docRef = doc(this.firestore, 'places', id);
    const docSnap = await getDoc(docRef);
    
    if (docSnap.exists()) {
      return { id: docSnap.id, ...docSnap.data() } as Place;
    }
    return null;
  }

  async getPlacesByCategory(category: string): Promise<Place[]> {
    const placesRef = collection(this.firestore, 'places');
    const q = query(placesRef, where('category', '==', category));
    const snapshot = await getDocs(q);
    
    return snapshot.docs.map(doc => ({
      id: doc.id,
      ...doc.data()
    } as Place));
  }

  async searchPlaces(searchTerm: string): Promise<Place[]> {
    const places = this._places();
    const term = searchTerm.toLowerCase();
    
    return places.filter(place => 
      place.name.toLowerCase().includes(term) ||
      place.shortDescription.toLowerCase().includes(term) ||
      place.tags.some(tag => tag.toLowerCase().includes(term))
    );
  }

  async getFeaturedPlaces(limitCount: number = 6): Promise<Place[]> {
    const placesRef = collection(this.firestore, 'places');
    const q = query(placesRef, orderBy('rating', 'desc'), limit(limitCount));
    const snapshot = await getDocs(q);
    
    return snapshot.docs.map(doc => ({
      id: doc.id,
      ...doc.data()
    } as Place));
  }

  async createPlace(place: Omit<Place, 'id' | 'createdAt' | 'updatedAt'>): Promise<string> {
    const placesRef = collection(this.firestore, 'places');
    const newDoc = doc(placesRef);
    
    await setDoc(newDoc, {
      ...place,
      createdAt: serverTimestamp(),
      updatedAt: serverTimestamp()
    });
    
    return newDoc.id;
  }

  async updatePlace(id: string, data: Partial<Place>): Promise<void> {
    const docRef = doc(this.firestore, 'places', id);
    await setDoc(docRef, {
      ...data,
      updatedAt: serverTimestamp()
    }, { merge: true });
  }
}
