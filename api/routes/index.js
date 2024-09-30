const express = require("express");
const router = express.Router();
const { validateUser } = require("../middlewares/auth");

const auth = require("./auth");
const notes = require("./notes");

router.use("/auth", auth);
router.use("/notes", validateUser, notes);

module.exports = router;
