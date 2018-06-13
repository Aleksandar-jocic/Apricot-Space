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
                <span>Video post</span>
                <br />
                <span>{this.props.commentsNum} comments</span>
            </div>
        );
    }
}

export default VideoPost;