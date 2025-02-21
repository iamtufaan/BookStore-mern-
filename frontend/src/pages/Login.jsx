import React, { useState } from "react";
import { FaUser, FaLock } from "react-icons/fa";
import { Link } from "react-router-dom";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    alert("Login Successful!");
    setEmail("");
    setPassword("");
    console.log(email,password)
  };

  return (
    <div className="w-full h-screen flex items-center justify-center  py-24">
      {/* Glassmorphism Card */}
      <div className="bg-white bg-opacity-10 backdrop-blur-lg rounded-lg shadow-2xl p-8 sm:w-96 w-80 ">
        <h2 className="text-3xl font-bold text-center mb-5">Welcome Back! 👋</h2>
        <form onSubmit={handleSubmit} className="space-y-6">
          {/* Email Input */}
          <div className="relative">
            <FaUser className="absolute left-3 top-3 text-gray-600" />
            <input
              type="email"
              placeholder="Email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
              className="w-full px-10 py-3 rounded-md bg-white bg-opacity-20  placeholder-gray-600 focus:outline-none focus:ring-2 focus:ring-blue-300"
            />
          </div>

          {/* Password Input */}
          <div className="relative">
            <FaLock className="absolute left-3 top-3 text-gray-600" />
            <input
              type="password"
              placeholder="Password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
              className="w-full px-10 py-3 rounded-md bg-white bg-opacity-20  placeholder-gray-600 focus:outline-none focus:ring-2 focus:ring-blue-300"
            />
          </div>

          {/* Login Button */}
          <button
            type="submit"
            className="w-full bg-blue-500 hover:bg-blue-600 py-3 rounded-md text-lg font-semibold text-white transition active:scale-95"
          >
            Login
          </button>
        </form>

        {/* Bottom Links */}
        <div className="text-center mt-5 text-sm">
       
          <p className="mt-2">
            Don't have an account?{" "}
            <Link to={'/signup'} className="text-blue-300 hover:underline">
              Sign Up
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Login;
