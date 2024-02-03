import React from 'react'
import About from '../../components/About'
import YouMightKnow from '../../components/YouMightKnow'
import Active from '../../components/Active'
import { PostList } from '../../components/PostList'
import { ProfileTabs } from '../../components/ProfileTabs'
import NavBar from "../../components/NavBar";

export const Profile = () => {
  return (
    <div>
      <About></About>
      <YouMightKnow></YouMightKnow>
      <Active></Active>
            <div>
        <NavBar />
      </div>
      <ProfileTabs />
      <PostList />
    </div>
  )
}
