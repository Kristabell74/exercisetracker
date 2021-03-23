//required routes
const db = require("../models");


//hugs the functions and pulls them together to create a app
module.exports = function (tracker) {

  tracker.get("/api/workouts", (req, res) => {
    db.Workout.find({}).then(wkoutDb => {

      res.json(wkoutDb);
    })
      //error catcher
      .catch(err => {
        res.json(err);
      });
  })

  //gets the information and gathers it together
  tracker.get("/api/workouts/range", ({ }, res) => {
    db.Workout.find({}).then((wkoutDb) => {

      res.json(wkoutDb);

      //error catcher
    })
      .catch(err => {
        res.json(err);
      });
  });

  // puts the information together
  tracker.post("/api/workouts/", (req, res) => {
    db.Workout.create(req.body).then((wkoutDb) => {
      res.json(wkoutDb);

      //error catcher
    }).catch(err => {
      res.json(err);
    });
  });

  //sorts and finds the workouts by id
  tracker.put("/api/workouts/:id", (req, res) => {
    db.Workout.findByIdAndUpdate(
      { _id: req.params.id }, { exercises: req.body }

    ).then((wkoutDb) => {
      res.json(wkoutDb);

      //error catcher
    }).catch(err => {
      res.json(err);
    });
  });
};