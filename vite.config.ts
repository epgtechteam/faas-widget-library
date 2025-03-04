import { defineConfig } from 'vite'
import { dirname, resolve } from 'node:path'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'
import { fileURLToPath } from 'node:url'
import dtsPlugin from 'vite-plugin-dts'

const __dirname = dirname(fileURLToPath(import.meta.url))

// https://vite.dev/config/
export default defineConfig({
  plugins: [react(), tailwindcss(), dtsPlugin({ tsconfigPath: './tsconfig.app.json', rollupTypes: true })],
  resolve: {
    alias: {
      // Map @ to /src
      "@": resolve(__dirname, 'src'),
    }
  },
  // Library build configuration: https://vite.dev/guide/build.html#library-mode
  build: {
    lib: {
      entry: resolve(__dirname, 'src/lib/entry.ts'),
      name: 'FaasWidgetLibrary',
      fileName: 'faas-widget-library',
    },
    rollupOptions: {
      // Externalize deps that shouldn't be bundled with the library
      external: ['react', 'react-dom'],
      output: {
        // Provide global variables to use in the UMD build
        // for externalized deps
        globals: {
          react: 'React',
          'react-dom': 'ReactDOM',
        },
      },
    }
  }
})
