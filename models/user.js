"use strict";
const { Model } = require("sequelize");
const { hashedPassword } = require("../helpers/bcrypt");
module.exports = (sequelize, DataTypes) => {
  class User extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      User.hasMany(models.Voucher_Claim, { foreignKey: "id_user" });
    }
  }
  User.init(
    {
      name: {
        type: DataTypes.STRING,
        allowNull: false,
        validate: {
          notNull: {
            msg: "Please enter your name",
          },
          notEmpty: { msg: "Please enter your name" },
        },
      },
      email: {
        type: DataTypes.STRING,
        allowNull: false,
        unique: { args: true, msg: "The email mush be a valid" },
        validate: {
          notNull: {
            msg: "Please enter your email",
          },
          notEmpty: { msg: "Please enter your email" },
          isEmail: { msg: "Invalid email format" },
        },
      },
      password: {
        type: DataTypes.STRING,
        allowNull: false,
        validate: {
          notNull: {
            msg: "Please enter your password",
          },
          notEmpty: { msg: "Please enter your password" },
        },
      },
    },
    {
      sequelize,
      modelName: "User",
    }
  );
  User.beforeCreate((user) => {
    const hashPassword = hashedPassword(user.password);
    user.password = hashPassword;
  });
  return User;
};
