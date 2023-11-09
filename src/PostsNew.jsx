import axios from "axios";

export function PostsNew() {
  const handleSubmit = (event) => {
    event.preventDefault();
    console.log("handle submit");
    const params = new FormData(event.target);
    axios
      .post("http://localhost:3000/posts.json", params)
      .then((response) => {
        console.log(response.data);
        event.target.reset();
      })
      .catch((error) => {
        console.log(error.response.data.errors);
      });
  };
  return (
    <div id="posts-new">
      <h1>New post</h1>
      <form onSubmit={handleSubmit}>
        <div className="mb-3">
          <label htmlFor="formGroupExampleInput" className="form-label">
            Title
          </label>
          <input
            name="title"
            type="text"
            className="form-control"
            id="formGroupExampleInput"
            placeholder="this is where you type"
          />
        </div>
        <div className="mb-3">
          <label htmlFor="formGroupExampleInput2" className="form-label">
            Image URL
          </label>
          <input
            name="image"
            type="text"
            className="form-control"
            id="formGroupExampleInput2"
            placeholder="this is where you type"
          />
        </div>
        <div className="mb-3">
          <label htmlFor="formGroupExampleInput2" className="form-label">
            Body
          </label>
          <input
            name="body"
            type="text"
            className="form-control"
            id="formGroupExampleInput2"
            placeholder="this is where you type"
          />
        </div>
        <button type="submit">Add New Posts</button>
      </form>
    </div>
  );
}
