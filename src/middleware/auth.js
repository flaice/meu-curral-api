const { checkToken } = require('../repository/auth');
const { checkToken: tokenVerify } = require('../service/auth');

const tokenAutenticate = (req, res, next) => {
  if (
    !req.headers.authorization ||
    req.headers.authorization.split(' ').length !== 2
  ) {
    return res.status(401).end();
  }
  const token = req.headers.authorization.split(' ')[1];

  tokenVerify(token, (err, payload) => {
    if (err) {
      return res.status(401).end();
    }
    checkToken(token).then(listed => {
      if (listed) {
        return res.status(401).end();
      }
      res.locals.payload = payload;
      return next();
    });
  });
};

module.exports = { tokenAutenticate };
