import React from "react";
import About from "../../components/About";
import YouMightKnow from "../../components/YouMightKnow";
import Active from "../../components/Active";
import { PostList } from "../../components/PostList";
import { ProfileTabs } from "../../components/ProfileTabs";
import NavBar from "../../components/NavBar";
import YourProfile from "../../components/YourProfile";
import Sidebar from "../../components/Sidebar";
import "./style.css";

export const Profile = () => {
  return (
    <div className="main-grid " id="profile">
      <div className="grid-area-sidebar">
        <Sidebar />
      </div>
      <div className="inner-grid">
        <div className="grid-area-b">
          <NavBar />
        </div>
        <div className="grid-area-c">
          <YourProfile />
        </div>
        <div className="grid-area-e">
          <ProfileTabs />
          <PostList />
        </div>
        <div className="grid-area-f">
          <About />
          <div className="mt-4" />

          <YouMightKnow />
        </div>
        <div></div>
      </div>
    </div>
  );
};
