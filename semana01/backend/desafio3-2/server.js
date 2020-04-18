//imports express and ninjucks
const express = require("express");
const nunjucks = require("nunjucks");
const courses = require("./data");

//start express on const server
const server = express();


server.listen(5000, function() {
  console.log("server is running");
})

//set static path
server.use(express.static("public"));
server.use("/assets", express.static("assets"));

//set template view for njk
server.set("view engine", "njk");

//config nunjucks path
nunjucks.configure("views", {
  express: server,
  autoescape: false,
  noCache: true,
})


//routes
server.get("/", function(req, res) {
  return res.render("courses", {courses});
})

server.get("/about", function(req, res) {
  return res.render("about");
})

server.use(function(req, res) {
  res.status(404).render("not-found");
});