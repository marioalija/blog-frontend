import { useState, useEffect } from "react";
import { PostsIndex } from "./PostsIndex";
import { PostsNew } from "./PostsNew";
import { Routes, Route } from "react-router-dom";
import { About } from "./About";
import { Signup } from "./Signup";
import { PostsShow } from "./PostsShow";
import { Modal } from "./Modal";
import axios from "axios";
import { Login } from "./Login";
import { LogoutLink } from "./LogoutLink";
import { PostsShowPage } from "./PostsShowPage";

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
  // makes a create function
  const handleCreatePost = (params) => {
    axios.post("http://localhost:3000/posts.json", params).then((response) => {
      setPosts([...posts, response.data]);
    });
  };

  const handleUpdatePost = (id, params) => {
    axios.patch(`http://localhost:3000/posts/${id}.json`, params).then((response) => {
      setPosts(
        posts.map((post) => {
          if (post.id === response.data.id) {
            return response.data;
          } else {
            return post;
          }
        })
      );
      setCurrentPost(response.data);
      setIsPostsShowVisible(false);
    });
  };

  const handleDestroyPost = (post) => {
    axios.delete(`http://localhost:3000/posts/${post.id}.json`).then((response) => {
      setPosts(posts.filter((p) => p.id !== post.id));
      console.log(response);
      handleClose();
    });
  };

  // react hook that calls a function on a page load ONCE
  useEffect(handleIndexPosts, []);

  return (
    <div className="container">
      <Routes>
        <Route path="/about" element={<About />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/login" element={<Login />} />
        <Route path="/posts/new" element={<PostsNew onCreatePost={handleCreatePost} />} />
        <Route path="/posts" element={<PostsIndex posts={posts} onShowPost={handleShowPost} />} />
        <Route path="/posts/:id" element={<PostsShowPage />} />
      </Routes>

      <div className="image-container">
        <h1>WELCOME TO THE STEWIE GRIFFIN SHOW</h1>
        <img src="https://i.redd.it/0t76j6jfahub1.jpg" alt="image" />
      </div>

      <LogoutLink />

      <Modal show={isPostsShowVisible} onClose={handleClose}>
        {/* replaced data with a component */}
        <PostsShow post={currentPost} onUpdatePost={handleUpdatePost} onDestroyPost={handleDestroyPost} />
      </Modal>
    </div>
  );
}
