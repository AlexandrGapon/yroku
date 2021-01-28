import { profileAPI } from '../../API/profileAPI.js';

const ADD_POST = 'ADD-POST';
const SET_USER_PROFILE = 'SET-USER-PROFILE';
const SET_USER_STATUS = 'SET-USER-STATUS';
const SAVE_PHOTO_SUCCESS = 'SAVE-PHOTO-SUCCESS';

let initialState = {
    posts: [
        { id: 1, message: 'Hello, world!', likeCount: 15 },
        { id: 2, message: 'It\'s my first post', likeCount: 43 },
    ],

    profile: null,
    status: " "
};

const profileReducer = (state = initialState, action) => {

    switch (action.type) {
        case ADD_POST:
            let post = {
                id: 3,
                message: action.newPostBody,
                likeCount: 0,
            };

            return {
                ...state,
                posts: [...state.posts, post],
            };
        case SET_USER_PROFILE:
            return {
                ...state,
                profile: action.profile,
            };
        case SET_USER_STATUS:
            return {
                ...state,
                status: action.status,
            };
        case SAVE_PHOTO_SUCCESS:
            return {
                ...state,
                profile: {...state.profile, photos: action.photos},
            }
        default:
            return state;
    }
}


export const addPost = (newPostBody) => ({ type: ADD_POST, newPostBody });
export const setUserProfile = (profile) => ({ type: SET_USER_PROFILE, profile });
export const setUserStatus = (status) => ({ type: SET_USER_STATUS, status });
export const savePhotoSuccess = (photos) => ({ type: SAVE_PHOTO_SUCCESS, photos });

export const getUserProfileTC = (userId) => async (dispatch) => {
    let data = await profileAPI.getUserProfile(userId);

    dispatch(setUserProfile(data));
}

export const getUserStatus = (userId) => async (dispatch) => {
    let response = await profileAPI.getUserStatus(userId);

    dispatch(setUserStatus(response.data));
}

export const updateProfileStatus = (status) => async (dispatch) => {
    let response = await profileAPI.updateProfileStatus(status);

    if (response.data.resultCode === 0) {
        dispatch(setUserStatus(status));
    }
}

export const savePhoto = (file) => async (dispatch) => {
    let response = await profileAPI.savePhoto(file);

    if (response.data.resultCode === 0) {
        dispatch(savePhotoSuccess(response.data.data.photos));
    }
}

export default profileReducer;