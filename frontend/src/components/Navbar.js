import { useState } from "react";
import {
  SearchIcon,
  UserIcon,
  ChevronDownIcon,
} from "@heroicons/react/outline";

import { ReactComponent as Logo } from "../images/logo.svg";
import MenuOption from "./MenuOption";

export default function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <div className="flex items-center justify-between px-5 py-2 bg-white">
      <div className="flex items-center">
        <Logo className="h-8" />
      </div>
      <div className="bg-stone-100 flex items-center flex-grow mx-6 rounded-md px-3 hover:bg-white hover:ring-1">
        <SearchIcon className="h-6 text-gray-400" />
        <input
          type="text"
          className="bg-transparent px-3 py-2 flex-grow outline-none"
          placeholder="Search Reddit"
        />
      </div>
      <div
        className="flex items-center py-1 rounded-md hover:ring-1 hover:ring-gray-300 cursor-pointer relative"
        onClick={() => setOpen(!open)}
      >
        <UserIcon className="text-gray-400 h-6" />
        <ChevronDownIcon className="text-gray-400 h-4" />
        {open && (
          <div className="flex flex-col bg-white ring-1 ring-gray-200 absolute top-8 right-0 w-40">
            <MenuOption title="Premium" />
          </div>
        )}
      </div>
    </div>
  );
}
