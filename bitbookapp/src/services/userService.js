import {
    url,
    headers,
    headersImg
} from "../shared/const"



class UserService {



    // Preuzimanje profila
    getProfile() {

        return fetch(`${url}/profile`, {
            headers: {


                "Content-Type": "application/json",
                "Key": "0C0DEC2",
                "SessionId": localStorage.getItem("SessionId")


            }
        })
            .then(function (response) {

                return response.json();
            })

    }


    //Preuzimanje profila drugih korisnika na osnovu njihovog ID
    getUser(id) {
        return fetch(`${url}/users/${id}`, {
            headers: {


                "Content-Type": "application/json",
                "Key": "0C0DEC2",
                "SessionId": localStorage.getItem("SessionId")


            }
        })
            .then(function (response) {
                return response.json();
            })


    }


    //Lista svih korisnika
    getUsers() {

        return fetch(`${url}/users`, {
            headers: {


                "Content-Type": "application/json",
                "Key": "0C0DEC2",
                "SessionId": localStorage.getItem("SessionId")


            }
        })
            .then(function (response) {
                return response.json();
            })

    }


    //Upload profila
    uploadUser(user) {

        return fetch(`${url}/Profiles`, {
            headers: {


                "Content-Type": "application/json",
                "Key": "0C0DEC2",
                "SessionId": localStorage.getItem("SessionId")


            },
            body: JSON.stringify(user),
            method: 'PUT'
        })
    }



    uploadImage(formData) {

        return fetch(`${url}/upload`, {
            headers: {



                "Key": "0C0DEC2",
                "SessionId": localStorage.getItem("SessionId")


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