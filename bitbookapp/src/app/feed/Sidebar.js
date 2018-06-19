import React, { Component } from 'react';


class Sidebar extends Component {
    constructor(props) {
        super(props);
        this.state = {

            dropDown: false,

        };
    }


    changeClass = () => {

        this.setState((prevState) => {

            return { dropDown: !prevState.dropDown }
        })

    }


    render() {

        return (


            <div id="dd" className={(this.state.dropDown === true) ? ('wrapper-dropdown-3 active') : ('wrapper-dropdown-3')} tabindex="1" onClick={this.changeClass}>
                <span >Filter</span>

                <ul className='dropdown' >

                    <li className='to'><a href="#" onClick={() => { this.props.filter("video") }}  ><i class="fas fa-video"></i>Video</a></li>

                    <li className='to'><a href="#" onClick={() => { this.props.filter("image") }}><i class="fas fa-image"></i>Image</a></li>

                    <li className='to'><a href="#" onClick={() => { this.props.filter("text") }}><i class="fas fa-comments"></i>Text</a></li>

                    <li className='to'><a href="#" onClick={() => { this.props.filter("") }}  ><i class="fas fa-ban"></i>No Filter</a></li>
                </ul>
            </div>

        )
    }



}


export default Sidebar;
