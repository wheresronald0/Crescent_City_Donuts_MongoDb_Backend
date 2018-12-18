const express = require("express");
const app = express();
const mongoose = require("mongoose");
const bodyParser = require("body-parser");
const indexRoute = require("./routes/index.js");

if (process.env.NODE_ENV == "production") {
  mongoose.connect(
    "mongodb://crescent_city_admin:dbadmin1@ds163745.mlab.com:63745/cc_donuts",
    { useNewUrlParser: true }
  );
} else {
  mongoose.connect(
    "mongodb://localhost/Cresent_City_Donuts",
    { useNewUrlParser: true }
  );
}
mongoose.Promise = global.Promise;

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

//deals with CORS policy
app.use(function(req, res, next) {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Credentials", true);
  res.header("Access-Control-Allow-Methods", "GET,PUT,POST,DELETE,OPTIONS");
  res.header(
    "Access-Control-Allow-Headers",
    "Origin,X-Requested-With,Content-Type,Accept,content-type,application/json"
  );
  next();
});

app.use("/customer", indexRoute);

app.set("port", process.env.PORT || 4000);

app.listen(app.get("port"), () => {
  console.log(`PORT: ${app.get("port")}`);
});
