import './styles/app.scss'
import { createApp } from 'vue'
import pinia from './stores/persistedstate'

import App from './App.vue'
import router from './router'

import ElementPlus from 'element-plus'
import 'element-plus/dist/index.css'
import * as ElementPlusIconsVue from '@element-plus/icons-vue'

const app = createApp(App)
for (const [key, component] of Object.entries(ElementPlusIconsVue)) {
    app.component(key, component)
  }

app.use(pinia)
app.use(router)
app.use(ElementPlus)

// console.log('main', import.meta.env.VITE_APP_BASE_API);


app.mount('#app')
