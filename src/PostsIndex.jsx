import { Link } from "react-router-dom";
import { useState } from "react";
/* eslint-disable react/prop-types */
export function PostsIndex(props) {
  console.log(props);
  const [searchFilter, setSearchFilter] = useState("");

  return (
    <div id="posts-index">
      <h1>The Life of the Legend</h1>
      <form className="d-flex" role="search">
        <input
          className="form-control me-2"
          type="search"
          placeholder="Search"
          aria-label="Search"
          value={searchFilter}
          onChange={(event) => setSearchFilter(event.target.value)}
          list="titles"
        />
        <datalist id="titles">
          {props.posts.map((post) => (
            <option key={post.id} value={post.title} />
          ))}
        </datalist>
        <button className="btn btn-outline-info" type="submit">
          Search
        </button>
      </form>
      <div className="row row-cols-1 row-cols-md-2 g-4">
        {props.posts
          .filter((posts) => posts.title.toLowerCase().includes(searchFilter))
          .map((post) => (
            <div key={post.id} className="col">
              <div className="card">
                <img src={post.image} className="card-img-top" alt="..." />
                <div className="card-body">
                  <h5 className="card-title">{post.title}</h5>
                  <p className="card-text">{post.body}</p>
                  <button onClick={() => props.onShowPost(post)}>More info</button>
                  <Link to={`/posts/${post.id}`}>Load Page</Link>
                </div>
              </div>
            </div>
          ))}
      </div>
    </div>
  );
}

//   <div id="posts-index">
// <div className="posts">
//   {props.posts.map((post) => (
//     <div key={post.id} className="post">
//       <p>-{post.id}-</p>
//       <h2>{post.title}</h2>
//       <img src={post.image} alt="" />
//       <div>
//         <button onClick={() => props.onShowPost(post)}>More info</button>
//       </div>
//     </div>
//   ))}
// </div>
