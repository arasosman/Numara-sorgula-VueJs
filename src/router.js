import Vue from 'vue'
import Router from 'vue-router'
import Home from './views/Home.vue'
import Detail from "./views/Detail";
import NotFound from "./views/NotFound";

Vue.use(Router);

export default new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [
    {
      path: '/',
      name: 'home',
      component: Home
    },{
    path:'/numara/:number',
      name: 'detay',
      component: Detail
    },{
      path: '*',
      component: NotFound
    }
  ]
});
