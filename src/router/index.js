import Vue from 'vue'
import VueRouter from 'vue-router'
// import Home from '../views/Home.vue'
import Main from '../views/Main.vue'
// import MakeAppointmentsConfirmation from '../components/make-appointments/MakeAppointmentsConfirmation.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Main',
    component: Main
  },
  {
    path: '/make-appointments',
    name: 'make-appointments',
    component: () => import('../views/MakeAppointments.vue')
  },
  // {
  //   path: '/confirm',
  //   name: 'confirm',
  //   // route level code-splitting
  //   // this generates a separate chunk (about.[hash].js) for this route
  //   // which is lazy-loaded when the route is visited.
  //   component: () => import(/* webpackChunkName: "about" */ '../components/make-appointments/MakeAppointmentsConfirmation.vue')
  // }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
