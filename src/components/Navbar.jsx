import React from "react";
import ProfileInfo from "../components/Cards/ProfileInfo"

const Navbar = () => {
  return (
    <div className="bg-white drop-shadow px-6 py-2 flex items-center justify-between">
      <h2 className="text-xl font-medium text-black py-2">Notes</h2>

      <ProfileInfo/>
    </div>
  );
};

export default Navbar;
