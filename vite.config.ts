import { defineConfig, loadEnv } from 'vite';
import react from '@vitejs/plugin-react';
import tailwindcss from '@tailwindcss/vite';
import { cloudflare } from '@cloudflare/vite-plugin';

export default defineConfig(({ mode }) => {
  const env = loadEnv(mode, '.', '');
  const useCloudflare = env.USE_CLOUDFLARE === 'true';

  return {
    base: env.VITE_BASE_PATH || '/',
    plugins: useCloudflare
      ? [react(), tailwindcss(), cloudflare()]
      : [react(), tailwindcss()],
  };
});
