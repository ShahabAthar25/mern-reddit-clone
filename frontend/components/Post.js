import React from "react";

import { ArrowDownIcon, ArrowUpIcon } from "@heroicons/react/solid";
import { ChatAltIcon } from "@heroicons/react/outline";

export default function Post({
  title,
  body,
  username,
  subredditName,
  photo,
  postId,
}) {
  return (
    <a
      href={`/posts/${postId}`}
      className="border border-gray-500 bg-reddit w-screen sm:max-w-xl flex mt-4 cursor-pointer"
    >
      <div className="flex-[0.1] pt-4 pb-2 pl-2">
        <ArrowUpIcon className="text-white h-7 mb-3 cursor-pointer hover:bg-gray-500 rounded-lg transition-all" />
        <ArrowDownIcon className="text-white h-7 cursor-pointer hover:bg-gray-500 rounded-lg transition-all" />
      </div>
      <div className="flex-col">
        <div className="flex items-center p-2">
          <p className="font-black text-sm">r/{subredditName}</p>
          <p className="font-extralight text-sm ">- Posted by {username}</p>
        </div>
        <div className="pl-2">
          <h2 className="text-2xl font-normal">{title}</h2>
          <p className="pt-2 pb-2 text-xl font-light">{body}</p>
          <img src={photo} alt="" />
        </div>
        <a className="mt-2 flex items-center cursor-pointer mb-2">
          <ChatAltIcon className="h-6 text-white" />
          <p className="pl-1 text-sm font-normal pb-1">Comments</p>
        </a>
      </div>
    </a>
  );
}
