import { defineConfig } from 'vite';
import { resolve } from 'path'
import vueJsx from '@vitejs/plugin-vue-jsx';
import dts from 'vite-plugin-dts'
import { nodeResolve } from '@rollup/plugin-node-resolve';


export default defineConfig({
  plugins: [
    vueJsx(),
    dts({
      outputDir: 'es',
      tsConfigFilePath: './tsconfig.json'
    }),
    dts({
      outputDir:'lib',
      tsConfigFilePath: './tsconfig.json'
    }),
    // nodeResolve()
  ],
  server: {
    host: '127.0.0.1',
    port: 9528,
    open: true
  },
  build: {
    lib: {
      entry: resolve(__dirname, 'src/index.ts'),
      formats: ['es', 'cjs'],
    },
    rollupOptions: {
      // 确保外部化处理那些你不想打包进库的依赖
      external: ['vue', 'pf-icon-svg'],
      input: ['src/index.ts'],
      output: [
        {
          format: 'es',
          //不用打包成.es.js,这里我们想把它打包成.js
          entryFileNames: '[name].js',
          //让打包目录和我们目录对应
          preserveModules: true,
          //配置打包根目录
          dir: 'es',
          preserveModulesRoot: 'src'
        },
        {
          format: 'cjs',
          entryFileNames: '[name].js',
          //让打包目录和我们目录对应
          preserveModules: true,
          //配置打包根目录
          dir: 'lib',
          preserveModulesRoot: 'src'
        }
      ]
    }
  }
});