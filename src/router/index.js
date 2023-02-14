import Vue from 'vue'
import Router from 'vue-router'
import ProductsPage from '../pages/ProductsPage';

Vue.use(Router)


const router = new Router({
    mode: 'history',
    base: '/',
    routes: [
        {
            path: '/',
            name: 'home',
            component: ProductsPage
        },
        {
            path: '/product/:id',
            name: 'product',
            component: ProductsPage
        },
    ]
});

export default router;