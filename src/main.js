import { createApp } from 'vue'
import './css/style.css'
import './css/landing.css'
import './css/main.min.css'
import './front.js'
import store from './store/store';



import App from './App.vue'


import "bootstrap"

import router from './router'

createApp(App).use(router).use(store).mount('#app')

