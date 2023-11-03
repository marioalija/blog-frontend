function Header() {
  return (
    <header>
      <a href="#">Home</a> | <a href="#posts-index">All posts</a> | <a href="#posts-new">New post</a>
    </header>
  );
}

function PostsNew() {
  return (
    <div id="posts-new">
      <h1>New post</h1>
      <div>
        Title: <input type="text" />
      </div>
      <div>
        Body: <input type="text" />
      </div>
      <div>
        Image: <input type="text" />
      </div>
    </div>
  );
}

function PostsIndex() {
  return (
    <div id="posts-index">
      <h1>All posts</h1>
      <div>
        <h2>Cute little puppies</h2>
        <p>Adorable puppies</p>
      </div>
      <div>
        <img
          src="https://wallpapers.com/images/hd/cute-little-puppies-jggd1xqev9439k6k.jpg"
          alt="Cute little puppies"
        />
      </div>
      <div>
        <h2>Cute little kittens</h2>
        <p>Adorable kittens</p>
      </div>

      <div>
        <img src="https://i.ytimg.com/vi/kVDPd5eZn2A/maxresdefault.jpg" alt="Cute little kittens" />
      </div>
      <div>
        <h2>Cute little puppies and kittens</h2>
        <p>Adorable puppies and kittens</p>
      </div>
      <div>
        <img src="https://i.stack.imgur.com/bWvHV.jpg" alt="Cute little puppies and kittens" />
      </div>
    </div>
  );
}

function Footer() {
  return (
    <div>
      <footer>
        <p>Copyright 20XX</p>
      </footer>
    </div>
  );
}

function Content() {
  return (
    <div>
      <PostsNew />
      <PostsIndex />
    </div>
  );
}

function App() {
  return (
    <div>
      <Header />
      <Content />
      <Footer />
    </div>
  );
}

export default App;
