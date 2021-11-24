import "tailwindcss/tailwind.css";

function MyApp({ Component, pageProps, authenticated }) {
  console.log(authenticated);
  return <Component {...pageProps} />;
}

export default MyApp;

export const getServerSideProps = async ({ req, res }) => {
  return {
    props: {
      authenticated: req.cookies.token || "",
    },
  };
};
