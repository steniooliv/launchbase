const Intl = require('intl');
const {age, date} = require("../../lib/utils");
const db = require('../../config/db');

module.exports = {
  all(callback) {
    const query = 
      `SELECT * FROM members`

    db.query(query, function(err, results) {
        if(err) throw `Database Error! ${err}`;
      
        callback(results.rows);
      });
  },

  post(data, callback) {
    const query = `
      INSERT INTO members (
        name,
        avatar_url,
        email,
        gender,
        birth,
        blood,
        weight,
        height
      ) VALUES ($1, $2, $3, $4, $5, $6, $7, $8)
      RETURNING  id
    `
    const values = [
      data.name,
      data.avatar_url,
      data.email,
      data.gender,
      data.birth,
      data.blood,
      data.weight,
      data.height      
    ]

    db.query(query, values, function(err, results) {
      if (err) throw `Database Error! ${err}`;
      
      callback(results.rows[0])
    });
  },

  find(id, callback) {

    const query = 
      `SELECT * FROM members WHERE id = $1`

    const values = [
      id,
    ]
    
    db.query(query, values, function(err, results) {
        if (err) throw `Database Error! ${err}`;

        callback(results.rows[0]);
      });
  },

  update(data, callback) {
    const query = `
      UPDATE members SET
      name=($1),
      avatar_url=($2),
      email=($3),
      gender=($4),
      birth=($5),
      blood=($6),
      weight=($7),
      height=($8)
      WHERE id = $9
    `
    const values = [
      data.name,
      data.avatar_url,
      data.email,
      data.gender,
      data.birth,
      data.blood,
      data.weight,
      data.height,
      data.id,
    ]

    db.query(query, values, function(err, results) {
      if (err) throw `Database Error! ${err}`;

      callback();
    });
  },

  delete(id, callback) {
    const query = `
      DELETE FROM members
      WHERE id = $1`

    const values = [
      id,
    ]

    db.query(query, values, function(err, results) {
      if (err) throw `Database Error! ${err}`;

      callback();
    });
  }
}