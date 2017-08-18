import Vuex from "vuex"
import Vue from "vue"
import mutations from "./mutations.js"

Vue.use(Vuex);

export default new Vuex.Store({
    state:{
        loading:true,
        token:"",
        user:{},
        audiosrc : "",
        play:true,
        audioDOM:"",
    },
    getters:{

    },
    mutations,
    actions:{
        
    }

})





