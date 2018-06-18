import React from 'react';

class NewPosts extends React.Component {

    constructor(props) {
        super(props)
        this.state = {
            dropDown: false
        }
    }

    changeClass = (event) => {
        console.log('state');
        event.stopPropagation();

        this.setState({

            dropDown: !this.state.dropDown
        })


    }

    render() {

        return (
            <div id="dd" className={(this.state.dropDown === true) ? ('wrapper-dropdown-5 active') : ('wrapper-dropdown-5')} tabindex="1" onClick={this.changeClass}><i className="fas fa-plus-circle"></i><span>New Post</span>

                <ul className="dropdown">

                    <li><a href="#" onClick={this.props.newVideo}><i class="fas fa-video"></i>Video</a></li>

                    <li><a href="#" onClick={this.props.newImage}><i class="fas fa-camera"></i>Image</a></li>

                    <li><a href="#" onClick={this.props.newText}><i class="far fa-comment"></i>Post</a></li>

                </ul>
            </div>
        )
    }


}


export default NewPosts




// <div id='NewPosts'>

// 

// <div id='contentButtons'>

//         
//         
//         

// </div>


// </div>