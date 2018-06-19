import React, { Component } from 'react';

class NewPosts extends Component {

    constructor(props) {
        super(props)
        this.state = {
            dropDown: false
        }
    }

    changeClass = (event) => {

        event.stopPropagation();

        this.setState((prevState) => {

            return { dropDown: !prevState.dropDown }
        })

    }

    render() {

        return (
            <div id="dd" className={(this.state.dropDown === true) ? ('wrapper-dropdown-5 active') : ('wrapper-dropdown-5')} tabindex="1" onClick={this.changeClass}><i className="fas fa-plus-circle"></i><span>New Post</span>

                <ul className="dropdown">

                    <li><a href="#" onClick={() => { this.props.openModal("video") }}><i class="fas fa-video"></i>Video</a></li>

                    <li><a href="#" onClick={() => { this.props.openModal("image") }}><i class="fas fa-camera"></i>Image</a></li>

                    <li><a href="#" onClick={() => { this.props.openModal("text") }}><i class="far fa-comment"></i>Post</a></li>

                </ul>
            </div>
        )
    }


}


export default NewPosts

