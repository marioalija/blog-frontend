import "./App.css";

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
      <div>
        <button>Add More Pics</button>
      </div>
    </div>
  );
}

function PostsIndex(props) {
  console.log(props);

  return (
    <div id="posts-index">
      <h1>All posts</h1>
      {/* loop of defined recipe data props from the parent component */}
      {props.posts.map((post) => (
        <div key={post.id}>
          <p>-{post.id}-</p>
          <h2>{post.title}</h2>
          <img src={post.image} alt="puppies and kittens" />
          <div>
            <button>More pictures</button>
          </div>
        </div>
      ))}
    </div>
  );
}

function Footer() {
  return (
    <div>
      <footer>
        <p>Copyright 2023</p>
      </footer>
    </div>
  );
}

function Content() {
  let posts = [
    {
      id: 1,
      title: "Cute little puppies",
      body: "Adorable puppies",
      image: "https://wallpapers.com/images/hd/cute-little-puppies-jggd1xqev9439k6k.jpg",
    },
    {
      id: 2,
      title: "Cute little kittens",
      body: "Adorable kittens",
      image: "https://i.ytimg.com/vi/kVDPd5eZn2A/maxresdefault.jpg",
    },
    {
      id: 3,
      title: "Cute little puppies and kittens",
      body: "Adorable puppies and kittens",
      image: "https://i.stack.imgur.com/bWvHV.jpg",
    },
  ];
  return (
    <div>
      <PostsNew />
      <PostsIndex posts={posts} />
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
