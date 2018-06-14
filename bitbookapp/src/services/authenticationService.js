import {
    url,
    headers,
    headersImg
} from "../shared/const"

class AuthenticationService {

    logIn(loginObj) {

        return fetch(`${url}/login`, {
            headers,
            body: JSON.stringify(),
            method: 'POST'
        })
            .then(function (response) {
                return response.json(loginObj);
            })

    }
    register(registerObj) {

        return fetch(`${url}/login`, {
            headers,
            body: JSON.stringify(),
            method: 'POST'
        })
            .then(function (response) {
                return response.json(registerObj);
            })

    }




}


export default new AuthenticationService();