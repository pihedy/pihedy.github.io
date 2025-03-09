/** 
 * @author Pihedy
 */

import { createRouter, createWebHashHistory } from "vue-router";

import Home from "@/views/Home.vue";
import Blog from "@/views/Blog.vue";

export default createRouter({
    history: createWebHashHistory(),
    routes: [
        {path: "/", component: Home},
        {path: "/blog", component: Blog},
    ]
});