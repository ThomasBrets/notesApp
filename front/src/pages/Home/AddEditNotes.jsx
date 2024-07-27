import React, { useState } from "react";
import { IoMdClose } from "react-icons/io";
import TagInput from "../../components/Input/TagInput";

const AddEditNotes = ({onClose, noteData, setOpenAddEditModal, }) => {
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");
  const [tags, setTags] = useState([]);
  const [error, setError] = useState(null);

  // AddNote
  const AddNewNote = async () => {

  }

  // Edit Note
  const EditNota = async () => {

  }

  const handleAddNote = () => {
    if (!title) {
      setError("Escriba un titulo por favor");
      return;
    }

    if (!content) {
      setError("Escribe un contenido por favor");
      return;
    }
    setError("")

    if(type === "edit"){
      editNote()
    }else{
      addNewNote()
    }
  };

  return (
    <div className="relative">
      <IoMdClose
        className="absolute right-2 top-2 text-[20px] cursor-pointer text-slate-400 hover:text-slate-500 transition-all delay-200"
        onClick={onClose}
      />
      <div className="flex flex-col gap-2">
        <label className="input-label">TITLE</label>
        <input
          type="text"
          className="text-2xl text-slate-950 outline-none"
          placeholder="Gym a las 17"
          value={title}
          onChange={({ target }) => {
            setTitle(target.value);
          }}
        />
      </div>
      <div className="flex flex-col gap-2">
        <label className="input-label">CONTENT</label>
        <textarea
          type="text"
          className="text-sm text-slate-950 outline-none bg-slate-50 p-2 rounded"
          placeholder="content"
          rows={10}
          value={content}
          onChange={({ target }) => {
            setContent(target.value);
          }}
        />
      </div>

      <div className="m-3">
        <label className="input-label">TAGS</label>
        <TagInput tags={tags} setTags={setTags} />
      </div>
      
          {error && <p className="text-red-500 text-xs pt-4">{error}</p>}

      <button
        className="btn-primary font-medium mt-5 p-3"
        onClick={handleAddNote}
      >
        ADD
      </button>
    </div>
  );
};

export default AddEditNotes;
