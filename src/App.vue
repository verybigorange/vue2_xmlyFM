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
    <hide-audio :src="$store.state.audiosrc"></hide-audio>
  </div>
</template>

<script>
import top from "view/common/top"
import bottom from "view/common/bottom"
import loading from "components/loading"
import HideAudio from "components/hideAudio";

export default {
  name: 'app',
  components: {
    top,
    bottom,
    loading,
    HideAudio
  },
  data() {
    return {
      loading: true
    }
  }
}
</script>

<style >
/* 引入字体iconfoot  */

@font-face {
  font-family: 'iconfont';  /* project id 383213 */
  src: url('//at.alicdn.com/t/font_383213_3qv24ylf5o0tfbt9.eot');
  src: url('//at.alicdn.com/t/font_383213_3qv24ylf5o0tfbt9.eot?#iefix') format('embedded-opentype'),
  url('//at.alicdn.com/t/font_383213_3qv24ylf5o0tfbt9.woff') format('woff'),
  url('//at.alicdn.com/t/font_383213_3qv24ylf5o0tfbt9.ttf') format('truetype'),
  url('//at.alicdn.com/t/font_383213_3qv24ylf5o0tfbt9.svg#iconfont') format('svg');
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
  height: calc(100% - 2rem - 2.5rem);
  overflow-y: auto;
  width: 100%;
  position: relative;
}
</style>
