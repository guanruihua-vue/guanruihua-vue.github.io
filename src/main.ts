import { createApp } from 'vue'
import ElementPlus from 'element-plus'
import Layout from './layout/index.vue'
import { router } from './router'

const app = createApp(Layout)
app.use(router)
app.use(ElementPlus)
app.mount('#app')
