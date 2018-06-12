import React, { Component } from 'react';
import Modal from "react-modal";
import userService from "../../services/userService"

class EditProfileModal extends Component {
    constructor(props) {
        super(props);
        this.state = {

            name: "",
            about: "",
            avatarUrl: ""
        };
    }

    handleName = (event) => {
        this.setState({
            name: event.target.value
        })
    }

    handleAbout = (event) => {
        this.setState({
            about: event.target.value
        })
    }

    handlePicture = (event) => {

        this.setState({
            avatarUrl: event.target.value
        })

    }

    handleUpdate = () => {

        userService.uploadUser({
            "userId": this.props.userId,
            "name": this.state.name,
            "email": this.props.email,
            "aboutShort": this.props.aboutShort,
            "about": this.state.about,
            "avatarUrl": this.state.avatarUrl,
            "postsCount": this.props.postsCount,
            "commentsCount": this.props.commentsCount
        }).then(() => {

            this.props.getUpdatedProfile();
        })



    }
    render() {
        return (
            <Modal
                isOpen={this.props.editProfile}
                contentLabel="Edit Profile">

                <h3>Update Profile</h3>
                <input onChange={this.handlePicture} type="text" />
                <br />
                <br />
                <input onChange={this.handleName} type="text" />
                <br />
                <br />
                <input onChange={this.handleAbout} type="text" />
                <br />
                <br />
                <button onClick={this.props.handleClose} >CLOSE</button>
                <br />
                <br />
                <button onClick={this.handleUpdate}>UPDATE</button>

            </Modal>
        );
    }
}

export default EditProfileModal;