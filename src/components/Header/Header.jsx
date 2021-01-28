import React from 'react'
import { NavLink } from 'react-router-dom'
import s from './Header.module.css'

const Header = (props) => {
    return <header className={s.header}>
        <img alt='logo' src='https://www.freelogodesign.org/file/app/client/thumb/a60197e7-39a2-436e-a758-0cdb704f6046_200x200.png?1594582965340' />
        <div className={s.loginBlock}>
            {props.isAuth
                ? <div>{props.login} - <button onClick={props.logout} >Logout</button></div>
                : <NavLink to={'/login'}>Login</NavLink>}
        </div>
    </header>
}

export default Header