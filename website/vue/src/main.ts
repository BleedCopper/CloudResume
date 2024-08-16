import { createApp } from 'vue'
import { createPinia } from 'pinia'
import App from './App.vue'
import './assets/tailwind.css'
import './assets/main.css'
import '@fortawesome/fontawesome-free/js/all.js'

const pinia = createPinia()
const app = createApp(App)

app.use(pinia)
app.mount('#app')
