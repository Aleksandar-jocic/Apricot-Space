import React, { Component } from 'react';
import { Switch, Route } from "react-router-dom";
import './App.css';
//log in - register
import LandingPage from './landing/LandingPage';
//pages
import FeedPage from './feed/FeedPage';
import ProfilePage from './profile/ProfilePage';
import PeoplePage from './people/PeoplePage';
//partials
import Header from './partials/Header';

import PostDetailsPage from './postDetails/PostDetailsPage';





class App extends Component {
    constructor(props) {
        super(props);
        this.state = {


            login: localStorage.getItem("profile") ? true : false
        };
    }

    handleLogOut = () => {
        localStorage.setItem("profile", "")
        localStorage.setItem("SessionId", "")
        localStorage.setItem("user", "")
        localStorage.setItem("profiles", "")
        this.setState({
            login: false,

        })
    }
    redirect = () => {

        this.setState({
            login: true,

        })
    }
    render() {

        return (

            this.state.login ?
                (<div>

                    <Header handleLogOut={this.handleLogOut} />

                    <Switch>


                        <Route exact path='/' component={FeedPage} />


                        <Route exact path='/People' component={PeoplePage} />
                        <Route exact path='/Profile' component={ProfilePage} />
                        <Route exact path='/feeds/:type/:id' component={PostDetailsPage} />
                        <Route exact path='/People/:userId' component={ProfilePage} />

                    </Switch>

                </div>) :


                (<div> <Route exact path='/' render={() => <LandingPage redirect={this.redirect} />} /></div>)









        )
    }
}







export default App;
