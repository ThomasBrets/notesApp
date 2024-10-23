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

  // Get userInfo
  const [userInfo, setUserInfo] = useState(null);
  const navigate = useNavigate();

   // Función para obtener la información del usuario logueado
   const getUserInfo = async () => {
    try {
      // Llamada a la nueva ruta /get-user
      const response = await axiosInstance.get('/users/get-user');
      console.log("GET-RESP.DATA.DOC", response.data._doc);
      
      if (response.data && response.data._doc) {
        setUserInfo(response.data._doc); // Guardar la info en el estado
      }
      
    } catch (error) {
      if (error.response && error.response.status === 401) {
        navigate('/auth/login'); // Redirigir al login
      } else {
        console.error("Error al obtener la información del usuario:", error);
      }
    }
  };

  useEffect(() => {
    getUserInfo(); // Llamar a la función al montar el componente
    return () => {};
  }, []);


  return (
    <>
      <Navbar userInfo={userInfo}/>
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
        className="w-[40%] max-w-3/4 bg-white rounded-md mx-auto mt-14 p-5"
      >
        <AddEditNotes
          openAddEditModal={openAddEditModal}
          type={openAddEditModal.type}
          noteData={openAddEditModal.data}
          onClose={() => {
            setOpenAddEditModal({ isShown: false, type: "add", data: null });
          }}
        />
      </Modal>
    </>
  );
};

export default Home;
