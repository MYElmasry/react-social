import "./profile.css";
import Topbar from "../../components/topbar/Topbar";
import Sidebar from "../../components/sidebar/Sidebar";
import Feed from "../../components/feed/Feed";
import Rightbar from "../../components/rightbar/Rightbar";
export default function Profile() {
  return (
    <>
      <Topbar />
      <div className="flex">
        <Sidebar />
        <div className="profileRight">
          <div className="profileRightTop">
            <div className="h-80 relative">
              <img
                src="assets/post/3.jpeg"
                alt=""
                className="w-full h-[250px] object-cover"
              />
              <img
                src="assets/person/1.jpeg"
                alt=""
                className="profileUserImg rounded-full object-cover absolute left-0 right-0 m-auto"
              />
            </div>
            <div className="flex flex-col items-center justify-center">
              <h4 className="text-2xl">Lara Amr</h4>
              <h4 className="font-light">Hello My Friends</h4>
            </div>
          </div>
          <div className="flex">
            <Feed />
            <Rightbar profile />
          </div>
        </div>
      </div>
    </>
  );
}
