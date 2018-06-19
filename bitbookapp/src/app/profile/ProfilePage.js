import React from 'react';
import userService from "../../services/userService"
import EditProfileModal from "./EditProfileModal"
import Profile from './Profile'

class ProfilePage extends React.Component {

    constructor(props) {

        super(props),
            this.state = {

                profile: {},
                editProfile: false,

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
        this.props.match.params.id ?
            (userService.getUser(this.props.match.params.id).then((profile) => {


                this.setState({
                    profile
                })
            }))
            : (userService.getProfile().then((profile) => {


                this.setState({
                    profile
                })

            }))
    }


    render() {

        return (

            <div id='ProfilePage'>



                <Profile

                    profile={this.state.profile}
                    params={this.props.match.params}
                    handler={this.handleEditProfile}
                />

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