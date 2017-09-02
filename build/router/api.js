var express = require('express');
var router = express.Router();
var axios = require("axios");
var http = require('http');
var cheerio = require('cheerio');

/* api获取喜马拉雅音频数据 */
router.post('/', function (req, res, next) {
	var header = { headers: { host: "www.ximalaya.com", referer: "http://www.ximalaya.com/explore/" } };
	axios.get('http://www.ximalaya.com/tracks/' + req.body.id + '.json', header).then(function (response) {
		res.send(response.data)
	}, function (err) {
		res.send(err)
	});
});


//获取喜马拉雅首页的有关数据
router.get("/indexpage", function (req, res, next) {
	// 请求的页面
	var url = "http://www.ximalaya.com/explore/";
	var dataArr = [];
	http.get(url, function (response) {
		var html = '';        //用来存储请求网页的整个html内容
		response.setEncoding('utf-8'); //防止中文乱码
		response.on('data', function (chunk) {
			html += chunk;
		});
		response.on('end', function () {
			var $ = cheerio.load(html); //采用cheerio模块解析html

			$("li.item").each(function (index, item) {
				if ($(item).attr("sound_id") != undefined) {
					var obj = {};
					obj.id = $(item).attr("sound_id");
					obj.cover_url_142 = $(item).find(".pic-img img").attr("src");
					obj.album_title = $(item).find("span.masker-name").text().trim();
					obj.title = $(item).find("a.title").text().trim();
					obj.nickname = $(item).find("a.user-name").text().trim();
					dataArr.push(obj)
				}
			})
			res.send(dataArr)
		});
	})
});



router.post("/selectsuggest", function (req, res, next) {
	// 请求的页面
	var url = "http://m.ximalaya.com/search/"+ encodeURIComponent(req.body.selected) +"/voice"
	var dataArr = [];
	http.get(url, function (response) {
		var html = '';        //用来存储请求网页的整个html内容
		response.setEncoding('utf-8'); //防止中文乱码
		response.on('data', function (chunk) {
			html += chunk;
		});
		response.on('end', function () {
			var $ = cheerio.load(html); //采用cheerio模块解析html
			console.log(html)
			$("ul.list li.item").each(function (index, item) {
				var sound_id = $(item).find("div.pic").attr("sound_id");
				if (sound_id != undefined) {
					var obj = {};
					obj.id =  sound_id;
					obj.imgsrc = $(item).find("div.pic img").attr("src");
					obj.title = $(item).find("div.info .tit").text().trim();
					obj.date =$(item).find("div.info .time-cont").text().trim();
					dataArr.push(obj)
				}
			})
			res.send(dataArr)
		});
	})
});



module.exports = router;
