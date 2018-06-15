import React, { Component } from 'react';
import Comment from './Comment';

class CommentList extends Component {
    constructor(props) {
        super(props);
        this.state = {};
    }


    renderComment() {

        const array = this.props.comments.map(comment =>
            <Comment

                comment={comment}
            />)

        if (array.length === 0) {

            return <div>This post has not been commented yet, be first to post comment</div>
        } else {

            return array
        }
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