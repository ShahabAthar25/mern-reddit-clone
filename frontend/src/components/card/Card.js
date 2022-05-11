import {
  BookmarkIcon,
  ChatAltIcon,
  DotsHorizontalIcon,
  GiftIcon,
  ShareIcon,
} from "@heroicons/react/outline";
import voteIcon from "../../images/vote.png";
import subRedditIcon from "../../images/subreddit.png";
import { useState } from "react";
import MenuOption from "../MenuOption";

export default function Card({ upVotes, subReddit, user, text, comments }) {
  const [open, setOpen] = useState(false);

  return (
    <div className="border border-gray-300 dark:border-gray-800 bg-white rounded-md flex w-screen max-w-2xl dark:bg-[#1A1A1B] md:min-w-[650px]">
      <div className="flex-[0.05] bg-[#F8F9FA] rounded-tl-md rounded-bl-md px-2 py-3 hidden sm:flex items-center flex-col space-y-2 dark:bg-[#161617]">
        <img
          src={voteIcon}
          alt="UpVote"
          className="h-8 grayscale hover:bg-gray-300 p-1 cursor-pointer"
        />
        <h1 className="font-bold text-gray-600 dark:text-white">{upVotes}</h1>
        <img
          src={voteIcon}
          alt="DownVote"
          className="h-8 grayscale hover:bg-gray-300 p-1 cursor-pointer rotate-180"
        />
      </div>
      <div className="flex-[0.95] relative">
        <div className="flex items-center px-3 py-2 space-x-2">
          <img src={subRedditIcon} alt="SubReddit" className="h-6" />
          <span className="font-bold text-gray-800 dark:text-white">
            r/{subReddit}
          </span>{" "}
          <span className="text-sm text-[#565858] ml-2 flex truncate">
            . Posted by u/{user}{" "}
            <span className="hidden xs:flex ml-1">23 hours ago</span>
          </span>
        </div>
        <div className="font-bold text-xl pl-3 text-gray-800 font-body dark:text-white break-words max-w-full">
          {text}
        </div>
        <div className="pl-3 my-2">
          <div className="flex items-center mt-5">
            <div className="flex sm:hidden items-center mr-4 space-x-2">
              <img
                src={voteIcon}
                alt="UpVote"
                className="h-8 grayscale hover:bg-gray-300 p-1 hover:grayscale-0 cursor-pointer dark:brightness-0 dark:invert"
              />
              <h1 className="font-bold text-gray-600 dark:text-white">
                {upVotes}
              </h1>
              <img
                src={voteIcon}
                alt="DownVote"
                className="h-8 grayscale hover:bg-gray-300 p-1 hover:grayscale-0 cursor-pointer dark:brightness-0 dark:invert rotate-180"
              />
            </div>
            <div className="flex items-center mr-4">
              <ChatAltIcon className="h-6 text-[#565858]" />
              <span className="text-sm font-bold text-[#565858]">
                {comments} Comments
              </span>
            </div>
            <div className="hidden sm:flex items-center mr-4">
              <GiftIcon className="h-6 text-[#565858]" />
              <span className="text-sm font-bold text-[#565858]">Award</span>
            </div>
            <div className="hidden sm:flex items-center mr-4">
              <ShareIcon className="h-6 text-[#565858]" />
              <span className="text-sm font-bold text-[#565858]">Share</span>
            </div>
            <div className="hidden sm:flex items-center mr-4">
              <BookmarkIcon className="h-6 text-[#565858]" />
              <span className="text-sm font-bold text-[#565858]">Save</span>
            </div>
            <div className="relative">
              <button
                className="flex sm:hidden items-center mr-4"
                onClick={() => setOpen(!open)}
              >
                <DotsHorizontalIcon className="h-6 text-[#565858]" />
              </button>
              {open && (
                <div className="absolute bg-white min-w-[7rem] rounded-md shadow-lg border flex flex-col sm:hidden">
                  <MenuOption text="Award" Icon={GiftIcon} />
                  <MenuOption text="Share" Icon={ShareIcon} />
                  <MenuOption text="Save" Icon={BookmarkIcon} />
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
