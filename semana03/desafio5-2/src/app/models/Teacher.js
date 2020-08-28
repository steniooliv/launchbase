const {date} = require('../../lib/utils');
const db = require('../../config/db');

module.exports = {
  all(callback) {
    const query = `
      SELECT *
      FROM teacher
      ORDER BY name ASC
    `
    db.query(query, function(err, results) {
      if (err) throw `Database Error! ${err}`;

      callback(results.rows);
    });
  },

  create(data, callback) {
    const query = `
      INSERT INTO teacher (
        avatar_url,
        name,
        birth_date,
        education_level,
        class_type,
        subjects_taught,
        created_at
      ) VALUES ($1, $2, $3, $4, $5, $6, $7)
      RETURNING id
    `
    const values = [
      data.avatar_url,
      data.name,
      date(data.birth).iso,
      data.grade,
      data.classroom,
      data.courses,
      date(Date.now()).iso
    ]

    db.query(query, values, function(err, results) {
      if (err) throw `Database Error! ${err}`;

      callback(results.rows[0]);
    });
  },

  find(id, callback) {
    const query = `
      SELECT * FROM teacher WHERE id = $1
    `

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
      UPDATE teacher SET
        avatar_url=$1,
        name=$2,
        birth_date=$3,
        education_leveL=$4,
        class_type=$5,
        subjects_taught=$6
      WHERE id =$7
    `
    const values = [
      data.avatar_url,
      data.name,
      date(data.birth).iso,
      data.grade,
      data.classroom,
      data.courses,
      data.id
    ]

    db.query(query, values, function(err, results) {
      if (err) throw `Database Error! ${err}`;

      callback();
    });

  },

  delete(id, callback) {
    const query = `
      DELETE FROM teacher
      WHERE id = $1
    `
    const values = [
      id
    ]

    db.query(query, values, function(err, results) {
      if (err) throw `Database Error! ${err}`;
      
      callback();
    })

  }
}