import React from 'react';
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import authenticationService from "../../services/authenticationService"

class LandingPage extends React.Component {

    constructor(props) {

        super(props)

        this.state = {
            email: "",
            password: "",
            name: "",
            username: "",
            logInError: ""
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
            localStorage.setItem("SessionId", data.sessionId),
                localStorage.setItem("profile", data),
                this.props.redirect(data)
        }).catch(() => {
            this.setState({

                logInError: "Pogresni podaci, molim vas pokusajte ponovo"

            })
        })
    }

    handleRegister = () => {
        authenticationService.register({

            "username": this.state.username,
            "password": this.state.password,
            "name": this.state.name,
            "email": this.state.email

        }).then((data) => {
            this.setState({

                registrationError: "success"

            })
            // localStorage.setItem("SessionId", data.sessionId);
            // this.props.redirect(data);
        }).catch(() => {
            this.setState({

                registrationError: "Pogresni podaci, molim vas pokusajte ponovo"

            })
        })
    }

    render() {

        return (

            <div>
                <h1>BitBookLogIn</h1>
                <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Nemo, quis ut a, minima in quos illo fugit aliquam possimus impedit perspiciatis vero magnam nihil tempore quibusdam dolores obcaecati, vel adipisci.</p>



                <Tabs>
                    <TabList>
                        <Tab>LogIn</Tab>
                        <Tab>Register</Tab>
                    </TabList>

                    <TabPanel>
                        <div>
                            <h2>LogIn</h2>
                            <span>email</span>
                            <br />

                            <input type="email" onChange={this.handleEmail} />
                            <br />
                            <span>pass</span>
                            <br />
                            <input type="password" onChange={this.handlePassword} />
                            <br />

                            <button onClick={this.handleLogin}>Login</button>

                            <br></br>

                            <span>{this.state.logInError}</span>

                        </div>
                    </TabPanel>
                    <TabPanel>
                        <div>
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
        )
    }
}

export default LandingPage