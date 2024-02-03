import React from 'react'
import { PostList } from '../../components/PostList'
import { ProfileTabs } from '../../components/ProfileTabs'
import NavBar from "../../components/NavBar";

export const Profile = () => {
  return (
    <div>
            <div>
        <NavBar />
      </div>
      <ProfileTabs />
      <PostList />
    </div>
  )
}
