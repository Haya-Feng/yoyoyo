import Vue from 'vue'
import Router from 'vue-router'
import Home from './views/Home.vue'
import info from './views/info.vue'
import login from './views/login.vue'
import user from './views/user.vue'
import list from './views/list.vue'
import add from './views/add.vue'


Vue.use(Router)

export default new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [
    {
      path: '/',
      name: 'login',
      component: login
    },
    {
      path: '/home',
      name: 'home',
      component: Home,
      
      children: [
        {
          path: 'user',
         name: 'user',
         component: user
        },
         {
          path: 'list',
         name: 'list',
         component: list
        }
      ]},
      //   {
      // path: '/list',
      // name: 'list',
      // component: list
      //   },
      //    {
      // path: '/user',
      // name: 'user',
      // component: user
      //   },
    {
      path: '/info',
      name: 'info',
      component: info
    },
    {
      path: '/add',
      name: 'add',
      component: add
    },
    // {
    //   path: '/login',
    //   name: 'login',
    //   component: login
    // },
    // {
    //   path: '/about',
    //   name: 'about',
    //   component: () => import(/* webpackChunkName: "about" */ './views/About.vue')
    // }
  ]
})
