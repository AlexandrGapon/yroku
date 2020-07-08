import React from 'react';
import s from './Dialogs.module.css';

const Dialogs = () => {
    return(
        <div className = {s.dialogs}>
            <div className = {s.dialogsItems}>
                <div className = {s.dialog + ' ' + s.active}>
                    123
                </div>
            </div>
            <div className = {s.messages}>
                <div className = {s.message}>
                    1234
                </div>
            </div>
        </div>
    )
}

export default Dialogs;