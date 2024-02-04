import React, { useEffect, useState } from "react";
import About from "../../components/About";
import YouMightKnow from "../../components/YouMightKnow";
import Active from "../../components/Active";
import { Post } from "../../components/Post";
import { ProfileTabs } from "../../components/ProfileTabs";
import NavBar from "../../components/NavBar";
import YourProfile from "../../components/YourProfile";
import Sidebar from "../../components/Sidebar";
import "./style.css";
import useFollow from "../../hooks/useFollow";
import useProfile from "../../hooks/useProfile";
import useAuth from "../../hooks/useAuth";
import { useParams } from 'react-router-dom';

export const Profile = () => {
  const { follow, unFollow, getFollowers, getFollowings } = useFollow();
  const { getUser } = useProfile();
  const { user } = useAuth();
  let params = useParams();
  const [userData, setUserData] = useState({});
  const [userFollowers, setUserFollowers] = useState({});
  const [userFollowings, setUserFollowings] = useState([]);
  const data = [
    { "username": "Ayush Munot", "avatar": "/profile1.svg", text: "React is a free and open-source front-end JavaScript library for building user interfaces based on components.", image: "" },
    { "username": "Ayush Munot", "avatar": "/profile2.svg", text: "JavaScript, often abbreviated as JS, is a programming language and core technology of the World Wide Web, alongside HTML and CSS." },
    { "username": "Ayush Munot", "avatar": "/profile3.svg", text: "ES6 stands for ECMAScript 6. ECMAScript was created to standardize JavaScript, and ES6 is the 6th version of ECMAScript, it was published in 2015, and is also known as ECMAScript 2015.", },
    { "username": "Ayush Munot", "avatar": "/profile3.svg", text: "ES6 stands for ECMAScript 6. ECMAScript was created to standardize JavaScript, and ES6 is the 6th version of ECMAScript, it was published in 2015, and is also known as ECMAScript 2015.", },
  ];

  useEffect(() => {
    getUser(params.user_id).then((data) => setUserData(data)).catch((e) => console.log("err", e));
    getFollowers(params.user_id).then((data) => setUserFollowers(data));
    getFollowings(params.user_id).then((data) => setUserFollowings(data));

    return () => { }
  }, [])

  const handleFollowUnfollow = async () => {
    if (userFollowers.isFollowing) {
      await unFollow(params.user_id);
    } else {
      await follow(params.user_id)
    }
    getFollowers(params.user_id).then((data) => setUserFollowers(data));
  }

  console.log("userFollowers", userFollowers);

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
          <YourProfile isMe={!params.user_id && params.user_id !== user.uid} user={userData} isFollowing={userFollowers.isFollowing} handleFollowUnfollow={handleFollowUnfollow} />
        </div>
        <div className="grid-area-e">
          <ProfileTabs />
          {/* <PostList /> */}
          <div className='post-list'>
            {data.map((item, index) => <Post key={index} avatar={item.avatar} text={item.text} username={item.username} />)}
          </div>
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
