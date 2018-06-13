import React from 'react';

import postService from '../../services/postService';
import PostsList from './PostsList';
import Sidebar from './Sidebar';


class FeedPage extends React.Component {

    constructor(props) {

        super(props),
            this.state = {
                posts: [],
                filterVideos: false,
                filterImages: false,
                filterText: false
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
            console.log(posts)
            this.setState({

                posts
            })


        }


        )

    }
    render() {

        return (

            <div>
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

            </div>

        )
    }

}

export default FeedPage