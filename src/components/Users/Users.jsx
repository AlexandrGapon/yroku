import React from 'react';
import { NavLink } from 'react-router-dom'
import userPhoto from '../../assets/images/avatar.png'
import Pagination from '../../Pagination/Pagination'

let Users = (props) => {

    return (
        <div>
            <div>
                < Pagination
                    totalItemsCount={props.totalUsersCount}
                    pageSize={props.pageSize}
                    currentPage={props.currentPage}
                    onPageSelected={props.onPageSelected} />
            </div>

            {props.users.map(u => <div key={u.id}>

                <span>
                    <NavLink to={'/profile/' + u.id} >
                        <img alt='User avatar' src={u.photos.small != null ? u.photos.small : userPhoto} />
                    </NavLink>

                    {u.followed ?
                        <button disabled={props.followingInProgress.some(id => id === u.id)} onClick={

                            () => { props.unfollow(u.id) }

                        }>Unfollow</button>
                        : <button disabled={props.followingInProgress.some(id => id === u.id)} onClick={

                            () => { props.follow(u.id) }
                            
                        }>Follow</button>
                    }

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
    )
}

export default Users
