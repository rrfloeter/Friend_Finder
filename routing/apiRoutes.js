var path = require("path");

var friendsData = require("../app/data/friends");

module.exports = function (app) {

    //all friend entries
    app.get("/api/friends", function (req, res) {
        res.json(friendsData);
    });

    //get user inputs
    app.post("/api/friends", function (req, res) {
        var useradd = req.body;
        var totaldiff = 100;
        var friendname;
        var friendphoto;

        for (var i = 0; i < friendsData.length; i++) {
            var diff = 0;
            for (var j = 0; j < useradd.length; j++) {
                diff += Math.abs(friendsData[i].useradd[j] - useradd[j]);
            }
            if (diff < totaldiff) {
                friendname = friendsData[i].name;
                friendphoto = friendsData[i].photo;
                totaldiff = diff;
            }
        }

        friendsData.push(useradd);

		res.json({friendname: friendname, friendphoto: friendphoto});

    });
};