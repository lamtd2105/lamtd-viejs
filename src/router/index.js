import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

const Home = () => import('../views/home/Home.vue')
const ProductList = () => import('../views/products/Products.vue')
const ProductDetail = () => import('../views/products/ProductDetail.vue')

export default new Router({
    mode: 'history',
    scrollBehavior: () => ({ y: 0 }),
    routes: [
        { path: '/', component: Home },
        { name: "product-list", path: '/products', component: ProductList },
        { name: "product-detail", path: '/product/:id', component: ProductDetail },
    ]
})