<template>
    <div class="audio-item" @click="handleclick">
        <div class="imgbox">
             <img :src="itemData.cover_url_142" alt="" class="img">
             <p class="album-title">{{itemData.album_title}}</p>
        </div>
        <p class="title" :title="itemData.title">{{itemData.title}}</p>
        <p class="author" :title="itemData.nickname">{{itemData.nickname}}</p>
    </div>
</template>

<script>
import audiohttp from "api/audiohttp"

export default {
    props:{
        itemData:{
            default:function(){
                return {};
            }
        }
    },
    methods:{
        async handleclick(){
            //当点击的不同的类型才请求数据
            if(this.itemData.id != this.$store.state.audiodata.id){
                let msg = await audiohttp(this.itemData.id);
                this.$store.dispatch("controlAudio",msg.data);
            }
           
        }
    }
}
</script>


<style lang="less" scoped>
.audio-item{
    font-size: 0.5rem;
    background: #f8f8f8;
    height:6rem;
    width:4.5rem;
    box-shadow: 2px 2px 2px #cbcbcc;
    box-sizing: border-box;
    &:hover{
        opacity: 0.7;
    }
    .imgbox{
        position: relative;
        .img{
             width: 100%;
        }
        .album-title{
            position: absolute;
            left: 0rem;
            bottom: 0rem;
            height: 1rem;
            line-height: 1rem;
            text-align: center;
            background:rgba(0, 0, 0, 0.5);
            width: 100%;
            color: #fff;
            margin: 0;
        }
    }
    .title{
        font-size: 0.4rem;
    }
    .author{
        font-size: 0.4rem;
    }
    >p{
        margin: 0.2rem 0;
        text-align: center;
        width: 100%;
        white-space: nowrap;
        text-overflow: ellipsis;
        overflow: hidden;
    }

}
</style>
