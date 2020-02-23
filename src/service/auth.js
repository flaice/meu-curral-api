const { sign, verify } = require('jsonwebtoken');
const { randomBytes, pbkdf2Sync } = require('crypto');

const enviroment = process.env.ENV || 'development';
const { secret } = require('../config/config')[enviroment];

const generateJWT = (id, userName) => {
  const token = sign({ id, userName }, secret);
  return { token };
};

const generateCredentials = passWord => {
  const salt = randomBytes(16).toString('hex');
  const hash = pbkdf2Sync(passWord, salt, 1000, 512, 'sha512').toString('hex');

  return { salt, hash };
};
// checking the password before autenticate
const checkPassword = (passWord, registred) => {
  console.log('salt ' + registred.passwordSalt);
  return (
    registred.passwordHash ===
    pbkdf2Sync(passWord, registred.passwordSalt, 1000, 512, 'sha512').toString(
      'hex'
    )
  );
};

// token valid?
const checkToken = (token, callback) => {
  return verify(token, secret, callback);
};
module.exports = {
  generateCredentials,
  generateJWT,
  checkPassword,
  checkToken
};
