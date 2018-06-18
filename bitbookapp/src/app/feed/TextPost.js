import React, { Component } from 'react';
import Link from 'react-router-dom/Link';


class TextPost extends Component {
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

            <div className='Post' >

                <p>{this.props.text}</p>

                {this.props.commentsNum >= 0 ?

                    (<div>

                        <div className='textPostDiv' ><span>Text</span></div>

                        {this.props.userId == localStorage.getItem("user") ? (

                            <div className='deletePostButton'><span onClick={this.handleDelete} >{`<Delete post>`}</span></div>
                        ) : <div className='deletePostButton'><span >Posted by: {
                            this.props.postAuthor(this.props.userId)

                        }</span></div>}

                        <Link to={`/feeds/${this.props.type}/${this.props.id}`}>

                            <div className='commentPostDiv'><span>{this.props.commentsNum} Comments</span></div>

                        </Link>


                    </div>) : undefined}

            </div>
        );
    }
}

export default TextPost;