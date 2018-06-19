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
        this.handleEditProfile()
        this.loadProfile()

    }


    handleEditProfile = (event) => {
        event.preventDefault()
        this.setState((prevState) => {
            return { editProfile: !prevState.editProfile }
        })
    }

    loadProfile = () => {

        (userService.getProfile().then((profile) => {

            this.setState({
                profile
            })

        }))

    }

    componentDidMount() {
        this.props.match.params.userId ?
            (userService.getUser(this.props.match.params.userId).then((profile) => {

                this.setState({
                    profile
                })
            }))
            : this.loadProfile()
    }


    render() {

        return (

            <div id='ProfilePage'>


                <Profile

                    profile={this.state.profile}
                    userId={this.props.match.params.userId}
                    handleEditProfile={this.handleEditProfile}
                />

                <EditProfileModal

                    profile={this.state.profile}
                    editProfile={this.state.editProfile}
                    handleEditProfile={this.handleEditProfile}
                    getUpdatedProfile={this.getUpdatedProfile}
                />
            </div>
        )
    }

}
export default ProfilePage