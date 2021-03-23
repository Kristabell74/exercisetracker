const express = require("express");
const logger = require("morgan");
const mongoose = require("mongoose");


const PORT = process.env.PORT || 3000;



const tracker = express();


tracker.use(logger("dev"));
tracker.use(express.urlencoded({ extended: true }));
tracker.use(express.json());
tracker.use(express.static("public"));


mongoose.connect(process.env.MONGODB_URI || "mongodb://localhost/workout", {
  useNewUrlParser: true,
  useUnifiedTopology: true
});

//require(apiRoute)(tracker);
require("./routes/htmlroutes")(tracker);
require("./routes/apiroutes")(tracker);

tracker.listen(PORT, () => {
  console.log(`tracker running on port ${PORT}!`);
});
