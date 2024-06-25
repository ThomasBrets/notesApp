import React from "react";
// react-router
import { Link } from "react-router-dom";
// components
import Navbar from "../../components/Navbar";
import PasswordInput from "../../components/input/PasswordInput";



const Login = () => {
  return (
    <>
      <Navbar />

      {/* Form */}
      <div className="flex items-center justify-center mt-28">
        <div className="w-96 border rounded bg-white px-7 py-10">
          <form onSubmit={() => {}}>
            <h4 className="text-2xl mb-7">Login</h4>

            <input type="text" placeholder="Email" className="input-box " />
            <PasswordInput />
            <button type="submit" className="btn-primary">
              Login
            </button>
            <p className="text-sm text-center mt-4">
              No registered yet?{" "}
              <Link to="/signUp" className="font-medium text-primary underline">
                Create an Account
              </Link>
            </p>
          </form>
        </div>
      </div>
    </>
  );
};

export default Login;