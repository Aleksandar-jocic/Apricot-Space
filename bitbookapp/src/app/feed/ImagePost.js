// import React, { Component } from 'react';
import Link from 'react-router-dom/Link';
import React from 'react';


const ImagePost = ({ post: {
    id,
    userId,
    userDisplayName,
    type,
    commentsNum,
    imageUrl

} = {},
    deletePost }) => {

    return (

        <div className='Post'>

            <div className='imageDivOnFeed'>
                <img src={imageUrl} alt="" />
            </div>

            {deletePost ?

                (<div>
                    <div className='textPostDiv' ><span>Image</span></div>
                    {userId == localStorage.getItem("user") ? (
                        <div className='deletePostButton'><span onClick={() => { deletePost(id) }} >{`<Delete post>`}</span></div>
                    ) : <div className='deletePostButton'><span >Posted by: {userDisplayName}
                    </span></div>}
                    <Link to={`/feeds/${type}/${id}`}>

                        <div className='commentPostDiv'><span>{commentsNum} Comments</span></div>

                    </Link>

                </div>) : undefined}

        </div>

    )
}

export default ImagePost;


