import {createApp} from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import ElementPlus from 'element-plus'
import 'element-plus/lib/theme-chalk/index.css';
import axios from './http'
import './assets/css/icon.css'

const app = createApp(App)

app.config.globalProperties.$axios = axios;

app.use(ElementPlus)
app.use(router)
app.use(store)
app.mount('#app')