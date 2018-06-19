import React, { Component } from 'react';
import Modal from "react-modal";



const ImagePostModal = ({

    postModal,
    handleNewPost,
    uploadPost,
    closeModal,
    error
}) => {

    return (
        <Modal className="imageModal"

            isOpen={postModal === "image"}
            contentLabel="Post new TextPost" center>


            <h4>Select image</h4>
            <input type="text" placeholder='paste URL here...' onChange={(event) => {
                handleNewPost(event, "text")
            }} />

            <span>{error}</span>
            <div>
                <button onClick={closeModal} >close</button>
                <button onClick={() => { uploadPost("image") }} >upload</button>
            </div>
        </Modal>
    )
}

export default ImagePostModal;

