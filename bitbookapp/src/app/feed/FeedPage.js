import React from "react";
import postService from "../../services/postService";
import PostsList from "./PostsList";
import Sidebar from "./Sidebar";
import TextPostModal from "./modals/TextPostModal";
import ImagePostModal from "./modals/ImagePostModal";
import VideoPostModal from "./modals/VideoPostModal";
import NewPosts from "./NewPosts";

class FeedPage extends React.Component {
  constructor(props) {
    super(props),
      (this.state = {
        posts: [],
        filter: "",
        openModal: false,
        newPost: ""
      });
  }

  handleNewPost = (event, type) => {
    if (type === "text") {
      this.setState({
        newPost: event.target.value
      });
    } else if (type === "image") {
      let reg = /^(ftp|http|https):\/\/[^ "]+$/;

      if (reg.test(event.target.value)) {
        this.setState({
          newPost: event.target.value,
          error: ""
        });
      } else {
        this.setState({
          error: "This is not valid image url"
        });
      }
    } else {
      let youTubeRegex = /(youtu.be\/|v\/|u\/\w\/|embed\/|watch\?v=|[a-zA-Z0-9_\-]+\?v=)([^#\&\?\n<>\'\"]*)/gi;
      if (youTubeRegex.test(event.target.value)) {
        let youTubeWatch = event.target.value;
        let youTubeEmbed = `https://www.youtube.com/embed/${
          youTubeWatch.split("=")[1]
        }`;

        this.setState({
          newPost: youTubeEmbed,
          error: ""
        });
      } else {
        this.setState({
          error: "This is not valid Youtube url"
        });
      }
    }
  };

  uploadPost = type => {
    if (type === "text") {
      postService.uploadTextPost({ text: this.state.newPost }).then(() => {
        this.loadData();
        this.closeModal();
      });
    } else if (type === "image") {
      postService.uploadImagePost({ imageUrl: this.state.newPost }).then(() => {
        this.loadData();
        this.closeModal();
      });
    } else if (type === "video") {
      postService.uploadVideoPost({ videoUrl: this.state.newPost }).then(() => {
        this.loadData();
        this.closeModal();
      });
    }
  };

  deletePost = id => {
    postService
      .deletePost(id)
      .then(() => {
        return postService.getPosts();
      })
      .then(posts => {
        this.setState({
          posts
        });
      });
  };

  filter = type => {
    this.setState({
      filter: type
    });
  };

  openModal = type => {
    this.setState({
      postModal: type
    });
  };

  closeModal = () => {
    this.setState({
      newPost: "",
      postModal: false
    });
  };

  loadData = () => {
    postService
      .getPosts()
      .then(posts => {
        this.setState({
          posts
        });
      })
      .catch(() => {
        this.setState({
          posts: []
        });
      });
  };

  componentDidMount() {
    this.loadData();
  }

  render() {
    return (
      <div id="FeedPage">
        <div id="PostList">
          <PostsList
            filter={this.state.filter}
            posts={this.state.posts}
            deletePost={this.deletePost}
          />
        </div>

        <div id="SideBarNewPosts">
          <Sidebar filter={this.filter} />

          <NewPosts openModal={this.openModal} />
        </div>

        <TextPostModal
          postModal={this.state.postModal}
          closeModal={this.closeModal}
          uploadPost={this.uploadPost}
          handleNewPost={this.handleNewPost}
        />
        <ImagePostModal
          postModal={this.state.postModal}
          closeModal={this.closeModal}
          uploadPost={this.uploadPost}
          handleNewPost={this.handleNewPost}
          error={this.state.error}
        />
        <VideoPostModal
          postModal={this.state.postModal}
          closeModal={this.closeModal}
          uploadPost={this.uploadPost}
          handleNewPost={this.handleNewPost}
          error={this.state.error}
        />
      </div>
    );
  }
}

export default FeedPage;
