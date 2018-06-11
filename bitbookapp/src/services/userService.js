import {
    url,
    headers
} from "../shared/const"
class UserService {

    getProfile() {

        return fetch(url + '/profile', {
                headers
            })
            .then(function (response) {
                return response.json();
            })

    }

    getUser() {
        return fetch(url + '/users/747', {
                headers
            })
            .then(function (response) {
                return response.json();
            })


    }

    getUsers() {

        return fetch(url + '/users', {
                headers
            })
            .then(function (response) {
                return response.json();
            })



    }

    setUser(data) {

        return fetch(url + '/Profiles', {
            headers,
            body: JSON.stringify(data),
            method: 'PUT'
        })



    }


}




export default new UserService();