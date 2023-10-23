const express = require("express");
const router = express.Router();

const { getAll } = require("../controller/users.controller")
router.post("/api/users", create);

module.exports = router;