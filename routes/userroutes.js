const express = require('express');
const usersController = require('../controllers/usercontroller');

const userRoutes = express.Router();

userRoutes.get('/', usersController.index);
userRoutes.post('/', usersController.create);
userRoutes.get('/:id', usersController.show);

userRoutes.delete('/:id', usersController.delete);

module.exports = userRoutes;
