import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import Button from "../../Components/Button/Button";
import axios from "axios";

const SignUp = () => {
  const [formData, setFormData] = useState({
    username: "",
    email: "",
    password: "",
  });
  const [error, setError] = useState(null);
  const navigate = useNavigate(); 

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await axios.post("https://cors-anywhere.herokuapp.com/https://api.medicaments-dz.com/api/register/", formData);
      setError(null);
      navigate("/login"); 
    } catch (err) {
      setError(err.response ? err.response.data.detail : "Registration failed try later ");
    }
  };

  return (
    <div className="font-[sans-serif]">
      <div className="min-h-screen flex fle-col items-center justify-center py-6 px-4 bg-gray-50">
        <div className="grid md:grid-cols-2 items-center gap-10 max-w-6xl w-full">
          <div>
            <Link to="/">
              <img
                src={
                  "https://i.ibb.co/wy6PX7L/conception-du-logo-du-medecin-pharmaceutique-medical-2gf7j3t-removebg-preview.png"
                }
                alt="logo"
                className="w-40 mb-8 block"
              />
            </Link>
            <h2 className="lg:text-5xl text-4xl font-extrabold lg:leading-[55px] text-gray-800">
              Seamless Login for Exclusive Access
            </h2>
            <p className="text-sm mt-6 text-gray-800">
              Immerse yourself in a hassle-free login journey with our
              intuitively designed login form. Effortlessly access your account.
            </p>
            <p className="text-sm mt-12 text-gray-800">
              Don&apos;t have an account{" "}
              <Link
                to="/login"
                className="text-[#0F6592] font-semibold hover:underline ml-1"
              >
                Log In
              </Link>
            </p>
          </div>
          <form className="max-w-md md:ml-auto w-full" onSubmit={handleSubmit}>
            <h3 className="text-gray-800 text-3xl font-extrabold mb-8">
              Sign up
            </h3>
            <div className="space-y-4">
              <div>
                <label className="text-gray-800 text-sm mb-2 block">
                  User name
                </label>
                <div className="relative flex items-center">
                  <input
                    name="username"
                    type="text"
                    required
                    className="w-full text-gray-800 text-sm border border-gray-300 px-4 py-3 rounded-md outline-gray-300"
                    placeholder="Enter user name"
                    value={formData.username}
                    onChange={handleChange}
                  />
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="#bbb"
                    stroke="#bbb"
                    className="w-4 h-4 absolute right-4"
                    viewBox="0 0 24 24"
                  >
                    <circle
                      cx="10"
                      cy="7"
                      r="6"
                      data-original="#000000"
                    ></circle>
                    <path
                      d="M14 15H6a5 5 0 0 0-5 5 3 3 0 0 0 3 3h12a3 3 0 0 0 3-3 5 5 0 0 0-5-5zm8-4h-2.59l.3-.29a1 1 0 0 0-1.42-1.42l-2 2a1 1 0 0 0 0 1.42l2 2a1 1 0 0 0 1.42 0 1 1 0 0 0 0-1.42l-.3-.29H22a1 1 0 0 0 0-2z"
                      data-original="#000000"
                    ></path>
                  </svg>
                </div>
              </div>
              <div>
                <label className="text-gray-800 text-sm mb-2 block">
                  Email
                </label>
                <div className="relative flex items-center">
                  <input
                    name="email"
                    type="email"
                    required
                    className="w-full text-gray-800 text-sm border border-gray-300 px-4 py-3 rounded-md outline-gray-300"
                    placeholder="Enter email"
                    value={formData.email}
                    onChange={handleChange}
                  />
                </div>
              </div>

              <div>
                <label className="text-gray-800 text-sm mb-2 block">
                  Password
                </label>
                <div className="relative flex items-center">
                  <input
                    name="password"
                    type="password"
                    required
                    className="w-full text-gray-800 text-sm border border-gray-300 px-4 py-3 rounded-md outline-gray-300"
                    placeholder="Enter password"
                    value={formData.password}
                    onChange={handleChange}
                  />
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="#bbb"
                    stroke="#bbb"
                    className="w-4 h-4 absolute right-4 cursor-pointer"
                    viewBox="0 0 128 128"
                  >
                    <path
                      d="M64 104C22.127 104 1.367 67.496.504 65.943a4 4 0 0 1 0-3.887C1.367 60.504 22.127 24 64 24s62.633 36.504 63.496 38.057a4 4 0 0 1 0 3.887C126.633 67.496 105.873 104 64 104zM8.707 63.994C13.465 71.205 32.146 96 64 96c31.955 0 50.553-24.775 55.293-31.994C114.535 56.795 95.854 32 64 32 32.045 32 13.447 56.775 8.707 63.994zM64 88c-13.234 0-24-10.766-24-24s10.766-24 24-24 24 10.766 24 24-10.766 24-24 24zm0-40c-8.822 0-16 7.178-16 16s7.178 16 16 16 16-7.178 16-16-7.178-16-16-16z"
                      data-original="#000000"
                    ></path>
                  </svg>
                </div>
              </div>
              <div className="flex flex-wrap items-center justify-between gap-4">
                <div className="flex items-center">
                  <input
                    id="remember-me"
                    name="remember-me"
                    type="checkbox"
                    className="h-4 w-4 text-blue-600 focus:ring-blue-500 border-gray-300 rounded"
                  />
                  <label
                    htmlFor="remember-me"
                    className="ml-3 block text-sm text-gray-800"
                  >
                    Remember me
                  </label>
                </div>
                <div className="text-sm">
                  <Link
                    to="/"
                    className="text-[#0F6592] hover:text-blue-500 font-semibold"
                  >
                    Forgot your password?
                  </Link>
                </div>
              </div>
            </div>
            {error && <div className="text-red-500 mt-4">{error}</div>}
            <div className="!mt-8">
              <Button
                text="sign up"
                className="w-full transition-all hover:bg-[#565E6D] hover:text-[#fff]"
              />
            </div>
          
          </form>
        </div>
      </div>
    </div>
  );
};

export default SignUp;
