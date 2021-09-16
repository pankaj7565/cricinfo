const request = require("request");
const cheerio = require("cheerio");
const fs = require("fs");
const { platform } = require("os");

request(
    "https://www.espncricinfo.com/series/ipl-2020-21-1210595/mumbai-indians-vs-chennai-super-kings-1st-match-1216492/full-scorecard",
    requestCallback
  );

  let batsmanprofileurl = [];

function requestCallback(err, res, html) {
const $ = cheerio.load(html);

const batsmanAnchortags = $(".batsman-cell a");
// console.log(batsmanAnchortags.length);
// console.log(batsmanAnchortags);

// fetch href attribute


for(let i=0;i<batsmanAnchortags.length;i++){
    batsmanprofileurl.push({
        name: $(batsmanAnchortags[i]).text(),
        url: "https://www.espncricinfo.com" + $(batsmanAnchortags[i]).attr('href')

    })
}
// console.log(batsmanprofileurl);
// console.log(batsmanAnchortags);



for(let j in batsmanprofileurl){
    // for in  we get index
    // request is async function 
    // async dont wait for the request
     request(batsmanprofileurl[j].url,fetchdateofbirth.bind(this,j));

}

}



let count = 0;


function fetchdateofbirth(index,err,res,html){
    count++;
    // request(batsmanprofileurl[index].url,)
    const $ = cheerio.load(html);
    const palyerDateofBirth = $($('h5.player-card-description.gray-900')[1]).text();
    batsmanprofileurl[index]["Date of birth"] = palyerDateofBirth.split(",")[0];
    if(count ==batsmanprofileurl.length-1){
        console.log(batsmanprofileurl);
    }

} 



