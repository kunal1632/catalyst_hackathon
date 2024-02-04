import React from "react";

const YourProfile = ({ user = {}, isFollowing = false, handleFollowUnfollow = null }) => {
  const name = user.displayName;
  const skills = "DSA MERN";
  return (
    <div className="flex flex-col justify-between bg-white rounded-lg">
      <div className="flex  relative">
        <img src="/coverPhoto.png" className="w-full"></img>
        <button className="absolute bg-white text-LightPurple px-[1rem] py-[0.5rem] rounded-lg outline-none bottom-7 right-7 hover:scale-110 hover:opacity-95 transition-all duration-150 border border-LightPurple">
          Edit Cover Photo
        </button>
        <img
          className="absolute left-9 -bottom-10 rounded-full"
          src={user.photoURL ? user.photoURL : "/displayPhoto.png"}
          width="179px"
        ></img>
      </div>

      <div className="flex px-5 pb-5 justify-between mt-10 ml-48">
        <div className="text-LightPurple">
          <p className="font-bold text-xl">{name}</p>
          <p className="text-sm">{skills}</p>
        </div>

        <div className="flex items-center gap-3">
          <button className="bg-LightPurple text-white rounded-full p-[0.5rem] outline-none bottom-7 right-7 hover:scale-110 hover:opacity-95 transition-all duration-150">
            {" "}
            <img width={23} src="/messageIcon.svg"></img>
          </button>
          <button onClick={handleFollowUnfollow} className=" bg-LightPurple text-white px-[2.5rem] py-[0.5rem] rounded-lg outline-none bottom-7 right-7 hover:scale-110 hover:opacity-95 transition-all duration-150">
            {isFollowing ? "Unfollow" : "Follow"}
          </button>
          <button className="bg-white text-LightPurple px-[1rem] py-[0.5rem] rounded-lg outline-none bottom-7 right-7 hover:scale-110 hover:opacity-95 transition-all duration-150 border border-LightPurple">
            Schedule a meeting
          </button>
        </div>
      </div>
    </div>
  );
};

export default YourProfile;
