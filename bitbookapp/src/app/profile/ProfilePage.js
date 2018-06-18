import React from 'react';
import userService from "../../services/userService"
import EditProfileModal from "./EditProfileModal"
import ProfileExtension from './ProfileExtension'

class ProfilePage extends React.Component {

    constructor(props) {

        super(props),
            this.state = {

                profile: {},
                editProfile: false,
                otherProfile: {}
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
                console.log(profile);

                this.setState({
                    profile
                })
            }))
            : (userService.getProfile().then((profile) => {
                console.log(profile);

                this.setState({
                    profile
                })
                this.otherProfile()
            }))
    }

    otherProfile = () => {

        userService.getUser(this.props.match.params.userId).then((user) => {
            this.setState({
                otherProfile: user
            })
        })
    }
    render() {

        return (

            <div id='ProfilePage'>

                {(this.props.match.params.userId) ? (
                    <ProfileExtension

                        profile={this.state.otherProfile}
                        params={this.props.match.params}
                    />
                ) : (
                        <ProfileExtension

                            profile={this.state.profile}
                            params={this.props.match.params}
                            handler={this.handleEditProfile}
                        />
                    )}

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