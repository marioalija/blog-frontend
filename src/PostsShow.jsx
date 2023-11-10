export function PostsShow(props) {
  const handleSubmit = (event) => {
    event.preventDefault();
    const params = new FormData(event.target);
    props.onUpdatePost(props.post.id, params);
    event.target.reset();
  };

  return (
    <div id="posts-show">
      {/* //   <h1> Post Info</h1>
    //   <h2>{props.post.title}</h2>
    //   <p>{props.post.id}</p> */}
      <p>
        <img src={props.post.image} />
      </p>

      <form onSubmit={handleSubmit}>
        <div>
          Title: <input defaultValue={props.post.title} name="title" type="text" />
        </div>
        <div>
          Id: <input defaultValue={props.post.id} name="id" type="text" />
        </div>
        <div>
          Image: <input defaultValue={props.post.image} name="image" type="text" />
        </div>
        <button type="submit">Update</button>
      </form>
    </div>
  );
}
