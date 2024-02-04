import { MdEdit } from "react-icons/md";
import React, { useState } from "react";

const EditProfileSection = () => {
  const [formData, setFormData] = useState({
    email: "kunal.dk35@gmail.com",
    firstName: "Kunal",
    lastName: "Dhand",
    userName: "kunaldhand",
    skills: ["C++", "MERN", "DSA"],
    dob: "2002-03-16",
  });
  function changeHandler(event) {
    setFormData((prevData) => ({
      ...prevData,
      [event.target.name]: event.target.value,
    }));
  }
  function skillHandler(event) {
    setFormData((prevData) => ({
      ...prevData,
      skills: event.target.value.split(","),
    }));
  }
  function dpChangeHandler() {}
  function submitHandler() {}

  return (
    <div className="flex  bg-[#e5e5e5] flex-col ">
      <div className="flex relative bg-white rounded-md m-5">
        <div className="relative">
          <button
            onClick={dpChangeHandler}
            className="absolute bottom-9 right-10 bg-white rounded-full p-2 shadow-xl"
          >
            <MdEdit className="scale-125" />
          </button>
          <img className="p-5" src="/displayPhoto.png"></img>
        </div>
        <div className="flex flex-col justify-center ml-5">
          <p className="font-bold text-LightPurple text-xl">
            {formData.userName}
          </p>
          <p className="text-purple font-light">{formData.email}</p>
        </div>
        <button
          className="absolute right-10 bottom-10 bg-pink-500 text-white px-6 py-2 rounded-lg "
          onClick={submitHandler}
        >
          Update
        </button>
      </div>

      <form
        className="flex p-5 rounded-md flex-col bg-white m-5 gap-8 my-5"
        onSubmit={submitHandler}
      >
        <div className="flex items-center justify-between">
          <label className="w-1/3" htmlFor="firstName">
            First Name
          </label>
          <input
            className="bg-pink-100    w-full h-10 rounded-md p-5 text-LightPurple outline-LightPurple"
            type="text"
            id="firstName"
            name="firstName"
            placeholder={formData.firstName}
            value={formData.firstName}
            onChange={changeHandler}
          ></input>
        </div>
        <div className="flex items-center justify-between">
          <label className="w-1/3" htmlFor="lastName">
            Last Name
          </label>
          <input
            className="bg-pink-100   w-full h-10 rounded-md p-5 text-LightPurple outline-LightPurple"
            type="text"
            id="lastName"
            name="lastName"
            placeholder={formData.lastName}
            value={formData.lastName}
            onChange={changeHandler}
          ></input>
        </div>
        <div className="flex items-center justify-between">
          <label className="w-1/3" htmlFor="userName">
            User Name
          </label>
          <input
            className="bg-pink-100   w-full h-10 rounded-md p-5 text-LightPurple outline-LightPurple"
            type="text"
            id="userName"
            name="userName"
            placeholder={formData.userName}
            value={formData.userName}
            onChange={changeHandler}
          ></input>
        </div>
        <div className="flex items-center justify-between">
          <label className="w-1/3" htmlFor="email">
            Email Address
          </label>
          <input
            className="bg-pink-100  w-full h-10 rounded-md p-5 text-LightPurple outline-LightPurple"
            type="email"
            id="email"
            name="email"
            placeholder={formData.email}
            value={formData.email}
            onChange={changeHandler}
          ></input>
        </div>
        <div className="flex items-center justify-between">
          <label className="w-1/3" htmlFor="dob">
            Date of Birth
          </label>
          <input
            className="bg-pink-100   w-full h-10 rounded-md p-5 text-LightPurple outline-LightPurple"
            type="date"
            id="dob"
            name="dob"
            placeholder={formData.dob}
            value={formData.dob}
            onChange={changeHandler}
          ></input>
        </div>
        <div className="flex items-center justify-between">
          <label className="w-1/3" htmlFor="skills">
            SKills
          </label>
          <input
            className="bg-pink-100  w-full h-10 rounded-md p-5 text-LightPurple outline-LightPurple"
            type="text"
            id="skills"
            name="skills"
            placeholder={formData.skills}
            value={formData.skills}
            onChange={skillHandler}
          ></input>
        </div>
      </form>
    </div>
  );
};

export default EditProfileSection;
