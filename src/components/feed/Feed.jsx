import Post from "../post/Post";
import Share from "../share/Share";
import "./feed.css";
import { useSelector } from "react-redux";
export default function Feed() {
  const posts = useSelector((state) => state.posts.value);
  console.log(posts);
  return (
    <div className="feed">
      <div className="p-5">
        <Share />
        {posts.map((p) => {
          return <Post key={p.id} post={p} />;
        })}
      </div>
    </div>
  );
}
