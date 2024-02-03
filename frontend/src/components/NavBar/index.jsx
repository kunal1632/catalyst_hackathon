import React from "react";
import SearchBar from "./SearchBar";
import ProfileIcon from "./ProfileIcon";

const NavBar = () => {
  return (
    <div className="flex w-full justify-between py-5 px-5">
      <SearchBar />
      <ProfileIcon />
    </div>
  );
};

export default NavBar;
