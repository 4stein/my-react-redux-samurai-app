import s from "./Dialogs.module.sass";
import {NavLink} from "react-router-dom";
import DialogItem from "./DialogItem";

const Dialogs = () => {
    return (
        <div className={`${s.dialogs} row`}>
            <div className={`${s.dialogs__items} col-6`}>
                <ul className={s.dialog}>
                    <DialogItem name="Name 1" id="1"/>
                    <DialogItem name="Name 2" id="2"/>
                    <DialogItem name="Name 3" id="3"/>
                    <DialogItem name="Name 4" id="4"/>
                    <DialogItem name="Name 5" id="5"/>
                    <DialogItem name="Name 6" id="6"/>
                </ul>
            </div>
            <div className={`${s.messages} col-6`}>
                <div className={s.message}>
                    Hallo
                </div>
                <div className={s.message}>
                    Yo nigga
                </div>
                <div className={s.message}>
                    Ok bitch
                </div>
            </div>
        </div>
    );
}

export default Dialogs;
