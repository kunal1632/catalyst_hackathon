import React from 'react'

const Chat = () => {
  return (
    <div className='flex flex-row bg-purple w-90 cursor-pointer
     gap-5'>
      <img src="avatar.png"width={90} height={90} alt="" />
      <div className='flex flex-col justify-center items-start'>
        <h1 className='font-bold text-white text-xl'>Shashank</h1>
        <p className='text-richblack-200 text-sm '>Last message</p>
      </div>
    </div>
  )
}

export default Chat
