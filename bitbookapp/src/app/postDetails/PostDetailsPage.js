import React, { Component } from 'react';
import postService from '../../services/postService';
import userService from "../../services/userService"
import TextPost from '../feed/TextPost';
import ImagePost from '../feed/ImagePost';
import VideoPost from '../feed/VideoPost';
import CommentList from './CommentsList';
postService

class PostDetailsPage extends Component {
    constructor(props) {
        super(props);
        this.state = {
            myProfile: {},
            text: "",
            imageUrl: "",
            videoUrl: "",
            comments: [],
            newComment: ""
        };
    }

    //              PROFILE             //

    getUpdatedProfile = () => {
        console.log(this.state.myProfile.avatarUrl);
        
        userService.getProfile().then((profile) => {

            this.setState({
                myProfile: profile
            })
        })
    }

    
    //          END OF              //


    handleNewComment = (event) => {
        this.setState({

            newComment: event.target.value

        })



    }

    uploadComment = () => {


        postService.uploadComment({
            "body": this.state.newComment,
            "postId": this.props.match.params.id
        }).then(() => {

            postService.getComment(this.props.match.params.id).then((comments) => {


                this.setState({
                    comments

                })
            })


        })

    }
    componentDidMount() {

        this.getUpdatedProfile()

        this.props.match.params.type === "text" ?
            postService.getTextPost(this.props.match.params.id).then(({ text }) => {
                this.setState({

                    text

                })

            })
            : (this.props.match.params.type === "image" ?
                postService.getImagePost(this.props.match.params.id).then(({ imageUrl }) => {
                    this.setState({

                        imageUrl

                    })

                })



                : postService.getVideoPost(this.props.match.params.id).then(({ videoUrl }) => {
                    this.setState({

                        videoUrl

                    })

                }))

        postService.getComment(this.props.match.params.id).then((comments) => {


            this.setState({
                comments

            })
        }) 
    }

    handleKeyPress = (e) => {

        if(e.keyCode === 13) {
            console.log('someerroe');            

            this.uploadComment();
            e.target.value = '';
        }
    }

    render() {
        return (

            <div id='postDetails'> 

                {this.props.match.params.type === "text" ?
                    
                    (<TextPost  text={this.state.text} />) : (this.props.match.params.type === "image") ?
                        (<ImagePost imageUrl={this.state.imageUrl} />) : 
                        (<VideoPost videoUrl={this.state.videoUrl} />)}
                
                <CommentList
                    comments={this.state.comments}
                />
                
                <div id='commentControls'>

                    <img src={this.state.myProfile.avatarUrl}  alt="" />
                
                    <div >
                        <input type="text" onKeyUp={this.handleKeyPress} placeholder="Write a comment here..." onChange={this.handleNewComment}  />
                    </div>
                    
                    {/* <button onClick={this.uploadComment} >Send Comment</button> */}
                </div>

            </div>

        );
    }
}

export default PostDetailsPage;