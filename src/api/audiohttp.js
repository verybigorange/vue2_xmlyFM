import http from "./http.js"

export default function (id){
   return http.post("/api",{id:id});
}
