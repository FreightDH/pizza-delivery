import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  base: '/pizza-delivery',
  plugins: [react()],
  resolve: {
    alias: {
      '@': '/src',
      '@/app': '/src/app',
      '@/pages': '/src/pages',
      '@/widgets': '/src/widgets',
      '@/features': '/src/features',
      '@/entities': '/src/entities',
      '@/shared': '/src/shared',
    },
  },
});
