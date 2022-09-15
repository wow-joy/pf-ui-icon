import { defineConfig } from 'vite';
import vueJsx from '@vitejs/plugin-vue-jsx';


export default defineConfig({
    plugins: [vueJsx()],
    server: {
      host: '127.0.0.1',
      port: 9528,
      open: true,
      watch: ['./src']
    }
});