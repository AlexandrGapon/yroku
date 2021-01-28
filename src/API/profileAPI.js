import * as axios from 'axios';

const instance = axios.create({
    baseURL: 'https://social-network.samuraijs.com/api/1.0/',
    withCredentials: true,
    headers: {
        'API-KEY': '449a1f32-01b6-4149-8523-01de156abb32'
    }
})


export const profileAPI = {

    getUserProfile(userId) {
        return instance.get(`profile/` + userId)
            .then(response => {
                return response.data;
            })
    },

    getUserStatus(userId) {
        return instance.get(`profile/status/` + userId)

    },

    updateProfileStatus(status) {
        return instance.put(`profile/status`, { status: status })

    },

    savePhoto(photoFile) {
        var formData = new FormData();
        formData.append('image', photoFile);

        return instance.put(`profile/photo`, formData, {
            headers: {
                'Content-Type': 'multipart/form-data'
            }
        })
    }

}
