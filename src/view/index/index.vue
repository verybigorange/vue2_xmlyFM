<template>
  <div class="main" >
      <div class="block">
         <title-line><span class="iconfont">&#xe603;</span>推荐</title-line>
         <div class="content">
             <audio-item :audioData = "item" v-for="(item,index) in pagedata.slice(0,3)" :key="index"></audio-item>
         </div>
      </div>
       <div class="block">
         <title-line><span class="iconfont">&#xe629;</span>头条</title-line>
         <div class="content">
             <audio-item :audioData = "item" v-for="(item,index) in pagedata.slice(3,6)" :key="index"></audio-item>
         </div>
      </div>
        <div class="block">
         <title-line><span class="iconfont">&#xe600;</span>有声书</title-line>
         <div class="content">
             <audio-item :audioData = "item" v-for="(item,index) in pagedata.slice(6,9)" :key="index"></audio-item>
         </div>
      </div>
      <div class="block">
         <title-line><span class="iconfont">&#xe66c;</span>脱口秀</title-line>
         <div class="content">
             <audio-item :audioData = "item" v-for="(item,index) in pagedata.slice(9,12)" :key="index"></audio-item>
         </div>
      </div>
      <div class="block">
         <title-line><span class="iconfont">&#xe613;</span>娱乐</title-line>
         <div class="content">
             <audio-item :audioData = "item" v-for="(item,index) in pagedata.slice(12,15)" :key="index"></audio-item>
         </div>
      </div>
       <div class="block">
         <title-line><span class="iconfont">&#xe64a;</span>相声评书</title-line>
         <div class="content">
             <audio-item :audioData = "item" v-for="(item,index) in pagedata.slice(15,18)" :key="index"></audio-item>
         </div>
      </div>
       <div class="block">
         <title-line><span class="iconfont">&#xe64e;</span>音乐</title-line>
         <div class="content">
             <audio-item :audioData = "item" v-for="(item,index) in pagedata.slice(18,21)" :key="index"></audio-item>
         </div>
      </div>
       <div class="block">
         <title-line><span class="iconfont">&#xe636;</span>情感生活</title-line>
         <div class="content">
             <audio-item :audioData = "item" v-for="(item,index) in pagedata.slice(21,24)" :key="index"></audio-item>
         </div>
      </div>
       <div class="block">
         <title-line><span class="iconfont">&#xe610;</span>历史</title-line>
         <div class="content">
             <audio-item :audioData = "item" v-for="(item,index) in pagedata.slice(24,27)" :key="index"></audio-item>
         </div>
      </div>
       <div class="block">
         <title-line><span class="iconfont">&#xe7bf;</span>教育培训</title-line>
         <div class="content">
             <audio-item :audioData = "item" v-for="(item,index) in pagedata.slice(27,30)" :key="index"></audio-item>
         </div>
      </div>
  </div>
</template>

<script>
import audiohttp from "api/audiohttp"
import AudioItem from "components/AudioItem"
import TitleLine from "components/TitleLine"
import indexpagehttp from "api/indexpagehttp"

export default{

    //获取首页数据 
    async beforeMount(){
      let pagedata = await indexpagehttp();
      this.pagedata = pagedata.data;
    },
    components:{
      AudioItem,
      TitleLine,
    },
    data(){
      return {
        pagedata:[]
      }
    },
    methods:{
     
    }
}

</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="less" scoped >
.content{
  width: 90%;
  margin: 0 auto;
  display: flex;
  justify-content: space-between;
}
.iconfont{
  margin-right: 5%;
}
</style>
