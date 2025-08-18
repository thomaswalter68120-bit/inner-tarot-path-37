import { CapacitorConfig } from '@capacitor/cli';

const config: CapacitorConfig = {
  appId: 'app.lovable.edad9dc1f5284e24a42da1711d44cb3e',
  appName: 'The Marseille Tarot',
  webDir: 'dist',
  server: {
    url: 'https://edad9dc1-f528-4e24-a42d-a1711d44cb3e.lovableproject.com?forceHideBadge=true',
    cleartext: true
  },
  plugins: {
    Share: {
      dialogTitle: 'Share your tarot reading',
      subject: 'My Tarot Reading'
    }
  }
};

export default config;