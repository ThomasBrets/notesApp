const express = require('express')
const router = express.Router()
const UsersController = require('../controllers/user')


router.get("/:userId", UsersController.getUser)

module.exports = router