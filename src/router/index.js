import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/about',
    name: 'About',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/About.vue')
  },
  {
    path: '/write',
    name: 'Write',
    component: () => import(/* webpackChunkName: "about" */ '../views/Write.vue')
  },
  {
    path: '/edit',
    name: 'Edit',
    component: () => import(/* webpackChunkName: "about" */ '../views/Edit.vue')
  },
  {
    path: '/unstuck',
    name: 'Unstuck',
    component: () => import(/* webpackChunkName: "about" */ '../views/Unstuck.vue')
  },
  {
    path: '/contact',
    name: 'Contact',
    component: () => import(/* webpackChunkName: "about" */ '../views/Contact.vue')
  },
  {
    path: '/disclaimer',
    name: 'Disclaimer',
    component: () => import(/* webpackChunkName: "about" */ '../views/footer/Disclaimer.vue')
  },
  {
    path: '/privacy',
    name: 'Privacy Policy',
    component: () => import(/* webpackChunkName: "about" */ '../views/footer/Privacy.vue')
  },
  {
    path: '/terms',
    name: 'Terms of Use',
    component: () => import(/* webpackChunkName: "about" */ '../views/footer/Terms.vue')
  }
]

const router = new VueRouter({
  routes,
  scrollBehavior () {
    return { x: 0, y: 0 }
  }

})

export default router
