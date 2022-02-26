const { verify } = require("../util/jwt");
const { jwtSecret } = require("../config/config.deault");
const { User } = require("../model");
module.exports = async (req, res, next) => {
  let token = req.headers["authoriztion"];
  token = token ? token.split("Bearey ")[1] : null;

  if (!token) {
    return res.status(401).end();
  }

  try {
    const decodeToken = await verify(token, jwtSecret);
    req.user = await User.findById(decodeToken.userId);
    if(!req.user){
      return res.status(401).end();
    }
    next();
  } catch (error) {
    return res.status(401).end();
  }
};
