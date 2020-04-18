const express = require('express');
const nunjucks = require('nunjucks');
const videos = require("./data");

const server = express();

server.use(express.static('public'))

server.set("view engine","njk");

nunjucks.configure("views", {
  express: server,
  autoescape: false,
  noCache: true,
})

server.get("/", function(req, res) {
  const about = {
    avatar_url: "https://avatars0.githubusercontent.com/u/21336806?s=460&u=e62c6c92cd990a15a2c46213bf6868f58401b685&v=4",
    name: "Stenio Oliveira",
    role: "Aluno Desenvolvedor WEB",
    description: 'Aluno de programção full-stack, focado em conhecer o melhor ensino para iniciantes em programação. Aluno da <a href="https://rocketseat.com.br" target="_blank">Rocketseat</a>',
    links: [
      { name: "Github", url: "https://www.github.com/steniooliv"},
      { name: "Twitter", url: "https://www.twitter.com/steniooliv"},
      { name: "Linkedin", url: "https://www.linkedin.com/in/steniooliv"},
    ]
  }

  return res.render("about", {about});
})

server.get("/portfolio", function(req, res) {
  return res.render("portfolio", { items: videos });
})

server.listen(5000, function() {
  console.log("server is running");
})