/* eslint-disable react/prop-types */
export function PostsIndex(props) {
  console.log(props);

  return (
    <div id="posts-index">
      <h1>All posts</h1>
      {/* loop of defined recipe data props from the parent component */}
      <div className="posts">
        {props.posts.map((post) => (
          <div key={post.id} className="post">
            <p>-{post.id}-</p>
            <h2>{post.title}</h2>
            <img src={post.image} alt="" />
            <div>
              <button>More pictures</button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
