import React, { useState } from "react";
import Navbar from "../../components/Navbar";
import NoteCards from "../../components/Cards/NoteCards";
import { MdAdd } from "react-icons/md";
import AddEditNotes from "./AddEditNotes";
import Modal from "react-modal";
import { IoMdClose } from "react-icons/io";

const Home = () => {
  const [openAddEditModal, setOpenAddEditModal] = useState({
    isShown: false,
    type: "add",
    data: null,
  });

  return (
    <>
      <Navbar />
      <div className="container mx-auto">
        <div className="grid grid-cols-3 gap-4 mt-8">
          <NoteCards
            title="Inglés el 8 de julio"
            date="2 de Julio"
            content="Inglés el 8 de julio"
            tags="#Meeting"
            isPinned={true}
            onEdit={() => {}}
            onDelete={() => {}}
            onPinNote={() => {}}
          />
        </div>
      </div>

      <button
        className="w-16 h-16 flex items-center justify-center rounded-2xl bg-primary hover:bg-blue-600 absolute right-10 bottom-10"
        onClick={() => {
          setOpenAddEditModal({ isShown: true, type: "add", data: null });
        }}
      >
        <MdAdd className="text-[32px] text-white" />
      </button>

      <Modal
        isOpen={openAddEditModal.isShown}
        onRequestClose={() => {}}
        style={{
          overlay: {
            backgroundColor: "rgb(0,0,0,0.2)",
          },
        }}
        contentLabel=""
        className="w-[40%] max-w-3/4 bg-white rounded-md mx-auto mt-14 p-5 overflow-scroll"
      >
        <IoMdClose className="absolute right-7 top-7 text-[20px] cursor-pointer text-slate-400 hover:text-slate-500 transition-all delay-200" onClick={() => setOpenAddEditModal({isShown:false})}/>

        <AddEditNotes />
      </Modal>
    </>
  );
};

export default Home;
