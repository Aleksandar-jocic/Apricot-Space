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

            <div>
                <div>  {this.props.text}</div>
                <Link to={
                    `/feeds/${this.props.type}/${this.props.id}`}>
                    {this.props.commentsNum >= 0 ? (<span>Text Post</span>) : undefined}
                    <br />
                    {this.props.commentsNum >= 0 ? (<span>{this.props.commentsNum} Comments</span>) : undefined}
                </Link>
                <button onClick={this.handleDelete} >deleteMe</button>
            </div>
        );
    }
}

export default TextPost;