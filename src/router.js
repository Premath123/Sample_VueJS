import Vue from 'vue';
import Router from 'vue-router';
import Home from './views/Home.vue';

Vue.use(Router);

const router = new Router({
    mode: 'history',
    base: process.env.BASE_URL,
    routes: [
        {
            path: '/',
            name: 'home',
            component: Home
        },
        {
            path: '/about',
            name: 'about',
            component: () => import('./views/About.vue'),
            meta: {
                authRequired: true
            }
        },
        {
            path: '/categories',
            name: 'categories',
            component: () => import('./views/Categories.vue')
        },
        {
            path: '/sign-in',
            name: 'signin',
            component: () => import('./views/Signin.vue')
        },
        {
            path: '/join',
            name: 'join',
            component: () => import('./views/Join.vue')
        },
        {
            path: '/travel',
            name: 'travel',
            component: () => import('./views/Travel.vue')
        },
        {
            path: '/motivational',
            name: 'motivational',
            component: () => import('./views/Motivational.vue')
        },
        {
            path: '/nutrition',
            name: 'nutrition',
            component: () => import('./views/Nutrition.vue')
        }
    ]
});


export default router;
