import React from "react";
import useAuth from "../../hooks/useAuth";

const ProfileIcon = () => {
  const { logout } = useAuth();

  const handleLogout = () => {
    const confirmLogout = window.confirm('Are you sure you want to logout?');
    if (confirmLogout) {
      logout();
    }
  }

  const name = "Kunal Dhand";
  return (
    <div className="flex w-[175px] items-center gap-2">
      <div className="text-[0.75rem] text-purple font-bold">
        {name}
        <br></br>
        <button onClick={handleLogout} className="font-normal">Log out</button>
      </div>
      <img src="profilePhoto.png" height={60} width={60} className="navbar-avatar"></img>
    </div>
  );
};

export default ProfileIcon;
