import Vue from 'vue'
import Router from 'vue-router'
import Home from './views/Home.vue'
import Login from './views/Login.vue'
// this router is for redirect pages

// present questions
import MultipleChoice from './views/present/PresentMultipleChoice.vue'
import Mask from './views/present/PresentMask.vue'
import Mosaic from './views/present/PresentMosaic.vue'
import Music from './views/present/PresentMusic.vue'
import ShortAnswer from './views/present/PresentShortAnswer.vue'
import TrueFalse from './views/present/PresentTrueFalse.vue'

// insert questions
import insertMultipleChoice from './views/insert/InsertMultipleChoice'
import insertMask from './views/insert/InsertMask'
import insertMosaic from './views/insert/InsertMosaic'
import insertMusic from './views/insert/InsertMusic'
import insertShortAnswer from './views/insert/InsertShortAnswer'
import insertTrueFalse from './views/insert/InsertTrueFalse'

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
    },
    {
      path: '/login',
      name: 'login',
      component: Login
    },
    {
      path: '/insert/multipleChoice',
      name: 'insertMultipleChoice',
      component: insertMultipleChoice
    },
    {
      path: '/insert/mask',
      name: 'insertMask',
      component: insertMask
    },
    {
      path: '/insert/Mosaic',
      name: 'insertMosaic',
      component: insertMosaic
    },
    {
      path: '/insert/Music',
      name: 'insertMusic',
      component: insertMusic
    },
    {
      path: '/insert/shortAnswer',
      name: 'insertShortAnswer',
      component: insertShortAnswer
    },
    {
      path: '/insert/trueFalse',
      name: 'insertTrueFalse',
      component: insertTrueFalse
    }
  ]
})
