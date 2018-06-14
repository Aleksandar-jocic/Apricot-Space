import React, { Component } from 'react';
import Modal from "react-modal";
import postService from "../../../services/postService"

class VideoPostModal extends Component {
    constructor(props) {
        super(props);
        this.state = {

            newVideoPost: ""
        };
    }
    handleNewVideoPost = (event) => {

        this.setState({
            newVideoPost: event.target.value
        })
    }
    uploadVideoPost = () => {

        postService.uploadVideoPost({ 'videoUrl': this.state.newVideoPost }).then(() => {

            this.props.getUpdatedPosts()
        })
    }

    render() {
        return (
            <Modal
                isOpen={this.props.videoPostModal}
                contentLabel="Post new video">
                <h1>NEW VIDEO POST</h1>
                <input type="text" onChange={this.handleNewVideoPost} />
                <br />
                <br />
                <br />
                <button onClick={this.props.closeModal} >close video Modal</button>
                <br />
                <br />
                <br />
                <button onClick={this.uploadVideoPost} >Upload video Post</button>
            </Modal>

        )
    }
}

export default VideoPostModal