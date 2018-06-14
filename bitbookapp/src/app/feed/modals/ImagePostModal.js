import React, { Component } from 'react';
import Modal from "react-modal";
import postService from "../../../services/postService"

class ImagePostModal extends Component {
    constructor(props) {
        super(props);
        this.state = {

            newImagePost: "",
            error: ""

        };
    }

    handleNewImagePost = (event) => {

        let reg = /^(ftp|http|https):\/\/[^ "]+$/

        if (reg.test(event.target.value)) {

            this.setState({

                newImagePost: event.target.value,
                error: ""

            })

        } else {

            this.setState({

                error: "This is not valid image url"

            })

        }



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
                contentLabel="Post new TextPost" center>
                <h1>NEW IMAGE POST</h1>
                <input type="text" onChange={this.handleNewImagePost} />

                <span>{this.state.error}</span>
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