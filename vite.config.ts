import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

import path from 'path';
// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    react(),
    
  ],
  build: {
    lib: {
      //entry: path.resolve(__dirname, 'src/components/index.ts'), // Entry point for your library
      entry: path.resolve(__dirname, 'src/index.ts'),
      name: 'hgcComponentLibrary',
      formats: ['es', 'cjs','umd'],
      fileName: (format) => `hgc-component-library.${format}.js`,
    },
    rollupOptions: {
      // Make sure to externalize deps that shouldn't be bundled into your library
      external: ['react', 'react-dom'],
      output: {
        // Provide global variables to use in the UMD build for externalized deps
        globals: {
          react: 'React',
          'react-dom': 'ReactDOM',
        },
      },
    },
  },
  
})


