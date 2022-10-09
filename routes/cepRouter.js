const express = require("express");
const router = express.Router();
const { cepHandler } = require("../cepFunction/handler");

router.get("/:cep", cepHandler);

module.exports = router;
