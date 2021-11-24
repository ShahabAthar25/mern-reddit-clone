function PostsList({ posts }) {
  console.log(posts);
  return <div></div>;
}

export default PostsList;

export const getStaticProps = async () => {
  const res = await fetch(`http://localhost:5000/api/posts`);
  const posts = await res.json();

  return {
    props: {
      posts,
    },
  };
};
