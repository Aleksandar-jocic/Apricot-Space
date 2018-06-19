import React, { Component } from 'react';
import Modal from "react-modal";
import postService from "../../../services/postService"

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

    handleEnter = (e) => {

        if (e.keyCode === 13) {

            this.uploadVideoPost()
        }
    }
    render() {
        return (
            <Modal className='videoModal'

                isOpen={this.props.videoPostModal}
                contentLabel="Post new video">

                <h4>Select video</h4>

                <input type="text" autoFocus placeholder='paste video URL here...' onChange={this.handleNewVideoPost} onKeyUp={this.handleEnter} />
                <span>{this.state.error} </span>

                <div>
                    <button onClick={this.props.closeModal} >close</button>
                    <button onClick={this.uploadVideoPost} >Upload</button>
                </div>
            </Modal>

        )
    }
}

export default VideoPostModal