import React from 'react';
import Comment from './Comment';


const CommentList = ({ comments }) => {

    const renderComment = () => {

        const array = comments.map(comment =>
            <Comment

                comment={comment}
            />)

        if (array.length === 0) {

            return <div>This post has not been commented yet, be first to post comment</div>
        } else {

            return array
        }
    }
    return (

        <div>
            {renderComment()}
        </div>)
}


export default CommentList;