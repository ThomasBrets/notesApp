const express = require('express')
const router = express.Router()
const NotesController = require("../controllers/notes")

//! POST
router.post("/add-note", NotesController.addNote)



module.exports = router