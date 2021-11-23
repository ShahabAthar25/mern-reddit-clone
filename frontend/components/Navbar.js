import React, { useState } from "react";
import { SearchIcon, MenuIcon, UserIcon } from "@heroicons/react/solid";
import Item from "./Option";

export default function Navbar({ token }) {
  const [open, setOpen] = useState(false);

  return (
    <div className="flex items-center justify-between bg-reddit-light p-2">
      <div className="flex items-center pr-8">
        <img src="/redditLogo.svg" alt="" className="pr-2" />
        <img src="/logo.svg" alt="" className="pr-2 hidden sm:flex" />
      </div>
      <div className="flex items-center rounded-lg bg-reddit flex-1 max-w-xs hover:border hover:border-white">
        <button>
          <SearchIcon className="text-white h-6" />
        </button>
        <input
          type="text"
          placeholder="Search"
          className="bg-transparent p-2 outline-none text-white w-28"
        />
      </div>
      <div className="relative inline-block pl-8">
        <a onClick={() => setOpen(!open)}>
          <MenuIcon className="h-6 text-white cursor-pointer" />
        </a>
        <div
          className={
            open
              ? "absolute bg-reddit text-white shadow-md z-10 w-52 right-0 hover:to-blue-900"
              : "hidden"
          }
        >
          {token !== "" ? (
            <>
              <h1>My Stuff</h1>
              <Item text="Profile" href="/user/profile" Icon={UserIcon} />
            </>
          ) : (
            <>
              <Item text="login" href="/login" Icon={UserIcon} />
              <Item text="signup" href="/signup" Icon={UserIcon} />
            </>
          )}
        </div>
      </div>
    </div>
  );
}

export function getServerSideProps({ req, res }) {
  return {
    props: {
      Authorization: req.cookies.Authorization || "",
    },
  };
}
