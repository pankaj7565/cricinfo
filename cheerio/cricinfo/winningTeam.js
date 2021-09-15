const request = require("request");
const cheerio = require("cheerio");
const fs = require("fs");
const { data } = require("cheerio/lib/api/attributes");
const { lookup } = require("dns");

// request('https://www.espncricinfo.com/series/ipl-2020-21-1210595/delhi-capitals-vs-mumbai-indians-final-1237181/full-scorecard',requestCallback);
// request('https://www.espncricinfo.com/series/ipl-2020-21-1210595/mumbai-indians-vs-chennai-super-kings-1st-match-1216492/match-report' ,requestCallback);
// request('https://www.espncricinfo.com/series/ipl-2020-21-1210595/delhi-capitals-vs-kings-xi-punjab-2nd-match-1216493/full-scorecard',requestCallback);
request('https://www.espncricinfo.com/series/ipl-2020-21-1210595/kolkata-knight-riders-vs-mumbai-indians-5th-match-1216508/full-scorecard', requestCallback);

// request(
//     "https://www.espncricinfo.com/series/ipl-2020-21-1210595/mumbai-indians-vs-chennai-super-kings-1st-match-1216492/full-scorecard",
//     requestCallback
//   );
// function requestCallback(err,res,html){
//     const $ = cheerio.load(html);
//     const losingTeam = $('.team-gray .name-link p').text();
//     const bothTeamObjects = $('.name-link p');
//     const bothTeamScoreObject = $(
//         ".match-info.match-info-MATCH.match-info-MATCH-half-width .score"
//       );
//     const winningTeamNameScoreArray =
//     $(bothTeamsObject[0]).text() == losingTeam
//       ? [$(bothTeamsObject[1]).text(), $(bothTeamScoreObject[1]).text()]
//       : [$(bothTeamsObject[0]).text(), $(bothTeamScoreObject[0]).text()];
//   console.log(winningTeamNameScoreArray);
//     // const winningTeam = $(bothTeamObjects[0]).text() == losingTeam ?  $(bothTeamObjects[1]).text() :$(bothTeamObjects[0]).text();


//     // console.log(winningTeam);
//     // const bothTeam = [$(bothTeamObjects[0].text(),$(bothTeamObjects[1]).text())];
//     // console.log($(".name-link p").text());

// }

// same code 

function requestCallback(err, res, html) {
    const $ = cheerio.load(html);
    const losingTeam = $(".team-gray .name-link p").text();
    const bothTeamsObject = $(".name-link p");
    const bothTeamScoreObject = $(
        ".match-info.match-info-MATCH.match-info-MATCH-half-width .score"
    );
    const winningTeamNameScoreArray =
        $(bothTeamsObject[0]).text() == losingTeam
            ? [$(bothTeamsObject[1]).text(), $(bothTeamScoreObject[1]).text()]
            : [$(bothTeamsObject[0]).text(), $(bothTeamScoreObject[0]).text()];
    console.log(winningTeamNameScoreArray);
}









//   clean code
// const request = require("request");
// const cheerio = require("cheerio");

// request(
//     "https://www.espncricinfo.com/series/ipl-2020-21-1210595/mumbai-indians-vs-chennai-super-kings-1st-match-1216492/full-scorecard",
//     requestCallback
// );

// function requestCallback(err, res, html) {
//     const $ = cheerio.load(html);
//     const losingTeam = $(".team-gray .name-link p").text();
//     const bothTeamsObject = $(".name-link p");
//     const bothTeamScoreObject = $(
//         ".match-info.match-info-MATCH.match-info-MATCH-half-width .score"
//     );
//     const winningTeamNameScoreArray =
//         $(bothTeamsObject[0]).text() == losingTeam
//             ? [$(bothTeamsObject[1]).text(), $(bothTeamScoreObject[1]).text()]
//             : [$(bothTeamsObject[0]).text(), $(bothTeamScoreObject[0]).text()];
//     console.log(winningTeamNameScoreArray);
// }