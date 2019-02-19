var path = require("path");

var friendsData = require("../app/data/friends");

module.exports = function (app) {

    //all friend entries
    app.get("/api/friends", function (req, res) {
        res.json(friendsData);
    });

    //get user inputs
    app.post("/api/friends", function (req, res) {
        var NewScores = req.body.scores;
        var score = [];
        var fcount = 0;
        var bestmatch = 0;

        //run through current friendlist scores
        for (var i = 0; i < friendsData.length; i++) {
            var diff = 0;
            for (var j = 0; j < NewScores.length; j++) {
                diff += (Math.abs(parseInt(friendsData[i].scores[j]) - parseInt(NewScores[j])));
            }
        }

        //loop through - add new friend to friends object array
        score.push(useradd);

        for (var i = 0; i < score.length; i++) {
            if (score[i] <= score[bestMatch]) {
                bestMatch = i;
            }
        }

        var bff = friendsData[bestMatch];
        res.json(bff);

        friendsData.push(req.body);
    });
};