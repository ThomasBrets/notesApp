const NotesService = require("../services/notes");

class NotesController {
  static async addNote(req, res) {
    const { error, data } = await NotesService.addNote(req.body);

    return error
      ? res.status(data.status || 500).json({ message: data })
      : res.status(201).json(data);
  }
  static async editNote(req, res) {
    const { error, data } = await NotesService.editNote(
      req.params.noteId,
      req.body
    );

    return error
      ? res.status(data.status || 500).json({ message: data })
      : res.status(201).json(data);
  }
}

module.exports = NotesController;
