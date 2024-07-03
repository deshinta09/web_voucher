const express = require("express");
const ControllerVoucher = require("../controller/controllerVoucher");
const router = express.Router();

router.get("/voucher", ControllerVoucher.getAllVoucher);

module.exports = router;
