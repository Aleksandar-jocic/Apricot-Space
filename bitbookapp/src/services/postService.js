import {
    url,
    headers
} from "../shared/const"
class PostService {


    //preuzimanje liste svih postova
    getPosts() {

        return fetch(`${url}/Posts`, {
            headers
        })
            .then(function (response) {
                return response.json();
            })

    }


    //brisanje postova
    deletePost(id) {

        return fetch(`${url}/Posts/${id}`, {
            method: 'DELETE',
            headers
        })
            .then(function (response) {
                return response.json();
            })

    }


    //broj svih postova
    countPosts() {
        return fetch(`${url}/posts/count`, {
            headers
        })
            .then(function (response) {
                return response.json();
            })


    }



    //Preuzimanje tekstualnog posta na osnovu ID 
    getTextPost(id) {

        return fetch(`${url}/TextPosts/${id}`, {
            headers
        })
            .then(function (response) {
                return response.json();
            })

    }


    //upload tekst posta 
    uploadTextPost(textPost) {

        return fetch(`${url}/TextPosts`, {
            headers,
            body: JSON.stringify(textPost),
            method: 'POST'
        })
            .then(function (response) {
                return response.json();
            })


    }


    //Preuzimanje image posta na osnovu ID 
    getImagePost(id) {

        return fetch(`${url}/ImagePosts/${id}`, {
            headers
        })
            .then(function (response) {
                return response.json();
            })

    }



    //upload image posta 
    uploadImagePost(imagePost) {

        return fetch(`${url}/ImagePosts`, {
            headers,
            body: JSON.stringify(imagePost),
            method: 'POST'
        })
            .then(function (response) {
                return response.json();
            })


    }

    //Preuzimanje video posta na osnovu ID 

    getVideoPost(id) {

        return fetch(`${url}/VideoPosts/${id}`, {
            headers
        })
            .then(function (response) {
                return response.json();
            })

    }



    //upload video posta 
    uploadVideoPost(videoPost) {

        return fetch(`${url}/VideoPosts`, {
            headers,
            body: JSON.stringify(videoPost),
            method: 'POST'
        })
            .then(function (response) {
                return response.json();
            })


    }



    //preuzimanje komentara na osnovu ID
    getComment(id) {

        return fetch(`${url}/Comments?postId=${id}`, {
            headers
        })
            .then(function (response) {
                return response.json();
            })




    }

    //uploadovanje komentara na server
    uploadComment(comment) {

        return fetch(`${url}/Comments`, {
            headers,
            body: JSON.stringify(comment),
            method: 'POST'
        })
            .then(function (response) {
                return response.json();
            })

    }


}




export default new PostService();