
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
('How do you call a function named “myFunction”?', 'myFunction()'),
('Inside which HTML element do we put the JavaScript?', 'script tag'),
('What boolean operators does JavaScript support?', '&&, || and !'),
('What does 2+5+"8" evaluate to?', '78'),
('What is ‘this’ keyword?', 'It refers to the current object.');
