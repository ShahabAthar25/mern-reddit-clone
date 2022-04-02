import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  loginPending,
  loginSuccess,
  loginFail,
} from "../../features/loginSlice";
import { switchToSignUp, closeModal } from "../../features/modalSlice";
import { setUser } from "../../features/userSlice";
import axios from "../../api/axios";

export default function Login() {
  const dispatch = useDispatch();

  const { isLoading, error } = useSelector((state) => state.login);

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleOnSubmit = async (e) => {
    e.preventDefault();

    if (!email || !password)
      return dispatch(loginFail("Please fill up all the fields."));

    dispatch(loginPending());

    try {
      const { data } = await axios.post("/auth/login", {
        email,
        password,
      });

      sessionStorage.setItem("accessToken", data.accessToken);
      localStorage.setItem("refreshToken", data.refreshToken);

      dispatch(setUser(data));
      dispatch(loginSuccess());
      dispatch(closeModal());
    } catch (error) {
      dispatch(loginFail(error.response.data));
    }
  };

  return (
    <div className="h-full flex-grow flex">
      <div className="mx-3 mt-8">
        <h1 className="text-xl text-gray-800">Login</h1>
        <div className="text-xs text-gray-600 my-2">
          By continuing, you agree to our{" "}
          <span className="text-blue-400 cursor-pointer">User Agreement</span>{" "}
          and{" "}
          <span className="text-blue-400 cursor-pointer">Privacy Policy.</span>
        </div>
      </div>
      <form className="space-y-3 flex flex-col mx-2 bottom-20 absolute w-full">
        <input
          type="text"
          placeholder="Email"
          className="max-w-xs px-3 py-3 bg-[#fcfcfb] ring-1 ring-gray-300 rounded outline-none text-gray-500 flex-grow mr-4"
          autoComplete="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <input
          type="password"
          placeholder="Password"
          className="max-w-xs px-3 py-3 bg-[#fcfcfb] ring-1 ring-gray-300 rounded outline-none text-gray-500 flex-grow mr-4"
          autoComplete="current-password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        {error && (
          <div className="flex items-center justify-center max-w-xs">
            <h1 className="text-sm text-red-500 my-2 items-center">{error}</h1>
          </div>
        )}
        <button
          className="bg-[#0079d3] rounded-full px-3 py-2 text-white max-w-xs flex-grow flex items-center justify-center mr-4"
          onClick={(e) => handleOnSubmit(e)}
        >
          {isLoading ? (
            <div
              style={{ borderTopColor: "transparent" }}
              className="w-6 h-6 border-2 border-white border-solid rounded-full animate-spin"
            ></div>
          ) : (
            <span>Login</span>
          )}
        </button>
        <div className="text-xs text-gray-600">
          Forgot your{" "}
          <span className="text-blue-400 cursor-pointer">username</span> or{" "}
          <span className="text-blue-400 cursor-pointer">password</span>?
        </div>
      </form>
      <h1 className="text-xs absolute bottom-12 mx-2">
        New to Reddit?{" "}
        <button
          className="text-blue-500 font-medium uppercase"
          onClick={() => dispatch(switchToSignUp())}
        >
          sign up
        </button>
      </h1>
    </div>
  );
}
