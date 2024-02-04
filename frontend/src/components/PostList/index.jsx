import React from 'react'
import { Post } from '../Post';
import './post-list.css';

export const PostList = () => {
    const data = [
        { "username": "Ayush Munot", "avatar": "https://lh3.googleusercontent.com/a/ACg8ocLBGodj3Yyhs9GFxla0uRQ2EanYdJOMWMrQy4f18aYwoLY=s96-c", text: "React is a free and open-source front-end JavaScript library for building user interfaces based on components.", image: "" },
        { "username": "Kunal Dhand", "avatar": "/profile2.svg", text: "JavaScript, often abbreviated as JS, is a programming language and core technology of the World Wide Web, alongside HTML and CSS." },
        { "username": "Lakshay Tyagi", "avatar": "/profile3.svg", text: "ES6 stands for ECMAScript 6. ECMAScript was created to standardize JavaScript, and ES6 is the 6th version of ECMAScript, it was published in 2015, and is also known as ECMAScript 2015.", },
        { "username": "Shashank Gulati", "avatar": "/profile3.svg", text: "ES6 stands for ECMAScript 6. ECMAScript was created to standardize JavaScript, and ES6 is the 6th version of ECMAScript, it was published in 2015, and is also known as ECMAScript 2015.", },
    ];
    return (
        <div className='post-list'>
            {data.map((item, index) => <Post key={index} avatar={item.avatar} text={item.text} username={item.username} />)}
        </div>
    )
}
