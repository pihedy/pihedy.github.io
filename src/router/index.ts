/** 
 * @author Pihedy
 */

import { createRouter, createWebHashHistory } from "vue-router";

import routes from "@/router/routes";

import keywords from "@/data/keywords.json";

const router = createRouter({
    history: createWebHashHistory(),
    routes
});

router.afterEach((to) => {
    document.title = [to.meta?.title, 'Pihedy - Edmond Pihe'].filter((item) => item !== undefined).join(" | ");

    let description = document.querySelector("meta[name='description']");

    if (description === null) {
        description = document.createElement("meta");

        description.setAttribute("name", "description");
        document.head.appendChild(description);
    }

    let keywordsElement = document.querySelector("meta[name='keywords']");

    if (keywordsElement === null) {
        keywordsElement = document.createElement("meta");

        keywordsElement.setAttribute("name", "keywords");
        document.head.appendChild(keywordsElement);
    }

    description.setAttribute("content", (to.meta?.description as string ?? ""));
    keywordsElement.setAttribute("content", keywords.join(", "));
});
export default router;
