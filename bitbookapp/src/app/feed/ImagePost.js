import React, { Component } from 'react';
class ImagePost extends Component {
    state = {}
    render() {
        return (
            <div>
                <div>  <img width="420" height="315" src={this.props.imageUrl} alt="" /></div>
                <span>Image post</span>
                <br />
                <span>{this.props.commentsNum} comments</span>
            </div>
        );
    }
}

export default ImagePost;