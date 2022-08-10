const { Router } = require("express");
const { check } = require("express-validator");
const { createQr } = require("../controller/qrCreator");
const { validateFields } = require("../middlewares/validateFields");
const router = Router();

router.get(
  "/",
  [
    check("txt", "The text is required").not().isEmpty(),
    validateFields,
  ],
  createQr
);

module.exports = router;
