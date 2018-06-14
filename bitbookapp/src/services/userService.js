import {
    url,
    headers,
    headersImg
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



    uploadImage(formData) {

        return fetch(`${url}/upload`, {
            headers: {



                "Key": "bitbookdev",
                "SessionId": "2990B489-DB94-4AC1-ACDE-CDC9CC3EAEAE"


            },
            body: formData,
            method: 'POST'
        })
            .then(function (response) {
                return response.json();
            })

    }


}




export default new UserService();