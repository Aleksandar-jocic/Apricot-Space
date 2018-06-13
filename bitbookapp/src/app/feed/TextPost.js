import React, { Component } from 'react';

class TextPost extends Component {
    constructor(props) {
        super(props);
        this.state = {};
    }
    render() {
        return (
            <div>
                <div>  {this.props.text}</div>
                <span>Text post</span>
                <br />
                <span>{this.props.commentsNum} Comments</span>
            </div>
        );
    }
}

export default TextPost;