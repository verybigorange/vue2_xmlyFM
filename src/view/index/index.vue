<template>
  <div class="main" >
    
  </div>
</template>

<script>
import audiohttp from "api/audiohttp";
audiohttp(46466413).then(res=>{
  console.log(res.data)
})

</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>
