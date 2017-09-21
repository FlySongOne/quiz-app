const express = require('express');
const questionsController = require('../controllers/questionscontroller');

const questionRoutes = express.Router();

questionRoutes.get('/', questionsController.index);
questionRoutes.get('/:id', questionsController.show);
questionRoutes.post('/', questionsController.create);

module.exports = questionRoutes;
