const requireDir = require('require-dir');
const { Users, Logins, memberShip } = requireDir('../model');
const { generateCredentials } = require('../service/auth');
const Status = require('http-status');
// const Sequelize = require('sequelize');
// const Op = Sequelize.Op;

const createUser = async (req, res, next) => {
  const {
    userName,
    password,
    firstName,
    lastName,
    birthDate,
    address,
    email,
    phoneNumber
  } = req.body;
  try {
    const Login = await Logins.findOne({
      where: { userName: userName }
    });

    if (Login) {
      return res.status(Status.CONFLICT).json();
    }
  } catch (e) {
    res.send(e).json();
  }
  try {
    const User = await Users.create({
      firstName,
      lastName,
      birthDate,
      address
    });

    const { hash: passwordHash, salt: passwordSalt } = generateCredentials(
      password
    );
    const relatedUserId = User.id;
    const LoginData = await Logins.create({
      userName,
      passwordHash,
      passwordSalt,
      relatedUserId
    });
    const memberShipData = memberShip.create({
      relatedUserid: relatedUserId,
      emailAddress: email,
      phoneNumber: phoneNumber
    });
    return res.status(Status.CREATED).json(LoginData);
  } catch (error) {
    res.send(error).json();
  }
};

module.exports = { createUser };
