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


class App extends Component {

    render() {

        return (

            <div>

                <Header />

                <Switch>

                    <Route exact path='/' component={FeedPage} />
                    <Route exact path='/People' component={PeoplePage} />
                    <Route exact path='/Profile' component={ProfilePage} />

                </Switch>

            </div>
        );
    }
}

export default App;
