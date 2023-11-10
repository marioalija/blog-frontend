import axios from "axios";
//create a component to hold recipe show functionality

export function PostsShow(props) {
  const handleSubmit = (event) => {
    event.preventDefault();
    const params = new FormData(event.target);
    axios.patch(`http://localhost:3000/posts/${props.post.id}.json`, params).then((response) => {
      console.log(response);
      event.target.reset();
    });
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
          Title: <input defaultValue={props.post.tittle} name="title" type="text" />
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
