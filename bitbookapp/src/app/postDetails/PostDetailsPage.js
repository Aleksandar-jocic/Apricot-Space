import React, { Component } from 'react';
import postService from '../../services/postService';
import userService from "../../services/userService"
import TextPost from '../feed/TextPost';
import ImagePost from '../feed/ImagePost';
import VideoPost from '../feed/VideoPost';
import CommentList from './CommentsList';


class PostDetailsPage extends Component {
    constructor(props) {
        super(props);
        this.state = {
            myProfile: {},
            post: {},
            comments: [],
            newComment: ""
        };
    }


    getUpdatedProfile = () => {

        userService.getProfile().then((profile) => {

            this.setState({
                myProfile: profile
            })
        })
    }



    handleNewComment = (event) => {
        this.setState({

            newComment: event.target.value

        })



    }

    uploadComment = () => {

        postService.uploadComment({
            "body": this.state.newComment,
            "postId": this.props.match.params.id
        }).then(() => { return postService.getComment(this.props.match.params.id) })
            .then((comments) => {

                this.setState({
                    comments

                })
            })




    }

    componentDidMount() {

        this.getUpdatedProfile()

        this.props.match.params.type === "text" ?
            postService.getTextPost(this.props.match.params.id).then((post) => {
                this.setState({

                    post

                })

            })
            : (this.props.match.params.type === "image" ?
                postService.getImagePost(this.props.match.params.id).then((post) => {
                    this.setState({

                        post

                    })

                })

                : postService.getVideoPost(this.props.match.params.id).then((post) => {
                    this.setState({

                        post

                    })

                }))


        postService.getComment(this.props.match.params.id).then((comments) => {

            this.setState({
                comments

            })
        })
    }

    handleKeyPress = (e) => {

        if (e.keyCode === 13) {


            this.uploadComment();
            e.target.value = '';
        }
    }

    render() {
        return (

            <div id='postDetails'>

                {this.props.match.params.type === "text" ?

                    (<TextPost post={this.state.post} />) : (this.props.match.params.type === "image") ?
                        (<ImagePost post={this.state.post} />) :
                        (<VideoPost post={this.state.post} />)}

                <CommentList
                    comments={this.state.comments}
                />

                <div id='commentControls'>

                    <img src={this.state.myProfile.avatarUrl} alt="" />

                    <div >
                        <input type="text" onKeyUp={this.handleKeyPress} placeholder="Write a comment here..." onChange={this.handleNewComment} />
                    </div>

                </div>

            </div>

        );
    }
}

export default PostDetailsPage;