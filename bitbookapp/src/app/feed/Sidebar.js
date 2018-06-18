import React, { Component } from 'react';


class Sidebar extends Component {
    constructor(props) {
        super(props);
        this.state = {

            selected: 0,
            dropDown: false,
            selectedValue: ''

        };
    }


    changeClass = () => {
        console.log('state');

        this.setState({

            dropDown: !this.state.dropDown
        })


    }
    valueNotation = () => {

        this.setState({
            selectedValue: ''
        })


    }


    render() {

        return (


            <div id="dd" className={(this.state.dropDown === true) ? ('wrapper-dropdown-3 active') : ('wrapper-dropdown-3')} tabindex="1" onClick={this.changeClass}>
                <span >Filter</span>

                <ul className='dropdown' >

                    <li className='to'><a href="#" onClick={this.props.filterVideos}  ><i class="fas fa-video"></i>Video</a></li>

                    <li className='to'><a href="#" onClick={this.props.filterImages}><i class="fas fa-image"></i>Image</a></li>

                    <li className='to'><a href="#" onClick={this.props.filterText}><i class="fas fa-comments"></i>Text</a></li>

                    <li className='to'><a href="#" onClick={this.props.clearFilter}  ><i class="fas fa-ban"></i>No Filter</a></li>
                </ul>
            </div>

        )
    }



}


export default Sidebar;
