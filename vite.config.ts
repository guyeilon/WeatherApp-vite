import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import tsconfigPaths from 'vite-tsconfig-paths';
import eslint from 'vite-plugin-eslint';
import svgrPlugin from 'vite-plugin-svgr';
import { VitePluginFonts } from 'vite-plugin-fonts';

export default defineConfig({
  plugins: [
    react(),
    tsconfigPaths(),
    eslint({ failOnError: true }),
    svgrPlugin({
      svgrOptions: {
        configFile: '.svgrrc.json',
      },
    }),
    VitePluginFonts({
      google: {
        families: ['Overpass'],
      },
    }),
  ],
});
