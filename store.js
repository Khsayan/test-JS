import profileReducer from "./profile-reducer";
import dialogsReducer from "./dialogs-reducer";
import sidebarReducer from "./sidebar-reducer";

let store = {
    _state: {
        profilePage: {
            posts: [
                {id: 1, message: 'Hi, how are you?', likesCount: 12},
                {id: 2, message: 'It is my first post', likesCount: 11},
                {id: 2, message: 'Bla bla', likesCount: 10},
                {id: 2, message: 'Dada', likesCount: 15}
            ],
            newPostText: 'NODEJS'
        },
        dialogsPage: {
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
        }
    },

    _callSubcriber () {
    console.log('State changed');
    },

    getState() {
        return this._state
    },
    subscribe(observer) {
        this._callSubcriber = observer; //паттерн обсервер (наблюдатель)
    },

    dispatch: function (action) {

        this._state.profilePage = profileReducer(this._state.profilePage, action)
        this._state.dialogsPage = dialogsReducer(this._state.dialogsPage, action)
        this._state.sidebar = sidebarReducer(this._state.sidebar, action)

        this._callSubcriber(this._state);

        }
    }
export default store;
window.state = store;