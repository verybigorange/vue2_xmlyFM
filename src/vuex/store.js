import Vuex from "vuex"
import Vue from "vue"
import mutations from "./mutations.js"

Vue.use(Vuex);

export default new Vuex.Store({
    state:{
        loading:true,
        token:"",
        user:{},
        // 当前正在播放的audio数据
        audiodata :{},
        play:true,
        audioDOM:"",
        playiconDOM:""

    },
    getters:{

    },
    mutations,
    actions:{
        controlAudio({commit,state},newData){
            // 如果有新数据将新数据挂上去
            if(newData){
               commit("CHANGEAUDIODATA",newData);
            }

            // 根据状态和存在播放数据是否播放和暂停
			if(state.play && state.audiodata.play_path){
                state.audioDOM.src = state.audiodata.play_path;
                state.audioDOM.play();
                state.playiconDOM.style.background = "url(" +state.audiodata.cover_url_142 + ")";
                state.playiconDOM.style.backgroundSize = "contain";
                commit('CHANGEPLAY');
			}else if(!state.play && state.audiodata.play_path){
                state.audioDOM.pause();
                state.playiconDOM.style.background ="url(" + state.audiodata.cover_url_142 + ")";
                state.playiconDOM.style.backgroundSize = "contain";
                commit('CHANGEPLAY');
			}
			
        }
    }

})





