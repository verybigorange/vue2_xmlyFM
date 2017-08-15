import http from "./http.js"
import { Message } from 'element-ui'
import { setCookie,delCookie } from "api/utils.js"
import md5 from "md5"
import store from "src/vuex/store.js"
import router from "src/router/index.js"

// 这里先写死，账户是admin，密码是111111
export default function (params) {

    if (params.username == "admin" && params.password == "111111") {
        
        //将cookie中加入加密后的token，7天过期
        delCookie("token");
        setCookie("token",md5("access"),7);
        
        // 将token放入store中
        store.commit("SETTOKEN", md5("access"));

        // 存入用户信息
        let userinfo = {"id":1,"name":"admin"};

        delCookie("user");
        setCookie("user",JSON.stringify(userinfo),7);
        store.commit("DELUSER"); 
        store.commit("SETUSER",userinfo);
       
        Message({
            message: "登录成功",
            type: 'success'
        })
        
        router.push("/index")
    } else {
        Message.error({
            message: "账号或者密码错误,请重新输入！"
        })
    }

}