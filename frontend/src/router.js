import Vue from 'vue'
import Router from 'vue-router'
import Home from './views/Home.vue'
import Login from './views/Login.vue'
// this router is for redirect pages

// present questions
import PresentMultipleChoice from './views/present/PresentMultipleChoice.vue'
import PresentMask from './views/present/PresentMask.vue'
import PresentMosaic from './views/present/PresentMosaic.vue'
import PresentMusic from './views/present/PresentMusic.vue'
import PresentShortAnswer from './views/present/PresentShortAnswer.vue'
import PresentTrueFalse from './views/present/PresentTrueFalse.vue'
import PresentHome from './views/present/PresentHome.vue'

// insert questions
import insertMultipleChoice from './views/insert/InsertMultipleChoice'
import insertMask from './views/insert/InsertMask'
import insertMosaic from './views/insert/InsertMosaic'
import insertMusic from './views/insert/InsertMusic'
import insertShortAnswer from './views/insert/InsertShortAnswer'
import insertTrueFalse from './views/insert/InsertTrueFalse'
import insertHome from './views/insert/InsertHome.vue'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'home',
      component: Home
    },
    {
      path: '/present/home',
      name: 'presentHome',
      component: PresentHome
    },
    {
      path: '/insert/home',
      name: 'insertHome',
      component: insertHome
    },
    {
      path: '/present/multipleChoice',
      name: 'multipleChoice',
      component: PresentMultipleChoice
    },
    {
      path: '/present/mask',
      name: 'mask',
      component: PresentMask
    },
    {
      path: '/present/Mosaic',
      name: 'mosaic',
      component: PresentMosaic
    },
    {
      path: '/present/Music',
      name: 'music',
      component: PresentMusic
    },
    {
      path: '/present/shortAnswer',
      name: 'shortAnswer',
      component: PresentShortAnswer
    },
    {
      path: '/present/trueFalse',
      name: 'trueFalse',
      component: PresentTrueFalse
    },
    {
      path: '/present/login',
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
