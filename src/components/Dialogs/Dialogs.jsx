import React from 'react';
import s from './Dialogs.module.css';
import { NavLink } from 'react-router-dom';

const DialogItem = (props) => {
    return (
        <div className={s.dialog + ' ' + s.active}>
            <NavLink to={"/dialogs/" + props.id}>{props.name}</NavLink>
        </div>
    )
}

const Message = (props) => {
    return (
    <div className={s.message}>{props.message}</div>
    )
}

const Dialogs = () => {
    return (
        <div className={s.dialogs}>
            <div className={s.dialogsItems}>
                <DialogItem name="Ulya" id="1" />
                <DialogItem name="Mama" id="2" />
                <DialogItem name="Papa" id="3" />
                <DialogItem name="Ptichki" id="4" />
                <DialogItem name="NyamNyam" id="5" />
            </div>
            <div className={s.messages}>
                <Message message="Hello" />
                <Message message="TiTi" />
                <Message message="BadyaBadya" />
                <Message message="TayTay" />
            </div>
        </div>
    )
}

export default Dialogs;