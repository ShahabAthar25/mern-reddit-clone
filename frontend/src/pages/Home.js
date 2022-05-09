import Card from "../components/card/Card";
import { useEffect } from "react";
import axios from "../api/axios";
import { useDispatch, useSelector } from "react-redux";
import { postFail, postPending, postSuccess } from "../features/postSlice";

export default function Home() {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(postPending());

    const fetchPosts = async () => {
      try {
        const { data } = await axios.get("/posts/recommendations");

        dispatch(postSuccess(data));
      } catch (error) {
        dispatch(postFail(error.response.data));
      }
    };

    fetchPosts();
  }, [dispatch]);

  const posts = useSelector((state) => state.posts);
  console.log(posts);

  return (
    <div className="w-full flex items-center flex-col pt-10 z-0 space-y-2">
      {posts.data.map((post) => {
        return (
          <Card
            key={post._id}
            upVotes={post.upVotes.length - post.downVotes.length}
            subReddit={post.subReddit}
            user={post.owner}
            text={post.title}
          />
        );
      })}
    </div>
  );
}
