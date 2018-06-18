import React, { Component } from 'react';
import Modal from "react-modal";
import userService from "../../services/userService"

class EditProfileModal extends Component {
    constructor(props) {
        super(props);
        this.state = {

            name: "",
            about: "",
            aboutShort: "",
            avatarUrl: "",
            image: "https://www.bsn.eu/wp-content/uploads/2016/12/user-icon-image-placeholder.jpg"
        };
    }

    handleName = (event) => {
        this.setState({
            name: event.target.value
        })
    }

    handleAbout = (event) => {
        this.setState({
            about: event.target.value,
            aboutShort: event.target.value.split(" ").slice(0, 7).join(" ").concat("...")
        })
    }

    handlePicture = (event) => {

        this.setState({
            avatarUrl: event.target.value,
            image: event.target.value
        })

    }

    handleUpdate = () => {

        this.props.profile.name = this.state.name || this.props.profile.name
        this.props.profile.about = this.state.about || this.props.profile.about
        this.props.profile.aboutShort = this.state.aboutShort || this.props.profile.about.split(" ").slice(0, 7).join(" ").concat("...")
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
                image: data,
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
            <Modal className='profileModal'

                isOpen={this.props.editProfile}
                contentLabel="Edit Profile">

                <div>

                    <h2>Update Profile</h2>

                    <div id='uploadImageDiv'>

                        <img src={this.state.image} />

                        <div>
                            <label>Paste image URL bellow</label>
                            <input onChange={this.handlePicture} placeholder='URL here please...' type="text" />

                            <span>or </span>
                            <label for='cheekyOne'>click here</label><span> and choose from your hard drive</span>

                            // <input id='cheekyOne' type="file" onChange={this.handleImageUpload} />
                            {/* // <button onClick={this.uploadImage} >Confirm</button> */}
                        </div>

                    </div>

                    <div id='uploadNameDiv'>
                        <label>Name</label>
                        <input placeholder='Username...' onChange={this.handleName} type="text" />
                    </div>

                    <div id='uploadAboutDiv'>

                        <label>About you</label>
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