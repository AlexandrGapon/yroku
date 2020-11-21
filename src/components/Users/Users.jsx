import React from 'react';
import { NavLink } from 'react-router-dom';
import userPhoto from '../../assets/images/avatar.png';
import styles from './Users.module.css';



let Users = (props) => {
    let pagesCount = Math.ceil(props.totalUsersCount / props.pageSize);

    let pages = [];

    for (let i = 1; i <= pagesCount; i++) {
        pages.push(i);
    }

    return <div>
        <div>
            {pages.map(p => {
                return <span className={props.currentPage === p && styles.selectedPage}
                    onClick={(e) => { props.onPageSelected(p) }}>{p}</span>
            })}
        </div>
        {
            props.users.map(u => <div key={u.id}>
                <span>
                    <NavLink to={'/profile/' + u.id}>
                        <img src={u.photos.small != null ? u.photos.small : userPhoto} />
                    </NavLink>
                    {u.followed ?
                        <button onClick={() => {
                            props.unfollow(u.id);
                        }}>Unfollow</button>
                        : <button onClick={() => {
                            props.follow(u.id);
                        }}>Follow</button>}
                </span>
                <span>
                    <span>
                        <div>{u.name}</div>
                    </span>
                    <span>
                        <div>{"u.location.country"}</div>
                        <div>{"u.location.city"}</div>
                    </span>
                </span>
            </div>)
        }
    </div>
}

export default Users;