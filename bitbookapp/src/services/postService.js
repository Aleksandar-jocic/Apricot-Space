import {
    url,
    headers
} from "../shared/const"
class PostService {

    getPosts() {

        return fetch(url + '/Posts', {
                headers
            })
            .then(function (response) {
                return response.json();
            })

    }
    deletePost(id) {

        return fetch(`${url}/Posts/${id}`, {
                method: 'DELETE',
                headers
            })
            .then(function (response) {
                return response.json();
            })

    }

    countPosts() {
        return fetch(url + '/posts/count', {
                headers
            })
            .then(function (response) {
                return response.json();
            })


    }
    setTextPost(data) {

        return fetch(url + '/TextPosts', {
                headers,
                body: JSON.stringify(data),
                method: 'POST'
            })
            .then(function (response) {
                return response.json();
            })


    }


    getTextPost(id) {

        return fetch(`${url}/TextPosts/${id}`, {
                headers
            })
            .then(function (response) {
                return response.json();
            })

    }
    getImagePost(id) {

        return fetch(`${url}/ImagePosts/${id}`, {
                headers
            })
            .then(function (response) {
                return response.json();
            })

    }
    getVideoPost(id) {

        return fetch(`${url}/VideoPosts/${id}`, {
                headers
            })
            .then(function (response) {
                return response.json();
            })

    }
    setImagePost(data) {

        return fetch(url + '/ImagePosts', {
                headers,
                body: JSON.stringify(data),
                method: 'POST'
            })
            .then(function (response) {
                return response.json();
            })


    }
    setVideoPost(data) {

        return fetch(url + '/VideoPosts', {
                headers,
                body: JSON.stringify(data),
                method: 'POST'
            })
            .then(function (response) {
                return response.json();
            })


    }


    getComment(id) {

        return fetch(`${url}/Comments?postId=${id}`, {
                headers
            })
            .then(function (response) {
                return response.json();
            })




    }
    postComment(data) {

        return fetch(url + '/Comments', {
                headers,
                body: JSON.stringify(data),
                method: 'POST'
            })
            .then(function (response) {
                return response.json();
            })

    }


}




export default new PostService();