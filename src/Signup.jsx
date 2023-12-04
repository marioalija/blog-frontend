import axios from "axios";
import { useState } from "react";

export function Signup() {
  const [name, setName] = useState("");
  const [errors, setErrors] = useState([]);
  const [status, setStatus] = useState(null);

  const handleSubmit = (event) => {
    event.preventDefault();
    const params = new FormData(event.target);
    console.log("handle submit", params);
    axios
      .post("http://localhost:3000/users.json", params)
      .then((response) => {
        console.log(response.data);
        event.target.reset();
      })
      .catch((error) => {
        setStatus(error.response.status);
        console.log(error.response.data.errors);
        setErrors(error.response.data.errors);
      });
  };

  return (
    <div id="signup">
      <h1>Signup</h1>
      {/* ternary syntax for a conditional: */}
      {status ? (
        <img src={`https://i1.wp.com/media.giphy.com/media/G8aa3oXKzZRAI/giphy.gif?w=780&ssl=1/${status}`} />
      ) : null}
      <form onSubmit={handleSubmit}>
        <ul>
          {errors.map((error) => (
            <li key={error}>{error}</li>
          ))}
        </ul>
        <div>
          Name:{""}{" "}
          <input name="name" type="text" value={name} onChange={(event) => setName(event.target.value.slice(0, 20))} />
          <small>{20 - name.length} characters remaining</small>
        </div>
        <div>
          Email: <input name="email" type="email" />
        </div>
        <div>
          Password: <input name="password" type="password" />
        </div>
        <div>
          Password confirmation: <input name="password_confirmation" type="password" />
        </div>
        <button type="submit">Signup</button>
      </form>
    </div>
  );
}
