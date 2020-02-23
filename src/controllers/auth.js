const authRepository = require('../repository/auth');

const login = async (req, res, next) => {
  const { userName, password } = req.body;

  try {
    const validtoken = await authRepository.login(userName, password);

    // console.log('Token: ' + validtoken.token);
    if (!validtoken) {
      console.log('Here 2');
      return res.status(401).end();
    }
    return res.json(validtoken);
  } catch (error) {
    next(error);
  }
};

const logout = async (req, res, next) => {
  const token = req.headers.authorization.split(' ')[1];
  try {
    const logoutData = await authRepository.logout(token);
    res.status(200);
  } catch (error) {
    next(error);
  }
};

module.exports = { login, logout };
