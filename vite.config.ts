import { fileURLToPath, URL } from 'node:url'

import { defineConfig, loadEnv } from 'vite'
import vue from '@vitejs/plugin-vue'
import vueJsx from '@vitejs/plugin-vue-jsx'

import AutoImport from 'unplugin-auto-import/vite'
import Components from 'unplugin-vue-components/vite'
import { ElementPlusResolver } from 'unplugin-vue-components/resolvers'



export default defineConfig(({ mode }) => {
  // 根据当前工作目录中的 `mode` 加载 .env 文件
  // 设置第三个参数为 '' 来加载所有环境变量，而不管是否有 `VITE_` 前缀。
  const env = loadEnv(mode, process.cwd(), '')
  return {
    build: {
      /**打包输出文件夹 */
      outDir: 'dist',
      /**打包输出的静态资源文件夹 */
      assetsDir: 'assets'
    },
    plugins: [
      // ...
      AutoImport({
        resolvers: [ElementPlusResolver()],
      }),
      Components({
        resolvers: [ElementPlusResolver()],
      }),
      vue(), vueJsx()
    ],
    server: {
      /**启动时默认打开 */
      open: true,
      /**端口号 */
      port: 9999,
      /**如果在同一个局域网下，别的电脑也可以通过0.0.0.0进行访问 */
      host: '0.0.0.0',
      proxy: {
        /**配置跨域 */
        [env.VITE_APP_BASE_API]: {
          /**代理路径 */
          target: env.VITE_APP_BASE_URL,
          /**是否开启跨域地理 */
          changeOrigin: true,
          /**路径重写 */
          // rewrite: (path) => path.replace(/^\/api/, '')
          rewrite: (path) => path.replace(new RegExp('^' + env.VITE_APP_BASE_API), '')
        }
      }
    },
    resolve: {
      alias: {
        '@': fileURLToPath(new URL('./src', import.meta.url))
      }
    }
  }
})