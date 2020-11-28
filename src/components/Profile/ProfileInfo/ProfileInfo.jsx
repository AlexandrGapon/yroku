import React from 'react';
import Preloader from '../../common/Preloader/Preloader';
import s from './ProfileInfo.module.css';
import ProfileStatusWithHooks from './ProfileStatusWithHooks';

const ProfileInfo = (props) => {
    if (!props.profile) {
        return <Preloader />
    }

    return (
        <div>
            <div className={s.profileInfo}>
                <img src={props.profile.photos.large} />
                <ProfileStatusWithHooks status = {props.status}  updateProfileStatus = {props.updateProfileStatus} />
            </div>
        </div>
    )
}

export default ProfileInfo;