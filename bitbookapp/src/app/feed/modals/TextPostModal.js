import React, { Component } from 'react';
import Modal from "react-modal";
import postService from "../../../services/postService"

class TextPostModal extends Component {
    constructor(props) {
        super(props);
        this.state = {

            newTextPost: ""
        };
    }

    handleNewTextPost = (event) => {

        this.setState({

            newTextPost: event.target.value

        })

    }
    uploadTextPost = () => {

        postService.uploadTextPost({ "text": this.state.newTextPost }).then(() => {

            this.props.getUpdatedPosts()
        })




    }
    render() {
        return (
            <Modal
                isOpen={this.props.textPostModal}
                contentLabel="Post new TextPost">
                <h1>NEW POST</h1>
                <input type="text" onChange={this.handleNewTextPost} />
                <br />
                <br />
                <br />
                <button onClick={this.props.closeModal} >close TextModal</button>
                <br />
                <br />
                <br />
                <button onClick={this.uploadTextPost} >Upload text Post</button>
            </Modal>
        );
    }
}

export default TextPostModal;