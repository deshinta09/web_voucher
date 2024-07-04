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

  static async allCategories(req, res, next) {
    try {
      let categories = [];
      let voucherId = [];
      let checkCategories = [];
      // mencari voucher yang telah di claim dari user yang sedang login
      let voucherClaim = await Voucher_Claim.findAll(
        { attributes: ["id_voucher"] },
        { where: { id_user: req.user.id } }
      );
      // ambil id voucher yang telah di claim user yang sedang login
      voucherClaim.forEach((el) => {
        voucherId.push(el.id_voucher);
      });
      // ambil semua voucher kecuali yang sudah di claim user yang sedang login
      let voucher = await Voucher.findAll({
        where: { id: { [Op.not]: voucherId } },
      });
      // buat data yang menampilkan category dan jumlahnya
      voucher.forEach((el) => {
        let index = Infinity;
        categories.forEach((n, i) => {
          n.name === el.category ? (index = i) : "";
        });
        // console.log(categories[index], "<<< cate yg sama");
        categories[index]
          ? categories[index].num++
          : categories.push({ name: el.category, num: 1 });
      });
      res.status(200).json(categories);
    } catch (error) {
      next(error);
    }
  }
}

module.exports = ControllerVoucher;
