import React, { useState } from "react";

const PasswordInput = ({ value, onChange, placeholder }) => {
  const [isShowPassword, setIsShowPassword] = useState(false);

  const toggleShowPassword = () => {
    setIsShowPassword(!isShowPassword);
  };
  return (
    <div className="flex items-center bg-transparent border-[1.5px] px-5 rounded mb-3 ">
      <input
        type={setIsShowPassword ? "text" : "password"}
        value={value}
        onChange={onChange}
        placeholder={placeholder || "Password"}
        className="w-full bg-transparent text-sm py-3 mr-3 rounded[1.5px] outline-none"
      />
    </div>
  );
};

export default PasswordInput;
