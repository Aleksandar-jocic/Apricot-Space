import React, { Component } from 'react';
import Comment from './Comment';

class CommentList extends Component {
    constructor(props) {
        super(props);
        this.state = {};
    }
    render() {
        return (
            <div>

                {this.props.comments.map(comment =>
                    <Comment comment={comment} />)}
            </div>)
    }
}

export default CommentList;