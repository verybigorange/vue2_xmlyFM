<template>
    <el-row class="el-row header">
        <el-col :offset="1" :span="4">
              <p class="logo">HelloFM</p>
        </el-col>
         <el-col :span="10"  :offset="2">
              <el-input 
               placeholder="请搜索音频" icon="search"
               v-model="searchData" 
               :on-icon-click="handleIconClick">
               </el-input>
        </el-col>
        <el-col :span="5" :offset="2">
            <div class="login">
                <router-link to="">登录</router-link>
                &nbsp;|&nbsp;
                <router-link to="">注册</router-link>
            </div>
        </el-col>
    </el-row>
</template>

<script>
export default {
    data() {
        return {
            searchData: ''
        }
    },
    methods: {
        handleIconClick(ev) {
            console.log(ev);
        }
    }

}
</script>

<style lang="less" scoped>

@top-height:2rem;
.header{
    padding-top: 0.2rem;
    background:#5e61f8;
    height:@top-height;
    .logo{
        padding-top: 0.3rem;
        font-size: 0.8rem;
        margin: 0;
        color: #fff;
    }
    .login{
        padding-top: 0.5rem;
        font-size: 0.5rem;
        color: #fff;
        a{
            color: #fff;
        }
        
    }
}
</style>