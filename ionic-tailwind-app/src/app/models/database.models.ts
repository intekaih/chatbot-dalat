import { Timestamp } from 'firebase/firestore';

export interface User {
  uid: string;
  email: string;
  displayName: string;
  photoURL: string;
  preferences: string[];
  createdAt: Timestamp | Date;
  updatedAt: Timestamp | Date;
}

export interface Place {
  id: string;
  name: string;
  slug: string;
  category: string;
  imageUrl: string;
  images: string[];
  rating: number;
  reviewCount: number;
  shortDescription: string;
  fullDescription: string;
  address: string;
  phoneNumber: string;
  openingHours: string;
  priceRange: string;
  depositRequired: string;
  tags: string[];
  latitude: number;
  longitude: number;
  createdAt: Timestamp | Date;
  updatedAt: Timestamp | Date;
}

export interface Favorite {
  id: string;
  userId: string;
  placeId: string;
  savedAt: Timestamp | Date;
}

export interface TripPlace {
  placeId: string;
  name: string;
  imageUrl: string;
  order: number;
  notes?: string;
}

export interface Trip {
  id: string;
  userId: string;
  name: string;
  description: string;
  startDate: Timestamp | Date;
  endDate: Timestamp | Date;
  status: 'upcoming' | 'ongoing' | 'completed';
  places: TripPlace[];
  createdAt: Timestamp | Date;
  updatedAt: Timestamp | Date;
}

export interface Message {
  id: string;
  role: 'user' | 'assistant';
  content: string;
  timestamp: Timestamp | Date;
  placeIds?: string[];
}

export interface ChatSession {
  id: string;
  userId: string;
  title: string;
  model: string;
  messages: Message[];
  createdAt: Timestamp | Date;
  updatedAt: Timestamp | Date;
}

export interface Review {
  id: string;
  placeId: string;
  author: string;
  authorAvatar?: string;
  rating: number;
  content: string;
  date: string;
  helpfulCount: number;
  isHelpful?: boolean;
  createdAt: Timestamp | Date;
}
