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
      // این قسمت را اضافه کنید
      server: {
        host: true // این برای اجرای dev روی 0.0.0.0 است
      },
      preview: {
        host: true, // این باعث می شود preview هم روی 0.0.0.0 اجرا شود
        port: 4173  // پورتی که vite preview استفاده می کند
      }
    };
});
