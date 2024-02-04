import React from "react";
import { useState } from "react";
import { toast } from "react-hot-toast";
import { AiOutlineEyeInvisible, AiOutlineEye } from "react-icons/ai";
// import { useNavigate } from "react-router-dom";
import { FcGoogle } from "react-icons/fc";
import useAuth from "../../hooks/useAuth";

const SignUp = () => {

    // const navigate = useNavigate();

    const { isRegistering, register, registerErrors, googleSignIn } = useAuth();

    const [formData, setFormData] = useState({
        firstName: "",
        lastName: "",
        email: "",
        password: "",
        confirmPassword: "",
    })
    const [showPassword, setShowPassword] = useState(false);
    const [showConfirmPassword, setShowConfirmPassword] = useState(false);

    function changeHandler(event) {
        setFormData((prevData) => ({
            ...prevData,
            [event.target.name]: event.target.value
        }
        ))
    }

    function submitHandler(e) {
        e.preventDefault();
        register(formData.firstName, formData.lastName, formData.email, formData.password, formData.confirmPassword);
    }

    function handleGoogleSignIn(e) {
        e.preventDefault();
        googleSignIn();
    }

    return (
        <div>
            <div>
                <form
                    onSubmit={submitHandler}
                    className="flex flex-col w-full gap-y-4 mt-6"
                >
                    <div className="flex gap-x-4 mt-[10px]">
                        <label className="w-full text-[0.875rem] text-black mb-1 leading-[1.375rem]">
                            <p className="font-bold">
                                First Name<sup className="text-pink-200">*</sup>
                            </p>

                            <input
                                required
                                type="text"
                                name="firstName"
                                onChange={changeHandler}
                                placeholder="Enter First Name"
                                value={formData.firstName}
                                className="bg-richblack-800 rounded-[0.5rem] text-richblack-5 w-full p-[12px]"
                            />

                        </label>
                        <label className="w-full text-[0.875rem] text-black mb-1 leading-[1.375rem]">
                            <p className="font-bold">
                                Last Name<sup className="text-pink-200">*</sup>
                            </p>

                            <input
                                required
                                type="text"
                                name="lastName"
                                onChange={changeHandler}
                                placeholder="Enter Last Name"
                                value={formData.lastName}
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
                                {showPassword ? (<AiOutlineEyeInvisible fontSize={24} fill="#AFB2BF" />) :
                                    (<AiOutlineEye fontSize={24} fill="#AFB2BF" />)}
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
                                {showConfirmPassword ? (<AiOutlineEyeInvisible fontSize={24} fill="#AFB2BF" />) :
                                    (<AiOutlineEye fontSize={24} fill="#AFB2BF" />)}
                            </span>

                        </label>
                    </div>
                    {registerErrors ? <div className="text-red-800">{registerErrors}</div> : null}
                    <button
                        disabled={isRegistering}
                        type="submit"
                        className="bg-orange text-richblack-900 rounded-xl font-medium px-[12px] py-[8px] mt-6">
                        {isRegistering ? "Creating..." : "Create Account"}
                    </button>
                    <div className="flex w-full items-center my-4 gap-x-2">
                        <div className="w-full h-[1px] bg-richblack-700"></div>
                        <p className="text-richblack-700 font-medium leading[1.375rem]">OR</p>
                        <div className="w-full h-[1px] bg-richblack-700"></div>
                    </div>
                    <button onClick={handleGoogleSignIn} className="w-full flex justify-center item-center rounded-[8px] font-medium text-black 
                bg-orange border border-richblack-700 px-[12px] py-[8px] gap-x-2 mt-6 ">
                        <FcGoogle />
                        <p>Sign up with Google</p>
                    </button>

                </form>

            </div>
        </div>
    )
}

export default SignUp;
