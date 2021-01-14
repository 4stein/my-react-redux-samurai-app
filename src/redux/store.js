// STORE
import ProfileReducer from "./ProfileReducer";
import DialogsReducer from "./DialogsReducer";

let store = {
    _state: {
        dialogs: {
            posts: [
                {name: 'Name 1', id: '1'},
                {name: 'Name 2', id: '2'},
                {name: 'Name 3', id: '3'},
                {name: 'Name 4', id: '4'},
                {name: 'Name 5', id: '5'},
                {name: 'Name 6', id: '6'}
            ],
            dialogs: [
                {message: 'Hallo'},
                {message: 'Yo nigga'},
                {message: 'Ok bitch'},
                {message: 'Yo nigga one'},
                {message: 'Yo nigga two'},
                {message: 'Yo nigga three'}
            ]
        },
        profile: {
            messages: [
                {name: 'Name 1', message: 'Hallo'},
                {name: 'Name 2', message: 'Yo nigga'},
                {name: 'Name 3', message: 'Ok bitch'},
                {name: 'Name 4', message: 'Yo nigga one'}
            ]
        }
    },
    _callSubscriber() {
        console.log('state changed');
    },
    getState() {
        return this._state;
    },
    subscribe(observer) {
        this._callSubscriber = observer;
    },
    dispatch(action) {
        this._state.profile = ProfileReducer(this._state.profile, action);
        this._state.dialogs = DialogsReducer(this._state.dialogs, action);
        this._callSubscriber(this);
    }
}


export default store;