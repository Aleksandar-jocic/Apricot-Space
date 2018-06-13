import React, { Component } from 'react';
class ImagePost extends Component {
    state = {}
    render() {
        return (
            <div>
                <div>  <img width="420" height="315" src={this.props.imageUrl} alt="" /></div>
                {this.props.commentsNum >= 0 ? (<span>Image Post</span>) : undefined}
                <br />
                {this.props.commentsNum >= 0 ? (<span>{this.props.commentsNum} Comments</span>) : undefined}
            </div>
        );
    }
}

export default ImagePost;