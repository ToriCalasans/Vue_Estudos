import {createRouter, createWebHistory} from 'vue-router';
import Home from '../views/Home.vue';

const router = createRouter({
    history: createWebHistory(),
    routes: [
        {
            path: '/',
            component: Home
        },
        {
            path: '/Page1',
            component:() => import('../views/Page1.vue')
        }
    ]
})

export default router;