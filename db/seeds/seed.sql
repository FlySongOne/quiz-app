
\c quizapp_dev

INSERT INTO users (username, password, name) VALUES
  ('Song123', 'password', 'Song'),
  ('Nayeli456', 'password', 'Nayeli'),
  ('Yan789', 'password', 'Yan'),
  ('User101', 'password', 'User1'),
  ('User202', 'password', 'User2');

INSERT INTO quiz (quizname) VALUES
  ('JS1'),
  ('JS2'),
  ('JS3'),
  ('JS4'),
  ('JS5');

INSERT INTO questions (question, answer) VALUES
('question1', 'answer1'),
('question2', 'answer2'),
('question3', 'answer3'),
('question4', 'answer4'),
('question5', 'answer5');
