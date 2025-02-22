import React, { useState } from "react";
import { FaUser, FaEnvelope, FaLock } from "react-icons/fa";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";
import {toast} from "react-toastify"

const Signup = () => {
  const [fullName, setFullName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setError(null);

    try {
      const response = await axios.post("http://localhost:6969/user/signup", {
        fullName,
        email,
        password,
      });

      console.log("Signup Response:", response.data);
      toast.success("Signup Successful!");
      localStorage.setItem("user", JSON.stringify(response.data))
      navigate("/login"); // Redirect to login page after successful signup
    } catch (err) {
      console.error("Signup Error:", err.response?.data || err.message);
      setError(err.response?.data?.message || "user already exists!");
      toast.error('user already exists')
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="w-full h-screen flex items-center justify-center py-24">
      {/* Glassmorphism Card */}
      <div className="bg-white bg-opacity-10 backdrop-blur-lg rounded-lg shadow-2xl p-8 sm:w-96 w-80">
        <h2 className="text-3xl font-bold text-center mb-5">Create Account 🎉</h2>

        {error && <p className="text-red-500 text-center mb-4">{error}</p>}

        <form onSubmit={handleSubmit} className="space-y-6">
          {/* Name Input */}
          <div className="relative">
            <FaUser className="absolute left-3 top-3 text-gray-600" />
            <input
              type="text"
              placeholder="Full Name"
              value={fullName}
              onChange={(e) => setFullName(e.target.value)}
              required
              className="w-full px-10 py-3 rounded-md bg-white bg-opacity-20 placeholder-gray-600 focus:outline-none focus:ring-2 focus:ring-green-300"
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
              className="w-full px-10 py-3 rounded-md bg-white bg-opacity-20 placeholder-gray-600 focus:outline-none focus:ring-2 focus:ring-green-300"
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
              className="w-full px-10 py-3 rounded-md bg-white bg-opacity-20 placeholder-gray-700 focus:outline-none focus:ring-2 focus:ring-green-300"
            />
          </div>

          {/* Signup Button */}
          <button
            type="submit"
            disabled={loading}
            className={`w-full text-white py-3 rounded-md text-lg font-semibold transition active:scale-95 ${
              loading ? "bg-gray-400 cursor-not-allowed" : "bg-green-500 hover:bg-green-600"
            }`}
          >
            {loading ? "Signing Up..." : "Sign Up"}
          </button>
        </form>

        {/* Bottom Links */}
        <div className="text-center mt-5 text-sm">
          <p>
            Already have an account?{" "}
            <Link to="/login" className="text-green-300 hover:underline">
              Login
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Signup;
