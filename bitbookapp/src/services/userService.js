import {
    url,
    headers
} from "../shared/const"



class UserService {



    // Preuzimanje profila
    getProfile() {

        return fetch(`${url}/profile`, {
            headers
        })
            .then(function (response) {
                return response.json();
            })

    }


    //Preuzimanje profila drugih korisnika na osnovu njihovog ID
    getUser(id) {
        return fetch(`${url}/users/${id}`, {
            headers
        })
            .then(function (response) {
                return response.json();
            })


    }


    //Lista svih korisnika
    getUsers() {

        return fetch(`${url}/users`, {
            headers
        })
            .then(function (response) {
                return response.json();
            })



    }


    //Upload profila
    uploadUser(user) {

        return fetch(`${url}/Profiles`, {
            headers,
            body: JSON.stringify(user),
            method: 'PUT'
        })



    }


}




export default new UserService();