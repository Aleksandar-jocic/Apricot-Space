import React, { Component } from 'react';
import userService from "../../services/userService"
import { Link } from "react-router-dom";

class Comment extends Component {
    constructor(props) {
        super(props);
        this.state = {

            avatarUrl: ""
        };
    }
    componentDidMount() {


        userService.getUser(this.props.comment.authorId).then((user) => {

            this.setState({


                avatarUrl: user.avatarUrl
            })
        })
    }
    render() {
        return (
            <div className='commentsDiv'>

                <img width="320px" src={this.state.avatarUrl} alt="" />
                <div>
                    <span><Link to='/'>{this.props.comment.authorName}</Link></span>

                    <p>{this.props.comment.body}</p>
                </div>

            </div>
        )
    }
}

export default Comment;