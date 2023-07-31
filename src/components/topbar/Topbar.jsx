import "./topbar.css";
import SearchIcon from "@mui/icons-material/Search";
import PersonIcon from "@mui/icons-material/Person";
import ChatIcon from "@mui/icons-material/Chat";
import NotificationsIcon from "@mui/icons-material/Notifications";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";

export default function Topbar() {
  const isLoggedIn = useSelector((state) => state.users.isLoggedIn);
  return (
    <div className="topbarContainer h-[50px] w-full flex items-center sticky top-0 z-50">
      <div className="topbarLeft">
        <Link to="/" className="ml-5 text-2xl text-white cursor-pointer logo">
          ElmasrySocial
        </Link>
      </div>
      <div className="topbarCenter">
        <div className="searchbar w-full h-[30px] bg-white flex items-center">
          <SearchIcon className="searchIcon" />
          <input
            placeholder="Search For Friends, Pots or Video"
            className="searchInput"
          />
        </div>
      </div>
      <div
        className={`flex items-center ${
          isLoggedIn ? "justify-around" : "justify-center"
        } text-white topbarRight`}
      >
        <div className="topbarLinks">
          <Link to="/" className="topbarLink ">
            Home
          </Link>
          <span className="topbarLink">Timeline</span>
        </div>
        {isLoggedIn ? (
          <>
            <div className="flex">
              <div className="topbarIconItem">
                <PersonIcon />
                <span className="topbarIconBadge">1</span>
              </div>
              <div className="topbarIconItem">
                <ChatIcon />
                <span className="topbarIconBadge">2</span>
              </div>
              <div className="topbarIconItem">
                <NotificationsIcon />
                <span className="topbarIconBadge">1</span>
              </div>
            </div>
            <Link to="/profile">
              <img
                src="assets/person/1.jpeg"
                alt=""
                className="object-cover w-8 h-8 rounded-full cursor-pointer topbarImg"
              />
            </Link>
          </>
        ) : (
          <div className="loginAndRegister">
            <Link to="/register" className="topbarLink ">
              Register
            </Link>
            <Link to="/login" className="topbarLink ">
              Login
            </Link>
          </div>
        )}
      </div>
    </div>
  );
}
