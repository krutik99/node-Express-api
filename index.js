const express = require("express");
const mongoose = require("mongoose");
const emprouter = require("./routes/emp");
const userouter = require("./routes/user");

var app = express();

app.get("/", function (req, res) {
  res.send("hello world");
});
app.use("/emp", emprouter);
app.use("/user", userouter);

mongoose.connect("mongodb://127.0.0.1:27017/test", {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});
mongoose.connection
  .once("open", function () {
    console.log("Database connected Successfully");
  })
  .on("error", function (err) {
    console.log("Error", err);
  });

app.listen(8000, function () {
  console.log("Server is Up");
});
