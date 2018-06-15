import React, { Component } from 'react';
class Sidebar extends Component {
    constructor(props) {
        super(props);
        this.state = {
            selected: 0,
        };
    }


    render() {

        return (

            <div id='FilterList' tab-index="0">

                <button onClick={this.props.clearFilter}>filter  <i class="fas fa-angle-down"></i>

                </button>

                <div id='contentList'>

                    <div>
                        <button onClick={this.props.filterVideos} ><span>Video</span></button>

                    </div>
                    <div>
                        <button onClick={this.props.filterImages} ><span>Image</span></button>
                    </div>
                    <div>
                        <button onClick={this.props.filterText} ><span>Text</span></button>
                    </div>

                </div>


            </div>


        );
    }
}

export default Sidebar;


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