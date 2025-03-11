/** 
 * @author Pihedy
 */

import { RouteRecordRaw } from "vue-router";

import Home from "@/views/Home.vue";
import Blog from "@/views/Blog.vue";
import Projects from "@/views/Projects.vue";

const routes: RouteRecordRaw[] = [
    {
        path: "/", 
        component: Home, 
        meta: {
            title: "Home",
            description: "Full-stack web developer specializing in TypeScript, Vue.js, PHP (Laravel, Symfony), and cloud platforms like AWS and Digital Ocean. Experienced in CI/CD automation, Chrome extension development, and embedded systems with Arduino and Raspberry Pi. Explore my open-source projects and development blog."
        }
    },
    {
        path: "/blog", 
        component: Blog,
        meta: {
            title: "Blog",
            description: "Read my latest articles on web development, software engineering, and technology trends."
        }
    },
    {
        path: "/projects", 
        component: Projects,
        meta: {
            title: "Projects", 
            description: "Explore my open-source projects, Chrome extensions, and GitHub contributions."
        }
    },
];

export default routes;
