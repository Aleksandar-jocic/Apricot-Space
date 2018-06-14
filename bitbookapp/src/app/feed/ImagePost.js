import React, { Component } from 'react';
import Link from 'react-router-dom/Link';

class ImagePost extends Component {
    state = {}

    handleDelete = () => {
        this.props.deletePost(this.props.id)
    }
    render() {
        return (
            <div>
                <div>  <img width="420" height="315" src={this.props.imageUrl} alt="" /></div>

                {this.props.commentsNum >= 0 ?
                    <div>
                        <Link to={
                            `/feeds/${this.props.type}/${this.props.id}`}>
                            <span>Image Post</span>
                            <br />
                            <span>{this.props.commentsNum} Comments</span>
                        </Link>
                        <button onClick={this.handleDelete} >deleteMe</button>
                    </div>
                    : undefined
                }

            </div>
        );
    }
}

export default ImagePost;