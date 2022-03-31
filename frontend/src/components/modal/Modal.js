import { XIcon } from "@heroicons/react/outline";
import Login from "./Login";
import Signup from "./Signup";

export default function Modal({ open, setOpen, view }) {
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
        <div className="flex-[0.8] h-full mx-2 relative flex">
          <button
            className="cursor-pointer top-2 right-0 absolute"
            onClick={() => setOpen(!open)}
          >
            <XIcon className="h-7 text-gray-500" />
          </button>
          {view === "login" ? <Login /> : <Signup />}
        </div>
      </div>
    </div>
  );
}
