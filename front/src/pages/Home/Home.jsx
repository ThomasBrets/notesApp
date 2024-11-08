import React, { useEffect, useState } from "react";
import Navbar from "../../components/Navbar";
import NoteCards from "../../components/Cards/NoteCards";
import { MdAdd } from "react-icons/md";
import AddEditNotes from "./AddEditNotes";
import Modal from "react-modal";
import { IoMdClose } from "react-icons/io";
import { useNavigate } from "react-router-dom";


// Axios
import axiosInstance from "../../utils/axios";

const Home = () => {
  const [openAddEditModal, setOpenAddEditModal] = useState({
    isShown: false,
    type: "add",
    data: null,
  });

  const [allNotes, setAllNotes] = useState([]);
  const [userInfo, setUserInfo] = useState(null);
  const navigate = useNavigate();

  const handleEdit = (noteDetails) => {
    setOpenAddEditModal({ isShown: true, data: noteDetails, type: "edit"})
  }


  // Get userInfo
  // Función para obtener la información del usuario logueado
  const getUserInfo = async () => {
    try {
      // Llamada a la nueva ruta /get-user
      const response = await axiosInstance.get("/users/get-user");
      console.log("GET-RESP.DATA.DOC", response.data._doc);

      if (response.data && response.data._doc) {
        setUserInfo(response.data._doc); // Guardar la info en el estado
      }
    } catch (error) {
      if (error.response && error.response.status === 401) {
        navigate("/auth/login"); // Redirigir al login
      } else {
        console.error("Error al obtener la información del usuario:", error);
      }
    }
  };

  // Get All Notes
  const getAllNotes = async () => {
    try {
      const response = await axiosInstance.get("/notes/all-notes");
      console.log("ALLNOTES", response.data);

      if (response.data && response.data) {
        setAllNotes(response.data); // Guardar la info en el estado
      }
    } catch (error) {
      console.error("Error inesperado:", error);
    }
  };

  useEffect(() => {
    getUserInfo(); // Llamar a la función al montar el componente
    getAllNotes();
    return () => {};
  }, []);


  return (
    <>
      <Navbar userInfo={userInfo} />
      <div className="container mx-auto">
        <div className="grid grid-cols-3 gap-4 mt-8 mx-2">
          {allNotes.map((note, i) => (
            <NoteCards
              key={note._id}
              title={note.title}
              date={note.createdOn}
              content={note.content}
              tags={note.tags}
              isPinned={note.isPinned}
              onEdit={() => handleEdit(note)}
              onDelete={() => {}}
              onPinNote={() => {}}
            />
          ))}
        </div>
      </div>

      <button
        className="w-16 h-16 flex items-center justify-center rounded-2xl bg-primary hover:bg-blue-600 right-10 bottom-10 fixed"
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
        className="w-[40%] max-w-3/4 bg-white rounded-md mx-auto mt-14 p-5"
      >
        <AddEditNotes
          openAddEditModal={openAddEditModal}
          type={openAddEditModal.type}
          noteData={openAddEditModal.data}
          onClose={() => setOpenAddEditModal({ isShown: false, type: "add", data: null })}
          getAllNotes={getAllNotes}
        />
      </Modal>
    </>
  );
};

export default Home;
