// ⚠️ Các giá trị __PLACEHOLDER__ sẽ được GitHub Actions thay thế khi build
// Xem .github/workflows/build-deploy.yml bước "Inject environment secrets"
export const environment = {
  production: true,
  apiBaseUrl: (window as any).__API_BASE_URL__ || window.location.origin,
  firebase: {
    apiKey: '__FIREBASE_API_KEY__',
    authDomain: '__FIREBASE_AUTH_DOMAIN__',
    projectId: '__FIREBASE_PROJECT_ID__',
    storageBucket: '__FIREBASE_STORAGE_BUCKET__',
    messagingSenderId: '__FIREBASE_MESSAGING_SENDER_ID__',
    appId: '__FIREBASE_APP_ID__',
    measurementId: '__FIREBASE_MEASUREMENT_ID__',
  },
};

