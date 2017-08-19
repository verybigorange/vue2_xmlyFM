import http from "./http.js"

export default function (id){
   return http.get("/api/indexpage");
}