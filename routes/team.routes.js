const express = require("express");
const router = express.Router();
const logger = require("../middleware/middleware.users")

const { createTeam } = require("../controller/team.controller")

router.post("/create", logger, createTeam)

module.exports = router;