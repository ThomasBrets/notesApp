import React, { useState } from "react";
import ProfileInfo from "../components/Cards/ProfileInfo";
import SearchBar from "../components/SearchBar/SearchBar";
import { useNavigate } from "react-router-dom";
import axiosInstance from "../utils/axios";

const Navbar = ({ userInfo }) => {
  const [searchQuery, setSearchQuery] = useState("");

  const navigate = useNavigate();

  const onLogout = async () => {
    try {
      await axiosInstance.post("/auth/logout"); // Llamada al backend para hacer logout y eliminar la cookie
      navigate("/auth/login"); // Redirigir al login
    } catch (error) {
      console.error("Error al hacer logout:", error);
    }
  };

  const handleSearch = () => {};

  const onClearSearch = () => {
    setSearchQuery("");
  };

  return (
    <div className="bg-white drop-shadow px-6 py-2 flex items-center justify-between">
      <h2 className="text-xl font-medium text-black py-2">Notes</h2>

      <SearchBar
        value={searchQuery}
        onChange={({ target }) => {
          setSearchQuery(target.value);
        }}
        handleSearch={handleSearch}
        onClearSearch={onClearSearch}
      />

      {/* Renderizar ProfileInfo solo si userInfo existe (es decir, si el usuario está logueado) */}
      {userInfo && <ProfileInfo userInfo={userInfo} onLogout={onLogout} />}
    </div>
  );
};

export default Navbar;
