// vite.config.js
import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  plugins: [react()],
  base: "/portafolio/",
  esbuild: {
    jsxFactory: 'React.createElement',
    jsxFragment: 'React.Fragment',
  },
  // Añade la siguiente configuración
  optimizeDeps: {
    esbuildOptions: {
      jsx: 'automatic',
      loader: {
        '.js': 'jsx',
        '.ts': 'tsx',
      },
    },
  },
  build: {
    target: 'esnext',
    outDir: 'dist',
    // Añade la siguiente configuración
    rollupOptions: {
      plugins: [
        {
          name: 'configure-swc',
          buildStart() {
            require('@swc/core').transformSync = require('@swc/core').transformSync || ((code, options) => {
              if (options.jsc) {
                options.jsc.transform = options.jsc.transform || {};
                options.jsc.transform.react = options.jsc.transform.react || {};
                options.jsc.transform.react.throwIfNamespace = false; // Aquí deshabilitamos el throw
              }
              return require('@swc/core').transform(code, options);
            });
          }
        }
      ]
    }
  }
});
