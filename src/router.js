import Vue from 'vue'
import Router from 'vue-router'
import Home from './views/Home.vue'
import PlaceHolder1 from './views/PlaceHolder1.vue'
import PlaceHolder2 from './views/PlaceHolder2.vue'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'home',
      component: Home
    },
    {
      path: '/placeholder1',
      name: 'placeholder1',
      component: PlaceHolder1
    },
    {
      path: '/placeholder2',
      name: 'placeholder2',
      component: PlaceHolder2
    }
  ]
})
