import { useState } from "react";
import { useDispatch } from "react-redux";
import { switchToLogin } from "../../features/modalSlice";
import {
  registerPending,
  registerSuccess,
  registerFail,
} from "../../features/registerSlice";
import axios from "../../api/axios";

export default function Signup() {
  const dispatch = useDispatch();

  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleOnSubmit = async (e) => {
    e.preventDefault();

    if (!username || !email || !password)
      return dispatch(registerFail("Please fill up all the fields."));

    dispatch(registerPending());

    try {
      await axios.post("/auth/register", {
        username,
        email,
        password,
      });

      dispatch(registerSuccess());
      dispatch(switchToLogin());
    } catch (error) {
      dispatch(registerFail(error.response.data));
    }
  };

  return (
    <div>
      <div className="mx-3 mt-8">
        <h1 className="text-xl text-gray-800">Sign up</h1>
        <div className="text-xs text-gray-600 my-2">
          By continuing, you are setting up a Reddit account and agree to our{" "}
          <span className="text-blue-400 cursor-pointer">User Agreement</span>{" "}
          and{" "}
          <span className="text-blue-400 cursor-pointer">Privacy Policy.</span>
        </div>
      </div>
      <form className="space-y-3 flex flex-col mx-2 bottom-20 absolute">
        <input
          type="text"
          placeholder="Username"
          className="max-w-xs px-3 py-3 bg-[#fcfcfb] ring-1 ring-gray-300 rounded outline-none text-gray-500"
          autoComplete="username"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
        />
        <input
          type="text"
          placeholder="Email"
          className="max-w-xs px-3 py-3 bg-[#fcfcfb] ring-1 ring-gray-300 rounded outline-none text-gray-500"
          autoComplete="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <input
          type="password"
          placeholder="Password"
          className="max-w-xs px-3 py-3 bg-[#fcfcfb] ring-1 ring-gray-300 rounded outline-none text-gray-500"
          autoComplete="current-password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        <button
          className="bg-[#0079d3] rounded-full px-3 py-2 text-white max-w-xs"
          onClick={(e) => handleOnSubmit(e)}
        >
          Sign up
        </button>
        <div className="text-xs text-gray-600">
          Forgot your{" "}
          <span className="text-blue-400 cursor-pointer">username</span> or{" "}
          <span className="text-blue-400 cursor-pointer">password</span>?
        </div>
      </form>
      <h1 className="text-xs absolute bottom-12 mx-2">
        Already a redditor?{" "}
        <button
          className="text-blue-500 font-medium uppercase"
          onClick={() => dispatch(switchToLogin())}
        >
          Login
        </button>
      </h1>
    </div>
  );
}
