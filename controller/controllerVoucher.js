const { Op } = require("sequelize");
const { Voucher, Voucher_Claim } = require("../models/");

class ControllerVoucher {
  static async getAllVoucher(req, res, next) {
    try {
      let voucherId = [];
      let { filter } = req.query;
      let voucherClaim = await Voucher_Claim.findAll(
        { attributes: ["id_voucher"] },
        { where: { id_user: req.user.id } }
      );
      voucherClaim.forEach((el) => {
        voucherId.push(el.id_voucher);
      });
      let option = {
        where: { id: { [Op.not]: voucherId } },
      };
      filter ? (option.where.category = { [Op.eq]: filter }) : "";
      let vouchers = await Voucher.findAll(option);
      res.status(200).json(vouchers);
    } catch (error) {
      next(error);
    }
  }
}

module.exports = ControllerVoucher;
