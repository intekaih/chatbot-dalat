import { initializeApp, FirebaseApp } from 'firebase/app';
import { getAuth } from 'firebase/auth';
import { getFirestore, Firestore } from 'firebase/firestore';
import { getStorage, FirebaseStorage } from 'firebase/storage';
import { environment } from '../environments/environment';

// Firebase config giờ được đọc từ environment files
// Dev:  environment.ts
// Prod: environment.prod.ts (Angular CLI tự swap khi ng build --configuration=production)
export const firebaseConfig = environment.firebase;

// Singleton Firebase app
let app: FirebaseApp;

export const provideFirebase = () => {
  if (!app) {
    app = initializeApp(firebaseConfig);
  }
  return {
    app,
    auth: getAuth(app),
    firestore: getFirestore(app),
    storage: getStorage(app)
  };
};
