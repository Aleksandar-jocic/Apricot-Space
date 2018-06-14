import React from 'react';

import postService from '../../services/postService';
import PostsList from './PostsList';
import Sidebar from './Sidebar';

import TextPostModal from './modals/TextPostModal';
import ImagePostModal from './modals/ImagePostModal';
import VideoPostModal from './modals/VideoPostModal'

import NewPosts from './NewPosts';


class FeedPage extends React.Component {

    constructor(props) {

        super(props),
            this.state = {
                posts: [],
                filterVideos: false,
                filterImages: false,
                filterText: false,
                textPostModal: false,
                imagePostModal: false,
                videoPostModal: false
            }
    }

    deletePost = (id) => {

        postService.deletePost(id).then(() => {

            postService.getPosts().then((posts) => {

                this.setState({

                    posts

                })
            })
        })

    }
    filterVideos = () => {


        this.setState({

            filterVideos: true,
            filterImages: false,
            filterText: false
        })

    }
    clearFilter = () => {
        console.log("clicked")
        this.setState({

            filterVideos: false,
            filterImages: false,
            filterText: false
        })

    }

    filterImages = () => {


        this.setState({

            filterVideos: false,
            filterImages: true,
            filterText: false
        })

    }

    filterText = () => {


        this.setState({

            filterVideos: false,
            filterImages: false,
            filterText: true
        })

    }
    componentDidMount() {

        postService.getPosts().then((posts) => {

            this.setState({

                posts
            })


        }


        )

    }
    getUpdatedPosts = () => {

        postService.getPosts().then((posts) => {

            this.setState({

                posts,
                textPostModal: false,
                imagePostModal: false,
                videoPostModal: false

            })

        }

        )

    }




    openTextModal = () => {

        this.setState({

            textPostModal: true
        })

    }
    openImageModal = () => {

        this.setState({

            imagePostModal: true
        })

    }
    openVideoModal = () => {

        this.setState({

            videoPostModal: true
        })
    }


    closeModal = () => {

        this.setState({

            textPostModal: false,
            imagePostModal: false,
            videoPostModal: false
        })
    }
    render() {

        return (

            <div>

                {/* <Sidebar
                    filterVideos={this.filterVideos}
                    filterImages={this.filterImages}
                    filterText={this.filterText}
                    clearFilter={this.clearFilter}
                /> */}
                <PostsList
                    filterVideos={this.state.filterVideos}
                    filterImages={this.state.filterImages}
                    filterText={this.state.filterText}
                    posts={this.state.posts}
                    deletePost={this.deletePost}

                />
                {/* <NewPosts
                    newText={this.openTextModal}
                    newImage={this.openImageModal}
                    newVideo={this.openVideoModal}
                /> */}

                <TextPostModal
                    closeModal={this.closeModal}
                    textPostModal={this.state.textPostModal}
                    getUpdatedPosts={this.getUpdatedPosts}
                />
                <ImagePostModal

                    closeModal={this.closeModal}
                    imagePostModal={this.state.imagePostModal}
                    getUpdatedPosts={this.getUpdatedPosts}
                />
                <VideoPostModal
                    closeModal={this.closeModal}
                    videoPostModal={this.state.videoPostModal}
                    getUpdatedPosts={this.getUpdatedPosts}

                />



            </div>

        )
    }

}

export default FeedPage