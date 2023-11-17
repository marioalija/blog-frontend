import axios from "axios";
import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";

export function PostsShowPage() {
  const [post, setPost] = useState({});
  const params = useParams();

  const handleShowPost = () => {
    axios.get(`http://localhost:3000/posts/${params.id}.json`).then((response) => {
      setPost(response.data);
    });
  };

  useEffect(handleShowPost, []);

  return (
    <div id="Posts-show">
      <h1> Post Info</h1>
      <h2>{post.title}</h2>
      <p>{post.id}</p>
      <img src={post.image} alt="" />
      <p>{post.body}</p>
    </div>
  );
}
