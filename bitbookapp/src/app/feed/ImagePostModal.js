import React, { Component } from 'react';
import Modal from "react-modal";
import postService from "../../services/postService"

class ImagePostModal extends Component {
    constructor(props) {
        super(props);
        this.state = {

            newImagePost: "Unesite url...",

        };
    }

    handleNewImagePost = (event) => {

        this.setState({

            newImagePost: event.target.value

        })

    }
    uploadImagePost = () => {

        postService.uploadImagePost({ "imageUrl": this.state.newImagePost }).then(() => {

            this.props.getUpdatedPosts()
        })




    }
    render() {
        return (
            <Modal
                isOpen={this.props.imagePostModal}
                contentLabel="Post new TextPost">
                <h1>NEW IMAGE POST</h1>
                <input type="text" value={this.state.newImagePost} onChange={this.handleNewImagePost} />
                <br />
                <br />
                <br />
                <button onClick={this.props.closeModal} >close Image Modal</button>
                <br />
                <br />
                <br />
                <button onClick={this.uploadImagePost} >Upload Image Post</button>
            </Modal>
        );
    }
}

export default ImagePostModal;