import React from 'react';
import { Link } from 'react-router-dom';


const VideoPost = ({ post: {
    id,
    userId,
    userDisplayName,
    type,
    commentsNum,
    videoUrl

} = {},
    deletePost }) => {

    return (


        <div className='Post'>

            <div className='videoDivOnFeed'>
                <iframe
                    src={videoUrl}>
                </iframe>
            </div>
            {deletePost ?

                (<div>

                    <div className='textPostDiv' ><span>Video</span></div>
                    {userId == localStorage.getItem("user") ? (

                        <div className='deletePostButton'><span onClick={() => { deletePost(id) }} >{`<Delete post>`}</span></div>
                    ) : <div className='deletePostButton'><span >
                        Posted by: {userDisplayName}</span></div>}
                    <Link to={`/feeds/${type}/${id}`}>

                        <div className='commentPostDiv'><span>{commentsNum} Comments</span></div>

                    </Link>


                </div>) : undefined}

        </div>



    )



}

export default VideoPost