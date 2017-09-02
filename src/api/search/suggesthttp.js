//搜索建议的请求

import http from "api/http";

//函数节流，优化性能
export default function(keyword){
    let time;
    let first = true;
    if(first){
        first = false;
        return http.get("http://search.ximalaya.com/suggest?kw="+keyword+"&scope=all");
    }
    if(time) return false;
    
    time = setTimeout(()=>{
        clearTimeout(time);
        time = null;
        return http.get("http://search.ximalaya.com/suggest?kw="+keyword+"&scope=all");
    },800)
   
}

