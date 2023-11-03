import { PostsIndex } from "./PostsIndex";
import { PostsNew } from "./PostsNew";

export function Content() {
  let posts = [
    {
      id: 1,
      title: "The Castle",
      body: "",
      image: "https://i.pinimg.com/736x/d0/89/5c/d0895c30ba90407f9c78aaf9b260eea7.jpg",
    },
    {
      id: 2,
      title: "Dracula",
      body: "",
      image: "https://t4.ftcdn.net/jpg/05/68/98/19/360_F_568981938_R87rarBphgiNJ4Kiqj0IQM6aAFgA5VWX.jpg",
    },
    {
      id: 3,
      title: "Belmont Family Tree",
      body: "",
      image: "https://wallpapers.com/images/featured/castlevania-9ym4u6d7uyfye4kd.jpg",
    },
  ];
  return (
    <div>
      <PostsNew />
      <PostsIndex posts={posts} />
    </div>
  );
}
