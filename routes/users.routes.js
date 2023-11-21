const express = require("express");
const router = express.Router();
const logger = require("../middleware/middleware.users")

const { getAll, createUser } = require("../controller/users.controller")
const { getOne } = require("../controller/users.controller")

router.get("/", getAll);
router.get("/:id", logger ,getOne)
router.post("/create", logger, createUser)

module.exports = router;