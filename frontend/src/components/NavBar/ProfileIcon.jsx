import React from "react";
import useAuth from "../../hooks/useAuth";
import { Link } from "react-router-dom";

const ProfileIcon = () => {
  const { logout, user } = useAuth();

  const handleLogout = () => {
    const confirmLogout = window.confirm("Are you sure you want to logout?");
    if (confirmLogout) {
      logout();
    }
  };

  const name = user.displayName;
  return (
    <div className="flex w-[175px] items-center gap-2">
      <div className="text-[0.75rem] text-purple font-bold">
        {name}
        <br></br>
        <button onClick={handleLogout} className="font-normal">
          Log out
        </button>
      </div>
      <Link to="/profile/">
        <img src={user.photoURL ? user.photoURL : "/profilePhoto.png"} height={60} width={60} className="navbar-avatar"></img>
      </Link>
    </div>
  );
};

export default ProfileIcon;
