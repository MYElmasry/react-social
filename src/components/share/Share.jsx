import "./share.css";
import PermMediaIcon from "@mui/icons-material/PermMedia";
import LabelIcon from "@mui/icons-material/Label";
import RoomIcon from "@mui/icons-material/Room";
import EmojiEmotionsIcon from "@mui/icons-material/EmojiEmotions";
import { useRef, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addPost } from "../../store/slices/postSlice";

export default function Share() {
  const posts = useSelector((state) => state.posts.value);
  const dispatch = useDispatch();
  const [selectedImage, setSelectedImage] = useState(null);
  const [postContent, setPostContent] = useState("");
  const fileInputRef = useRef(null);

  const handleImageUpload = (event) => {
    const file = event.target.files[0];
    const reader = new FileReader();
    reader.onload = () => {
      setSelectedImage(reader.result);
    };
    if (file) {
      reader.readAsDataURL(file);
    }
  };

  const handleImageClose = () => {
    setSelectedImage(null);
    fileInputRef.current.value = "";
  };

  const handleSharing = () => {
    dispatch(
      addPost({
        id: posts.length + 1,
        desc: postContent,
        photo: selectedImage,
        date: "Just now",
        userId: 1,
        like: 0,
        comment: 0,
      })
    );
    handleImageClose();
    setPostContent("");
  };

  return (
    <div className="w-full share">
      <div className=" p-[10px]">
        <div className="flex items-center">
          <img
            className=" w-[50px] h-[50px] rounded-full object-cover mx-[10px]"
            src="/assets/person/1.jpeg"
            alt=""
          />
          <input
            placeholder="What's on your mind"
            className="w-4/5 border-none focus:outline-none"
            value={postContent}
            onChange={(e) => setPostContent(e.target.value)}
          />
        </div>
        <hr className="m-5" />
        <div>
          <div className="flex items-center justify-between">
            <div className="flex ml-5">
              <div className="shareOption">
                <input
                  type="file"
                  accept="image/*"
                  onChange={handleImageUpload}
                  style={{ display: "none" }}
                  id="imageInput"
                  ref={fileInputRef}
                />
                <label htmlFor="imageInput" className="cursor-pointer">
                  <PermMediaIcon htmlColor="tomato" className="shareIcon" />
                  <span className="shareOptionText">Photo or Video</span>
                </label>
              </div>
              <div className="shareOption">
                <LabelIcon htmlColor="blue" className="shareIcon" />
                <span className="shareOptionText">Tag</span>
              </div>
              <div className="shareOption">
                <RoomIcon htmlColor="green" className="shareIcon" />
                <span className="shareOptionText">Location</span>
              </div>
              <div className="shareOption">
                <EmojiEmotionsIcon
                  htmlColor="goldenrod"
                  className="shareIcon"
                />
                <span className="shareOptionText">Feelings</span>
              </div>
            </div>
            <button
              className="shareButton border-none p-[7px] font-medium mr-5 cursor-pointer text-white"
              onClick={handleSharing}
            >
              Share
            </button>
          </div>
          {selectedImage && (
            <div className="relative mt-2 selectedImage w-fit">
              <span
                className="absolute flex items-center justify-center w-4 h-4 text-xs text-black bg-white border border-black rounded-full cursor-pointer -right-2 -top-2 "
                onClick={handleImageClose}
              >
                x
              </span>
              <img
                src={selectedImage}
                alt="Selected"
                className="object-cover w-20 h-20 ml-5 border border-black "
              />
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
