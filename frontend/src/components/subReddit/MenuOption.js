import subRedditIcon from "../../images/subreddit.png";

export default function MenuOptions({
  name,
  bannerPic,
  id,
  setSubRedditId,
  setOpen,
  setSubRedditText,
}) {
  const handleOnClick = () => {
    setSubRedditId(id);
    setOpen(false);
    setSubRedditText(`r/${name}`);
  };

  return (
    <div
      onClick={() => handleOnClick()}
      className="px-3 py-2 flex items-center space-x-4 cursor-pointer hover:bg-blue-500 hover:text-white border-b"
    >
      {bannerPic !== "" ? (
        <img src={bannerPic} className="h-8 rounded-full" alt="(IMG)" />
      ) : (
        <img src={subRedditIcon} className="h-8 rounded-full" alt="(IMG)" />
      )}
      <h1 className="font-body font-semibold text-base">r/{name}</h1>
    </div>
  );
}
