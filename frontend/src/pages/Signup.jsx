import React, { useState } from "react";
import { FaUser, FaEnvelope, FaLock } from "react-icons/fa";
import { Link } from "react-router-dom";

const Signup = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    alert("Signup Successful!");
  };

  return (
    <div className="w-full h-screen flex items-center justify-center py-24  ">
      {/* Glassmorphism Card */}
      <div className="bg-white bg-opacity-10 backdrop-blur-lg rounded-lg shadow-2xl p-8 sm:w-96 w-80 ">
        <h2 className="text-3xl font-bold text-center mb-5">Create Account 🎉</h2>
        <form onSubmit={handleSubmit} className="space-y-6">
          
          {/* Name Input */}
          <div className="relative">
            <FaUser className="absolute left-3 top-3 text-gray-600" />
            <input
              type="text"
              placeholder="Full Name"
              value={name}
              onChange={(e) => setName(e.target.value)}
              required
              className="w-full px-10 py-3 rounded-md bg-white bg-opacity-20  placeholder-gray-600 focus:outline-none focus:ring-2 focus:ring-green-300"
            />
          </div>

          {/* Email Input */}
          <div className="relative">
            <FaEnvelope className="absolute left-3 top-3 text-gray-600" />
            <input
              type="email"
              placeholder="Email Address"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
              className="w-full px-10 py-3 rounded-md bg-white bg-opacity-20  placeholder-gray-600 focus:outline-none focus:ring-2 focus:ring-green-300"
            />
          </div>

          {/* Password Input */}
          <div className="relative">
            <FaLock className="absolute left-3 top-3 text-gray-600" />
            <input
              type="password"
              placeholder="Create Password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
              className="w-full px-10 py-3 rounded-md bg-white bg-opacity-20  placeholder-gray-700 focus:outline-none focus:ring-2 focus:ring-green-300"
            />
          </div>

          {/* Signup Button */}
          <button
            type="submit"
            className="w-full bg-green-500 text-white hover:bg-green-600 py-3 rounded-md text-lg font-semibold transition active:scale-95"
          >
            Sign Up
          </button>
        </form>

        {/* Bottom Links */}
        <div className="text-center mt-5 text-sm">
          <p>
            Already have an account?{" "}
            <Link to={'/login'} className="text-green-300 hover:underline">
              Login
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Signup;
