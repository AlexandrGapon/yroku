import React from 'react';
import s from './Dialogs.module.css';
import Message from './Message/Message.jsx';
import DialogItem from './DialogItem/DialogItem.jsx';

const Dialogs = (props) => {

    let dialogsElements = props.state.dialogs.map(d => <DialogItem name={d.name} id={d.id} />);
    let messagesElements = props.state.messages.map(m => <Message message={m.message} id={m.id} />);

    let newMessageElement = React.createRef();

    let sendMessage = () => {
        let text = newMessageElement.current.value;
        alert(text);
    }

    return (
        <div className={s.dialogs}>
            <div className={s.dialogsItems}>
                {dialogsElements}
            </div>
            <div className={s.messages}>
                {messagesElements}
            </div>
            <textarea ref={newMessageElement}></textarea>
            <button onClick={sendMessage}>Send message</button>
        </div>
    )
}

export default Dialogs;