
// INITIALSTATE
let initialState = {
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
};

//REDUCER
const DialogsReducer = (state = initialState, action) => {

    if (action.type ==='ADD_MESSAGE') {

        // ПРИМЕР ИМУТАБЕЛЬНОСТИ ДАННЫХ
        return {
            ...state,
            dialogs: [...state.dialogs, {
                message: action.newMessage // ТУТ ПЕРЕЗАТИРАЕМ ЭЛЛЕМЕНТ
            }]
        };
    }

    return state;
}

// ACTION CREATOR
export const addMessageActionCreator = text => ({
    type: 'ADD_MESSAGE',
    newMessage: text
})

export default DialogsReducer;