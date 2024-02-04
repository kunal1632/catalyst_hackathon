// pages/PostPage/index.jsx

import React, { useState } from 'react';
import {Post} from '../../components/Post';

import './postPage.css';

const PostPage = () => {
  const [comments, setComments] = useState([
    { username: 'User1', text: 'Great post!' },
    { username: 'User2', text: 'Awesome photo!' },
    // Add more comments as needed
  ]);

  const [newComment, setNewComment] = useState('');

  const handleCommentChange = (event) => {
    setNewComment(event.target.value);
  };

  const handlePostComment = () => {
    if (newComment.trim() !== '') {
      setComments([...comments, { username: 'CurrentUser', text: newComment }]);
      setNewComment('');
    }
  };

  return (
    <div className="post-page-container">
      <Post />
      <div className="comment-section">
        {comments.map((comment, index) => (
          <div key={index} className="comment">
            <span className="comment-username">{comment.username}</span>
            <span className="comment-text">{comment.text}</span>
          </div>
        ))}
      </div>
      <div className="post-comment-container">
        <input
          type="text"
          placeholder="Add a comment..."
          value={newComment}
          onChange={handleCommentChange}
        />
        <button onClick={handlePostComment}>Post</button>
      </div>
    </div>
  );
};


export default PostPage;
