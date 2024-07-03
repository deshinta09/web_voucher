"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class Voucher_Claim extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      Voucher_Claim.belongsTo(models.User, { foreignKey: "id_user" });
      Voucher_Claim.belongsTo(models.Voucher, { foreignKey: "id_voucher" });
    }
  }
  Voucher_Claim.init(
    {
      id_user: DataTypes.INTEGER,
      id_voucher: DataTypes.INTEGER,
    },
    {
      sequelize,
      modelName: "Voucher_Claim",
    }
  );
  return Voucher_Claim;
};
