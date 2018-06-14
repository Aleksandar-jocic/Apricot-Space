import React, { Component } from 'react';
import userService from "../../services/userService"

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
            <div>
                {this.props.comment.body}
                <br />
                <span>Author name: {this.props.comment.authorName}</span>
                <br />
                <img width="320px" src={this.state.avatarUrl} alt="" />
            </div>
        );
    }
}

export default Comment;