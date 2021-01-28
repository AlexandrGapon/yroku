import React from 'react'
import Preloader from '../../common/Preloader/Preloader'
import s from './ProfileInfo.module.css'
import StatusProfile from './StatusProfile'
import userPhoto from '../../../assets/images/avatar.png'

const ProfileInfo = (props) => {

    if (!props.profile) {
        return <Preloader />
    }

    const onMainPhotoSelected = (e) => {

        if (e.target.files.length) {
            props.savePhoto(e.target.files[0])
        }
    }

    return (
        <div>
            <div className={s.profileInfo}>
                <img alt='Profile avatar' src={props.profile.photos.large || userPhoto} className={s.avatar} />
                {props.isOwner &&
                    <input type={'file'} onChange={onMainPhotoSelected} />
                }
                <StatusProfile status={props.status} updateStatus={props.updateStatus} />
            </div>
        </div>
    )
}

export default ProfileInfo
