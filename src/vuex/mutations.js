export default {
    // 展现loding
    SHOWLODING(state){
        state.loading = true;
    },
    // 隐藏logding
    HIDELODING(state){
        state.loading = false;
    },
    // 设置用户信息
    SETUSER(state,userobj){
        for (var key in userobj) {
            state.user[key] = userobj[key];
        }
    },
    // 删除用户信息
    DELUSER(state){
        state.user = {};
    },
    //设置token值
    SETTOKEN(state,tokenval){
        state.token = tokenval
    }
}