import { React, useState } from "react";
import Sidebar from "../../components/Sidebar";
import Chat from "../../components/Chat";

const Chats = () => {
  const name = "Kunal Dhand";
  const newMessage = "3 New";
  const [userType, setUserType] = useState("Primary");

  return (
    <div className="flex flex-row gap-7 ">
      <div>
        <Sidebar />
      </div>
      <div className="flex flex-col w-full p-10 gap-y-10 rounded-xl">
        <div className="flex flex-row bg-purple rounded-lg relative gap-24 justify-evenly h-16">
          <h1 className="absolute text-white text-2xl p-5 left-0">Chats</h1>
          <label htmlFor="search">
            <img
              src="searchIcon.svg"
              width={30}
              className="absolute left-64 z-10 top-8 transform -translate-y-1/2"
            />
          </label>
          <input
            type="text"
            name="search"
            id="search"
            placeholder="Search"
            className="outline-none absolute left-60 placeholder-purple w-[300px] h-[40px] mt-3 px-10 rounded-lg pl-12"
          />

          <div className="flex w-[175px] items-center gap-2 right-0 absolute">
            <img src="profilePhoto.png" />
            <div className="text-[0.75rem] text-white font-bold ">
              {name}
              <br />
              <button className="font-normal text-white">Log out</button>
            </div>
          </div>
        </div>
        <div className="flex flex-row gap-16">
          <div className="flex flex-col relative w-96 h-[800px] bg-purple px-5 overflow-scroll">
            <div className="flex flex-row gap-10 p-5">
              <h1 className="text-richblack-200 text-2xl font-bold">Inbox</h1>
              <p className="text-white bg-pink-700 px-2 rounded-xl">
                {newMessage}
              </p>
            </div>

            <div className="flex border-none rounded-xl">
              <button
                onClick={() => setUserType("Primary")}
                className={`${
                  userType === "Primary" ? "bg-orange" : "bg-richblack-200"
                } w-[50%] h-[100%] rounded-full text-black font-bold text-xl p-3 `}
              >
                Primary
              </button>

              <button
                onClick={() => setUserType("Group")}
                className={`${
                  userType === "Group" ? "bg-orange" : "bg-richblack-200"
                } w-[50%] h-[100%] rounded-full text-black font-bold text-xl p-3 `}
              >
                Group
              </button>
            </div>
            <Chat />
            {/* <Chat />
            <Chat />
            <Chat />
            <Chat />
            <Chat />
            <Chat />
            <Chat /> */}
          </div>
          <div className="flex flex-row bg-purple w-[1180px]">
            <div className="flex w-[450px] items-center gap-10 absolute p-10 text-white">
              <img src="profilePhoto.png" />
              <div className="text-[1.25rem]  font-bold ">
                Shashank
                <br />
                <button className="font-normal ">active</button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Chats;
