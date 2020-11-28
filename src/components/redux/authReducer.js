import { stopSubmit } from "redux-form";
import { authAPI } from "../../API/authAPI";

const SET_USER_DATA = 'SET-USER-DATA';

let initialState = {
    userId: null,
    emeail: null,
    login: null,
    isAuth: false
};

const authReducer = (state = initialState, action) => {

    switch (action.type) {
        case SET_USER_DATA:
            return {
                ...state,
                ...action.payload,
            };
        default:
            return state;
    }
}

export const setAuthUserData = (userId, email, login, isAuth) => ({ type: SET_USER_DATA, payload: { userId, email, login, isAuth } })

export const setUserData = () => async (dispatch) => {
    let data = await authAPI.getUserData();

    if (data.resultCode === 0) {
        let { id, email, login } = data.data;
        dispatch(setAuthUserData(id, email, login, true));
    }
}

export const login = () => async (dispatch) => {
    let data = await authAPI.login();

    if (data.resultCode === 0) {
        dispatch(setUserData());
    } else {
        let message = data.messages.length > 0 ? data.messages[0] : 'Some error';
        dispatch(stopSubmit('login', { _error: message }))
    }
}

export const logout = () => async (dispatch) => {
    let data = await authAPI.logout();

    if (data.resultCode === 0) {
        dispatch(setUserData(null, null, null, false));
    }
}


export default authReducer;