const request = require("request");
const cheerio = require("cheerio");
const fs = require("fs");

request("https://github.com/topics",requestCallBack);


// let randsurl = [];
// let count = 0;
// function requestCallBack(err, res, html) {
// const $ = cheerio.load(html);
// const  topicSel = $('.topic-box a');
// // console.log(topicSel);

// for(let i=0;i<topicSel.length;i++){
//     randsurl.push(topicSel.attr('href'));
// }
// console.log(randsurl);

// }





