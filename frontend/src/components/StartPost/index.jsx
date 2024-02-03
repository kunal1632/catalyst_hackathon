import React from "react";
import { IoMdPhotos, IoMdVideocam, IoMdText } from "react-icons/io";

const StartPost = () => {
  return (
    <div className="w-full p-5 flex flex-col">
      <div className="flex mb-5">
        <img width={50} className="mr-4" src="./profilePhoto.png"></img>
        <button className="border-2 w-full rounded-3xl m-1 text-LightPurple">
          Post a Skill...
        </button>
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
          <IoMdText />
          <p>Artical</p>
        </button>
      </div>
    </div>
  );
};

export default StartPost;
