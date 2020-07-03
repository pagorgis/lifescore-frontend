import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import Standings from '../views/Standings.vue'
import LiveGameDetails from '../views/LiveGameDetails.vue'


Vue.use(VueRouter)
  const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/standings/:id',
    name: 'Standings',
    component: Standings,
  },
  {
    path: '/livegame/:id',
    name: 'LiveGameDetails',
    component: LiveGameDetails,
  }
]

const router = new VueRouter({
  routes
})

export default router
