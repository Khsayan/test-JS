const UPDATE_NEW_MESSAGE_BODY = 'UPDATE_NEW_MESSAGE_BODY';
const SEND_MESSAGE = 'SEND_MESSAGE';

let initialState = {
    dialogs: [
        {id: 1, name: "Dimych"},
        {id: 2, name: 'Sveta'},
        {id: 3, name: 'Sasha'},
        {id: 4, name: 'Valera'},
        {id: 5, name: 'Anton'},
        {id: 6, name: 'Anastasia'}
    ],
        messages: [
    {id: 1, message: "Hi"},
    {id: 2, message: "Hi hello"},
    {id: 3, message: "yo"},
    {id: 4, message: "yo"},
    {id: 5, message: "yo"},
    {id: 6, message: "yo"}

],
    newMessageBody: ""
};

const dialogsReducer = (state = initialState, action) => {

    let stateCopy = {
        ...state,
        //messages: [...state.messages]
    }


    switch (action.type) {
        case UPDATE_NEW_MESSAGE_BODY:
            state.newMessageBody = action.body
            return stateCopy;
        case SEND_MESSAGE:
            let body = state.newMessageBody
            stateCopy.newMessageBody = ''
            stateCopy.messages.push({id: 7, message: body})
            return stateCopy
        default:
            return state;

    }
}

export const sendMessageCreator = () => ({ type: SEND_MESSAGE })
export const updateNewMessageBodyCreator = (body) =>
    ({ type: UPDATE_NEW_MESSAGE_BODY, body: body })

export default dialogsReducer