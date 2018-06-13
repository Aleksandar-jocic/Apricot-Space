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
                {this.props.commentsNum >= 0 ? (<span>Text Post</span>) : undefined}
                <br />
                {this.props.commentsNum >= 0 ? (<span>{this.props.commentsNum} Comments</span>) : undefined}
            </div>
        );
    }
}

export default TextPost;