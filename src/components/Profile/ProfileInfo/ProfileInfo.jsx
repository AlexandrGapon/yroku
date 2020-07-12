import React from 'react';
import s from './ProfileInfo.module.css';

const ProfileInfo = (props) => {
    return (
        <div className={s.profileInfo}>
            <div>
                <img alt='profile header' src='https://trial-sport.ru/images_g/2017/7/12/1893956_b.jpg' />
            </div>
            <div>
                Ava + description
        </div>
        </div>
    )
}

export default ProfileInfo;