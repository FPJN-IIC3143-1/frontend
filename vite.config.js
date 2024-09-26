import { vitePlugin as remix } from "@remix-run/dev";
import { defineConfig } from "vite";

export default defineConfig({
  plugins: [
    remix({
      future: {
        v3_fetcherPersist: true,
        v3_relativeSplatPath: true,
        v3_throwAbortReason: true,
      },
    }),
  ],
  server: {
    watch: {
      usePolling: true,   // Activa polling para detectar cambios en entornos donde el file watching puede fallar
      interval: 300,      // Intervalo de 300 ms (puede ajustarse dependiendo del rendimiento)
    },
    hmr: {
      overlay: true,      // Asegura que Vite use el overlay para errores de HMR
    },
  },
});
