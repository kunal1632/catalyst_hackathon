import React from "react";
import { useState } from "react";

const SearchBar = () => {
  const [formData, setFormData] = useState({
    search: "",
  });

  function changeHandler(event) {
    const { name, value, type } = event.target;

    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  }

  function submitHandler(event) {
    event.preventDefault();
    console.log(formData);
  }
  return (
    <div className="bg-white w-full rounded-lg h-[55px] flex items-center mr-5">
      <form
        className="flex items-center gap-4 px-5 flex-grow"
        onSubmit={submitHandler}
      >
        <label htmlFor="search">
          <img src="/searchIcon.svg" width={20}></img>
        </label>
        <input
          type="text"
          name="search"
          id="search"
          placeholder="Search"
          value={formData.search}
          onChange={changeHandler}
          className="outline-none grow placeholder-purple w-full"
        ></input>
      </form>
    </div>
  );
};

export default SearchBar;
