import Vuex from "vuex"
import Vue from "vue"
import mutations from "./mutations.js"
import actions from "./actions"
import getters from "./getters"

Vue.use(Vuex);

export default new Vuex.Store({
    state:{
        loading:true,
        token:"",
        user:{},
        // 当前正在播放的audio数据
        audiodata :{id:0},
        play:true,
        audioDOM:"",
        playiconDOM:""

    },
    getters,
    mutations,
    actions

})





