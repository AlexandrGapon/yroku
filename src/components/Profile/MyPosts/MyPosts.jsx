import React from 'react';
import s from './MyPosts.module.css';
import Post from './Post/Post.jsx';
import { reduxForm } from 'redux-form';

const AddPostForm = ({ handleSubmit }) => {
    return (
        <form onSubmit={handleSubmit}>

            <div><button>Add post</button></div>
        </form>
    )
}

const AddPostReduxForm = reduxForm({ form: 'profileAddPost' })(AddPostForm);

const MyPosts = (props) => {

    let postsElements = props.posts.map(p => <Post message={p.message} likeCount={p.likeCount} id={p.id} />)

    const onSubmit = (values) => {
        props.addPost(values.newPostBody)
    }

    return (
        <div className={s.myPosts}>
            <h3>My posts</h3>
            <hr />
            <div>
                <AddPostReduxForm onSubmit={onSubmit} />
            </div>
            <div>
                {postsElements}
            </div>
        </div>
    )

}

export default MyPosts
