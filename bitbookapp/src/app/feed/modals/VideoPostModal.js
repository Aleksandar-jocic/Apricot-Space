import React, { Component } from 'react';
import Modal from "react-modal";



const VideoPostModal = ({

    postModal,
    handleNewPost,
    uploadPost,
    closeModal,
    error
}) => {


    return (

        <Modal className='videoModal'

            isOpen={postModal == "video"}
            contentLabel="Post new video">

            <h4>Select video</h4>

            <input type="text" placeholder='paste video URL here...' onChange={(event) => {
                handleNewPost(event, "video")
            }} />
            <span>{error}</span>

            <div>
                <button onClick={closeModal}>close</button>
                <button onClick={() => { uploadPost("video") }

                } >Upload</button>
            </div>
        </Modal>


    )
}

export default VideoPostModal