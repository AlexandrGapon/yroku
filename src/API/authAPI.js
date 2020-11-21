import * as axios from 'axios';

const instance = axios.create({
    baseURL: 'https://social-network.samuraijs.com/api/1.0/auth/',
    withCredentials: true,
    headers: {
        'API-KEY': '449a1f32-01b6-4149-8523-01de156abb32'
    }
})


export const authAPI = {

    getUserData() {
        return instance.get(`me`)
            .then(response => {
                return response.data;
            })
    },

    login(email, password, rememberMe = false) {
        return instance.post(`login`, {email, password, rememberMe})
        .then(response => {
            return response.data;
        })
    },

    logout() {
        return instance.delete(`login`)
        .then(response => {
            return response.data;
        })
    }

}
