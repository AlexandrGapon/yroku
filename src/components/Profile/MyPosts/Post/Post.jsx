import React from 'react';
import s from './Post.module.css';

const Post = () => {
    return(
        <div className={s.post}>
            <img alt='ava' src='https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcTDkvFCLSMbUU6Bqb1m-0y3LPAQ7_Gcs-PNZw&usqp=CAU' />
            post
        </div>
    )
}

export default Post;