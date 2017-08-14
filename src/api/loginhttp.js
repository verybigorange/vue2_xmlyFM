import http from "./http.js"
import { Message } from 'element-ui'


// 这里先写死，账户是admin，密码是111111
export default function (params) {

    if (params.username == "admin" && params.password == "111111") {
        Message({
            message: "登录成功",
            type: 'success'
        })
    } else {
        Message.error({
            message: "账号或者密码错误,请重新输入！"
        })
    }

}