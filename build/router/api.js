var express = require('express');
var router = express.Router();
var axios = require("axios");

/* api获取喜马拉雅音频数据 */
router.post('/', function(req, res, next) {
  var header = {headers:{host:"www.ximalaya.com",referer:"http://www.ximalaya.com/explore/"}};
  axios.get('http://www.ximalaya.com/tracks/'+ req.body.id +'.json',header).then(function(response){
    res.send(response.data)
  },function(err){
    res.send(err)
  });
});

module.exports = router;
