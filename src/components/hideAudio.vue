<template>
    <audio :src="src"  ref="audioDOM">
        您的浏览器不支持 audio 标签。
    </audio>
</template>

<script>
export default {
    mounted(){
        this.$store.state.audioDOM = this.$refs.audioDOM
    },
    props:{
        src:{
            type:String
        }
    }
    
}
</script>

<style scoped>
    
</style>

