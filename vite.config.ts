import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

declare const process: {
  env: {
    VITE_BASE_PATH?: string;
  };
};

// GitHub Pages のプロジェクトページでは "/リポジトリ名/" を指定します。
// ユーザーサイト yghay.github.io で公開する場合は "/" に変更してください。
const base = process.env.VITE_BASE_PATH ?? '/Saikoro0145/';

export default defineConfig({
  base,
  plugins: [react()],
});
