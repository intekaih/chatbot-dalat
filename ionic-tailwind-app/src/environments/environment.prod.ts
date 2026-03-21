export const environment = {
  production: true,
  apiBaseUrl: (window as any).__API_BASE_URL__ || window.location.origin,
  firebase: {
    apiKey: 'AIzaSyDen9SILPp9WXux0ABu7NUyMcFgnpCOmyw',
    authDomain: 'dalat-chatbot.firebaseapp.com',
    projectId: 'dalat-chatbot',
    storageBucket: 'dalat-chatbot.firebasestorage.app',
    messagingSenderId: '336020606793',
    appId: '1:336020606793:web:742c344687829d8bd81498',
    measurementId: 'G-X3JZGP9LHQ',
  },
};

