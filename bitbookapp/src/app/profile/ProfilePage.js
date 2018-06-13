import React from 'react';
import userService from "../../services/userService"
import EditProfileModal from "./EditProfileModal"

class ProfilePage extends React.Component {

    constructor(props) {

        super(props),
            this.state = {


                profile: {},
                editProfile: false


            }
    }

    getUpdatedProfile = () => {
        userService.getProfile().then((profile) => {
            this.setState({
                editProfile: false,
                profile
            })
        })

    }

    handleClose = () => {
        this.setState({
            editProfile: false,
        })
    }

    handleEditProfile = (event) => {
        event.preventDefault()
        this.setState({
            editProfile: true
        })

    }

    componentDidMount() {
        userService.getProfile().then((profile) => {
            this.setState({
                profile
            })
        })



    }
    render() {

        return (

            <div>
                <img src={this.state.profile.avatarUrl} alt="" />
                <h1>{this.state.profile.name}</h1>
                <a href="" onClick={this.handleEditProfile} >Edit profile</a>
                <p>{this.state.profile.about}</p>

                <span>{this.state.profile.postsCount} posts  </span>
                <br />
                <span>{this.state.profile.commentsCount} comments</span>
                <EditProfileModal

                    profile={this.state.profile}
                    editProfile={this.state.editProfile}
                    handleClose={this.handleClose}
                    getUpdatedProfile={this.getUpdatedProfile}
                />
            </div>
        )
    }

}

export default ProfilePage