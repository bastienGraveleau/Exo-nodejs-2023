const express = require("express");
const router = express.Router();

const { getAll } = require("../controller/users.controller")
router.get("/", getAll);

module.exports = router;