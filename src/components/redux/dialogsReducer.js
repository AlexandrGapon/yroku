const SEND_MESSAGE = 'SEND-MESSAGE';

let initialState = {
    dialogs: [
        { name: 'Ulya', id: '1' },
        { name: 'Mama', id: '2' },
        { name: 'Papa', id: '3' },
        { name: 'Ptichki', id: '4' },
        { name: 'Nyamnyam', id: '5' }
    ],

    messages: [
        { id: 1, text: 'Hello' },
        { id: 2, text: 'Titi' },
        { id: 3, text: 'BadyaBadya' },
        { id: 4, text: 'TayTay' },
    ],
};

const dialogsReducer = (state = initialState, action) => {

    switch (action.type) {
        case SEND_MESSAGE:
            let message = {
                id: 5,
                text: action.newMessageBody,
            };
            return {
                ...state,
                messages: [...state.messages, message],
            };
        default:
            return state;
    }
}

export const sendNewMessage = (newMessageBody) => ({ type: SEND_MESSAGE, newMessageBody });

export default dialogsReducer;