import React, { Component } from 'react';

import ImagePost from './ImagePost';
import TextPost from './TextPost';
import VideoPost from './VideoPost';
import Sidebar from './Sidebar';
import { Link } from 'react-router-dom';



class PostsList extends Component {

    constructor(props) {

        super(props);
        this.state = {};
    }
    postAuthor = (userId) => {
        const profiles = JSON.parse(localStorage.getItem("profiles"))

        if (localStorage.getItem("profiles")) {


            const arr = profiles.filter((obj) => {
                return obj.id == userId
            })
            return arr[0].name

        } else {

            return "another"

        }

    }
    renderList = () => {

        const array = this.props.posts.filter((post) => {

            if (this.props.filterVideos) {

                return post.type === "video"

            } else if (this.props.filterImages) {

                return post.type === "image"

            } else if (this.props.filterText) {

                return post.type === "text"

            } else {

                return true
            }

        }).map(post => {

            return (

                post.type === "text" ?
                    <TextPost
                        commentsNum={post.commentsNum}
                        type={post.type}
                        text={post.text}
                        id={post.id}
                        deletePost={this.props.deletePost}
                        userId={post.userId}
                        postAuthor={this.postAuthor}


                    /> : (post.type === "image" ?
                        <ImagePost
                            commentsNum={post.commentsNum}
                            type={post.type}
                            imageUrl={post.imageUrl}
                            id={post.id}
                            deletePost={this.props.deletePost}
                            userId={post.userId}
                            postAuthor={this.postAuthor}
                        /> :
                        <VideoPost
                            commentsNum={post.commentsNum}
                            type={post.type}
                            videoUrl={post.videoUrl}
                            id={post.id}
                            deletePost={this.props.deletePost}
                            userId={post.userId}
                            postAuthor={this.postAuthor}

                        />)
            )
        })

        if (array.length === 0 && this.props.filterText) {
            return <div>There is no text posts</div>;
        } else if (array.length === 0 && this.props.filterImages) {
            return <div>There is no image posts</div>;
        } else if (array.length === 0 && this.props.filterVideos) {

            return <div>There is no video posts</div>;
        } else if (array.length === 0) {

            return <div>Nothing in feed</div>
        }

        else {
            return array;
        }
    }

    render() {

        return (

            <div>
                {this.renderList()}
            </div>

        );
    }
}

export default PostsList;