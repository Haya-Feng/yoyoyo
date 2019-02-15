import Vue from 'vue';
import Router from 'vue-router';
import tuijian from './views/tuijian.vue';
import muying from './views/muying.vue';
import shuma from './views/shuma.vue';
import shiping from './views/shiping.vue';
import xiebaoshipin from './views/xiebaoshipin.vue';
import shopcar from './views/shopcar.vue';

Vue.use(Router);

export default new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [
    {
      path: '/',
      name: 'tuijian',
      component: tuijian,
    },
    {
      path: '/muying',
      name: 'muying',
      // route level code-splitting
      // this generates a separate chunk (about.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import(/* webpackChunkName: "about" */ './views/muying.vue'),
    },
    {
      path: '/shuma',
      name: 'shuma',
      // route level code-splitting
      // this generates a separate chunk (about.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import(/* webpackChunkName: "about" */ './views/shuma.vue'),
    }, 
    {
      path: '/shiping',
      name: 'shiping',
      // route level code-splitting
      // this generates a separate chunk (about.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import(/* webpackChunkName: "about" */ './views/shiping.vue'),
    },
     {
      path: '/xiebaoshipin',
      name: 'xiebaoshipin',
      // route level code-splitting
      // this generates a separate chunk (about.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import(/* webpackChunkName: "about" */ './views/xiebaoshipin.vue'),
    },
    {
      path: '/shopcar',
      name: 'shopcar',
      // route level code-splitting
      // this generates a separate chunk (about.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import(/* webpackChunkName: "about" */ './views/shopcar.vue'),
    },
  ],
});
