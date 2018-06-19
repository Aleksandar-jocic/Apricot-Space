import React, { Component } from 'react';
import ImagePost from './ImagePost';
import TextPost from './TextPost';
import VideoPost from './VideoPost';



class PostsList extends Component {

    constructor(props) {

        super(props);
        this.state = {};
    }

    renderList = () => {

        const array = this.props.posts.filter((post) => {

            if (this.props.filter === "video") {

                return post.type === "video"

            } else if (this.props.filter === "image") {

                return post.type === "image"

            } else if (this.props.filter === "text") {

                return post.type === "text"

            } else {

                return true
            }

        }).map(post => {

            return (

                post.type === "text" ?
                    <TextPost

                        deletePost={this.props.deletePost}
                        post={post}


                    /> : (post.type === "image" ?
                        <ImagePost
                            deletePost={this.props.deletePost}
                            post={post}
                        /> :
                        <VideoPost
                            deletePost={this.props.deletePost}
                            post={post}

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