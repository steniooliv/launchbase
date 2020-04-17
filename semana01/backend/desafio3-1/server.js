//imports express and ninjucks
const express = require("express");
const nunjucks = require("nunjucks");

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
})


//routes
server.get("/", function(req, res) {
  return res.render("courses");
})

server.get("/about", function(req, res) {
  return res.render("about");
})

server.use(function(req, res) {
  res.status(404).render("not-found");
});