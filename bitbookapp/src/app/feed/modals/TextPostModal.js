import React from 'react';
import Modal from "react-modal";


const TextPostModal = ({

    postModal,
    handleNewPost,
    uploadPost,
    closeModal
}) => {


    return (

        <Modal className='textModal'

            isOpen={postModal == "text"}
            contentLabel="Post new TextPost">

            <h4>New post</h4>
            <input type="text" placeholder='share something with us...' onChange={(event) => {
                handleNewPost(event, "text")
            }} />
            <div>
                <button onClick={closeModal} >close</button>
                <button onClick={() => { uploadPost("text") }

                } >upload</button>
            </div>
        </Modal>

    )
}

export default TextPostModal;