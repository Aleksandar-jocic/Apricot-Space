import React, { Component } from 'react';
import Modal from "react-modal";
import postService from "../../services/postService"

class VideoPostModal extends Component {
    constructor(props) {
        super(props);
        this.state = {

            newVideoPost: "",
            error: ""
        };
    }
    handleNewVideoPost = (event) => {

        let youTubeRegex = /(youtu.be\/|v\/|u\/\w\/|embed\/|watch\?v=|[a-zA-Z0-9_\-]+\?v=)([^#\&\?\n<>\'\"]*)/gi;
        if (youTubeRegex.test(event.target.value)) {

            let youTubeWatch = event.target.value
            let youTubeEmbed = `https://www.youtube.com/embed/${youTubeWatch.split("=")[1]}`

            this.setState({
                newVideoPost: youTubeEmbed,
                error: ''
            })

        } else {

            this.setState({

                error: 'This is not valid Youtube url'
            })
        }

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
                <span>{this.state.error}</span>
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