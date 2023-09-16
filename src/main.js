import { createApp } from 'vue'
import App from './App.vue'
import "@/index.css"
import { FontAwesomeIcon} from '@fortawesome/vue-fontawesome';
import { library } from '@fortawesome/fontawesome-svg-core';
import { faSearch,  faAngleDown, faAngleUp  } from '@fortawesome/free-solid-svg-icons';
import router from './router';
import { createPinia } from 'pinia';

library.add(faSearch);
library.add(faAngleDown);
library.add(faAngleUp);

// import "./index.css"

const pinia = createPinia();
createApp(App)
.use(pinia)
.use(router)
.component("font-awesome-icon", FontAwesomeIcon)
.mount('#app');
