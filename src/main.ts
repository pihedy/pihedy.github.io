/** 
 * @author Pihedy
 */

import { createApp } from 'vue';

import router from './router/index';

import App from './components/App.vue';

import './styles/main.scss';

const app = createApp(App);

app.use(router);

app.mount('#app');
