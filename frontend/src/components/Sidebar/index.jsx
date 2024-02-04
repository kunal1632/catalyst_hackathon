import React from "react";
import "./index.css";
import { MdOutlineSupportAgent } from "react-icons/md";
import { FiInfo } from "react-icons/fi";
import { Link } from "react-router-dom";

const Sidebar = () => {
  return (
    <div className="bg-purple h-screen flex flex-col">
      <div className="">
        <img
          src="/logo.svg"
          width={50}
          height={50}
          className="ml-8 mt-8"
          alt=""
        />
      </div>
      <ul className="flex flex-col justify-center items-start pt-10 px-8 gap-10">
        <Link to={"/"}>
          <div className="flex flex-row gap-5 mr-5 cursor-pointer gradient-div">
            <img src="/HomeIcon.svg" width={20} height={20} alt="" />
            <li className="text-white font-bold hover:text-orange transition-all duration-200">
              Home
            </li>
          </div>
        </Link>

        <Link to={"/profile"}>
          <div className="flex flex-row gap-5 mr-5 cursor-pointer">
            <img src="/personIcon.svg" width={25} height={25} alt="" />
            <li className="text-white font-bold hover:text-orange transition-all duration-200">
              Profile
            </li>
          </div>
        </Link>
        <Link to={"/chats"}>
          <div className="flex flex-row gap-5 mr-5 cursor-pointer">
            <img src="/messageIcon.svg" width={20} height={20} alt="" />
            <li className="text-white font-bold hover:text-orange transition-all duration-200">
              Messages
            </li>
          </div>
        </Link>
        {/* <div>
                <img src="/profilIcon.svg" width={100} height={100} alt="" />
                <li className='text-white font-bold'>Search</li>
            </div> */}
        <Link to={"/edit-profile"}>
          <div className="flex flex-row gap-5 mr-5 cursor-pointer">
            <img src="/SettingIcon.svg" width={20} height={20} alt="" />
            <li className="text-white font-bold hover:text-orange transition-all duration-200">
              Edit Profile
            </li>
          </div>
        </Link>

        <Link to={"/about"}>
          <div className="flex flex-row gap-5 mr-5 cursor-pointer">
            <FiInfo className="text-white text-xl" />
            <li className="text-white font-bold hover:text-orange transition-all duration-200">
              About Us
            </li>
          </div>
        </Link>

        <Link to={"/contact"}>
          <div className="flex flex-row gap-5 mr-5 cursor-pointer">
            <MdOutlineSupportAgent className="text-white text-xl" />
            <li className="text-white font-bold hover:text-orange transition-all duration-200">
              Contact Us
            </li>
          </div>
        </Link>
      </ul>
    </div>
  );
};

export default Sidebar;
