import React from 'react'

import Sidebar from '../../components/Sidebar'
import NavBar from '../../components/NavBar'
import { Post } from '../../components/Post'
import { PostList } from '../../components/PostList'


export const Home = () => {
  return (
    <div>
      <Sidebar/>
      <NavBar/>
      <Post/>
      <PostList/>


      

      {/* <div>Home</div> */}

    </div>
  )
}
