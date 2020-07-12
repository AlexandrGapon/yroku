import React from 'react';
import s from './Dialogs.module.css';
import { NavLink } from 'react-router-dom';

const DialogItem = (props) => {
    return (
        <div className='dialog'>
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

    let dialogs = [
        {name:'Ulya', id:'1'},
        {name:'Mama', id:'2'},
        {name:'Papa', id:'3'},
        {name:'Ptichki', id:'4'},
        {name:'Nyamnyam', id:'5'}
    ];

    let messages = [
        {id:1, message:'Hello'},
        {id:2, message:'Titi'},
        {id:3, message:'BadyaBadya'},
        {id:4, message:'TayTay'},
    ]

    let dialogsElements = dialogs.map ( d => <DialogItem name={d.name} id={d.id} /> );
    let messagesElements = messages.map ( m => <Message message={m.message} id={m.id} /> );

    return (
        <div className={s.dialogs}>
            <div className={s.dialogsItems}>
                {dialogsElements}
            </div>
            <div className={s.messages}>
                {messagesElements}
            </div>
        </div>
    )
}

export default Dialogs;