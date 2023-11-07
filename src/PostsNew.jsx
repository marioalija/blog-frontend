export function PostsNew() {
  return (
    <div id="posts-new">
      <h1>New post</h1>
      <div className="search">
        Title: <input type="text" />
      </div>
      <div className="search">
        Body: <input type="text" />
      </div>
      <div className="search">
        Image: <input type="text" />
      </div>
      <div>
        <button>Add More Pics</button>
      </div>
    </div>
  );
}
