<template>
  <div class="main" >
      <button @click="handleclick">11</button>
  </div>
</template>

<script>
import audiohttp from "api/audiohttp";

export default{
    methods:{
      handleclick(){
          audiohttp(47618778).then(res=>{
            console.log(res)
            //  store.state.audiosrc = res.data.play_path
          })
      }
    }
}

</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>
