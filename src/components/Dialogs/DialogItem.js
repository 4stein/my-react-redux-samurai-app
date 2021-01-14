import s from "./Dialogs.module.sass";
import {NavLink} from "react-router-dom";

const DialogItem = () => {
    return (
        <div className={`${s.dialogs} row`}>

        </div>
    );
}

const Dialogs = () => {
    return (
        <div className={`${s.dialogs} row`}>
            <div className={`${s.dialogs__items} col-6`}>
                <ul className={s.dialog}>
                    <li>
                        <NavLink to="/dialogs/1" className={s.dialog__link} activeClassName={s.active}>Name 1</NavLink>
                    </li>
                    <li>
                        <NavLink to="/dialogs/2" className={s.dialog__link} activeClassName={s.active}>Name 2</NavLink>
                    </li>
                    <li>
                        <NavLink to="/dialogs/3" className={s.dialog__link} activeClassName={s.active}>Name 3</NavLink>
                    </li>
                    <li>
                        <NavLink to="/dialogs/4" className={s.dialog__link} activeClassName={s.active}>Name 4</NavLink>
                    </li>
                    <li>
                        <NavLink to="/dialogs/5" className={s.dialog__link} activeClassName={s.active}>Name 5</NavLink>
                    </li>
                    <li>
                        <NavLink to="/dialogs/6" className={s.dialog__link} activeClassName={s.active}>Name 6</NavLink>
                    </li>
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
