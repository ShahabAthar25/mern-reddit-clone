import { useState } from "react";
import { ReactComponent as LogoImg } from "../../images/logo_img.svg";
import { ReactComponent as LogoText } from "../../images/logo_text.svg";
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
  ChatIcon,
  UserCircleIcon,
  PlusIcon,
  CogIcon,
  ClipboardListIcon,
} from "@heroicons/react/outline";
import Switch from "@mui/material/Switch";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import MenuOption from "../MenuOption";
import Modal from "../modal/Modal";
import useDarkMode from "../../hooks/useDarkMode";
import {
  openModal,
  switchToLogin,
  switchToSignUp,
} from "../../features/modalSlice";
import { loginFail, logout } from "../../features/loginSlice";
import axios from "../../api/axios";

export default function Navbar() {
  const dispatch = useDispatch();
  const [colorTheme, setTheme] = useDarkMode();

  const [dark, setDark] = useState(false);
  const [openMenu, setOpenMenu] = useState(false);
  const { isAuth } = useSelector((state) => state.login);

  const handleSubmit = (e) => {
    e.preventDefault();
  };

  const logoutUser = async () => {
    try {
      await axios.delete("/auth/logout");

      dispatch(logout());
      localStorage.removeItem("refreshToken");
      sessionStorage.removeItem("accessToken");
    } catch (error) {
      dispatch(loginFail(error.response.data));
    }
  };

  const changeTheme = () => {
    setDark(!dark);
    setTheme(colorTheme);
  };

  return (
    <div className="flex items-center justify-between px-4 py-2 bg-white dark:bg-[#1A1A1B]">
      <Link to="/" className="flex items-center space-x-2">
        <LogoImg className="h-8" />
        <LogoText className="h-5 hidden sm:flex fill-black dark:fill-white" />
      </Link>
      {isAuth && (
        <Link
          to="/create"
          className="ml-4 hidden md:flex items-center hover:ring-1 hover:ring-gray-300 min-w-[10rem] py-1 space-x-4 cursor-pointer"
        >
          <PlusIcon className="h-6 text-gray-600 dark:text-white" />
          <h1 className="font-body text-gray-600 dark:text-white text-center">
            Create Post
          </h1>
        </Link>
      )}
      <form className="flex flex-grow mx-4 items-center px-3 bg-[#f4f4f49c] rounded-sm hover:ring-1 dark:ring-white hover:bg-white dark:bg-[#272729] max-w-3xl">
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
          className="bg-transparent py-1.5 px-2 flex-grow w-1 outline-none text-slate-500"
        />
      </form>
      <div className="flex space-x-4">
        {!isAuth && (
          <div className="flex space-x-4">
            <button
              className="ring-1 dark:ring-white text-blue-700 dark:text-white font-bold rounded-full py-1 px-10 hidden sm:flex hover:bg-blue-100"
              onClick={() => {
                dispatch(switchToLogin());
                dispatch(openModal());
              }}
            >
              Log In
            </button>
            <button
              className="bg-blue-500 text-white font-bold rounded-full py-1 px-10 hidden sm:flex hover:bg-blue-400"
              onClick={() => {
                dispatch(switchToSignUp());
                dispatch(openModal());
              }}
            >
              Sign Up
            </button>
          </div>
        )}
        <div
          className="flex items-center rounded-sm py-0.5 hover:ring-1 cursor-pointer"
          onClick={() => setOpenMenu(!openMenu)}
        >
          <UserIcon className="h-6 text-gray-400" />
          <ChevronDownIcon className="h-4 text-gray-400" />
          {openMenu && (
            <div
              className={`absolute right-0 top-10 mt-2 w-[40%] sm:w-[25%] md:w-[20%] lg:w-[15%] bg-white dark:bg-[#1A1A1B] rounded-sm z-50 ${
                isAuth && `overflow-y-scroll h-80%`
              }`}
            >
              {isAuth && (
                <div>
                  <h1 className="text-gray-500 text-[12px] font-bold ml-3 uppercase mt-1">
                    Online Status
                  </h1>
                  <div className="my-1">
                    <MenuOption text="On" Icon={CogIcon} />
                  </div>
                  <h1 className="text-gray-500 text-[12px] font-bold ml-3 uppercase mt-1">
                    My Stuff
                  </h1>
                  <div className="my-1">
                    <MenuOption text="Profile" Icon={UserCircleIcon} />
                    <MenuOption text="Create Avatar" Icon={PlusIcon} />
                    <MenuOption text="User Settings" Icon={CogIcon} />
                    <MenuOption text="Create Post" Icon={ClipboardListIcon} />
                  </div>
                </div>
              )}
              <h1 className="text-gray-500 text-[12px] font-bold ml-3 uppercase mt-1">
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
              <h1 className="text-gray-500 text-[12px] font-bold ml-3 uppercase mt-1">
                More Stuff
              </h1>
              <div className="my-1">
                {isAuth && (
                  <MenuOption text="Create a community" Icon={ChatIcon} />
                )}
                <MenuOption
                  text="Advertise on Reddit"
                  Icon={SpeakerphoneIcon}
                />
                <MenuOption text="Coins" Icon={CurrencyEuroIcon} />
                <MenuOption text="Premium" Icon={ShieldCheckIcon} />
                <MenuOption text="Powerups" Icon={LightningBoltIcon} />
                <MenuOption text="Talk" Icon={CheckCircleIcon} />
                <MenuOption text="Predictions" Icon={GlobeIcon} />
                <MenuOption text="Help Center" Icon={QuestionMarkCircleIcon} />
                {isAuth ? (
                  <div onClick={() => logoutUser()}>
                    <MenuOption text="Logout" Icon={LogoutIcon} />
                  </div>
                ) : (
                  <div
                    className="border-none bg-transparent flex-grow"
                    onClick={() => {
                      dispatch(switchToLogin());
                      dispatch(openModal());
                    }}
                  >
                    <MenuOption text="Log In / Sign Up" Icon={LogoutIcon} />
                  </div>
                )}
              </div>
            </div>
          )}
        </div>
      </div>
      <Modal />
    </div>
  );
}
