import React, { Component } from 'react';

class Comment extends Component {
    constructor(props) {
        super(props);
        this.state = {};
    }
    render() {
        return (
            <div>{this.props.comment.body}</div>
        );
    }
}

export default Comment;