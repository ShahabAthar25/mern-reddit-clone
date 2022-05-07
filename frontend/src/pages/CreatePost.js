import { ChevronDownIcon } from "@heroicons/react/outline";
import { useState } from "react";
import subRedditIcon from "../images/subreddit.png";

export default function CreatePost() {
  const [open, setOpen] = useState(false);

  return (
    <div className="m-auto w-full max-w-3xl space-y-4 mt-10">
      <h1 className="font-medium text-2xl font-body">Create Post</h1>
      <div className="border border-white w-full"></div>
      <div className="relative">
        <button
          className="bg-white px-3 py-2 rounded-md flex items-center justify-between w-full max-w-xs"
          onClick={() => setOpen(!open)}
        >
          <div className="flex items-center space-x-2">
            <img src={subRedditIcon} alt="SubReddit" className="h-6" />
            <h1 className="font-body text-gray-800">Choose A Community</h1>
          </div>
          <ChevronDownIcon className="h-6 text-gray-600" />
        </button>
        {open && (
          <div className="absolute bg-white p-4 border rounded-md w-full max-w-xs"></div>
        )}
      </div>
      <form className="bg-white rounded-md px-4 py-3 space-y-4">
        <input
          type="text"
          className="bg-transparent px-3 py-2 border rounded-md border-gray-500 text-gray-500 w-full outline-0"
          placeholder="Title"
        />
        <textarea
          className="bg-transparent px-3 py-2 border rounded-md border-gray-500 text-gray-500 w-full outline-0 h-48 resize-none"
          placeholder="Text(Optional)"
        />
        <div className="w-full flex justify-end">
          <button
            type="submit"
            className="px-8 py-2 bg-[#E8F2FB] border border-[#207BC9] rounded-full"
          >
            Post
          </button>
        </div>
      </form>
    </div>
  );
}
