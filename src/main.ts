import { createApp } from 'vue'
import ElementPlus from 'element-plus'
import 'element-plus/dist/index.css'
import Layout from './layout/index.vue'
import './style.css'
import { router } from './router'

const app = createApp(Layout)
app.use(router)
app.use(ElementPlus)
app.mount('#app')
