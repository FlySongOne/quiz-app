const express = require('express');
const usersController = require('../controllers/usercontroller');

const userRoutes = express.Router();

userRoutes.get('/', usersController.index);
userRoutes.get('/:id', usersController.show);
userRoutes.post('/', usersController.create);

module.exports = userRoutes;
