import React from 'react';
import s from './Dialogs.module.css';
import Message from './Message/Message.jsx';
import DialogItem from './DialogItem/DialogItem.jsx';
import { Field, reduxForm } from 'redux-form';

const AddMessageForm = ({handleSubmit}) => {
    return (
        <form onSubmit={handleSubmit} >
            <div>
                <Field component={'textarea'} name={'newMessageBody'} placeholder={'Enter your message'} />
            </div>
            <div><button>Send message</button></div>
        </form>
    )
};

const AddMessageReduxForm = reduxForm({ form: 'dialogAddMessage' })(AddMessageForm);

const Dialogs = (props) => {
    let dialogsElements = props.dialogsPage.dialogs.map(d => <DialogItem name={d.name} id={d.id} key = {d.id}/>);
    let messagesElements = props.dialogsPage.messages.map(m => <Message text={m.text} id={m.id} key = {m.id}/>);

    const onSubmit = (values) => {
        props.sendNewMessage(values.newMessageBody);
    }

    return (
        <div className={s.dialogs}>
            <div className={s.dialogsItems}>
                {dialogsElements}
            </div>
            <div className={s.messages}>
                {messagesElements}
                <AddMessageReduxForm onSubmit={onSubmit} />
            </div>
        </div>
    );
    

}

export default Dialogs;