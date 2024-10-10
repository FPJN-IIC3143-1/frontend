import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react-swc'; 
import { vitePlugin as remix } from '@remix-run/dev';
import dotenv from 'dotenv';

dotenv.config();

export default defineConfig({
  plugins: [
    react(), 
    remix({
      future: {
        v3_fetcherPersist: true,
        v3_relativeSplatPath: true,
        v3_throwAbortReason: true,
      },
    }),
  ],
  define: {
    'process.env.VITE_AUTH0_DOMAIN': JSON.stringify(process.env.VITE_AUTH0_DOMAIN),
    'process.env.VITE_AUTH0_CLIENT_ID': JSON.stringify(process.env.VITE_AUTH0_CLIENT_ID),
  },
  server: {
    watch: {
      usePolling: true,
      interval: 300,
    },
    hmr: {
      overlay: true,
    },
    ssr: {
      noExternal: [
        '@remix-run/react', 
        '@remix-run/node', 
        '@auth0/auth0-react'
      ],
    }
  },
});