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
  static async editNote(id, body) {
    // const { title, content, tags, isPinned } = body;

    try {
      const note = await Notes.findByIdAndUpdate(
        id,
        {
          $set: {
            title:body.title,
            content:body.content,
            tags:body.tags,
            isPinned:body.isPinned,
          },
        },
        { new: true }
      );

      return { error: false, data: note };
    } catch (error) {
      return { error: true, data: error.message };
    }
  }
}

module.exports = NotesService;
