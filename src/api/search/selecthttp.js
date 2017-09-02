//选择搜索建议

import http from "api/http";

export default function(selected){
    return http.post("/api/selectsuggest",{selected:selected});
}