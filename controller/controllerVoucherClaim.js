const { Voucher_Claim } = require("../models/");

class ControllerVoucherClaim {
  static async getVoucherClaim(req, res, next) {
    try {
      let voucherClaim = await Voucher_Claim.findAll({
        where: { id_user: req.user.id },
      });
      res.status(200).json(voucherClaim);
    } catch (error) {
      next(error);
    }
  }

  static async addVoucherClaim(req, res, next) {
    try {
      let { id_voucher } = req.params;
      let newVoucherClaim = await Voucher_Claim.create({
        id_voucher,
        id_user: req.user.id,
      });
      res.status(201).json(newVoucherClaim);
    } catch (error) {
      next(error);
    }
  }

  static async removeVoucherClaim(req, res, next) {
    try {
      let { id } = req.params;
      let voucherClaim = await Voucher_Claim.findByPk(id);
      if (!voucherClaim) {
        throw { name: "Not Found", message: "Voucher not found" };
      }
      await Voucher_Claim.destroy({ where: { id } });
      res
        .status(200)
        .json({
          message: `Success delete voucher claim id ${voucherClaim.id}`,
        });
    } catch (error) {
      next(error);
    }
  }
}

module.exports = ControllerVoucherClaim;
