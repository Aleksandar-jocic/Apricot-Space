import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class VideoPost extends Component {
    constructor(props) {
        super(props);
        this.state = {};
    }
    handleDelete = () => {
        this.props.deletePost(this.props.id)
    }
    render() {
        return (
            <div>

                <div>
                    <iframe width="420" height="315"
                        src={this.props.videoUrl}>
                    </iframe>
                </div>
                <Link to={
                    `/feeds/${this.props.type}/${this.props.id}`}>
                    {this.props.commentsNum >= 0 ? (<span>Video Post</span>) : undefined}
                    <br />
                    {this.props.commentsNum >= 0 ? (<span>{this.props.commentsNum} Comments</span>) : undefined}
                </Link>
                <button onClick={this.handleDelete} >deleteMe</button>
            </div>
        );
    }
}

export default VideoPost;