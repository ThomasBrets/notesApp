const Notes = require("../models/notes");
const User = require("../models/user");

class NotesService {
  static async addNote(body) {

    try {
      const note = await Notes.create(body);

      return { error: false, data: note };
    } catch (error) {
      return { error: true, data: error.message };
    }
  }
}

module.exports = NotesService;
