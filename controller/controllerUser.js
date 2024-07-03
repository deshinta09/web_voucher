const { comparePassword } = require("../helpers/bcrypt");
const { createToken } = require("../helpers/jwt");
const { User } = require("../models/");

class ControllerUser {
  static async login(req, res, next) {
    try {
      let { email, password } = req.body;
      let userLogin = await User.findOne({ email });
      if (!userLogin) {
        throw { name: "Bad Request", message: "Invalid email/password" };
      }

      let checkPassword = comparePassword(password, userLogin.password);
      if (!checkPassword) {
        throw { name: "Bad Request", message: "Invalid email/password" };
      }

      let access_token = createToken({ id: userLogin.id });
      res.status(200).json({ access_token });
    } catch (error) {
      next(error);
    }
  }

  static async register(req, res, next) {
    try {
      let { name, email, password } = req.body;
      let newUser = await User.create({ name, email, password });
      res
        .status(201)
        .json({ id: newUser.id, name: newUser.name, email: newUser.email });
    } catch (error) {
      next(error);
    }
  }
}

module.exports = ControllerUser;
