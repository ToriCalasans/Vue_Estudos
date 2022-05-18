import { createApp } from 'vue'
import App from './App.vue'
import router from './router/index'
import './assets/style/main.css'
import { FontAwesomeIcon} from '@fortawesome/vue-fontawesome'
import { library } from '@fortawesome/fontawesome-svg-core'
import { fas } from '@fortawesome/free-solid-svg-icons'
//import {  fab } from '@fortawesome/free-regular-svg-icons'

library.add(fas)
createApp(App)
.component('font-awesome-icon', FontAwesomeIcon)
.use(router)
.mount('#app') 


