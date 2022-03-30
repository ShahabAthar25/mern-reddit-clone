import { useState } from "react";
import { ReactComponent as LogoImg } from "../images/logo_img.svg";
import {
  SearchIcon,
  UserIcon,
  ChevronDownIcon,
  MoonIcon,
  SpeakerphoneIcon,
  CurrencyEuroIcon,
  ShieldCheckIcon,
  LightningBoltIcon,
  CheckCircleIcon,
  GlobeIcon,
  QuestionMarkCircleIcon,
  LogoutIcon,
} from "@heroicons/react/outline";
import Switch from "@mui/material/Switch";

import MenuOption from "./MenuOption";
import Modal from "./Modal";
import useDarkMode from "../hooks/useDarkMode";

export default function Navbar() {
  const [colorTheme, setTheme] = useDarkMode();

  const [open, setOpen] = useState(false);
  const [dark, setDark] = useState(false);
  const [openMenu, setOpenMenu] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
  };

  const changeTheme = () => {
    setDark(!dark);
    setTheme(colorTheme);
  };

  return (
    <div className="flex items-center justify-between px-5 py-2 bg-white dark:bg-[#1A1A1B]">
      <div className="flex items-center">
        <LogoImg className="h-8" />
      </div>
      <form className="flex flex-grow mx-4 items-center px-3 bg-[#f4f4f49c] rounded-sm hover:ring-1 dark:ring-white hover:bg-white dark:bg-[#272729]">
        <button
          type="submit"
          className="border-none bg-transparent"
          onClick={(e) => handleSubmit(e)}
        >
          <SearchIcon className="h-5 text-gray-400 cursor-pointer" />
        </button>
        <input
          type="text"
          placeholder="Search Reddit"
          className="bg-transparent py-1.5 px-2 flex-grow outline-none text-slate-500 w-1"
        />
      </form>
      <div
        className="flex items-center rounded-sm py-0.5 hover:ring-1 cursor-pointer"
        onClick={() => setOpenMenu(!openMenu)}
      >
        <UserIcon className="h-6 text-gray-400" />
        <ChevronDownIcon className="h-4 text-gray-400" />
        {openMenu && (
          <div className="absolute right-0 top-10 mt-2 w-[40%] sm:w-[25%] md:w-[20%] lg:w-[15%] bg-white dark:bg-black rounded-sm">
            <h1 className="text-gray-500 text-[10px] font-bold ml-3 uppercase mt-1">
              View options
            </h1>
            <div
              className="flex items-center justify-between px-2 hover:bg-blue-500 cursor-pointer group my-1"
              onClick={() => changeTheme()}
            >
              <div className="flex items-center space-x-2 py-2">
                <MoonIcon className="text-gray-700 dark:text-white group-hover:text-white -rotate-90 h-6 stroke-[1.5]" />
                <h1 className="text-slate-600 dark:text-white group-hover:text-white font-medium">
                  Dark Mode
                </h1>
              </div>
              {dark ? <Switch defaultChecked value={dark} /> : <Switch />}
            </div>
            <h1 className="text-gray-500 text-[10px] font-bold ml-3 uppercase mt-1">
              More Stuff
            </h1>
            <div className="my-1">
              <MenuOption text="Advertise on Reddit" Icon={SpeakerphoneIcon} />
              <MenuOption text="Coins" Icon={CurrencyEuroIcon} />
              <MenuOption text="Premium" Icon={ShieldCheckIcon} />
              <MenuOption text="Powerups" Icon={LightningBoltIcon} />
              <MenuOption text="Talk" Icon={CheckCircleIcon} />
              <MenuOption text="Predictions" Icon={GlobeIcon} />
              <MenuOption text="Help Center" Icon={QuestionMarkCircleIcon} />
              <div
                className="border-none bg-transparent flex-grow"
                onClick={() => setOpen(!open)}
              >
                <MenuOption text="Log In / Sign Up" Icon={LogoutIcon} />
              </div>
            </div>
          </div>
        )}
      </div>
      <Modal open={open} setOpen={setOpen} title="Login" />
    </div>
  );
}
