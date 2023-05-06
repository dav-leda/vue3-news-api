import { createApp } from 'vue'
import App from './App.vue'

import './assets/css/main.css'

import lazyLoad from './directives/lazyLoad'

createApp(App)
  .directive('lazy', lazyLoad)
  .mount('#app')
