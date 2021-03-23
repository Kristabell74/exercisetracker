const mongoose = require("mongoose");

const Schema = mongoose.Schema;

//organizes the data and categorizes
const wkoutChart = new Schema({
  day: {
    type: Date,
    default: Date.now
  },
  exercises: [
    {
      type: {
        type: String,
        trim: true,
        required: true
      },
      name: {
        type: String,
        trim: true,
        required: "Type of exercise"
      },
      duration: {
        type: Number,
        trim: true,
        required: "Duration of Exercise"
      },
      weight: {
        type: Number,
        trim: true,
        required: "0"
      },
      reps: {
        type: Number,
        trim: true,
        required: "0"
      },
      sets: {
        type: Number,
        trim: true,
        required: "0"
      },
      distance: {
        type: Number,
        trim: true,
        required: "0"
      }
    }
  ]
});

//pulls the data
const Workout = mongoose.model("workout", wkoutChart);

module.exports = Workout;