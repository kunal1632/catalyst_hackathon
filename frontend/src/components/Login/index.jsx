import React, { useState } from "react";
import { AiOutlineEyeInvisible, AiOutlineEye } from "react-icons/ai";
import { Link, useNavigate } from "react-router-dom";
import { toast } from "react-hot-toast";
import { FcGoogle } from "react-icons/fc";
import useAuth from "../../hooks/useAuth";

const LogIn = () => {
  const { isLoading, login, loginErrors, resetPassword, googleSignIn } =
    useAuth();

  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });

  function submitHandler(e) {
    e.preventDefault();
    login(formData.email, formData.password);
  }

  function handleForgetPassword() {
    const enteredEmail = window.prompt("Enter your email address:");
    if (enteredEmail) {
      resetPassword(enteredEmail);
    }
  }

  function changeHandler(event) {
    setFormData((prevData) => ({
      ...prevData,
      [event.target.name]: event.target.value,
    }));
  }

  function handleGoogleSignIn(e) {
    e.preventDefault();
    googleSignIn();
  }

  const [showPassword, setShowPassword] = useState(false);

  return (
    <form className="flex flex-col w-full gap-y-4 mt-6">
      <label className="w-full">
        <p className="text-[0.875rem] text-black mb-1 leading-[1.375rem] font-bold">
          Email Address<sup className="text-pink-200">*</sup>
        </p>
        <input
          required
          type="text"
          value={formData.email}
          onChange={changeHandler}
          placeholder="Enter your email"
          name="email"
          className="bg-richblack-800 rounded-[0.5rem] text-richblack-5 w-full p-[12px]"
        />
      </label>

      <label className=" relative w-full">
        <p className="text-[0.875rem] text-black mb-1 leading-[1.375rem] font-bold">
          Password<sup className="text-pink-200">*</sup>
        </p>
        <input
          required
          type={showPassword ? "text" : "password"}
          value={formData.password}
          onChange={changeHandler}
          placeholder="Enter password"
          name="password"
          className="bg-richblack-800 rounded-[0.5rem] text-richblack-5 w-full p-[12px]"
        />

        <span
          className="absolute right-3 top-[38px] cursor-pointer"
          onClick={() => setShowPassword((prev) => !prev)}
        >
          {showPassword ? (
            <AiOutlineEyeInvisible fontSize={24} fill="#AFB2BF" />
          ) : (
            <AiOutlineEye fontSize={24} fill="#AFB2BF" />
          )}
        </span>

        {loginErrors ? <div className="text-red-800">{loginErrors}</div> : null}

        <button
          onClick={handleForgetPassword}
          type="button"
          className="text-xs mt-1 text-blue-100 max-w-max ml-auto"
        >
          Forgot Password
        </button>
      </label>

      <button
        disabled={isLoading}
        onClick={submitHandler}
        className="bg-orange text-richblack-900 rounded-xl font-medium px-[12px] py-[8px] mt-6"
      >
        {isLoading ? "Signing In" : "Sign In"}
      </button>
      <div className="flex w-full items-center my-4 gap-x-2">
        <div className="w-full h-[1px] bg-richblack-700"></div>
        <p className="text-richblack-700 font-medium leading[1.375rem]">OR</p>
        <div className="w-full h-[1px] bg-richblack-700"></div>
      </div>
      <button
        onClick={handleGoogleSignIn}
        className="w-full flex justify-center item-center rounded-[8px] font-medium text-black 
            bg-orange border border-richblack-700 px-[12px] py-[8px] gap-x-2 mt-6 "
      >
        <FcGoogle />
        <p>Sign up with Google</p>
      </button>
    </form>
  );
};

export default LogIn;
