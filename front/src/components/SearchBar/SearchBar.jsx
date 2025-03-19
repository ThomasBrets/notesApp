import React from "react";
import { useEffect } from "react";

import { FaMagnifyingGlass } from "react-icons/fa6";
import { IoMdClose } from "react-icons/io";

const SearchBar = ({ value, onChange, handleSearch, onClearSearch }) => {

    // Ejecuta la búsqueda en tiempo real cuando cambia el input
    useEffect(() => {
      if (value.trim() === "") {
        onClearSearch(); // Si está vacío, mostrar todas las notas
      } else {
        handleSearch(); // Si hay texto, hacer la búsqueda
      }
    }, [value]); // Se ejecuta cada vez que `value` cambia

  
  return (
    <div className="w-80 flex items-center bg-slate-100 px-4 rounded-md">
      <input
        type="text"
        placeholder="Search notes"
        className="text-xs w-full bg-transparent  py-[11px] outline-none"
        value={value}
        onChange={(e) => onChange(e)} // Se actualiza el estado en Navbar.jsx
      />

      {value && (<IoMdClose
        className="text-slate-500 text-xl cursor-pointer hover:text-black mr-3"
        onClick={onClearSearch}
      />)}

      <FaMagnifyingGlass
        className="text-slate-400 cursor-pointer hover:text-black"
        onClick={handleSearch}
      />
    </div>
  );
};

export default SearchBar;
