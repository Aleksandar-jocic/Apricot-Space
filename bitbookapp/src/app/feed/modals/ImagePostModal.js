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
    handleEnter = (e) => {

        if (e.keyCode === 13) {

            this.uploadImagePost()
        }
    }
    render() {
        return (
            <Modal className="imageModal"

                isOpen={this.props.imagePostModal}
                contentLabel="Post new TextPost" center>


                <h4>Select image</h4>
                <input type="text" autoFocus placeholder='paste URL here...' onChange={this.handleNewImagePost} onKeyUp={this.handleEnter} />

                <span>{this.state.error}</span>
                <div>
                    <button onClick={this.props.closeModal} >close</button>
                    <button onClick={this.uploadImagePost} >upload</button>
                </div>
            </Modal>
        );
    }
}

export default ImagePostModal;