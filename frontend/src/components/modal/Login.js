import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";

export default function Login() {
  const dispatch = useDispatch();

  const { isLoading, isAuth, error } = useSelector((state) => state.login);

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleOnSubmit = (e) => {
    e.preventDefault();
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
          className="max-w-xs px-3 py-3 bg-[#fcfcfb] ring-1 ring-gray-300 rounded outline-none text-gray-500 flex-grow"
          autoComplete="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <input
          type="password"
          placeholder="Password"
          className="max-w-xs px-3 py-3 bg-[#fcfcfb] ring-1 ring-gray-300 rounded outline-none text-gray-500 flex-grow"
          autoComplete="current-password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        {error && (
          <h1 className="text-sm text-red-500 my-2 items-center">{error}</h1>
        )}
        <button
          className="bg-[#0079d3] rounded-full px-3 py-2 text-white max-w-xs flex-grow flex items-center justify-center"
          onClick={(e) => handleOnSubmit(e)}
        >
          {isLoading ? (
            <div
              style={{ borderTopColor: "transparent" }}
              class="w-6 h-6 border-2 border-white border-solid rounded-full animate-spin"
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
        <span className="text-blue-500 font-medium uppercase">sign up</span>
      </h1>
    </div>
  );
}
