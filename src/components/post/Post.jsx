import "./post.css";
import MoreVertIcon from "@mui/icons-material/MoreVert";
import { useState } from "react";
import { useSelector } from "react-redux";

export default function Post({ post }) {
  const users = useSelector((state) => state.users.value);
  const [like, setLike] = useState(post.like);
  const [isLiked, setIsLiked] = useState(false);
  const likeHandler = () => {
    if (!isLiked) {
      setLike((prev) => prev + 1);
    } else {
      setLike((prev) => prev - 1);
    }
    setIsLiked(!isLiked);
  };
  const getUser = (id) => {
    return users.filter((u) => u.id === id)[0];
  };
  return (
    <div className="w-full post">
      <div className=" p-[10px]">
        <div className="flex items-center justify-between">
          <div className="flex items-center">
            <img
              src={getUser(post.userId).profilePicture}
              alt=""
              className="object-cover w-8 h-8 rounded-full "
            />
            <span className=" text-[15px] font-medium mx-[10px]">
              {getUser(post.userId).username}
            </span>
            <span className="text-xs ">{post.date}</span>
          </div>
          <div className="postTopRight">
            <MoreVertIcon />
          </div>
        </div>
        <div className="my-5 ">
          <span className="postText">{post?.desc}</span>
          <img
            className=" mt-5 w-full max-h-[500px] object-contain"
            src={post.photo}
            alt=""
          />
        </div>
        <div className="flex items-center justify-between">
          <div className="flex items-center">
            <img
              className=" w-6 h-6 mr-[5px] cursor-pointer"
              src="/assets/like.png"
              alt=""
              onClick={likeHandler}
            />
            <img
              className=" w-6 h-6 mr-[5px] cursor-pointer"
              src="/assets/heart.png"
              alt=""
              onClick={likeHandler}
            />
            <span className=" text-[15px]">{like} people like it</span>
          </div>
          <div className="postBottomRight">
            <span className="cursor-pointer postCommentText">
              {post.comment} comments
            </span>
          </div>
        </div>
      </div>
    </div>
  );
}
