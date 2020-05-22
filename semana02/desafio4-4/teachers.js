const fs = require("fs");
const data = require("./data.json");

//

exports.post = function(req, res) {

  const keys = Object.keys(req.body);

  for (key of keys) {
    if (req.body[key] == "") {
      return res.send("Fill all fields!")
    }
  }

  let {avatar_url, name, birth, grade, classroom, courses} = req.body;

  birth = Date.parse(req.body.birth);
  created_at = Date.now();
  id = Number(data.teachers.length + 1);

  data.teachers.push({
    id,
    avatar_url,
    name,
    birth,
    grade,
    classroom,
    courses,
    created_at,
  });

  fs.writeFile("data.json", JSON.stringify(data, null, 2), function(err) {
    if (err) return res.send("Write file error!")
    return res.redirect("/teachers");
  })
}