import { defineConfig } from 'vite'
import { dirname, resolve } from 'node:path'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'
import { fileURLToPath } from 'node:url'
import dtsPlugin from 'vite-plugin-dts'

const __dirname = dirname(fileURLToPath(import.meta.url))
// https://vite.dev/config/
export default defineConfig({
  plugins: [react(), tailwindcss(), dtsPlugin({ tsconfigPath: './tsconfig.app.json', rollupTypes: true})],
  // Library build configuration: https://vite.dev/guide/build.html#library-mode
  build: {
    lib: {
      entry: resolve(__dirname, 'lib/index.ts'),
      name: 'FaasWidgetLibrary',
      cssFileName: "index",
      fileName: (format) => `index.${format}.js`,
      formats: ['es']
    },
    rollupOptions: {
      makeAbsoluteExternalsRelative: true,
      // Externalize deps that shouldn't be bundled with the library
      external: ['react', 'react-dom'],
      output: {
        intro: async (chunk) => {
          // Inject CSS import for the UMD build
          if (chunk.fileName === 'index.es.js') {
            return 'import "./index.css";'
          }
          return '';
        },
        // Provide global variables to use in the UMD build
        // for externalized deps
        globals: {
          react: 'React',
          'react-dom': 'ReactDOM',
        },
      },
    },
    emptyOutDir: true, // Clear out the dist directory before building
    sourcemap: true, // Enable sourcemaps for debugging
  },
})
