import { useNavigate } from "react-router-dom";
import "./login.css";
import { useDispatch } from "react-redux";
import { setIsLoggedIn } from "../../store/slices/userSlice";

export default function Login() {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  return (
    <div className="flex items-center justify-center w-screen h-screen login">
      <div className="flex loginWrapper">
        <div className="loginLeft">
          <h3 className="font-extrabold loginLogo">ElmasrySocial</h3>
          <span className="text-2xl">
            Connect with friends and the world around you on ElmasrySocial.
          </span>
        </div>
        <div className="loginRight">
          <div className="flex flex-col justify-around p-5 bg-white loginBox">
            <input placeholder="Email" className="loginInput" />
            <input
              type="password"
              placeholder="Password"
              className="loginInput"
            />
            <button
              className="font-medium text-white bg-blue-600 border-none cursor-pointer loginButton"
              onClick={() => {
                dispatch(setIsLoggedIn());
                navigate("/");
              }}
            >
              Log In
            </button>
            <span className="loginForgot">Forgot Password?</span>
            <button
              className="self-center w-3/5 font-medium text-white border-none cursor-pointer loginRegisterButton"
              onClick={() => navigate("/register")}
            >
              Create a New Account
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
