// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import store from "src/vuex/store"

// 引入饿了么UI组件库
import ElementUI from 'element-ui'
import 'element-ui/lib/theme-default/index.css'

// 引入全局的指令和过滤器
import directives from "src/directives.js"
import filters from "src/filters.js"

//初始化css样式
import "normalize.css"

import 'js/rem.js'
import FastClick from 'fastclick'

if ('addEventListener' in document) {
    document.addEventListener('DOMContentLoaded', function() {
        FastClick.attach(document.body);
    }, false);
}

Vue.config.productionTip = false

Vue.use(ElementUI);

/* eslint-disable no-new */
new Vue({
  el: '#app',
  store,
  router,
  template: '<App/>',
  components: { App }
})
