import React from "react";
import YouMightKnow from "../../components/YouMightKnow";
import { PostList } from "../../components/PostList";
import NavBar from "../../components/NavBar";
import Sidebar from "../../components/Sidebar";
import StartPost from "../../components/StartPost";
import "./style.css";
import TagSection from "../../components/TagSection";

export const Home = () => {
  return (
    <div className="main-grid" id="home">
      <div className="grid-area-sidebar">
        <Sidebar />
      </div>
      <div className="inner-grid">
        <div className="grid-area-b">
          <NavBar />
        </div>
        <div className="grid-area-c">
          <StartPost />
        </div>
        <div className="grid-area-e">
          <PostList />
        </div>

        <div className="grid-area-g ">
          <TagSection />

          <YouMightKnow />
        </div>
      </div>
    </div>
  );
};
