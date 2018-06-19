import React from 'react';
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import authenticationService from "../../services/authenticationService"
import userService from "../../services/userService"

class LandingPage extends React.Component {

    constructor(props) {

        super(props)

        this.state = {
            email: "",
            password: "",
            name: "",
            username: "",
            logInError: "",
            tabIndex: 0
        }
    }

    handleEmail = (event) => {

        this.setState({

            email: event.target.value
        })
    }

    handlePassword = (event) => {

        this.setState({

            password: event.target.value
        })
    }

    handleName = (event) => {

        this.setState({

            name: event.target.value
        })
    }

    handleUsername = (event) => {

        this.setState({

            username: event.target.value
        })
    }

    handleLogin = () => {

        authenticationService.logIn({
            "username": this.state.email,
            "password": this.state.password
        }).then((data) => {
            this.setState({
                logInError: ""
            })
            localStorage.setItem("SessionId", data.sessionId);
            localStorage.setItem("profile", data);

        }).then(() => {
            userService.getProfile().then((profile) => {
                localStorage.setItem("user", profile.userId)
            })
        }).then(() => {
            this.props.redirect()

        }).catch((error) => {
            this.setState({

                logInError: error

            })
        })
    }

    handleRegister = () => {

        authenticationService.register({

            "username": this.state.username,
            "password": this.state.password,
            "name": this.state.name,
            "email": this.state.email

        }).then(() => {
            this.setState({
                registrationError: "",
                tabIndex: 0
            })

        }).catch(() => {
            this.setState({

                registrationError: "Invalid registration data, please try again"

            })
        })
    }

    handleEnter = (e) => {

        if (e.keyCode === 13) {

            this.handleLogin()
        }
    }



    render() {

        return (

            <div id="landingPage">

                <h1>Apricot Space</h1>

                <h3>See the world through Apricot</h3>


                <div>
                    <Tabs selectedIndex={this.state.tabIndex} onSelect={tabIndex => this.setState({ tabIndex })}>
                        <TabList>
                            <Tab >LogIn</Tab>
                            <Tab>Register</Tab>
                        </TabList>

                        <TabPanel>
                            <div className='sapper'>

                                <h2>LogIn</h2>

                                <span>Username</span>

                                <input type="text" onChange={this.handleEmail} />

                                <span>Password</span>

                                <input type="password" onKeyUp={this.handleEnter} onChange={this.handlePassword} />

                                <button onClick={this.handleLogin}>Login</button>

                                <span>{this.state.logInError}</span>

                            </div>
                        </TabPanel>
                        <TabPanel>
                            <div className='sapper'>
                                <h2>Register</h2>
                                <span>UserName</span>
                                <br />
                                <input type="text" onChange={this.handleUsername} />
                                <br />
                                <span>Name</span>
                                <br />
                                <input type="text" onChange={this.handleName} />
                                <br />
                                <span>email</span>
                                <br />
                                <input type="email" onChange={this.handleEmail} />
                                <br />
                                <span>pass</span>
                                <br />
                                <input type="password" onChange={this.handlePassword} />
                                <br />

                                <button onClick={this.handleRegister} >Register</button>
                                <br></br>

                                <span>{this.state.registrationError}</span>

                            </div>
                        </TabPanel>
                    </Tabs>
                </div>

            </div>
        )
    }
}

export default LandingPage