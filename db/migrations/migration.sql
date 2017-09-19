\c quizapp_dev

CREATE TABLE IF NOT EXISTS user (
  id BIGSERIAL PRIMARY KEY,
  username VARCHAR(64),
  password VARCHAR(64),
  name VARCHAR(64)
);

CREATE TABLE IF NOT EXISTS quiz (
  id BIGSERIAL PRIMARY KEY,
  quizname VARCHAR(64)
);
