import { ChevronDownIcon } from "@heroicons/react/outline";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import axios, { axiosAuth } from "../api/axios";
import { postCreate, postFail, postPending } from "../features/postSlice";
import {
  subRedditFail,
  subRedditPending,
  subRedditSuccess,
} from "../features/subRedditSlice";
import { Link } from "react-router-dom";
import subRedditIcon from "../images/subreddit.png";
import MenuOption from "../components/subReddit/MenuOption";

export default function CreatePost() {
  const dispatch = useDispatch();

  const [open, setOpen] = useState(false);
  const [title, setTitle] = useState("");
  const [body, setBody] = useState("");
  const [subRedditId, setSubRedditId] = useState("");
  const [subRedditText, setSubRedditText] = useState("Choose A Community");

  const subReddits = useSelector((state) => state.subReddit);

  useEffect(() => {
    const fetchSubReddit = async () => {
      dispatch(subRedditPending());

      try {
        const { data } = await axios.get("/subreddit");

        dispatch(subRedditSuccess(data));
      } catch (error) {
        console.log(error.response.status);
        dispatch(subRedditFail(error.response.data));
      }
    };

    fetchSubReddit();
  }, [dispatch]);

  const handleOnSubmit = async (e) => {
    e.preventDefault();

    dispatch(postPending());
    try {
      const { data } = await axiosAuth({
        url: "/posts",
        method: "post",
        data: {
          title,
          body,
          subRedditId,
        },
      });

      dispatch(postCreate(data));
    } catch (error) {
      return dispatch(postFail(error.response.message));
    }
  };

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
            <h1 className="font-body text-gray-800">{subRedditText}</h1>
          </div>
          <ChevronDownIcon className="h-6 text-gray-600" />
        </button>
        {open && (
          <div className="absolute bg-white border rounded-md w-full max-w-xs">
            {subReddits.data.map((subReddit) => {
              return (
                <MenuOption
                  key={subReddit._id}
                  name={subReddit.name}
                  bannerPic={subReddit.bannerPic}
                  id={subReddit._id}
                  setSubRedditId={setSubRedditId}
                  setOpen={setOpen}
                  setSubRedditText={setSubRedditText}
                />
              );
            })}
          </div>
        )}
      </div>
      <form className="bg-white rounded-md px-4 py-3 space-y-4">
        <input
          type="text"
          className="bg-transparent px-3 py-2 border rounded-md border-gray-500 text-gray-800 w-full outline-0"
          placeholder="Title"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
        />
        <textarea
          className="bg-transparent px-3 py-2 border rounded-md border-gray-500 text-gray-800 w-full outline-0 h-48 resize-none"
          placeholder="Text(Optional)"
          value={body}
          onChange={(e) => setBody(e.target.value)}
        />
        <div className="w-full flex justify-end space-x-4">
          <Link
            to="/"
            className="px-8 py-2 bg-white border border-gray-500 text-gray-500 hover:bg-gray-100 duration-200 rounded-full"
          >
            Cancel
          </Link>
          <button
            type="submit"
            className="px-8 py-2 bg-[#E8F2FB] border border-[#207BC9] rounded-full text-gray-700 hover:bg-[#eaf2f8b6] duration-200"
            onClick={(e) => handleOnSubmit(e)}
          >
            Post
          </button>
        </div>
      </form>
    </div>
  );
}
