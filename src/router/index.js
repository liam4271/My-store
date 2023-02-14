import Vue from 'vue'
import Router from 'vue-router'
import ProductsPage from '../pages/ProductsPage';
import ProductDetailPage from '../pages/ProductDetailPage';

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
            component: ProductDetailPage,
            props: true
        },
    ]
});

export default router;