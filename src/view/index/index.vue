<template>
  <div class="main" >
    <!-- <div @click="handleClick">{{count+count2}}</div>
    <p @click="clickFn">点击执行一个async方法&emsp;&emsp;{{asyncData}}</p>
    
    <router-link :to="{name:'login'}">to login</router-link> -->
  </div>
</template>

<script>
// import {mapState} from "vuex"
// import {mapMutations} from "vuex"

// //返回一个promise对象
// function p(){
//   return new Promise(function(resolve,reject){
//         console.log("开始执行异步代码")
//         setTimeout(()=>{
//             resolve("这是异步返回的数据");
//         },2000)
//   })
// }


// export default {
//   name: 'hello',
//   data () {
//     return {
//         asyncData:""
//     }
//   },
//   computed:{
//    ...mapState(["count","count2"])
//   },
//   methods:{
//    ...mapMutations(["increment"]),
//     handleClick(){
//        this.increment(); //调用的时候可以传参数
//        this.$store.dispatch("increment");
//     },
//     async clickFn(){
//         console.log("准备开始执行一个2秒的异步函数")
//         this.asyncData = await  p()
//         console.log("异步代码执行完成")
//     }
//   }
// }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
/* h1, h2 {
  font-weight: normal;
}

ul {
  list-style-type: none;
  padding: 0;
}

li {
  display: inline-block;
  margin: 0 10px;
}

a {
  color: #42b983;
} */
</style>
