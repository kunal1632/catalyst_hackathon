import React from "react";
import EditProfileSection from "./EditProfileSection";
import Sidebar from "../../components/Sidebar";
import NavBar from "../../components/NavBar";
import "./editprofile.css";

const EditProfile = () => {
  return (
    <div className="main-grid" id="editProfile">
      <div className="grid-area-sidebar">
        <Sidebar />
      </div>
      <div className="inner-grid">
        <div className="grid-area-b">
          <NavBar />
          <EditProfileSection />
        </div>
        <div className="grid-area-c"></div>
      </div>
    </div>
  );
};

export default EditProfile;
