let state = {
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
        ]
    }
}

export default state;