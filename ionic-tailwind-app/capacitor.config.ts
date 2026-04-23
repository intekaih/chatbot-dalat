import type { CapacitorConfig } from '@capacitor/cli';

const config: CapacitorConfig = {
  appId: 'vn.dalat.chatbot',
  appName: 'ionic-tailwind-app',
  webDir: 'www',
  plugins: {
    FirebaseAuthentication: {
      skipNativeAuth: false,
      providers: ["google.com"],
      googleWebClientId: "336020606793-6piuu3mahuihat57jjjvkt6alp5tvg8c.apps.googleusercontent.com"
    }
  }
};
export default config;
