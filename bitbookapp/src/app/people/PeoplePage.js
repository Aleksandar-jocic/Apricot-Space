import React from 'react';
import UserService from '../../services/userService';
import Axios from 'axios';
import ItemList from './ItemList';
import Search from './Search';


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

                <Search inputMonitor={this.inputMonitor} />

                <div id='itemList'>

                    {this.state.users.filter((user) => {

                        if (this.state.inputValue === '') {

                            return true

                        } else {

                            return user.name.toLowerCase().includes(this.state.inputValue.toLowerCase())
                        }

                    }).map((item) => (

                        <ItemList item={item} />

                    ))}

                </div>

            </div>
        )
    }
}

export default PeoplePage