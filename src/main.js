import { createApp } from 'vue'
import './css/style.css'
import './css/landing.css'
import './css/main.min.css'
import './front.js'

// import 'https://ajax.googleapis.com/ajax/libs/jquery/3.6.4/jquery.min.js'
// import 'https://cdn.jsdelivr.net/npm/bootstrap@5.0.0/dist/js/bootstrap.bundle.min.js'
// import './css/lib/easing/easing.min.js'
// import './css/lib/waypoints/waypoints.min.js'
// import './css/lib/owlcarousel/owl.carousel.min.js'
// Import Bootstrap and BootstrapVue CSS files (order is important)


import App from './App.vue'


import "bootstrap"
import router from './router'


createApp(App).use(router).mount('#app')

