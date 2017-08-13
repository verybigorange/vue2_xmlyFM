<template>
  <div class="mask">
      <img :src="img" class="loading-img" />
  </div>
</template>


<script>
export default {
  data(){
    return{
         img:require("img/loading.gif")
    }
  }
}
</script>


<style scoped>
.mask{
    position: fixed;
    top: 2rem;
    left: 0px;
    z-index: 998;
    opacity:0.8;
    background: #fff;
    width: 100%;
    height:calc(100% - 2rem - 2.5rem);
}
.loading-img{
  position: fixed;
  z-index: 999;
  left:0;
  top: 40%;
  right:0;
  margin: 0 auto; 
}
</style>
