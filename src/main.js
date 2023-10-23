/**
 * main.js
 *
 * Bootstraps Vuetify and other plugins then mounts the App`
 */

// Components
// import { Vue } from 'vue'
import App from './App.vue'
import store from './store/index'
import axios from 'axios'
import VueAxios from 'vue-axios'
import Notifications from '@kyvg/vue3-notification'
import VueSweetalert2  from 'vue-sweetalert2';
import 'sweetalert2/dist/sweetalert2.min.css';
// Composables
import { createApp } from 'vue'

// Plugins
import { registerPlugins } from '@/plugins'

const app = createApp(App).use(store)
app.use(VueAxios, axios)
app.use(Notifications)
app.use(VueSweetalert2);
app.provide('axios', app.config.globalProperties.axios)
registerPlugins(app)

app.mount('#app')

// new Vue({
//     el: '#app',
//     store,
//     render: h => h(App)
//   })
