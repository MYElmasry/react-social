import { useFormik } from "formik";
import "./register.css";
import { useNavigate } from "react-router-dom";
import { registerSchema } from "../../schemas/registerSchema";
import { useDispatch, useSelector } from "react-redux";
import { addUser } from "../../store/slices/userSlice";

export default function Register() {
  const users = useSelector((state) => state.users.value);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const onSubmit = (values, actions) => {
    dispatch(
      addUser({
        id: users.length + 1,
        profilePicture: "assets/person/me.png",
        ...values,
      })
    );
    actions.resetForm();
    navigate("/login");
  };

  const { values, errors, touched, handleBlur, handleChange, handleSubmit } =
    useFormik({
      initialValues: {
        email: "",
        password: "",
        rePassword: "",
        username: "",
      },
      validationSchema: registerSchema,
      onSubmit,
    });

  const UsernameErrorMessage = () => {
    return (
      <p className="absolute bottom-0 text-xs text-red-700 abosolute">
        * User name should have at least 3 characters
      </p>
    );
  };
  const PasswordErrorMessage = () => {
    return (
      <p className="absolute bottom-0 text-xs text-red-700">
        * {errors.password}
      </p>
    );
  };
  const RePasswordErrorMessage = () => {
    return (
      <p className="absolute bottom-0 text-xs text-red-700">
        * {errors.rePassword}
      </p>
    );
  };
  const InvalidEmailErrorMessage = () => {
    return (
      <p className="absolute bottom-0 text-xs text-red-700">
        {values.email
          ? `* Please enter invalid email ${values.email} is not valid`
          : `* Email address is required`}
      </p>
    );
  };

  return (
    <div className="flex items-center justify-center w-screen h-screen login">
      <div className="flex loginWrapper">
        <div className="loginLeft">
          <h3 className="font-extrabold loginLogo">ElmasrySocial</h3>
          <span className="text-2xl ">
            Connect with friends and the world around you on ElmasrySocial.
          </span>
        </div>
        <div className="loginRight">
          <form
            onSubmit={handleSubmit}
            autoComplete="off"
            className="flex flex-col justify-between p-5 bg-white loginBox"
          >
            <div className="relative">
              <input
                placeholder="Username*"
                className="loginInput"
                id="username"
                value={values.username}
                onChange={handleChange}
                onBlur={handleBlur}
              />
              {errors?.username && touched?.username ? (
                <UsernameErrorMessage />
              ) : null}
            </div>
            <div className="relative">
              <input
                placeholder="Email*"
                id="email"
                value={values.email}
                onChange={handleChange}
                onBlur={handleBlur}
                className="loginInput"
              />
              {errors?.email && touched?.email ? (
                <InvalidEmailErrorMessage />
              ) : null}
            </div>
            <div className="relative">
              <input
                type="password"
                placeholder="Password*"
                id="password"
                value={values.password}
                onChange={handleChange}
                onBlur={handleBlur}
                className="loginInput"
              />
              {errors?.password && touched?.password ? (
                <PasswordErrorMessage />
              ) : null}
            </div>
            <div className="relative">
              <input
                type="password"
                placeholder="Password Again*"
                id="rePassword"
                value={values.rePassword}
                onChange={handleChange}
                onBlur={handleBlur}
                className="loginInput"
              />
              {errors?.rePassword && touched?.rePassword ? (
                <RePasswordErrorMessage />
              ) : null}
            </div>

            <button
              type="submit"
              className="my-2 text-xl font-medium text-white bg-blue-600 border-none cursor-pointer disabled:bg-blue-400 disabled:cursor-not-allowed loginButton"
              disabled={
                Object.keys(errors).length !== 0 ||
                Object.keys(touched).length === 0
              }
            >
              Sign Up
            </button>
            <button
              className="self-center w-3/5 text-xl font-medium text-white border-none cursor-pointer loginRegisterButton"
              onClick={() => navigate("/login")}
            >
              Log into Account
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}
