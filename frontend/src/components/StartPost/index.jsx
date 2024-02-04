import React from "react";
import { IoMdPhotos, IoMdVideocam, IoMdText } from "react-icons/io";
import { FaFilePdf } from "react-icons/fa6";
import { useState } from "react";
import useAuth from "../../hooks/useAuth";

const StartPost = () => {
  const { user } = useAuth();
  const [FormData, setFormData] = useState({
    content: "",
    skill: "",
  });
  function changeHandler(event) {
    const { name, value, type } = event.target;

    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  }

  function submitHandler() { }
  return (
    <div className="w-full p-5 flex flex-col">
      <div className="flex mb-5 items-center">
        <img width={50} className="mr-4 rounded-full" src={user.photoURL ? user.photoURL : "/profilePhoto.png"}></img>
        <form className="w-full" onSubmit={submitHandler}>
          <div className="w-full">
            <textarea
              type="text"
              name="content"
              id="content"
              placeholder="What do you want to share ?"
              onChange={changeHandler}
              value={FormData.content}
              className="outline-none placeholder-LightPurple placeholder-opacity-80 bg-richblack-5 mt-5 text-lg px-4 py-3 rounded-2xl w-full no-underline resize-none"
            ></textarea>
          </div>
          {/* select skilll area */}
        </form>
      </div>

      <div className="flex justify-evenly">
        <button className="flex text-LightPurple items-center justify-center gap-1 border-r m-1 w-full">
          <IoMdPhotos />
          <p>Photo</p>
        </button>
        <button className="flex text-LightPurple items-center justify-center gap-1 m-1 w-full">
          <IoMdVideocam />
          <p>Video</p>
        </button>
        <button className="flex text-LightPurple items-center justify-center gap-1 border-l m-1 w-full">
          <FaFilePdf />
          <p>PDF</p>
        </button>
      </div>
    </div>
  );
};

export default StartPost;
