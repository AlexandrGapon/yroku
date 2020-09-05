import React from 'react';
import s from './MyPosts.module.css';
import Post from './Post/Post.jsx';


const MyPosts = (props) => {

    let postsElements = props.postsArray.map ( p => <Post message = {p.message} likeCount = {p.likeCount} id = {p.id} />);

    let newPostElement = React.createRef();

    let newPost = () => {
        props.dispatch( {type: 'ADD-POST'} );
    };

    let onPostChange = () => {
        let text = newPostElement.current.value;
        props.dispatch( {type: 'UPDATE-POST-TEXT', newText: text} );
    }

    return (
        <div className={s.myPosts}>
            <h3>My posts</h3>
            <hr />
            <div>
                <textarea ref = { newPostElement } 
                    onChange = {onPostChange}
                    value = {props.newPostText} />
                <button onClick = { newPost }>Add post</button>
            </div>
            <div>
                {postsElements}
            </div>
        </div>
    )
}

export default MyPosts;