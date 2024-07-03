const express = require("express");
const ControllerUser = require("../controller/controllerUser");
const router = express.Router();
const routerVoucherClaim = require("./voucher_claim");
const routerVoucher = require("./voucher");
const authentication = require("../middleware/authentication");

router.post("/login", ControllerUser.login);
router.post("/register", ControllerUser.register);

router.use(authentication);
router.use(routerVoucherClaim);
router.use(routerVoucher);

module.exports = router;
