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
            <Modal className='textModal'

                isOpen={this.props.textPostModal}
                contentLabel="Post new TextPost">

                <h4>New post</h4>
                <input type="text" placeholder='share something with us...' onChange={this.handleNewTextPost} />
                <div>
                    <button onClick={this.props.closeModal} >close</button>
                    <button onClick={this.uploadTextPost} >upload</button>
                </div>
            </Modal>
        );
    }
}

export default TextPostModal;