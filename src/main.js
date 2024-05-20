
import { createApp } from 'vue'
import './css/style.css'
import './css/landing.css'
import './css/main.min.css'
import './front.js'
import App from './App.vue'


import "bootstrap"

import router from './router'
import store from './store/store';



createApp(App).use(router).use(store).mount('#app')

