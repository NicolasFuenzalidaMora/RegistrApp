import { CapacitorConfig } from '@capacitor/cli';

const config: CapacitorConfig = {
  appId: 'com.nicoseba.app',
  appName: 'RegistrApp',
  webDir: 'www',
  server: {
    androidScheme: 'https'
  }
};

export default config;
