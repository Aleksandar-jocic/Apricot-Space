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

    date = (postDate) => {

        let todayDate = new Date();
        let todayDateFormatted = `${todayDate.getFullYear()}/${todayDate.getMonth() + 1}/${todayDate.getDate()}`

        let lastPostDate = new Date(postDate)
        let lastPostDateFormmated = `${lastPostDate.getFullYear()}/${lastPostDate.getMonth() + 1}/${lastPostDate.getDate()}`

        if (todayDateFormatted === lastPostDateFormmated) {

            return `Last post at:${lastPostDate.getHours() < 10 ? '0' + lastPostDate.getHours() : lastPostDate.getHours()}:${lastPostDate.getMinutes() == 0 ? '00' : lastPostDate.getMinutes()} `
        } else {

            return `Last post at:${lastPostDateFormmated} ${lastPostDate.getHours() < 10 ? '0' + lastPostDate.getHours() : lastPostDate.getHours()}:${lastPostDate.getMinutes() == 0 ? '00' : lastPostDate.getMinutes()}`
        }

    }

    inputMonitor(event) {

        this.setState({
            inputValue: event.target.value
        })
    }

    listOfUsers() {

        UserService.getUsers().then((userList) => {

            console.log(userList);

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

                        <ItemList item={item} date={this.date} />

                    ))}

                </div>

            </div>
        )
    }
}

export default PeoplePage