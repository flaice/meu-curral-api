/* const requireDir = require('require-dir');
const { Users, Logins, memberShip } = requireDir('../model');
const { generateCredentials } = require('../service/auth');
const Status = require('http-status');

const registerUser = async userData => {
  try {
    loginData = await Logins.findOne({
      where: { userName: userName }
    });
    if (loginData) {
      return false;
    }
  } catch (error) {
    console.log(error);
  }
}; */
