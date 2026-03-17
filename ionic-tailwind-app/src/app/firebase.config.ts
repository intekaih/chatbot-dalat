import { initializeApp, FirebaseApp } from 'firebase/app';
import { getAuth } from 'firebase/auth';
import { getFirestore, Firestore } from 'firebase/firestore';
import { getStorage, FirebaseStorage } from 'firebase/storage';

export const firebaseConfig = {
  apiKey: "AIzaSyDen9SILPp9WXux0ABu7NUyMcFgnpCOmyw",
  authDomain: "dalat-chatbot.firebaseapp.com",
  projectId: "dalat-chatbot",
  storageBucket: "dalat-chatbot.firebasestorage.app",
  messagingSenderId: "336020606793",
  appId: "1:336020606793:web:742c344687829d8bd81498",
  measurementId: "G-X3JZGP9LHQ"
};

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
