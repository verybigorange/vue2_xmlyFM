<template>
  <div id="app">
   
    <top></top>
    <section class="main">
        <keep-alive>
           <router-view></router-view>
        </keep-alive>  
    </section>
   
    <bottom></bottom>
  </div>
</template>

<script>
import top from "view/common/top";
import bottom from "view/common/bottom"

export default {
  name: 'app',
  components:{
    top,
    bottom
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
  display: flex;
  flex-direction: column;
}

body{
  	box-sizing: border-box;
}

a{
  text-decoration: none;
}
.main{
  flex-grow:1;
  overflow-y: auto;
}
</style>
