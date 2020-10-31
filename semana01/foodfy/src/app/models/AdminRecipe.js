const {date} = require("../../lib/utils");
const db = require("../../config/db");

module.exports = {
  all(callback) {
    const query = `
      SELECT recipes.*, chefs.name AS author
      FROM recipes
      LEFT JOIN chefs ON (chefs.id = recipes.chef_id)
      ORDER BY title ASC
    `

    db.query(query, function(err, results) {
      if (err) throw `Database Error! ${err}`;

      callback(results.rows);
    });
  },

  find(id, callback) {
    const query = `
      SELECT recipes.*, chefs.name AS author
      FROM recipes
      LEFT JOIN chefs ON (chefs.id = recipes.chef_id)
      WHERE recipes.id = $1
    `

    const values = [
      id,
    ]

    db.query(query, values, function(err, results) {
      if (err) throw `Database Error! ${err}`;

      callback(results.rows[0]);
    })
  },

  chefSelectOption(callback) {
    const query = `
      SELECT name, id
      FROM chefs
    `
    db.query(query, function(err, results) {
      if (err) throw `Database Error! ${err}`;

      callback(results.rows);
    })
  },

  post(data, callback) {
    const query = `
      INSERT INTO recipes (
        chef_id,
        image,
        title,
        ingredients,
        preparation,
        information,
        created_at
        ) VALUES ($1, $2, $3, $4, $5, $6, $7)
        RETURNING id
    `
    const values = [
      data.chef_id,
      data.image,
      data.title,
      data.ingredients,
      data.preparation,
      data.information,
      date(Date.now()).format,
    ]

    console.log(data.ingredients);
    console.log(data.preparation);

    db.query(query, values, function(err, results) {
      if (err) throw `Database Error! ${err}`;

      callback(results.rows[0]);
    })
  },
  
  update(data, callback) {
    const query = `
      UPDATE recipes SET
      image=($1),
      title=($2),
      ingredients=($3),
      preparation=($4),
      information=($5),
      WHERE id = ($6)
    `

    const values = [
      data.image,
      data.title,
      data.ingredients,
      data.preparation,
      data.information,
      data.id
    ]

    db.query(query, values, function(err, results) {
      if (err) throw `Database Error! ${err}`;

      callback();
    })

  }





}