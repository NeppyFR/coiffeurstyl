import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  // IMPORTANT: Replace 'coiffeurstyl' with your exact repository name if it differs
  base: "/coiffeurstyl/",
});
