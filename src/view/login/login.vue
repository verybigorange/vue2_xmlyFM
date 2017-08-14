<template>
  <div class="login" @keypress.enter="handleLogin">
      <div class="row" >
        <span>用户名</span>:<el-input v-model="username"  placeholder="请输入用户名"></el-input>
      </div>
      <div class="row">
        <span>密&emsp;码:</span><el-input v-model="password" type="password"  placeholder="请输入密码" ></el-input>
      </div>
      <div class="row" style="text-align:right">
          <router-link :to="{name:'register'}" style="margin-right:2rem;color:#999">没有账号，我要注册</router-link>
      </div>
       <el-button type="primary" style="width:12.5rem" @click="handleLogin">登录</el-button>
  </div>
</template>

<script>

import Vue from "vue";
import md5 from "md5";
import loginhttp from "api/loginhttp.js"

export default {

  data(){
      return{
        username:"",
        password:"",
      }
  },
  computed:{
   
  },
  methods:{
    handleLogin(){
        loginhttp({"username":this.username,"password":this.password})
    }
  }
}
</script>

<style scope>
.login{
  padding-top: 5rem;
  text-align: center;
  font-size: 0.5rem;
}
.row{
  margin-bottom: 1rem;
}
.el-input{
    width:10rem;
    margin-left:1rem;
}
</style>

