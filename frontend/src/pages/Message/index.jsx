import { React, useState } from 'react';
import Sidebar from '../../components/Sidebar';
import Chat from '../../components/Chat';
import { IoSendSharp } from "react-icons/io5";
import { MdGif } from "react-icons/md";
import { FaLocationDot } from "react-icons/fa6";

const Chats = () => {
  const name = "Kunal Dhand";
  const newMessage = "no new message";
  const [userType, setUserType] = useState("Primary");

  return (
    <div className='flex flex-row gap-20 '>
      <Sidebar />
      <div className='flex flex-col w-full p-10 gap-y-10 rounded-xl'>
        <div className='flex flex-row bg-purple rounded-lg relative gap-24 justify-evenly h-16'>
          <h1 className='absolute text-white text-2xl p-5 left-0'>Chats</h1>
          <label htmlFor="search">
            <img src="searchIcon.svg" width={30} className="absolute left-64 z-10 top-8 transform -translate-y-1/2" />
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
        <div className='flex flex-row gap-16'>
          <div className='flex flex-col relative w-96 h-[800px] bg-purple px-5 overflow-scroll'>
            <div className='flex flex-row gap-10 p-5'>
              <h1 className='text-richblack-200 text-2xl font-bold'>Inbox</h1>
              <p className='text-white bg-pink-700 px-2 rounded-xl'>{newMessage}</p>
            </div>

            <div className='flex border-none rounded-xl'>
              <button
                onClick={() => setUserType("Primary")}
                className={`${
                  userType === "Primary"
                    ? "bg-orange"
                    : "bg-richblack-200"
                } w-[50%] h-[100%] rounded-full text-black font-bold text-xl p-3 `}
              >
                Primary
              </button>

              <button
                onClick={() => setUserType("Group")}
                className={`${
                  userType === "Group"
                    ? "bg-orange"
                    : "bg-richblack-200"
                } w-[50%] h-[100%] rounded-full text-black font-bold text-xl p-3 `}
              >
                Group
              </button>
            </div>
            <Chat />
            
          </div>
          <div className='flex flex-col bg-purple w-[1180px]'>
                <div className="flex flex-row [450px] items-center gap-10 p-10 text-white absolute top-30 ">
                    <img src="profilePhoto.png" />
                    <div className="text-[1.25rem]  font-bold ">
                    Shashank
                    <br />
                    <button className="font-normal ">active</button>
                </div>
          </div>
                <div>
                    <div className='absolute bottom-0 right-28 w-[1000px] h-[650px] bg-richblack-200'>
                        <div>
                            <div className='flex flex-row '>
                                <img src="avatar.png" alt="" width={50} className='absolute top-[415px]'/>
                                <div className='bg-richblack-700 p-2 rounded-xl w-48 h-10 absolute top-[440px] left-12 text-white px-5'>
                                    hey!! How are you ??
                                </div>
                            </div>
                            <div className='bg-richblack-700 p-2 rounded-xl w-70 h-10 absolute top-[490px] right-12 text-white px-5'>
                                I am fine and what about you ?
                            </div>
                            <div className='flex flex-row '>
                                <img src="avatar.png" alt="" width={50} className='absolute top-[515px]'/>
                                <div className='bg-richblack-700 p-2 rounded-xl w-48 h-10 absolute top-[540px] left-12 text-white px-5'>
                                    i am also fine
                                </div>
                            </div>
                            {/* <div className='relative flex flex-row '> */}
                                <label htmlFor="search">
                                    
                                </label>
                                <input
                                    type="text"
                                    name="search"
                                    id="search"
                                    placeholder="Write Message"
                                    className="outline-none absolute left-16 placeholder-purple w-[800px] h-[50px] mt-3 px-10 rounded-lg pl-5 bottom-3"
                                />
                                <button className='absolute bottom-8 right-3'><IoSendSharp className='text-3xl'/></button>
                                <button className='absolute bottom-5 right-10'><MdGif className='text-6xl'/></button>
                                <button className='absolute bottom-8 right-24'><FaLocationDot className='text-3xl'/></button>
                            {/* </div> */}
                            

                        </div>
                    </div>
                </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Chats;
