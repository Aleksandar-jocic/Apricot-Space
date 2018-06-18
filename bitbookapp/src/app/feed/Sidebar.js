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
            
            dropDown: !this.state.dropDown})          
            
        
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





// <div id='FilterList' tab-index="0">

// <button >filter  <i class="fas fa-angle-down"></i>

// </button>

// <div id='contentList'>

//     <div>
//         <button ><span>Video</span></button>

//     </div>
//     <div>
//         <button  ><span>Image</span></button>
//     </div>
//     <div>
//         <button  ><span>Text</span></button>
//     </div>

// </div>


// // </div>




            





// Branko's inefficient technique bellow (zero elegance):

// <div class="dropdown">

//     <button class="btn btn-secondary dropdown-toggle" type="button" id="dropdownMenuButton" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
//         All posts
// </button>
//     <div class="dropdown-menu" aria-labelledby="dropdownMenuButton">
//         <span class="dropdown-item" href="#" onClick={this.props.clearFilter} >All Posts</span>
//         <span class="dropdown-item" href="#" onClick={this.props.filterVideos} >Videos</span>
//         <span onClick={this.props.filterImages} class="dropdown-item" href="#">Images</span>
//         <span onClick={this.props.filterText} class="dropdown-item" href="#">Text</span>
//     </div>
// </div>