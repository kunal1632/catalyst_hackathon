// components/Comment/index.jsx

import React from 'react';
import './comment.css';

const Comment = ({ username, text }) => {
  return (
    <div className="comment">
      <span className="comment-username">{username}</span>
      <span className="comment-text">{text}</span>
    </div>
  );
};

export default Comment;
