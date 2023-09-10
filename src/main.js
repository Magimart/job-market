// import './assets/main.css'
import { createApp } from 'vue'
import App from './App.vue'
import "@/index.css"
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome';
import { library } from '@fortawesome/fontawesome-svg-core';
import { faSearch } from '@fortawesome/free-solid-svg-icons';
import router from './router';


library.add(faSearch)

// import "./index.css"
createApp(App)
.use(router)
.component("font-awesome-icon", FontAwesomeIcon)
.mount('#app');
