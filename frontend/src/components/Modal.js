import { XIcon } from "@heroicons/react/outline";

export default function Modal({ open, setOpen, title }) {
  return (
    <div
      className={
        open
          ? `bg-black bg-opacity-50 absolute inset-0 flex items-center justify-center`
          : `hidden`
      }
    >
      <div className="bg-white flex items-center rounded lg:w-50% md:w-50% w-screen h-80%">
        <div className="flex-[0.2] h-full">
          <img
            src="https://www.redditstatic.com/accountmanager/bbb584033aa89e39bad69436c504c9bd.png"
            alt=""
            className="rounded-bl h-full w-32"
          />
        </div>
        <div className="flex-[0.8] h-full mx-2 relative">
          <div className="flex justify-between">
            <div className="mx-3 mt-8">
              <h1 className="text-xl text-gray-800">{title}</h1>
              <div className="text-xs text-gray-600 my-2">
                By continuing, you agree to our{" "}
                <span className="text-blue-400 cursor-pointer">
                  User Agreement
                </span>{" "}
                and{" "}
                <span className="text-blue-400 cursor-pointer">
                  Privacy Policy.
                </span>
              </div>
            </div>
            <button
              className="cursor-pointer top-2 right-0 absolute"
              onClick={() => setOpen(!open)}
            >
              <XIcon className="h-7 text-gray-500" />
            </button>
          </div>
          <form className="space-y-3 flex flex-col mx-2 bottom-20 absolute">
            <input
              type="text"
              placeholder="Email"
              className="max-w-xs px-3 py-3 bg-[#fcfcfb] ring-1 ring-gray-300 rounded outline-none text-gray-500"
            />
            <input
              type="password"
              placeholder="Password"
              className="max-w-xs px-3 py-3 bg-[#fcfcfb] ring-1 ring-gray-300 rounded outline-none text-gray-500"
            />
            <button className="bg-[#0079d3] rounded-full px-3 py-2 text-white max-w-xs">
              Login
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
      </div>
    </div>
  );
}
