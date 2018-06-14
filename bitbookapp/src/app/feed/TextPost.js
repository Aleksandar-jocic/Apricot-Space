import React, { Component } from 'react';
import Link from 'react-router-dom/Link';


class TextPost extends Component {
    constructor(props) {
        super(props);
        this.state = {};
    }
    handleDelete = () => {
        this.props.deletePost(this.props.id)
    }
    render() {
        return (

            <div className='Post' >

                <p>{this.props.text}</p>

                {this.props.commentsNum >= 0 ?

                    (<div>

                        <div className='textPostDiv' ><span>Text</span></div>
                        <div className='deletePostButton'><span onClick={this.handleDelete} >{`<Delete post>`}</span></div>
                        <Link to={`/feeds/${this.props.type}/${this.props.id}`}>

                            <div className='commentPostDiv'><span>{this.props.commentsNum} Comments</span></div>

                        </Link>


                    </div>) : undefined}

            </div>
        );
    }
}

export default TextPost;