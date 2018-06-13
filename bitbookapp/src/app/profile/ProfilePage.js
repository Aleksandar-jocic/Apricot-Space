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

            <div id='ProfilePage'>

                <img src={this.state.profile.avatarUrl} alt="" />

                <h1>{this.state.profile.name}</h1>

                <a onClick={this.handleEditProfile} >Edit profile</a>

                <p>{this.state.profile.about}</p>
                <div id='postsAndCommentsDiv'>
                    <div id='PostsDiv'>
                        <div><span>P</span></div>
                        <h4> {this.state.profile.postsCount} posts  </h4>
                    </div>
                    <div id='CommentsDiv'>
                        <div><span>C</span></div>
                        <h4> {this.state.profile.commentsCount} comments</h4>
                    </div>
                </div>

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