<template>
  <div id="app">
   
    <top></top>
    <div class="main">
        <keep-alive>
           <router-view></router-view>
        </keep-alive>
    </div>
    <bottom></bottom>
    <loading></loading>
  </div>
</template>

<script>
import top from "view/common/top"
import bottom from "view/common/bottom"
import loading from "components/loading"

export default {
  name: 'app',
  components:{
    top,
    bottom,
    loading
  },
  data(){
    return {
      loading:true
    }
  }
}
</script>

<style >
/* 引入字体iconfoot  */
@font-face {
  font-family: 'iconfont';  /* project id 383213 */
  src: url('//at.alicdn.com/t/font_383213_9i0dqic2a173z0k9.eot');
  src: url('//at.alicdn.com/t/font_383213_9i0dqic2a173z0k9.eot?#iefix') format('embedded-opentype'),
  url('//at.alicdn.com/t/font_383213_9i0dqic2a173z0k9.woff') format('woff'),
  url('//at.alicdn.com/t/font_383213_9i0dqic2a173z0k9.ttf') format('truetype'),
  url('//at.alicdn.com/t/font_383213_9i0dqic2a173z0k9.svg#iconfont') format('svg');
}

.iconfont{
	font-family:"iconfont";
	font-style:normal;
	-webkit-font-smoothing: antialiased;
  -webkit-text-stroke-width: 0.2px;
  -moz-osx-font-smoothing: grayscale; 
}
html,body,#app{
  height: 100%;
}
body{
  	box-sizing: border-box;
}

a{
  text-decoration: none;
}
.main{
  height:calc(100% - 2rem - 2.5rem);
  overflow-y: auto;
  width:100%;
  position: relative;
}
</style>
