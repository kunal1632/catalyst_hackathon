import React from 'react'
import { Post } from '../Post';
import './post-list.css';

export const PostList = () => {
    const data = [1, 2, 3];
    return (
        <div className='post-list'>
            {data.map((item, index) => <Post key={index} />)}
        </div>
    )
}
