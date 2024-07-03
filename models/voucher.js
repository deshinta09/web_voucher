"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class Voucher extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      Voucher.hasMany(models.Voucher_Claim, { foreignKey: "id_voucher" });
    }
  }
  Voucher.init(
    {
      name: DataTypes.STRING,
      image: DataTypes.STRING,
      category: DataTypes.STRING,
      status: DataTypes.STRING,
    },
    {
      sequelize,
      modelName: "Voucher",
    }
  );
  return Voucher;
};
