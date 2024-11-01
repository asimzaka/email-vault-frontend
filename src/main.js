import './assets/style.css';

import { createApp } from 'vue';
import { createPinia } from 'pinia';
import App from './App.vue';
import router from './router'; // Import your router instance
import DefaultLayout from './layouts/DefaultLayout.vue';
import VueTheMask from 'vue-the-mask';

const app = createApp(App);
app.component('DefaultLayout', DefaultLayout);
app.use(router); // Use router here instead of routerKey
app.use(createPinia());
app.use(VueTheMask);
app.mount('#app');
