const db = require('../db/config');

const Question = {};

Question.findAll = () => {
  return db.query(
    `SELECT * FROM questions`
  );
};

Question.findById = (id) => {
  return db.oneOrNone(
    `
    SELECT * FROM questions
    WHERE id = $1`,
    [id]
  );
};

Question.create = (question) => {
  return db.one(
    `
    INSERT INTO questions (question, answer)
    VALUES ($1, $2)
    RETURNING *`,
    [question.question, question.answer]
  );
};

module.exports = Question;

