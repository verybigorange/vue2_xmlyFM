import Vue from "vue";

const upper = Vue.filter("upper",function(val){
    return val.toUpperCase();
})

export {upper}