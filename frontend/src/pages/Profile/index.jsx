import React from 'react'
import About from '../../components/About'
import YouMightKnow from '../../components/YouMightKnow'
import Active from '../../components/Active'
import { PostList } from '../../components/PostList'
import { ProfileTabs } from '../../components/ProfileTabs'
import NavBar from "../../components/NavBar";
import Sidebar from '../../components/Sidebar';

export const Profile = () => {
  return (
    <div className='main-grid'>
      <div className='grid-area-sidebar'>
        <Sidebar />
      </div>
      <div className='inner-grid'>
        <div className='grid-area-b'>
          <NavBar />
        </div>
        <div className='grid-area-c'>
          <NavBar />
        </div>
        <div className='grid-area-d'>
          <About />
        </div>
        <div className='grid-area-e'>
          <ProfileTabs />
          <PostList />
        </div>
        <div className='grid-area-f'>
          <YouMightKnow />
          <Active />
        </div>
        <div>
        </div>
      </div>
    </div>
  )
}
