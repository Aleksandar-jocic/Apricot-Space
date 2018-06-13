import React from 'react';

import postService from '../../services/postService';
import PostsList from './PostsList';
import Sidebar from './Sidebar';
import TextPostModal from './TextPostModal';
import ImagePostModal from './ImagePostModal';



class FeedPage extends React.Component {

    constructor(props) {

        super(props),
            this.state = {
                posts: [],
                filterVideos: false,
                filterImages: false,
                filterText: false,
                textPostModal: false,
                imagePostModal: false
            }
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
                textPostModal: false
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

    closeModal = () => {

        this.setState({

            textPostModal: false,
            imagePostModal: false
        })
    }
    render() {

        return (

            <div>
                <button onClick={this.openTextModal} >TextModal</button>
                <br />
                <button onClick={this.openImageModal} >ImageModal</button>
                <Sidebar
                    filterVideos={this.filterVideos}
                    filterImages={this.filterImages}
                    filterText={this.filterText}
                    clearFilter={this.clearFilter}
                />
                <PostsList
                    filterVideos={this.state.filterVideos}
                    filterImages={this.state.filterImages}
                    filterText={this.state.filterText}
                    posts={this.state.posts}

                />



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



            </div>

        )
    }

}

export default FeedPage