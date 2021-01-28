import React from 'react';
import Preloader from '../../common/Preloader/Preloader';
import s from './ProfileInfo.module.css';
import ProfileStatusWithHooks from './ProfileStatusWithHooks';
import userPhoto from '../../../assets/images/avatar.png';

const ProfileInfo = (props) => {
    if (!props.profile) {
        return <Preloader />
    }

    const onMainPhotoSelected = (e) => {
        if (e.target.files.length) {
            props.savePhoto(e.target.files[0]);
        }
    }

    return (
        <div>
            <div className={s.profileInfo}>
                <img src={props.profile.photos.large || userPhoto} className={s.avatar} />
                {props.isOwner && <input type={'file'} onChange={onMainPhotoSelected} />}
                <ProfileStatusWithHooks status={props.status} updateProfileStatus={props.updateProfileStatus} />
            </div>
        </div>
    )
}

export default ProfileInfo;