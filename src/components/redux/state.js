let store = {

    _state: {
        dialogsPage: {
            dialogs: [
                { name: 'Ulya', id: '1' },
                { name: 'Mama', id: '2' },
                { name: 'Papa', id: '3' },
                { name: 'Ptichki', id: '4' },
                { name: 'Nyamnyam', id: '5' }
            ],

            messages: [
                { id: 1, message: 'Hello' },
                { id: 2, message: 'Titi' },
                { id: 3, message: 'BadyaBadya' },
                { id: 4, message: 'TayTay' },
            ]
        },

        profilePage: {
            posts: [
                { id: 1, message: 'Hello, world!', likeCount: 15 },
                { id: 2, message: 'It\'s my first post', likeCount: 43 },
            ],
            newPostText: 'blablabla',

        },

        sidebarPage: {
            friends: [
                { id: 1, name: 'Ulya', avatar: 'https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcQrnHsHJ875K2DcaOlSvGPmv86g5kdZiiAXQQ&usqp=CAU' },
                { id: 2, name: 'Mama', avatar: 'https://sun9-55.userapi.com/impf/0rsrpoqwHtmb90vTX-QCCsE1Hrj9IuCEF75FjQ/UxSgfyJ0PJM.jpg?size=200x0&quality=90&crop=0,1,742,742&sign=55c05187279ddb98125702177a68dc04&ava=1' },
                { id: 3, name: 'Ptichky', avatar: 'https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcStQFXMUCoVnK8AyFWMv-xZw8oeweJ_nvOdjA&usqp=CAU' },
                { id: 4, name: 'Tejta', avatar: 'https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcTBJRVH7DC3pw_t57B9Ccs8Ilt_DMHyFvx2VQ&usqp=CAU' },
            ]
        }
    },

    _callSub() {
        console.log('STate changed');
    },

    getState() {
        return this._state;
    },

    subscribe(observer) {
        this._callSub = observer;
    },

    dispatch(action) {
        if (action.type === 'ADD-POST') {
            let post = {
                id: 3,
                message: this._state.profilePage.newPostText,
                likeCount: 0,
            };
    
            this._state.profilePage.posts.push(post);
            this._state.profilePage.newPostText = '';
            this._callSub(this._state);
        } else if (action.type === 'UPDATE-POST-TEXT') {
            this._state.profilePage.newPostText = action.newText;
            this._callSub(this._state);
        }
    },
};

export default store;