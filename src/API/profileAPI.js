import * as axios from 'axios';

const instance = axios.create({
    baseURL: 'https://social-network.samuraijs.com/api/1.0/profile/',
    withCredentials: true,
    headers: {
        'API-KEY': '41246a47-a8c1-4ac2-86b3-bc23dca64482'
    }
})


export const profileAPI = {

    getProfileInfo(userId) {
        return instance.get(`${userId}`)
    },

    getProfileStatus(userId) {
        return instance.get(`status/` + userId)
    },

    updateProfileStatus(status) {
        return instance.put(`status`, { status: status })
    },

    savePhoto(photoFile) {
        var formData = new FormData()
        formData.append('image', photoFile)

        return instance.put(`profile/photo`, formData, {
            headers: {
                'Content-Type': 'multipart/form-data'
            }
        })
    }

}
