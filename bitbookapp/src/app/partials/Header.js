import React from 'react';
import { Link } from "react-router-dom";


const Header = ({ handleLogOut }) => {


    return (

        <div id="container">

            <div id="header">

                <span id="bitSpan"><Link to='/'>Apricot Space</Link></span>

                <div>

                    <span><Link to='/'>Feed</Link></span>
                    <span><Link to='/People'>People</Link></span>
                    <span><Link to='/Profile'>Profile</Link></span>
                    <span id='LogOut' onClick={handleLogOut} ><Link to="/" >Logout</Link></span>

                </div>

            </div>
        </div>
    )
}

export default Header