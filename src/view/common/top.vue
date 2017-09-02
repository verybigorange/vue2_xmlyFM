<template>
    <el-row class="el-row header">
        <el-col :offset="1" :span="6">
            <p class="logo">HelloFM</p>
        </el-col>
        <el-col :span="9">
            <el-autocomplete  v-model="searchData" :fetch-suggestions="querySearchAsync" placeholder="请搜索" @select="handleSelect" icon="search"></el-autocomplete>
        </el-col>
        <el-col :span="5" :offset="2">
            <div class="login">
                <router-link :to="{name:'login'}">登录</router-link>
                &nbsp;|&nbsp;
                <router-link :to="{name:'register'}">注册</router-link>
            </div>
        </el-col>
    </el-row>
</template>

<script>

import search from "api/search";

export default {
    data() {
        return {
            searchData: '',
        }
    },
    methods: {
        handleIconClick(ev) {
            console.log(ev);
        },
        //加载搜索建议
        async querySearchAsync(queryString, cb) {
            let { data } = await search.suggesthttp(queryString);
            let { queryResultList } = data;
            let arr = [];
            for (let item of queryResultList) {
                let obj = {};
                obj.value = item.keyword;
                obj.id = item.id;
                arr.push(obj)
            }
            cb(arr);
        },
        //选中后加载搜索的数据
        async handleSelect(selectObj) {
            if (selectObj) {
                let { data } = await search.selecthttp(selectObj.value);
                this.$store.commit("SETSEARCHRESULT", data);
                if (this.$router.currentRoute.fullPath != "/suggest") {
                    this.$router.push("/suggest");
                }
            } else {
                this.$router.push("/index");
            }


        }
    }

}
</script>

<style lang="less" scoped>
@top-height: 2.5rem;
.header {
    padding-top: 0.4rem;
    background: #5e61f8;
    height: @top-height;
    .logo {
        padding-top: 0.3rem;
        font-size: 0.8rem;
        margin: 0;
        color: #fff;
    }
    .login {
        padding-top: 0.5rem;
        font-size: 0.5rem;
        color: #fff;
        a {
            color: #fff;
        }
    }
}

</style>