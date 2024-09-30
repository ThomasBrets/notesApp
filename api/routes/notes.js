const express = require('express')
const router = express.Router()
const NotesController = require("../controllers/notes")

//! POST
router.post("/add-note", NotesController.addNote)

//! PUT
router.put("/edit-note/:noteId", NotesController.editNote)



module.exports = router