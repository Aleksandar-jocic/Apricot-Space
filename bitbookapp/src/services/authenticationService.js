import {
    url,
    headers,
    headersImg
} from "../shared/const"

class AuthenticationService {

    logIn(loginObj) {

        return fetch(`${url}/login`, {
            headers: {

                "Content-Type": "application/json",
                "Key": "0C0DEC2",

            },
            body: JSON.stringify(loginObj),
            method: 'POST'
        })
            .then((response) => {
                if (response.ok) {

                    return response.json(loginObj);
                } else {
                    throw Error
                }

            })

    }
    register(registerObj) {

        return fetch(`${url}/register`, {

            headers: {
                "Content-Type": "application/json",
                "Key": "0C0DEC2",
            },
            body: JSON.stringify(registerObj),
            method: 'POST'
        })
            .then((response) => {
                if (response.ok) {

                    return response.json(registerObj);
                } else {
                    throw Error("greska")
                }

            })

    }

}


export default new AuthenticationService();