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




                }).map(post =>
                    <Link to={
                        `/feeds/${post.type}/${post.id}`} >
                        {

                            post.type === "text" ?
                                <TextPost
                                    commentsNum={post.commentsNum}
                                    type={post.type}
                                    text={post.text}

                                /> : (post.type === "image" ?
                                    <ImagePost
                                        commentsNum={post.commentsNum}
                                        type={post.type}
                                        imageUrl={post.imageUrl}
                                    /> :
                                    <VideoPost
                                        commentsNum={post.commentsNum}
                                        type={post.type}
                                        videoUrl={post.videoUrl}
                                    />)

                        }


                    </Link>


                )
                }
            </div>
        );
    }
}

export default PostsList;