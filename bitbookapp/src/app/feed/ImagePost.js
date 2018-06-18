import React, { Component } from 'react';
import Link from 'react-router-dom/Link';

class ImagePost extends Component {
    state = {}

    handleDelete = () => {
        this.props.deletePost(this.props.id)
    }
    // postAuthor = () => {
    //     const profiles = JSON.parse(localStorage.getItem("profiles"))
    //     const arr = profiles.filter((obj) => {
    //         return obj.id == this.props.userId
    //     })
    //     return arr[0].name
    // }
    render() {
        return (
            <div className='Post'>

                <span><Link to='/'>{this.props.postAuthor(this.props.userId)}</Link>
                </span> 

                <hr className='topHR'/>            

                <div className='imageDivOnFeed'>
                    <img src={this.props.imageUrl} alt="" />
                </div>

                <hr className='bottomHR'/>

                {this.props.commentsNum >= 0 ?

                    (<div>
                        {console.log(this.props.userId)}
                        <div className='textPostDiv' ><span>Image</span></div>
                        {this.props.userId == localStorage.getItem("user") ? (

                            <div className='deletePostButton'><span onClick={this.handleDelete} ><i class="fas fa-trash-alt"></i></span></div>
                        ) : <div className='deletePostButton'></div>}
                        <Link to={`/feeds/${this.props.type}/${this.props.id}`}>

                            <div className='commentPostDiv'><span>{this.props.commentsNum} Comments</span></div>

                        </Link>

                    </div>) : undefined}

            </div>
        );
    }
}

export default ImagePost;