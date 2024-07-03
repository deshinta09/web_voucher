const express = require("express");
const ControllerVoucherClaim = require("../controller/controllerVoucherClaim");
const router = express.Router();

router.get("/voucherClaim", ControllerVoucherClaim.getVoucherClaim);
router.post(
  "/voucherClaim/:id_voucher",
  ControllerVoucherClaim.addVoucherClaim
);
router.delete("/voucherClaim/:id", ControllerVoucherClaim.removeVoucherClaim);

module.exports = router;
