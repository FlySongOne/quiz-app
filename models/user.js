const db = require('../db/config');

const User = {};

User.findAll = () => {
  return db.query(
    `SELECT * FROM users`
  );
};

User.findById = (id) => {
  return db.oneOrNone(
    `
    SELECT * FROM users
    WHERE id = $1`,
    [id]
  );
};

User.create = (user) => {
  return db.one(
    `
    INSERT INTO users (username, password, name)
    VALUES ($1, $2, $3)
    RETURNING *`,
    [user.username, user.password,user.name]
  );
};


module.exports = User;
