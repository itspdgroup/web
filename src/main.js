import { createApp } from 'vue'
import App from './App.vue'
// import './registerServiceWorker'
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap';
import '@fortawesome/fontawesome-free/css/all.css';
// import Navbarapp from './components/Navbar.vue';
import Navbarapp from './components/Navigasi.vue';


import router from "./router/router";

const app = createApp(App);
app.use(router);
app.component('Navbarapp', Navbarapp);


app.mount('#app');

