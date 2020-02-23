const Router = require('express').Router();
const { tokenAutencicate } = require('../../middleware/auth');
const controller = require('../../controllers/auth');

Router.post('/login', controller.login);

module.exports = Router;
