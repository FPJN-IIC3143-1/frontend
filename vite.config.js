import { vitePlugin as remix } from "@remix-run/dev";
import { defineConfig } from "vite";
import react from '@vitejs/plugin-react';
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
      usePolling: true,   // Activa polling para detectar cambios en entornos donde el file watching puede fallar
      interval: 300,      // Intervalo de 300 ms (puede ajustarse dependiendo del rendimiento)
    },
    hmr: {
      overlay: true,      // Asegura que Vite use el overlay para errores de HMR
    },
    ssr: {
      noExternal: [
        '@remix-run/react', '@remix-run/node', '@auth0/auth0-react' 
      ],  
    }
  },
});
