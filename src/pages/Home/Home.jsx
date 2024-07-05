import React from "react";
import Navbar from "../../components/Navbar";
import NoteCards from "../../components/Cards/NoteCards";

const Home = () => {
  return (
    <>
      <Navbar />
      <div className="container mx-auto">
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
    </>
  );
};

export default Home;
