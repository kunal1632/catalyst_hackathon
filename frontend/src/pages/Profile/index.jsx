import React, { useEffect, useState } from "react";
import About from "../../components/About";
import YouMightKnow from "../../components/YouMightKnow";
import { PostList } from "../../components/PostList";
import { ProfileTabs } from "../../components/ProfileTabs";
import NavBar from "../../components/NavBar";
import YourProfile from "../../components/YourProfile";
import Sidebar from "../../components/Sidebar";
import "./style.css";
import useFollow from "../../hooks/useFollow";
import useProfile from "../../hooks/useProfile";
import useAuth from "../../hooks/useAuth";
import { useParams } from "react-router-dom";

export const Profile = () => {
  const { follow, unFollow, getFollowers, getFollowings } = useFollow();
  const { getUser } = useProfile();
  const { user } = useAuth();
  let params = useParams();
  const [userData, setUserData] = useState({});
  const [userFollowers, setUserFollowers] = useState({});
  const [userFollowings, setUserFollowings] = useState([]);

  useEffect(() => {
    getUser(params.user_id)
      .then((data) => setUserData(data))
      .catch((e) => console.log("err", e));
    getFollowers(params.user_id).then((data) => setUserFollowers(data));
    getFollowings(params.user_id).then((data) => setUserFollowings(data));

    return () => {};
  }, []);

  const handleFollowUnfollow = async () => {
    if (userFollowers.isFollowing) {
      await unFollow(params.user_id);
    } else {
      await follow(params.user_id);
    }
    getFollowers(params.user_id).then((data) => setUserFollowers(data));
  };

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
          <YourProfile
            isMe={!params.user_id && params.user_id !== user.uid}
            user={userData}
            isFollowing={userFollowers.isFollowing}
            handleFollowUnfollow={handleFollowUnfollow}
          />
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
