import React from 'react'
import './post.css'

export const Post = ({ avatar, text, username }) => {
  return (
    <div className='post-container py-2'>
      <div className='flex items-center'>
        <img src={avatar} className='post-avatar' />
        <div className='grow mx-2.5'>
          <div className='text-purple font-bold text-base post-username'>{username}</div>
          <div className='text-purple text-[10px]'>5mins ago</div>
        </div>
        <div>
          <img src='/more_horiz.svg' />
        </div>
      </div>
      <div className='post-image-container mt-4'>
        <img src="/post-image.png" alt="post image" className='post-image' />
      </div>
      <div className='post-caption-container mt-4'>
        <p className='post-caption text-purple text-base'>
          <strong>{username}</strong>
          {" "}
          {text}
        </p>
      </div>
      <div className='action-container mt-4 flex items-center gap-4'>
        <div className='action-btn-container flex items-center gap-1'>
          <img src="/favorite_border.svg" alt="" height={"21px"} width={"21px"} />
          <div className='action-btn-text text-purple text-base'>
            1234
          </div>
        </div>
        <div className='action-btn-container flex items-center gap-1'>
          <img src="/chat_bubble_outline.svg" alt="" height={"21px"} width={"21px"} />
          <div className='action-btn-text text-purple text-base'>
            1234
          </div>
        </div>
      </div>

    </div>
  )
}
