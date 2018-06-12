import React from 'react';
import UserService from '../../services/userService';
import Axios from 'axios'

class PeoplePage extends React.Component {

    constructor(props) {

        super(props)

        this.state = {
            users: [],
            inputValue: '',
        }
        this.inputMonitor = this.inputMonitor.bind(this)
    }

    inputMonitor(event) {

        this.setState({
            inputValue: event.target.value
        })
    }

    listOfUsers() {

        UserService.getUsers().then((userList) => {

            this.setState({
                users: userList
            })
        });
    }

    componentDidMount() {

        this.listOfUsers()
    }


    render() {

        return (

            <div id='PeoplePage'>

                <h1>PeoplePage</h1>

                <div id='inputDiv'>
                    <div>
                        <i class="fas fa-search"></i>
                    </div>
                    <input id='textInput' type='text' onChange={this.inputMonitor} />
                    <div>
                        <i class="fas fa-times"></i>
                    </div>
                </div>

                <div id='itemList'>

                    {this.state.users.filter((user) => {

                        if (this.state.inputValue === '') {

                            return true

                        } else {

                            return user.name.toLowerCase().includes(this.state.inputValue.toLowerCase())
                        }

                    }).map((item) => (


                        // for component <Grid userData={userData} />
                        <div id='singleItem'>

                            <div id='imageDiv'>
                                <img src={item.avatarUrl} alt="userPhoto" />
                            </div>

                            <div id='nameAndDescriptionDiv'>
                                <h3>{item.name}</h3>
                                <p>short description</p>
                            </div>

                            <div id='lastPostDiv'>
                                <p>Last post at 16:20</p>
                            </div>

                        </div>

                    ))}

                </div>

            </div>
        )
    }
}

export default PeoplePage