import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

declare const process: {
  env: {
    VITE_BASE_PATH?: string;
  };
};

// Use relative asset paths so the site works on GitHub Pages project pages,
// user pages, and custom domains without changing the repository name here.
const base = process.env.VITE_BASE_PATH ?? './';

export default defineConfig({
  base,
  plugins: [react()],
});
