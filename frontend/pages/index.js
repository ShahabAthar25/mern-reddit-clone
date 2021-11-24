import Navbar from "../components/Navbar";

export default function Home({ authenticated, posts }) {
  return (
    <div className="h-screen bg-reddit-dark">
      <Navbar authenticated={authenticated} />
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
