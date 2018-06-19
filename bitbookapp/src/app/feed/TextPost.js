import React from 'react';
import Link from 'react-router-dom/Link';



const TextPost = ({ post: {
    id,
    userId,
    userDisplayName,
    type,
    commentsNum,
    text

} = {},
    deletePost }) => {

    return (

        <div className='Post' >

            <p>{text}</p>

            {deletePost ?

                (<div>

                    <div className='textPostDiv' ><span>Text</span></div>

                    {userId == localStorage.getItem("user") ? (

                        <div className='deletePostButton'><span onClick={() => { deletePost(id) }} >{`<Delete post>`}</span></div>
                    ) : <div className='deletePostButton'><span >Posted by: {userDisplayName}</span></div>}

                    <Link to={`/feeds/${type}/${id}`}>

                        <div className='commentPostDiv'><span>{commentsNum} Comments</span></div>

                    </Link>


                </div>) : undefined}

        </div>

    )

}

export default TextPost;