import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import cookieView from '../views/cookieView.vue'
import toolView from '../views/toolView.vue'
import coffeeView from '../views/coffeeView.vue'
import selectionView from '../views/selectionView.vue'
import giftView from '../views/giftView.vue'
import productView from '../views/productView.vue'
import loginView from '../views/loginView.vue'
import logoutView from '../views/logoutView.vue'
import adminView from '../views/adminView.vue'
import registerView from '../views/registerView.vue'
import forgetPassword from '../views/forgetPassword.vue'
import shopCartView from '../views/shopCartView.vue'






const routes = [
  {
    path: '/',
    name: 'home',
    component: HomeView
  },
  {
    path: '/cookie',
    name: 'cookie',
    component: cookieView
  },
  {
    path: '/tool',
    name: 'tool',
    component: toolView
  },
  {
    path: '/coffee',
    name: 'coffee',
    component: coffeeView
  },
  {
    path: '/selection',
    name: 'selection',
    component: selectionView
  },
  {
    path: '/gift',
    name: 'gift',
    component: giftView
  },
  {
    path: '/product',
    name: 'product',
    component: productView
  },
  {
    path: '/login',
    name: 'login',
    component: loginView
  },
  {
    path: '/logout',
    name: 'logout',
    component: logoutView
  }, {
    path: '/register',
    name: 'register',
    component: registerView
  },
  {
    path: '/admin',
    name: 'admin',
    component: adminView
  },
  {
    path: '/forgetpassword',
    name: 'forgetPassword',
    component: forgetPassword
  },
  {
    path: '/shopcart',
    name: 'shopCart',
    component: shopCartView
  },



]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
