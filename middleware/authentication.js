const { User } = require("../models/");
const { compareToken } = require("../helpers/jwt");

async function authentication(req, res, next) {
  try {
    let { authorization } = req.headers;
    if (!authorization) {
      throw { name: "Unauthorized", message: "The access token is invalid" };
    }

    let checkToken = compareToken(authorization.split(" ")[1]);
    if (!checkToken) {
      throw { name: "Unauthorized", message: "The access token is invalid" };
    }

    let userLogin = await User.findByPk(checkToken.id);
    if (!userLogin) {
      throw { name: "Unauthorized", message: "The access token is invalid" };
    }

    req.user = {
      id: userLogin.id,
    };
    next();
  } catch (error) {
    next(error);
  }
}

module.exports = authentication;
