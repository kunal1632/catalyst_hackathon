import React from "react";

const ProfileIcon = () => {
  const name = "Kunal Dhand";
  return (
    <div className="flex w-[175px] items-center gap-2">
      <div className="text-[0.75rem] text-purple font-bold">
        {name}
        <br></br>
        <button className="font-normal">Log out</button>
      </div>
      <img src="profilePhoto.png" height={60} width={60} className="navbar-avatar"></img>
    </div>
  );
};

export default ProfileIcon;
