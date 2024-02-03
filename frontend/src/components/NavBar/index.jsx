import React from "react";
import SearchBar from "./SearchBar";
import ProfileIcon from "./ProfileIcon";

const NavBar = () => {
  return (
    <div className="flex w-full justify-between ">
      <SearchBar />
      <ProfileIcon />
    </div>
  );
};

export default NavBar;
