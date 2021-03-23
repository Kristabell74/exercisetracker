const path = require("path");


module.exports = function (tracker) {



  tracker.get("/exercise", function (req, res) {
    res.sendFile(path.join(__dirname, "../public/exercise.html"));
  });

  tracker.get("/stats", function (req, res) {
    res.sendFile(path.join(__dirname, "../public/stats.html"));
  });

  tracker.get("/", (req, res) => {
    response.require(path.join(__dirname, "./public/index.html"));

  });

};