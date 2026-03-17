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
  serverTimestamp
} from '@angular/fire/firestore';
import { AuthService } from './auth.service';
import { Trip, TripPlace } from '../models/database.models';

@Injectable({
  providedIn: 'root'
})
export class TripService {
  private firestore = inject(Firestore);
  private authService = inject(AuthService);
  private _trips = signal<Trip[]>([]);
  private _currentTrip = signal<Trip | null>(null);
  private _loading = signal<boolean>(false);

  trips = this._trips.asReadonly();
  currentTrip = this._currentTrip.asReadonly();
  loading = this._loading.asReadonly();

  async loadTrips(): Promise<void> {
    const userId = this.authService.getCurrentUserId();
    if (!userId) return;

    this._loading.set(true);
    try {
      const tripsRef = collection(this.firestore, 'trips');
      const q = query(
        tripsRef, 
        where('userId', '==', userId),
        orderBy('startDate', 'desc')
      );
      const snapshot = await getDocs(q);
      
      const trips = snapshot.docs.map(doc => ({
        id: doc.id,
        ...doc.data()
      } as Trip));
      
      this._trips.set(trips);
    } catch (error) {
      console.error('Error loading trips:', error);
    } finally {
      this._loading.set(false);
    }
  }

  async getTripById(id: string): Promise<Trip | null> {
    const docRef = doc(this.firestore, 'trips', id);
    const docSnap = await getDoc(docRef);
    
    if (docSnap.exists()) {
      const trip = { id: docSnap.id, ...docSnap.data() } as Trip;
      this._currentTrip.set(trip);
      return trip;
    }
    return null;
  }

  async createTrip(trip: Omit<Trip, 'id' | 'userId' | 'createdAt' | 'updatedAt'>): Promise<string> {
    const userId = this.authService.getCurrentUserId();
    if (!userId) throw new Error('Must be logged in');

    const tripsRef = collection(this.firestore, 'trips');
    const newDoc = doc(tripsRef);
    
    await setDoc(newDoc, {
      ...trip,
      userId,
      createdAt: serverTimestamp(),
      updatedAt: serverTimestamp()
    });
    
    await this.loadTrips();
    return newDoc.id;
  }

  async updateTrip(id: string, data: Partial<Trip>): Promise<void> {
    const docRef = doc(this.firestore, 'trips', id);
    await setDoc(docRef, {
      ...data,
      updatedAt: serverTimestamp()
    }, { merge: true });
    
    await this.loadTrips();
  }

  async deleteTrip(id: string): Promise<void> {
    const docRef = doc(this.firestore, 'trips', id);
    await deleteDoc(docRef);
    
    await this.loadTrips();
  }

  async addPlaceToTrip(tripId: string, place: Omit<TripPlace, 'order'>): Promise<void> {
    const trip = await this.getTripById(tripId);
    if (!trip) throw new Error('Trip not found');

    const newOrder = trip.places.length;
    const updatedPlaces = [...trip.places, { ...place, order: newOrder }];
    
    await this.updateTrip(tripId, { places: updatedPlaces });
  }

  async removePlaceFromTrip(tripId: string, placeId: string): Promise<void> {
    const trip = await this.getTripById(tripId);
    if (!trip) throw new Error('Trip not found');

    const updatedPlaces = trip.places.filter(p => p.placeId !== placeId);
    
    await this.updateTrip(tripId, { places: updatedPlaces });
  }

  async reorderPlaces(tripId: string, places: TripPlace[]): Promise<void> {
    await this.updateTrip(tripId, { places });
  }

  getUpcomingTrips(): Trip[] {
    const now = new Date();
    return this._trips().filter(trip => {
      const startDate = trip.startDate instanceof Date ? trip.startDate : trip.startDate.toDate();
      return startDate > now && trip.status === 'upcoming';
    });
  }

  getPastTrips(): Trip[] {
    return this._trips().filter(trip => trip.status === 'completed');
  }
}
