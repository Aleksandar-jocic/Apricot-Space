import React, { Component } from 'react';
import postService from '../../services/postService';
import TextPost from '../feed/TextPost';
import ImagePost from '../feed/ImagePost';
import VideoPost from '../feed/VideoPost';
import CommentList from './CommentsList';
postService

class PostDetailsPage extends Component {
    constructor(props) {
        super(props);
        this.state = {
            text: "",
            imageUrl: "",
            videoUrl: "",
            comments: [],
            newComment: ""
        };
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
        }).then(() => {

            postService.getComment(this.props.match.params.id).then((comments) => {


                this.setState({
                    comments

                })
            })


        })

    }
    componentDidMount() {

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
    render() {
        return (

            <div> {

                this.props.match.params.type === "text" ?
                    <TextPost
                        text={this.state.text}
                    /> : (this.props.match.params.type === "image" ?
                        <ImagePost
                            imageUrl={this.state.imageUrl}
                        /> :

                        <VideoPost
                            videoUrl={this.state.videoUrl}
                        />

                    )


            }

                <input type="text" onChange={this.handleNewComment} />
                <br />
                <br />
                <button onClick={this.uploadComment} >Send Comment</button>
                <br />
                <br />
                <CommentList
                    comments={this.state.comments}
                />


            </div>

        );
    }
}

export default PostDetailsPage;