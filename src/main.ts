/** 
 * @author Pihedy
 */

import { createApp } from 'vue';

import VueGtag from "vue-gtag-next";

import router from './router/index';

import App from './components/App.vue';

import './styles/main.scss';

const app = createApp(App);

app.use(router);

app.use(VueGtag, {
    property: {id: 'G-QNW20E0JM9'}
});

app.mount('#app');
