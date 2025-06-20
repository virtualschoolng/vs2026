import { defineConfig, loadEnv } from 'vite';
import react from '@vitejs/plugin-react';

// https://vitejs.dev/config/
export default defineConfig(({ command, mode }) => {
  // Load env file based on `mode` in the current directory.
  // Set the third parameter to '' to load all env regardless of the `VITE_` prefix.
  const env = loadEnv(mode, process.cwd(), '');
  
  const isProduction = mode === 'production';
  
  return {
    base: isProduction ? '/' : '/',
    plugins: [react()],
    define: {
      'process.env': env,
      'import.meta.env.MODE': JSON.stringify(mode),
    },
    server: {
      port: 3000,
      host: true,
      strictPort: true,
      hmr: {
        protocol: 'ws',
        host: 'localhost',
      },
      proxy: {
        '/api': {
          target: env.VITE_API_URL || 'http://localhost:5000',
          changeOrigin: true,
          secure: false,
        },
      },
    },
    build: {
      outDir: 'dist',
      assetsDir: 'assets',
      sourcemap: true,
      emptyOutDir: true,
      rollupOptions: {
        output: {
          entryFileNames: 'assets/[name].[hash].js',
          chunkFileNames: 'assets/[name].[hash].js',
          assetFileNames: 'assets/[name].[hash][extname]',
        },
      },
      commonjsOptions: {
        transformMixedEsModules: true,
      },
    },
  };
});
