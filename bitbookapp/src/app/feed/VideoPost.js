import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class VideoPost extends Component {
    constructor(props) {
        super(props);
        this.state = {};
    }
    // postAuthor = () => {
    //     const profiles = JSON.parse(localStorage.getItem("profiles"))
    //     const arr = profiles.filter((obj) => {
    //         return obj.id == this.props.userId
    //     })
    //     return arr[0].name
    // }
    handleDelete = () => {
        this.props.deletePost(this.props.id)
    }
    render() {
        return (
            <div className='Post'>

                {(window.location.href == 'http://localhost:3000/#/') ? (<span ><Link to='/'>{this.props.postAuthor(this.props.userId)}</Link></span>) : ('Video')}


                <hr className='topHR' />

                <div className='videoDivOnFeed'>
                    <iframe
                        src={this.props.videoUrl}>
                    </iframe>
                </div>
                <hr className='bottomHR' />

                {this.props.commentsNum >= 0 ?

                    (<div>

                        <div className='textPostDiv' ><span>Video</span></div>
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

export default VideoPost;