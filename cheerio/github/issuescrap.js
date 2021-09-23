const request = require("request");
const cheerio = require("cheerio");
const fs = require("fs");
request("https://github.com/topics",requestCallBack);

let gitTopics= [];


function requestCallBack(err,res,html){
    const $ = cheerio.load(html);
    let topicurlanchortag = $(".no-underline.d-flex.flex-column.flex-justify-center");//.text();
    // console.log(topicurlanchortag);
    // let topicurl = [];


    for(let i=0;i<topicurlanchortag.length;i++){
        let topicurl =  "https://www.github.com"+$(topicurlanchortag[i]).attr('href')
        gitTopics.push(
            {
        " topicurl":  topicurl ,

         "repos": []    

            }
            );
            request(topicurl,fetchRepos.bind(this,i));
    }
    // console.log(topicurl);
    // console.log(gitTopics);
}

let topicCounts = 0;


function fetchRepos(index,err,res, html){
    topicCounts++;

    const $ = cheerio.load(html);
    let repoAnchorTags = $('.text-bold.wb-break-word');
    for(let i=0; i < repoAnchorTags.length && i < 8 ;  i++){
         gitTopics[index].repos.push({
             "repoUrl" : "https://www.github.com" + $(repoAnchorTags[i]).attr('href'),

             "issue": []

         })
    }
    if(topicCounts ==3){
        // console.log(gitTopics);
        // to print the object use stringify
        fs.writeFileSync("temp.json",JSON.stringify(gitTopics));
    }

}























