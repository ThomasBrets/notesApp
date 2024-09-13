const express = require('express')
const router = express.Router()
const AuthController = require("../controllers/auth")

//! POST
router.post("/register", AuthController.createUser)
router.post("/login", AuthController.loginUser)
router.post("/logout", AuthController.logoutUser)

module.exports = router