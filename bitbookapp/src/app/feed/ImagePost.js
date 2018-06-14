import React, { Component } from 'react';
import Link from 'react-router-dom/Link';

class ImagePost extends Component {
    state = {}

    handleDelete = () => {
        this.props.deletePost(this.props.id)
    }
    render() {
        return (
            <div className='Post'>

                <div className='imageDivOnFeed'>
                    <img src={this.props.imageUrl} alt="" />
                </div>

                {this.props.commentsNum >= 0 ?

                    (<div>

                        <div className='textPostDiv' ><span>Image</span></div>
                        <div className='deletePostButton' onClick={this.handleDelete} >{`<Delete post>`}</div>
                        <Link to={`/feeds/${this.props.type}/${this.props.id}`}>

                            <div className='commentPostDiv'><span>{this.props.commentsNum} Comments</span></div>

                        </Link>

                    </div>) : undefined}

            </div>
        );
    }
}

export default ImagePost;