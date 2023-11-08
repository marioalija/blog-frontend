import { useState, useEffect } from "react";
import { PostsIndex } from "./PostsIndex";
import { PostsNew } from "./PostsNew";
// imported posts show component
import { PostsShow } from "./PostsShow";
import { Modal } from "./Modal";
import axios from "axios";

export function Content() {
  const [posts, setPosts] = useState([]);
  // a function to make web request to index recipe data
  const [currentPost, setCurrentPost] = useState({});

  const handleIndexPosts = () => {
    axios.get("http://localhost:3000/posts.json").then((response) => {
      console.log(response.data);
      setPosts(response.data);
    });
  };

  //giving react the variable and the ability to set that variable
  const [isPostsShowVisible, setIsPostsShowVisible] = useState(false);

  //a function to toggle modal show on
  const handleShowPost = (post) => {
    setIsPostsShowVisible(true);
    setCurrentPost(post);
  };
  //a function to toggle close
  const handleClose = () => {
    setIsPostsShowVisible(false);
  };

  useEffect(handleIndexPosts, []);

  return (
    <div>
      <PostsNew />
      <PostsIndex posts={posts} onShowPost={handleShowPost} />
      <Modal show={isPostsShowVisible} onClose={handleClose}>
        {/* replaced data with a component */}
        <PostsShow post={currentPost} />
      </Modal>
    </div>
  );
}
