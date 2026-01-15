export interface FavoritePlace {
  id: string;
  name: string;
  description?: string;
  address?: string;
  lat?: number;
  lng?: number;
  imageUrl?: string;
  createdAt: Date;
  uid: string;
}
