import ArrowUpwardIcon from "@mui/icons-material/ArrowUpward";
import ArrowDownwardIcon from "@mui/icons-material/ArrowDownward";
import ChatBubbleOutlineIcon from "@mui/icons-material/ChatBubbleOutline";
import { Button } from "@mui/material";

function PostsList({
  subredditName,
  subredditId,
  username,
  userId,
  title,
  body,
  photo,
  postId,
}) {
  return (
    <div className="mt-4 bg-reddit max-w-lg flex-1">
      <div className="text-white p-2">
        <p className="text-md">
          r/
          <a href={`/r/${subredditId}`} className="font-medium text-md">
            {subredditName}
          </a>
          <span className="font-normal text-gray-700 text-sm">
            - by u/
            <a href={`/user/${userId}`}>{username}</a>
          </span>
        </p>
      </div>
      <div className="text-white p-2">
        <a href={`/post/${postId}`}>
          <h1 className="text-2xl max-w-lg break-words">{title}</h1>
          <p className="text-medium pt-1 pb-1 text-lg max-w-lg break-words">
            {body}
          </p>
          <img src={photo} alt="" />
        </a>
      </div>
      <div className="flex p-2">
        <Button
          className="p-0 rounded-full"
          style={{
            minWidth: "30px",
          }}
        >
          <ArrowUpwardIcon className="text-white" />
        </Button>
        <p className="text-white">Vote</p>
        <Button
          className="p-0 rounded-full"
          style={{
            minWidth: "30px",
          }}
        >
          <ArrowDownwardIcon className="text-white" />
        </Button>
        <div className="flex items-center pl-2">
          <ChatBubbleOutlineIcon className="text-white" />
          <p className="text-white">
            <a href={`/post/${postId}#comments`} className="pl-1">
              Comments
            </a>
          </p>
        </div>
      </div>
    </div>
  );
}

export default PostsList;
