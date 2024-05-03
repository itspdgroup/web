import { createRouter, createWebHistory } from "vue-router";
import Home from './../views/home/index.vue';
import About from './../views/about/index.vue';

const router = createRouter({
    history: createWebHistory(),
    routes: [
        {
            path: '/',
            name: 'Home',
            component: Home
        },
        {
            path: '/about',
            name: 'About',
            component: About
        },
    ]
})

export default router