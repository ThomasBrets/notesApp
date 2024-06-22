import React from "react";
import Navbar from "../../components/Navbar";
import { Link } from "react-router-dom";

const Login = () => {
  return (
    <>
      <Navbar />

      {/* Form */}
      <div className="flex items-center justify-center mt-28">
        <div className="w-96 border rounded bg-white px-7 py-10">
          <form onSubmit={() => {}}>
            <h4 className="text-2xl mb-7">Login</h4>
            <div className="flex gap-3">

            <input type="text" placeholder="Email" className="input-box w-[250px] p-1" />
            <button type="submit" className="btn-primary">
              Login
            </button>
            </div>
            <p className="text-sm text-center mt-4">
              No registered yet?{" "}
              <Link to="/signUp" className="font-medium text-primary underline">Create an Account</Link>
            </p>
          </form>
        </div>
      </div>
    </>
  );
};

export default Login;
