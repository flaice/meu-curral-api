const Router = require('express').Router();
const userController = require('../../controllers/users');

Router.post('/', userController.createUser);

module.exports = Router;
