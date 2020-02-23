const Router = require('express').Router();

const userRouter = require('./users');
const authRouter = require('./auth');
const endpoints = {
  message: 'our app endpoints',
  endpoints: {
    users: {
      path: '/users'
    },
    auth: {
      path: '/auth'
    }
  }
};

Router.get('/', (req, res, next) => res.json(endpoints));
Router.use('/users', userRouter);
Router.use('/auth', authRouter);
module.exports = Router;
