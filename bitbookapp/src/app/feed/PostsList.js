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

    render() {
        return (
            <div>
                {this.props.posts.filter((post) => {

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

                            /> : (post.type === "image" ?
                                <ImagePost
                                    commentsNum={post.commentsNum}
                                    type={post.type}
                                    imageUrl={post.imageUrl}
                                    id={post.id}
                                    deletePost={this.props.deletePost}
                                /> :
                                <VideoPost
                                    commentsNum={post.commentsNum}
                                    type={post.type}
                                    videoUrl={post.videoUrl}
                                    id={post.id}
                                    deletePost={this.props.deletePost}
                                />)


                    )



                }





                )
                }
            </div>
        );
    }
}

export default PostsList;