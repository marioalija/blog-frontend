//create a component to hold recipe show functionality

export function PostsShow(props) {
  console.log(props);
  return (
    <div id="posts-show">
      <h1> Post Info</h1>
      <h2>{props.post.title}</h2>
      <p>{props.post.id}</p>
      <p>
        <img src={props.post.image} />
      </p>
    </div>
  );
}
