import SearchIcon from "@mui/icons-material/Search";
import MenuIcon from "@mui/icons-material/Menu";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";
import { Button } from "@mui/material";
import { useState } from "react";
import Items from "./Items";

function Navbar({ authenticated }) {
  const [open, setOpen] = useState(false);

  return (
    <div className="bg-reddit w-screen p-2 border-b border-gray-800 flex items-center justify-between">
      <div className="flex items-center">
        <img
          src="/logosm.svg"
          className="pr-4 h-10 sm:mr-2"
          alt="Logo was here"
        />
        <img
          src="/logolg.svg"
          className="mr-2 hidden sm:flex"
          alt="Logo was here"
        />
      </div>
      <div className="flex-1 max-w-xs flex bg-reddit-light rounded-full">
        <Button className="rounded-full">
          <SearchIcon className="text-gray-600" />
        </Button>
        <input
          type="text"
          placeholder="Search Reddit"
          className="bg-transparent p-2 outline-none text-white font-light flex-grow w-1"
        />
      </div>
      <div className="rounded-full">
        <Button className="rounded-full" onClick={() => setOpen(!open)}>
          <MenuIcon className="text-white" />
        </Button>

        <div className={open ? `relative right-20` : `hidden`}>
          <div className="absolute bg-reddit-light rounded-lg">
            {authenticated !== "" ? (
              <>
                <Items text="Profile" Icon={AccountCircleIcon} />
              </>
            ) : (
              <>
                <Items text="Login" Icon={AccountCircleIcon} />
                <Items text="SignUp" Icon={AccountCircleIcon} />
              </>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}

export default Navbar;
