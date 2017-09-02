<template>
    <div class="suggest">
        <div class="suggest-item" @click="handleClick(item.id)" v-for="(item,index) in searchResult" :key="index">
            <el-row>
                <el-col :span="4">
                    <div class="grid-content ">
                        <img :src="item.imgsrc" alt="图片未加载成功">
                    </div>
                </el-col>
                <el-col :span="15">
                    <div class="grid-content ">
                        <span class="title">{{item.title}}</span>
                    </div>
                </el-col>
                <el-col :span="5">
                    <div class="grid-content" style="text-align:right">
                        <span class="date">{{item.date.substring(0,item.date.search("前")+1)}}</span>
                    </div>
                </el-col>
            </el-row>
        </div>

    </div>
</template>

<script>
import audiohttp from "api/audiohttp"

export default {
    mounted(){
        //如果没有搜索结果返回到首页
        if(this.searchResult.length == 0){
            this.$router.push("/index");
        }
    },
    computed: {
        searchResult() {
            return this.$store.state.searchResult;
        }
    },
    methods: {
        async handleClick(id) {
            //当点击的不同的类型才请求数据
            if (id != this.$store.state.audiodata.id) {
                let msg = await audiohttp(id);
                this.$store.dispatch("controlAudio", msg.data);
            }
        }
    }

}
</script>


<style lang="less" scoped>
.suggest {
    padding: 1% 2% 10%;
    .suggest-item {
        margin: 0.5rem 0;

        .title {
            font-size: 0.5rem;
            padding-left: 14px;
            display: inline-block;
        }
        .date {
            font-size: 0.3rem;
            color: #999;
        }
    }
}
</style>

