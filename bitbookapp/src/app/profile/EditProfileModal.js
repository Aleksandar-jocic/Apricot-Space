import React, { Component } from 'react';
import Modal from "react-modal";
import userService from "../../services/userService"

class EditProfileModal extends Component {
    constructor(props) {
        super(props);
        this.state = {

            name: "",
            about: "",
            avatarUrl: "",
            image: ""
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
        this.props.profile.name = this.state.name || this.props.profile.name
        this.props.profile.about = this.state.about || this.props.profile.about
        this.props.profile.avatarUrl = this.state.avatarUrl || this.props.profile.avatarUrl
        userService.uploadUser(this.props.profile).then(() => {

            this.props.getUpdatedProfile();
        })



    }

    handleImageUpload = (event) => {

        const formData = new FormData();
        formData.append('file', event.target.files[0])
        userService.uploadImage(formData).then((data) => {

            this.setState({


                avatarUrl: data
            })


        })



    }

    // uploadImage = () => {
    //     const formData = new FormData();
    //     formData.append('file', this.state.image)
    //     userService.uploadImage(formData).then((data) => {
    //         console.log(data)
    //         this.setState({


    //             avatarUrl: data
    //         })


    //     })

    // }


    render() {
        return (
            <Modal
                isOpen={this.props.editProfile}
                contentLabel="Edit Profile">
                <div id='ProfileModal'>

                    <h2>Update Profile</h2>

                    <div id='uploadImageDiv'>
                        <input onChange={this.handlePicture} type="text" />
                    </div>

                    <input type="file" onChange={this.handleImageUpload} />
                    <button onClick={this.uploadImage} >Upload Image</button>

                    <div id='uploadNameDiv'>
                        <label>Name</label><br />
                        <input placeholder='Something about you...' onChange={this.handleName} type="text" />
                    </div>

                    <div id='uploadAboutDiv'>
                        <input type="text" placeholder='Something about you...' onChange={this.handleAbout} />
                    </div>

                    <div>
                        <button onClick={this.props.handleClose} >CLOSE</button>
                        <button onClick={this.handleUpdate}>UPDATE</button>
                    </div>

                </div>

            </Modal>
        );
    }
}


export default EditProfileModal;