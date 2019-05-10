import Vue from 'vue'
import Router from 'vue-router'
import Home from './views/Home.vue'
import MultipleChoice from './views/MultipleChoice.vue'
import Mask from './views/Mask.vue'
import Mosaic from './views/Mosaic.vue'
import Music from './views/Music.vue'
import ShortAnswer from './views/ShortAnswer.vue'
import TrueFalse from './views/TrueFalse.vue'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'home',
      component: Home
    },
    {
      path: '/multipleChoice',
      name: 'multipleChoice',
      component: MultipleChoice
    },
    {
      path: '/mask',
      name: 'mask',
      component: Mask
    },
    {
      path: '/Mosaic',
      name: 'mosaic',
      component: Mosaic
    },
    {
      path: '/Music',
      name: 'music',
      component: Music
    },
    {
      path: '/shortAnswer',
      name: 'shortAnswer',
      component: ShortAnswer
    },
    {
      path: '/trueFalse',
      name: 'trueFalse',
      component: TrueFalse
    }
  ]
})
