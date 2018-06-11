import React from 'react';
import { Link } from "react-router-dom";

class Header extends React.Component {

    constructor(props) {
        super(props),
            this.state = {

            }
    }

    render() {

        return (

            <div>

                <span>BitBook</span>

                <div>

                    <span><Link to='/'>Feed</Link></span>
                    <span><Link to='/Profile'>Profile</Link></span>
                    <span><Link to='/People'>People</Link></span>
                </div>

            </div>
        )
    }

}

export default Header