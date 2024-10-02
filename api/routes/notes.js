const express = require('express')
const router = express.Router()
const NotesController = require("../controllers/notes")

//!GET
router.get("/all-notes", NotesController.allNotes)

//! POST
router.post("/add-note", NotesController.addNote)

//! PUT
router.put("/edit-note/:noteId", NotesController.editNote)

//!DELETE
router.delete("/delete-note/:noteId", NotesController.deleteNote)



module.exports = router