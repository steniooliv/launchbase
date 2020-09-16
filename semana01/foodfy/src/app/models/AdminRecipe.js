const db = require("../../config/db");

module.exports = {
  all(callback) {
    const query = `
      SELECT *
      FROM recipes
      ORDER BY title ASC
    `

    db.query(query, function(err, results) {
      if (err) throw `Database Error! ${err}`;

      callback(results.rows);
    });
  },

}