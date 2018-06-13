import React, { Component } from 'react';
class VideoPost extends Component {
    constructor(props) {
        super(props);
        this.state = {};
    }
    render() {
        return (
            <div>

                <div>
                    <iframe width="420" height="315"
                        src={this.props.videoUrl}>
                    </iframe>
                </div>
                {this.props.commentsNum >= 0 ? (<span>Video Post</span>) : undefined}
                <br />
                {this.props.commentsNum >= 0 ? (<span>{this.props.commentsNum} Comments</span>) : undefined}
            </div>
        );
    }
}

export default VideoPost;