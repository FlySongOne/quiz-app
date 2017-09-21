const express = require('express');
const questionsController = require('../controllers/questioncontroller');
const questionRoutes = express.Router();


questionRoutes.get('/', questionsController.index);
questionRoutes.post('/', questionsController.create);
questionRoutes.get('/:id', questionsController.show);

module.exports = questionRoutes;

