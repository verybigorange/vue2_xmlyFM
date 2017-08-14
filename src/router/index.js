import Vue from 'vue'
import Router from 'vue-router'
import store from 'src/vuex/store.js'

// 懒加载
const index = resolve => require(['view/index/index.vue'], resolve)
const login = resolve => require(['view/login/login.vue'], resolve)
const register = resolve => require(['view/login/register.vue'], resolve)

Vue.use(Router)

const router =  new Router({
  routes: [
    {
      path:"/",
      name:"index",
      component:index,
      meta:{keepAlive:true}
    },
    {
      path: '/login',
      name: 'login',
      component: login
    },
    {
      path: '/register',
      name: 'register',
      component: register
    }
    
  ]
})

//loading
router.beforeEach((to,from,next)=>{
    store.commit("SHOWLODING");
    next()
})
router.afterEach(()=>{
    store.commit("HIDELODING");
})

export default router;
