import {  useState } from 'react';
import React  from 'react'
// import Logo from '../assets/GossipGram-logos_black.png';
import LogIn from '../components/Login/index';
import SignUp from '../components/Signup/index';



const LoginSignupPage = () => {

  const [userType, setUserType] = useState("login");


  return (
    <div className='max-w-xl mx-auto justify-between '>
      <div className='flex justify-center bg-darkPurple  w-[100%] mt-[30px]  mb-[15px] h-[150px] border-none shadow-2xl rounded-full'>
        {/* <img src={Logo} alt='' width={500} height={400} className='object-cover'/> */}
      </div>

      <div className='bg-darkPurple border-none rounded-xl p-5 pl-10 pr-10 mt-10'>
        <div className='flex justify-between border-none rounded-xl p-5 pl-10 pr-10'>
          <button
          onClick={() => setUserType("login")}
          className={`${
            userType === "login"
            ?("bg-purple")
            :("bg-darkPurple")
          } w-[50%] h-[100%] rounded-full text-black font-bold text-xl p-3 `}
          >
            Log In
          </button>

          <button 
            onClick={() => setUserType("signup")}
          className={`${
            userType === "signup"
            ?("bg-purple")
            :("bg-darkPurple")
          } w-[50%] h-[100%] rounded-full text-black font-bold text-xl p-3 `}>
            Sign Up
          </button>
        </div>

        <div>
          {userType === "login" ? <LogIn/> : <SignUp/>}
        </div>

      </div>
      
      
    </div>
  )
}

export default LoginSignupPage;