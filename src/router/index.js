import Vue from 'vue'
import Router from 'vue-router'

// 懒加载
const index = resolve => require(['view/index/index.vue'], resolve)
const login = resolve => require(['view/login/login.vue'], resolve)

Vue.use(Router)

const router =  new Router({
  routes: [
    {
      path:"/",
      name:"index",
      component:index
    },
    // {
    //   path: '/login',
    //   name: 'login',
    //   component: login
    // }
  ]
})



export default router;
