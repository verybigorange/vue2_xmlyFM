<template>
  <div>
      <br/>
      <br/>
      <input type="texr"  v-focus v-select  v-model="data"/> 
      {{data | upper}}
      {{count}}
      <br/>
      <br/>
      <span>用户名</span>:<el-input v-model="username"  placeholder="请输入用户名"></el-input>
      <br/>
      <br/>
      <span>密&emsp;码:</span><el-input v-model="password" type="password"  placeholder="请输入密码" ></el-input>
      <br/>
      <br/>
       <el-button type="primary" @click="handleLogin">登录</el-button>
  </div>
</template>

<script>

import Vue from "vue";
import md5 from "md5";

export default {

  data(){
      return{
        data:"",
        username:"",
        password:"",
      }
  },
  computed:{
    count(){
        return this.$store.state.index.dataindex;
    }
  },
  methods:{
    handleLogin(){
       this.$store.commit("index/dataIncrement")
    }
  }
}
</script>

<style scope>
.el-input{
    width:200px;
    margin-left:20px;
}
</style>

