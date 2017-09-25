// setting up express
const express = require('express');
const path = require('path');
const logger = require('morgan');
const bodyParser = require('body-parser');
const cors = require('cors');
const app = express();

// setting up port
const PORT = process.env.PORT || 3001;
app.listen(PORT, function() {
  console.log(`Listening on port ${PORT}`);
});

// setting up static file
app.use('/static', express.static(path.join(__dirname, 'client/quizilla/build')))
// app.use('/static', express.static(path.join(__dirname, 'public')));
// setting up cors
app.use(cors());
// setting up logger
app.use(logger('dev'));
// setting up body parser
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: false}));
app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname+'/client/build/index.html'));
});
// index route
app.get('/', function(req, res) {
  res.sendFile(__dirname + '/public/index.html');
});

// API route
const questionRoutes = require('./routes/questionroutes');
app.use('/api/questions', questionRoutes);

const userRoutes = require('./routes/userroutes');
app.use('/api/users', userRoutes);



//throw in error 404
app.get('*', function(req, res) {
  res.status(404).send({message: 'Oops! Not found'});
});
