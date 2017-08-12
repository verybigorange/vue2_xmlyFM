const state = {
    dataindex:0
};

const getters = {

};
const mutations = {
    dataIncrement(state){
        state.dataindex += 10;
    }
};
const actions = {

};


export default{
    namespaced:true,
    state,
    getters,
    actions, 
    mutations
}