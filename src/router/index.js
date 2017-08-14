import Vue from 'vue'
import Router from 'vue-router'
import store from 'src/vuex/store.js'

//引入工具方法
import {getCookie} from "api/utils"

//引入白名单
import whitelist from "src/router/whitelist.js"

// 懒加载
const index = resolve => require(['view/index/index.vue'], resolve)
const login = resolve => require(['view/login/login.vue'], resolve)
const register = resolve => require(['view/login/register.vue'], resolve)
const collect = resolve => require(['view/collect/collect.vue'], resolve)
const community = resolve => require(['view/community/community.vue'], resolve)
const person = resolve => require(['view/person/person.vue'], resolve)

Vue.use(Router)

const router =  new Router({
  routes: [
     {
      path:"/",
      redirect:"/index"
    },
    {
      path:"/index",
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
    },
    {
      path: '/collect',
      name: 'collect',
      component: collect
    },
    {
      path: '/community',
      name: 'community',
      component: community
    },
    {
      path: '/person',
      name: 'person',
      component: person
    },
    

    
  ]
})


router.beforeEach((to,from,next)=>{

    //loading
    store.commit("SHOWLODING");

    //登录拦截，判断token和白名单
    if(whitelist.indexOf(to.fullPath)!== -1 || store.state.token){
       next()
    }else{
      next({
          path: '/login',
          query: {redirect: to.fullPath}
      })
    }
})
router.afterEach(()=>{
    store.commit("HIDELODING");
})

export default router;
