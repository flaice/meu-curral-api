const Blacklist = require('../model/BlackList');
const Logins = require('../model/Logins');
const { generateJWT, checkPassword } = require('../service/auth');

const logout = async token => {
  try {
    const Listed = await Blacklist.findOne({
      where: { token }
    });
    if (!Listed) {
      const listedToken = await Blacklist.create({ token });
      return listedToken;
    }
  } catch (error) {
    console.log(error);
  }
};

const checkToken = async token => {
  try {
    const listedToken = await Blacklist.findOne({ where: { token } });
    if (listedToken) {
      return listedToken;
    }
    return false;
  } catch (error) {
    console.log(error);
  }
};

const login = async (userName, password) => {
  try {
    const User = await Logins.findOne({
      where: { userName }
    });
    if (User && checkPassword(password, User)) {
      return generateJWT(User.relatedID, User.userName);
    }
  } catch (error) {
    console.log(error);
  }
  return false;
};

module.exports = { logout, checkToken, login };
