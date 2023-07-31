import "./rightbar.css";
import Online from "../online/Online";
import { useSelector } from "react-redux";
export default function Rightbar({ profile }) {
  const HomeRightbar = ({ users }) => {
    return (
      <>
        <div className="flex items-center">
          <img className="w-10 h-10 mr-[10px]" src="/assets/gift.png" alt="" />
          <span className=" font-light text-[15px]">
            <b>Pola Foster</b> and <b>3 other friends</b> have a birthday today.
          </span>
        </div>
        <img className="w-full rightbarAd" src="/assets/ad.png" alt="" />
        <h4 className="text-lg font-medium mb-[10px]">Online Friends</h4>
        <ul className="p-0 m-0 list-none">
          {users.map((u) => {
            return <Online key={u.id} user={u} />;
          })}
        </ul>
      </>
    );
  };

  const ProfileRightbar = () => {
    return (
      <>
        <h4 className="text-lg font-medium mb-[10px]">User Information</h4>
        <div className="rightbarInfo">
          <div className="rightbarInfoItem">
            <span className="rightbarInfoKey">City:</span>
            <span className="rightbarInfoValue">New York</span>
          </div>
          <div className="rightbarInfoItem">
            <span className="rightbarInfoKey">From:</span>
            <span className="rightbarInfoValue">Madrid</span>
          </div>
          <div className="rightbarInfoItem">
            <span className="rightbarInfoKey">Relationship:</span>
            <span className="rightbarInfoValue">Single</span>
          </div>
        </div>
        <h4 className="text-lg font-medium mb-[10px]">User Friends</h4>
        <div className="flex flex-wrap justify-between">
          <div className="rightbarFollowing">
            <img
              src="assets/person/1.jpeg"
              alt=""
              className="rightbarFollowingImg"
            />
            <span className="rightbarFollowingName">John Carter</span>
          </div>
          <div className="rightbarFollowing">
            <img
              src="assets/person/2.jpeg"
              alt=""
              className="rightbarFollowingImg"
            />
            <span className="rightbarFollowingName">Janell Shrum</span>
          </div>
          <div className="rightbarFollowing">
            <img
              src="assets/person/3.jpeg"
              alt=""
              className="rightbarFollowingImg"
            />
            <span className="rightbarFollowingName">Alex Durden</span>
          </div>
          <div className="rightbarFollowing">
            <img
              src="assets/person/4.jpeg"
              alt=""
              className="rightbarFollowingImg"
            />
            <span className="rightbarFollowingName">Dora Hawks</span>
          </div>
          <div className="rightbarFollowing">
            <img
              src="assets/person/5.jpeg"
              alt=""
              className="rightbarFollowingImg"
            />
            <span className="rightbarFollowingName">Shirley Beau</span>
          </div>
          <div className="rightbarFollowing">
            <img
              src="assets/person/6.jpeg"
              alt=""
              className="rightbarFollowingImg"
            />
            <span className="rightbarFollowingName">Mo Salah</span>
          </div>
        </div>
      </>
    );
  };
  const users = useSelector((state) => state.users.value);
  console.log(users);
  return (
    <div className="sticky overflow-y-scroll rightbar">
      <div className="p-5 pb-0 rightbarWrapper">
        {profile ? <ProfileRightbar /> : <HomeRightbar users={users} />}
      </div>
    </div>
  );
}
