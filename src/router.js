import Vue from "vue"
import VueRouter from "vue-router"

import Home from "./components/home.vue"
import Works from "./components/works.vue"
import Skills from "./components/skills.vue"

Vue.use(VueRouter);

const router = new VueRouter({
    routes: [
        {path: "/", component: Home},
        {path: "/works", component: Works},
        {path: "/skills", component: Skills}
    ]
});

export default router