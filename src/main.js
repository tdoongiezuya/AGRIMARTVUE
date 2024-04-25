import { createApp } from 'vue'
import './css/style.css'
import './css/landing.css'
import './css/main.min.css'
import './front.js'

// import { Quasar } from 'quasar'
// import '@quasar/extras/material-icons/material-icons.css'
// import 'quasar/src/css/index.sass'


// myApp.use(Quasar, {
//     plugins: {}, // import Quasar plugins and add here
//   })
import App from './App.vue'


import "bootstrap"

import router from './router'


createApp(App).use(router).mount('#app')

