const express = require('express')
const router = express.Router()
const AuthController = require("../controllers/auth")

//! POST
router.post("/register", AuthController.createUser)

module.exports = router