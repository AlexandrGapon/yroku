import React from 'react';
import s from './Profile.module.css';
import MyPostsContainer from './MyPosts/MyPostsContainer';
import ProfileInfo from './ProfileInfo/ProfileInfo';

const Profile = (props) => {
  return <div className={s.content}>
    <ProfileInfo isOwner = {props.isOwner} 
                 profile = {props.profile} 
                 status = {props.status} 
                 updateProfileStatus = {props.updateProfileStatus}
                 savePhoto = {props.savePhoto} />
    <MyPostsContainer />
  </div>
}

export default Profile;