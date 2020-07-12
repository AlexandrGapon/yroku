import React from 'react';
import s from './MyPosts.module.css';
import Post from './Post/Post.jsx'

const MyPosts = () => {
    return (
        <div>
            My posts
            <div>
                <textarea></textarea>
                <button>Add post</button>
            </div>
            <div>
            <Post message = 'Hellow, world!' likeCount = '0' />
            <Post message = 'It`s my first post' likeCount = '3' />
            <Post />
            <Post />
            </div>
        </div>
    )
}

export default MyPosts;