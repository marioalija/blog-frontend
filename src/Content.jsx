import { PostsIndex } from "./PostsIndex";
import { PostsNew } from "./PostsNew";

export function Content() {
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
