import React from 'react'

const Sidebar = () => {
  return (
      <div className='bg-purple h-screen flex flex-col'>
        <div className=''>
            <img src="logo.png" width={200} height={50}className='' alt="" />
        </div>
          <ul className='flex flex-col justify-center items-start p-10 gap-10'>
            <div className='flex flex-row gap-5 mr-5 cursor-pointer '>
                <img src="HomeIcon.svg" width={20} height={20} alt="" />
                <li className='text-white font-bold hover:text-orange transition-all duration-200'>Home</li>
            </div>
            <div className='flex flex-row gap-5 mr-5 cursor-pointer'>
                <img src="personIcon.svg" width={25} height={25} alt="" />
                <li className='text-white font-bold hover:text-orange transition-all duration-200'>Profile</li>
            </div>
            <div className='flex flex-row gap-5 mr-5 cursor-pointer'>
                <img src="messageIcon.svg" width={20} height={20} alt="" />
                <li className='text-white font-bold hover:text-orange transition-all duration-200'>Messages</li>
            </div>
            {/* <div>
                <img src="profilIcon.svg" width={100} height={100} alt="" />
                <li className='text-white font-bold'>Search</li>
            </div> */}
            <div className='flex flex-row gap-5 mr-5 cursor-pointer'>
                <img src="SettingIcon.svg" width={20} height={20} alt="" />
                <li className='text-white font-bold hover:text-orange transition-all duration-200'>Settings</li>
            </div>
            <div className='flex flex-row gap-5 mr-5 cursor-pointer'>
                <img src="SettingIcon.svg" width={20} height={20} alt="" />
                <li className='text-white font-bold hover:text-orange transition-all duration-200'>About Us</li>
            </div>
            <div className='flex flex-row gap-5 mr-5 cursor-pointer'>
                <img src="SettingIcon.svg" width={20} height={20} alt="" />
                <li className='text-white font-bold hover:text-orange transition-all duration-200'>Contact Us</li>
            </div>
        

        </ul>
    </div>
  )
}

export default Sidebar
