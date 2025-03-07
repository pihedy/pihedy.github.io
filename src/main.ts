/** 
 * @author Pihedy
 */

import { createApp } from 'vue';

import App from './components/App.vue';

import PrimeVue from 'primevue/config';
import Aura from '@primeuix/themes/aura';

import router from './router/index';

import 'primeflex/primeflex.min.css';
import './styles/main.scss';

const app = createApp(App);

app.use(router);
app.use(PrimeVue, {
    theme: {
        preset: Aura,
        options: {
            darkModeSelector: '.dark'
        }
    }
});

app.mount('#app');
