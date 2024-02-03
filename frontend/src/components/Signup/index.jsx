import React from "react";
import { useState } from "react";
import { toast } from "react-hot-toast";
import { AiOutlineEyeInvisible, AiOutlineEye } from "react-icons/ai";
// import { useNavigate } from "react-router-dom";
import axios from 'axios';

const SignUp = () => {

    // const navigate = useNavigate();

    const [formData , setFormData] = useState({
        Name:"",
        email:"",
        password:"",
        confirmPassword:""
    })
    // const [loading , setLoading] = useState(false);
    const [showPassword , setShowPassword] = useState(false);
    const [showConfirmPassword, setShowConfirmPassword] = useState(false);

    function changeHandler(event) {
        setFormData((prevData)=>( {
            ...prevData,
            [event.target.name]:event.target.value
        }
        ))
    }

    const submitHandler = async () => {
    try {
      if (formData.password !== formData.confirmPassword) {
      toast.warning("Password and Confirm Password do not match");
      return; // Prevent further execution
      }

      const config = {
        headers: {
          "Content-Type": "application/json",
        },
      };

      // setLoading(true);

      const { data } = await axios.post(
        "/api/v1/user",
        {
          name: formData.Name,
          email: formData.email,
          password: formData.password,
        },
        config
      );

      toast.success("Registration Successful");

      // Assuming that your backend returns a user object with a token
      localStorage.setItem("userInfo", JSON.stringify(data));

      // Navigate to the chat page
      
    //   navigate("/chats");
    } catch (error) {
      console.error("Error during signup:", error);
      toast.error("Error Occurred");
    }
  };


  return (
    <div>
      <div>
            <form 
            className="flex flex-col w-full gap-y-4 mt-6"
            >
                <div className="flex gap-x-4 mt-[10px]">
                    <label className="w-full text-[0.875rem] text-black mb-1 leading-[1.375rem]">
                        <p className="font-bold">
                            Name<sup className="text-pink-200">*</sup>
                        </p>

                        <input
                        required
                        type="text"
                        name="Name"
                        onChange={changeHandler}
                        placeholder="Enter First Name"
                        value={formData.firstName}
                        className="bg-richblack-800 rounded-[0.5rem] text-richblack-5 w-full p-[12px]"
                        />

                    </label>
                </div>

                <label className="mt-[10px] w-full text-[0.875rem] text-black mb-1 leading-[1.375rem]">
                    <p className="font-bold">
                        Email Address<sup className="text-pink-200">*</sup>
                    </p>

                    <input
                    required
                    type="email"
                    name="email"
                    onChange={changeHandler}
                    placeholder="Enter email address"
                    value={formData.email}
                    className="bg-richblack-800 rounded-[0.5rem] text-richblack-5 w-full p-[12px]"
                    />

                </label>

                <div className="flex gap-x-4 mt-[10px]">
                    <label className="w-full relative text-[0.875rem] text-black  mb-1 leading-[1.375rem]">
                        <p className="font-bold">
                            Create Password<sup className="text-pink-200">*</sup>
                        </p>

                        <input
                        required
                        type={showPassword ? ("text") : ("password")}
                        name="password"
                        onChange={changeHandler}
                        placeholder="Enter Password"
                        value={formData.password}
                        className="bg-richblack-800 rounded-[0.5rem] text-richblack-5 w-full p-[12px]"
                        />
                        
                        <span className="absolute right-3 top-[38px] cursor-pointer" onClick={() => setShowPassword((prev) => !prev)}>
                        {showPassword ? (<AiOutlineEyeInvisible fontSize={24} fill="#AFB2BF"/>) :
                         (<AiOutlineEye fontSize={24} fill="#AFB2BF"/>) }
                        </span>

                    </label>

                    <label className="w-full relative text-[0.875rem] text-black mb-1 leading-[1.375rem]">
                        <p className="font-bold">
                            Confirm Password<sup className="text-pink-200">*</sup>
                        </p>

                        <input
                        required
                        type={showConfirmPassword ? ("text") : ("password")}
                        name="confirmPassword"
                        onChange={changeHandler}
                        placeholder="Confirm Password"
                        value={formData.confirmPassword}
                        className="bg-richblack-800 rounded-[0.5rem] text-richblack-5 w-full p-[12px]"
                        />

                        <span className="absolute right-3 top-[38px] cursor-pointer" onClick={() => setShowConfirmPassword((prev) => !prev)}>
                        {showConfirmPassword ? (<AiOutlineEyeInvisible fontSize={24} fill="#AFB2BF"/>) :
                         (<AiOutlineEye fontSize={24} fill="#AFB2BF"/>) }
                        </span>

                    </label>
                </div>
                <button 
                  onClick={submitHandler}
                  className="bg-orange text-richblack-900 rounded-xl font-medium px-[12px] py-[8px] mt-6">
                    Create Account
                </button>

            </form>

        </div>
    </div>
  )
}

export default SignUp;
