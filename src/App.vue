<template>
  <div id="app">
    <top></top>
    <div class="main">
      <transition name="router-fade" mode="out-in">
        <keep-alive v-if="$route.meta.keepAlive">
          <router-view></router-view>
        </keep-alive>
      </transition>
      <transition name="router-fade" mode="out-in">
        <router-view v-if="!$route.meta.keepAlive"></router-view>
      </transition>
    </div>
    <bottom></bottom>
    <loading v-if="$store.state.loading"></loading>
    <audio src="" ref="audioDOM">您的浏览器不支持 audio 标签。</audio>
  </div>
</template>

<script>
import top from "view/common/top"
import bottom from "view/common/bottom"
import loading from "components/loading"


export default {
  mounted() {
    this.$store.state.audioDOM = this.$refs.audioDOM
  },
  name: 'app',
  components: {
    top,
    bottom,
    loading
  },
  data() {
    return {
      loading: true
    }
  }
}
</script>

<style >
/*滚动条 start*/

 ::-webkit-scrollbar {
  width: 8px;
  height: 4px;
  background-color: #F5F5F5;
}


/*定义滚动条轨道 内阴影+圆角*/

 ::-webkit-scrollbar-track {
  -webkit-box-shadow: inset 0 0 6px rgba(0, 0, 0, 0.3);
  background: #fff;
}


/*定义滑块 内阴影+圆角*/

 ::-webkit-scrollbar-thumb {
  border-radius: 3px;
  -webkit-box-shadow: inset 0 0 6px rgba(0, 0, 0, .3);
  background-color:#e1e1df;
}

 ::-webkit-scrollbar-thumb:hover {
  border-radius: 3px;
  -webkit-box-shadow: inset 0 0 6px rgba(0, 0, 0, .3);
  background-color: #e1e1df;
}


/* 引入字体iconfoot  */

@font-face {
  font-family: 'iconfont';
  /* project id 383213 */
  src: url('//at.alicdn.com/t/font_383213_8znehvqdgn20ggb9.eot');
  src: url('//at.alicdn.com/t/font_383213_8znehvqdgn20ggb9.eot?#iefix') format('embedded-opentype'),
  url('//at.alicdn.com/t/font_383213_8znehvqdgn20ggb9.woff') format('woff'),
  url('//at.alicdn.com/t/font_383213_8znehvqdgn20ggb9.ttf') format('truetype'),
  url('//at.alicdn.com/t/font_383213_8znehvqdgn20ggb9.svg#iconfont') format('svg');
}

.iconfont {
  font-family: "iconfont";
  font-style: normal;
  -webkit-font-smoothing: antialiased;
  -webkit-text-stroke-width: 0.2px;
  -moz-osx-font-smoothing: grayscale;
}

.router-fade-enter-active,
.router-fade-leave-active {
  transition: opacity .1s;
}

.router-fade-enter,
.router-fade-leave-active {
  opacity: 0;
}

html,
body,
#app {
  height: 100%;
}

body {
  box-sizing: border-box;
}

a {
  text-decoration: none;
}

.main {
  padding-bottom: 1rem;
  height: calc(100% - 2rem - 0.5rem);
  overflow-y: auto;
  width: 100%;
  position: relative;
}
</style>
