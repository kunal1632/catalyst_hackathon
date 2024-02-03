import React from 'react'
import { PostList } from '../../components/PostList'
import { ProfileTabs } from '../../components/ProfileTabs'

export const Profile = () => {
  return (
    <div>
      <ProfileTabs />
      <PostList />
    </div>
  )
}
