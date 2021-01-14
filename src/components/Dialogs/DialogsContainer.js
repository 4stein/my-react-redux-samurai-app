import React from "react";
import s from "./Dialogs.module.sass";
import {NavLink} from "react-router-dom";
import DialogItem from "./DialogItem";
import Message from "./Message";
import {addMessageActionCreator} from "../../redux/DialogsReducer";

const Dialogs = (props) => {

    let newMessageElement = React.createRef();

    // JSX VARIABLES
    let dialogElements = props.dialogs.posts.map(dialog => {
        return <DialogItem name={dialog.name} id={dialog.id} key={dialog}/>
    });
    let messageElements = props.dialogs.dialogs.map(message => {
        return <Message message={message.message} key={message}/>
    });

    let buttonClick = () => {
        let text = newMessageElement.current.value;
        props.dispatch(addMessageActionCreator(text));
        newMessageElement.current.value = '';
    }

    return (
        <div className={`${s.dialogs} row`}>
            <div className={`${s.dialogs__items} col-6`}>
                <ul className={s.dialog}>
                    {dialogElements}
                </ul>
            </div>
            <div className={`${s.messages} col-6`}>
                {messageElements}
                <br/><textarea cols="40" rows="2" ref={newMessageElement}/><br />
                <button
                    type="button"
                    className="btn btn-success"
                    onClick={buttonClick}>Send</button>
            </div>
        </div>
    );
}

export default Dialogs;
