import path from 'path';
import { defineConfig, loadEnv } from 'vite';

export default defineConfig(({ mode }) => {
    const env = loadEnv(mode, '.', '');
    return {
      define: {
        'process.env.API_KEY': JSON.stringify(env.GEMINI_API_KEY),
        'process.env.GEMINI_API_KEY': JSON.stringify(env.GEMINI_API_KEY)
      },
      resolve: {
        alias: {
          '@': path.resolve(__dirname, '.'),
        }
      },
      // --- START OF CHANGES ---
      preview: {
        host: '0.0.0.0',
        port: 10000,
        // این خط دقیقا مشکل را حل می‌کند
        allowedHosts: ['imagedehe-1.onrender.com']
      }
      // --- END OF CHANGES ---
    };
});
