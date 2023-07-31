export default function CloseFriend({ user }) {
  return (
    <li className=" flex items-center mb-[15px]">
      <img
        src={user.profilePicture}
        data-testid="closeFriendAvatar"
        alt=""
        className=" w-8 h-8 rounded-full object-cover mr-[10px]"
      />
      <span className="sidebarFriendName">{user.username}</span>
    </li>
  );
}
