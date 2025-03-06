/** 
 * @author Pihedy
 */

import { defineConfig } from 'vite';
import { PrimeVueResolver } from '@primevue/auto-import-resolver';

import vue from '@vitejs/plugin-vue';
import path from 'path';
import Components from 'unplugin-vue-components/vite';

export default defineConfig({
    plugins: [
        vue(),
        /* Components({
            dts: path.resolve(__dirname, 'src/components.d.ts'),
            resolvers: [
                PrimeVueResolver()
            ]
        }) */
    ],
    base: '/',
    resolve: {
        alias: {
            '@': path.resolve(__dirname, 'src'),
        },
    },
});
