import React from "react";
import ProfileInfo from "../components/Cards/ProfileInfo"
import SearchBar from "../components/SearchBar/SearchBar"
import { useNavigate } from "react-router-dom";

const Navbar = () => {

const navigate = useNavigate()

const onLogout = () => {
navigate("/login")
}

  return (
    <div className="bg-white drop-shadow px-6 py-2 flex items-center justify-between">
      <h2 className="text-xl font-medium text-black py-2">Notes</h2>

      <SearchBar />

      <ProfileInfo onLogout={onLogout}/>
    </div>
  );
};

export default Navbar;
