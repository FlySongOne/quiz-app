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

 User.update = (user, id) => {
    return db.one(`
      UPDATE users SET
      username = $1,
      password =  $2,
      name = $3
      WHERE id = $4
      RETURNING *
      `,[users.username, users.password, users.user, id]);
  },

  User.destroy = (id)=> {
    return db.none(`
      DELETE FROM user
       WHERE id = $1
    `, [id]);
  },

module.exports = User;
