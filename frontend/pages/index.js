import Navbar from "../components/Navbar";
import PostsList from "../components/PostsList";

export default function Home({ authenticated, posts }) {
  return (
    <div className="h-screen bg-reddit-dark">
      <Navbar authenticated={authenticated} />
      <div className="w-screen flex justify-center">
        {posts.map((post) => {
          return (
            <PostsList
              subredditName={post.subredditName}
              username={post.username}
              title={post.title}
              body={post.body}
              photo={post.photo}
              postId={post._id}
            />
          );
        })}
      </div>
    </div>
  );
}

export const getServerSideProps = async ({ req, res }) => {
  const results = await fetch(`http://localhost:5000/api/posts`);

  const posts = await results.json();

  return {
    props: {
      posts,
      authenticated: req.cookies.token || "",
    },
  };
};
