import React, { Component } from 'react';
import { Switch, Route } from "react-router-dom";
//log in - register
import LandingPage from './landing/LandingPage';
//pages
import FeedPage from './feed/FeedPage';
import ProfilePage from './profile/ProfilePage';
import PeoplePage from './people/PeoplePage';

import Header from './partials/Header'


// import Header from './partials/Header';
// import Footer from './partials/Footer';

class App extends Component {

    render() {

        return (

            <div>

                <Header />

                <Switch>

                    <Route exact path='/' component={FeedPage} />
                    <Route exact path='/Profile' component={ProfilePage} />
                    <Route exact path='/People' component={PeoplePage} />

                </Switch>

            </div>
        );
    }
}

export default App;
