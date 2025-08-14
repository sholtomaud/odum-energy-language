import { defineConfig } from 'vite';
import { resolve } from 'path';
import componentManifest from './vite-plugin-component-manifest';

export default defineConfig(({ command }) => ({
  // Note: The build process is handled entirely by Vite.
  // The `npm run build` command invokes `vite build`, which automatically
  // compiles TypeScript to JavaScript, bundles all modules, and places the
  // output in the `dist/` directory.
  //
  // The entry point for the build is `index.html`. Vite analyzes the
  // `<script>` tags in `index.html` and follows the import chains to
  // determine which files to include in the bundle. `src/main.ts` is the
  // main TypeScript entry point and is included in `index.html`.
  base: command === 'build' ? '/odum-energy-language/' : '/',
  plugins: [componentManifest()],
  build: {
    outDir: 'dist',
    assetsDir: 'assets',
    emptyOutDir: true,
    target: 'esnext',
    modulePreload: false,
    rollupOptions: {
      input: {
        main: './index.html',
      },
      output: {
        entryFileNames: 'assets/[name].[hash].js',
        chunkFileNames: 'assets/[name].[hash].js',
        assetFileNames: 'assets/[name].[hash][extname]',
      },
    },
  },
  server: {
    port: 3000,
    strictPort: true,
    open: false,
  },
  preview: {
    port: 4000,
    strictPort: true,
    open: true,
  },
  resolve: {
    alias: {
      '@': resolve(__dirname, './src'),
    },
  },
}));
