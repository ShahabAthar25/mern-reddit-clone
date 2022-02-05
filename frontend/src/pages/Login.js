import { useState } from "react";
import { useDispatch } from "react-redux";

import { login } from "../redux/actions/auth";

export default function Login() {
  const dispatch = useDispatch();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const [loading, setLoading] = useState(false);

  const handleOnClick = (e) => {
    e.preventDefault();

    setLoading(true);
    dispatch(login(email, password));
    setLoading(false);
  };

  if (loading) {
    return <h1>Loading</h1>;
  }

  return (
    <div className="h-screen w-screen flex items-center justify-center bg-gray-200">
      <div className="border shadow-2xl flex flex-col px-4 py-8 bg-white flex-grow max-w-lg">
        <div className="flex flex-col mt-4 mb-8">
          <h1 className="text-3xl">LOGIN</h1>
          <p className="text-gray-600 text-sm">Welcome to a reddit clone</p>
        </div>
        <form className="space-y-6 flex flex-col flex-grow">
          <input
            type="text"
            placeholder="Email"
            className="bg-transparent px-3 py-2 border-b flex-grow focus-within:outline-none"
            autoComplete="on"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          <input
            type="password"
            placeholder="Password"
            className="bg-transparent px-3 py-2 border-b flex-grow focus-within:outline-none"
            autoComplete="on"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
          <button
            type="submit"
            onClick={handleOnClick}
            className="flex-grow rounded-lg bg-slate-100 py-3 hover:bg-slate-200 transition-all duration-500"
          >
            Login
          </button>
        </form>
      </div>
    </div>
  );
}
