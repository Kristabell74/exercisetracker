const path = require("path");


module.exports = function (tracker) {

  //gets the stats module
  tracker.get("/stats", function (req, res) {
    res.sendFile(path.join(__dirname, "../public/stats.html"));
  });
  //gets the tracker module
  tracker.get("/exercise", function (req, res) {
    res.sendFile(path.join(__dirname, "../public/exercise.html"));
  });
  //gets the index module
  tracker.get("/", (req, res) => {
    response.require(path.join(__dirname, "./public/index.html"));

  });

};