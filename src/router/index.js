import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import LeagueView from '../views/LeagueView.vue'
import LiveGameDetails from '../views/LiveGameDetails.vue'


Vue.use(VueRouter)
  const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/league/:id',
    name: 'League',
    component: LeagueView,
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
