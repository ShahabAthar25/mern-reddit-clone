import { BookmarkIcon, ChatAltIcon, GiftIcon, ShareIcon } from "@heroicons/react/outline"
import voteIcon from "../../images/vote.png";
import subRedditIcon from "../../images/subreddit.png";

export default function card({ upVotes, subReddit, user, text, comments }) {
  return (
    <div className='border border-gray-300 dark:border-gray-800 bg-white rounded-md flex flex-grow max-w-2xl z-0 dark:bg-[#1A1A1B]'>
      <div className="flex-[0.03] bg-[#F8F9FA] rounded-tl-md rounded-bl-md px-2 py-3 flex items-center flex-col space-y-2 dark:bg-[#161617]">
        <img src={voteIcon} alt="UpVote" className="h-8 grayscale hover:bg-gray-300 p-1 hover:grayscale-0 cursor-pointer dark:brightness-0 dark:invert" />
        <h1 className='font-bold text-gray-600 dark:text-white'>{upVotes}</h1>
        <img src={voteIcon} alt="DownVote" className="h-8 grayscale hover:bg-gray-300 p-1 hover:grayscale-0 cursor-pointer dark:brightness-0 dark:invert rotate-180" />
      </div>
      <div className="flex-[0.97] relative">
        <div className="flex items-center px-3 py-2 space-x-2">
          <img src={subRedditIcon} alt="SubReddit" className="h-6" />
          <span className="font-bold text-gray-800 dark:text-white">r/{subReddit}</span>
          {" "}
          <span className="text-sm text-gray-600 ml-2">. Posted by u/{user} 23 hours ago</span>
        </div>
        <div className="font-bold text-xl pl-3 text-gray-800 font-body dark:text-white">
          {text}
        </div>
        <div className="pl-3 my-2">
          <div className="flex items-center">
            <div className="flex items-center mr-4">
              <ChatAltIcon className="h-6 text-gray-400" />
              <span className="text-sm font-bold text-gray-600">
                {comments} Comments
              </span>
            </div>
            <div className="flex items-center mr-4">
              <GiftIcon className="h-6 text-gray-400" />
              <span className="text-sm font-bold text-gray-600">
                Award
              </span>
            </div>
            <div className="flex items-center mr-4">
              <ShareIcon className="h-6 text-gray-400" />
              <span className="text-sm font-bold text-gray-600">
                Share
              </span>
            </div>
            <div className="flex items-center mr-4">
              <BookmarkIcon className="h-6 text-gray-400" />
              <span className="text-sm font-bold text-gray-600">
                Save
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
