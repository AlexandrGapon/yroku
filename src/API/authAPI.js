import * as axios from 'axios'

const instance = axios.create({
    baseURL: 'https://social-network.samuraijs.com/api/1.0/auth/',
    withCredentials: true,
    headers: {
        'API-KEY': '41246a47-a8c1-4ac2-86b3-bc23dca64482'
    }
})


export const authAPI = {

    me() {
        return instance.get(`me`)
    },

    login(email, password, rememberMe = false) {
        return instance.post(`login`, {email, password, rememberMe})
    },

    logout() {
        return instance.delete(`login`)
    }
}
