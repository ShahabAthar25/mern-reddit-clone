import Post from "../components/Post";

export default function Home({ posts }) {
  return (
    <div className="flex flex-col items-center bg-reddit-dark py-2 text-white">
      {posts.map((post) => (
        <Post
          title={post.title}
          body={post.body}
          username={post.username}
          subredditName={post.subredditName}
          photo={post.photo}
          postId={post._id}
        />
      ))}
    </div>
  );
}

export const getStaticProps = async () => {
  const res = await fetch(`http://localhost:5000/api/posts/`);

  const posts = await res.json();

  return {
    props: {
      posts,
    },
  };
};
