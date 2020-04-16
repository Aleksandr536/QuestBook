import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Home',
    meta: {layout: 'MainLayout'},
    component: () => import('../views/Home.vue')
  },
  {
    path: '/info',
    name: 'info',
    meta: {layout: 'InfoLayout'},
    component: () => import('../views/InfoHome.vue')
  },
  {
    path: '/guests',
    name: 'guests',
    meta: {layout: 'CheckinLayout'},
    component: () => import('../views/Home.vue')
  },
  {
    path: '/checkIn',
    name: 'checkIn',
    meta: {layout: 'QuestsLayout'},
    component: () => import('../views/Home.vue')
  },
  {
    path: '/checkOut',
    name: 'checkOut',
    meta: { layout: 'CheckoutLayout' },
    component: () => import('../views/Home.vue')
  },
  {
    path: '/writeReview',
    name: 'writeReview',
    meta: { layout: 'InfoLayout' },
    component: () => import('../views/WriteComment.vue')
  },
  {
    path: '/bookReview',
    name: 'bookReview',
    meta: { layout: 'MainLayout' },
    component: () => import('../views/Comment.vue')
  },
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
