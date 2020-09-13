const { date } = require("../../lib/utils");

const db = require('../../config/db');

module.exports = {
  all(callback) {
    const query = `
      SELECT *
      FROM student
      ORDER BY name ASC
    `
    db.query(query, function(err, results) {
      if (err) throw `Database Error! ${err}`;

      callback(results.rows);
    });

  },

  create(data, callback) {
    const query = `
      INSERT INTO student (
        avatar_url,
        name,
        email,
        birth,
        grade,
        hours,
        created_at,
        teacher_id
      ) VALUES ($1, $2, $3, $4, $5, $6, $7, $8)
      RETURNING id
    `
    const values = [
      data.avatar_url,
      data.name,
      data.email,
      date(data.birth).iso,
      data.grade,
      data.hours,
      date(Date.now()).iso,
      data.teacher
    ]

    db.query(query, values, function(err, results) {
      if (err) throw `Database Error! ${err}`;

      callback(results.rows[0]);
    });
  },

  find(id, callback) {
    const query = `
    SELECT student.*, teacher.name AS teacher_name
    FROM student
    LEFT JOIN teacher ON (student.teacher_id = teacher.id)
    WHERE student.id = $1
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
      UPDATE student SET
        avatar_url=$1,
        name=$2,
        email=$3,
        birth=$4,
        grade=$5,
        hours=$6
      WHERE id =$7
    `
    const values = [
      data.avatar_url,
      data.name,
      data.email,
      date(data.birth).iso,
      data.grade,
      data.hours,
      data.id
    ]

    db.query(query, values, function(err, results) {
      if (err) throw `Database Error! ${err}`;

      callback();
    });
  },

  delete(id, callback) {
    const query = `
      DELETE FROM student
      WHERE id = $1
    `
    const values = [
      id
    ]

    db.query(query, values, function(err, results) {
      if (err) throw `Database Error! ${err}`;
      
      callback();
    });
  },

  teacherSelectOptions(callback) {
    const query = `
      SELECT name, id FROM teacher
    `
    db.query(query, function(err, results) {
      if (err) throw `Database Error! ${err}`;

      callback(results.rows);
    })
  },

  paginate(params) {
    const {filter, limit, offset, callback} = params;

    let filterQuery = "";
    let totalQuery = `(
      SELECT count(*)
      FROM student
      ) AS total
    `

    if (filter) {
      filterQuery = `
        WHERE student.name ILIKE '%${filter}%'
        OR student.email ILIKE '%${filter}%'
      `

      totalQuery = `(
        SELECT count(*)
        FROM student
        ${filterQuery}
      ) AS total
      `
    }

    let query = `
      SELECT student.*, ${totalQuery}
      FROM student
      ${filterQuery}
      LIMIT $1 OFFSET $2
    `

    db.query(query, [limit, offset], function(err, results) {
      if (err) throw `Database Error! ${err}`;

      callback(results.rows)
    });
  }
}