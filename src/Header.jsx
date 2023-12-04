import { Link } from "react-router-dom";
import { Modal } from "./Modal";
import { useState } from "react";
import { Signup } from "./Signup";
import { LogoutLink } from "./LogoutLink";

export function Header() {
  const [isSignupVisible, setIsSignupVisible] = useState(false);
  // opens the modal
  const handleSignupShow = () => {
    setIsSignupVisible(true);
  };

  //closes modal
  const handleClose = () => {
    setIsSignupVisible(false);
  };
  let authenticationLinks;
  if (localStorage.jwt === undefined) {
    authenticationLinks = (
      <>
        <li className="nav-item">
          <a className="nav-link" onClick={handleSignupShow}>
            Signup
          </a>
        </li>
        <li className="nav-item">
          <Link className="nav-link" to="/login">
            Login
          </Link>
        </li>
      </>
    );
  } else {
    authenticationLinks = (
      <li className="nav-item">
        <a className="nav-link" to="/logout"></a>
      </li>
    );
  }
  return (
    <header>
      <Modal show={isSignupVisible} onClose={handleClose}>
        <Signup />
      </Modal>

      <nav className="navbar navbar-expand-lg bg-light">
        <div className="container-fluid">
          <a className="navbar-brand" href="#">
            The Stewie Show
          </a>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
              <li className="nav-item">
                <Link to="/" className="nav-link active" aria-current="page">
                  Home
                </Link>
              </li>

              <li className="nav-item">
                <Link className="nav-link" to="/posts">
                  All Posts
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-item" to="/posts/new">
                  New Post
                </Link>
              </li>
              {/* <li className="nav-item">
                <LogoutLink className="nav-item" to="/posts/new" />
              </li> */}
              {/* <li className="nav-item">
                <Link className="nav-link" to="/home">
                  Logout
                </Link>
              </li> */}

              {/* <li className="nav-item dropdown">
                <a
                  className="nav-link dropdown-toggle"
                  href="#"
                  role="button"
                  data-bs-toggle="dropdown"
                  aria-expanded="false"
                >
                  Dropdown
                </a>
                <ul className="dropdown-menu">
                  <li> */}
              {/* <li className="nav-item">
                      <Link className="nav-item" to="/posts/new">
                        New Post
                      </Link>
                    </li> */}
              {/* <li className="nav-item">
                      <Link className="nav-link" to="/login">
                        Login
                      </Link>
                    </li>
                    <li className="nav-item">
                      <a className="nav-link" onClick={handleSignupShow}>
                        Signup
                      </a>
                    </li>
               */}
              {authenticationLinks}
              {/* LOGGED OUT JUNK */}

              {/* <hr className="dropdown-divider" />
                  </li>
                </ul>
              </li> */}
              <li className="nav-item">
                <a className="nav-link disabled"></a>
              </li>
            </ul>

            <form className="d-flex" role="search">
              <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search" />
              <button className="btn btn-outline-success" type="submit">
                Search
              </button>
            </form>
          </div>
        </div>
      </nav>
      {/* <a href="#">Home</a> | <a href="#posts-index">All posts</a> | <a href="#posts-new">New post</a> */}
    </header>
  );
}
