import Navbar from "./components/navbar/Navbar";
import CreatePost from "./pages/CreatePost";
import Home from "./pages/Home";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { useEffect } from "react";
import { axiosAuth } from "./api/axios";
import { useDispatch } from "react-redux";
import { setUser } from "./features/userSlice";
import { openModal, switchToLogin } from "./features/modalSlice";
import { loginFail, loginSuccess, logout } from "./features/loginSlice";

function App() {
  const dispatch = useDispatch();

  const refreshToken = localStorage.getItem("refreshToken");

  useEffect(() => {
    if (refreshToken) {
      const fetchUser = async () => {
        try {
          const { data } = await axiosAuth({ url: "/users/me", method: "get" });

          dispatch(setUser(data));
          dispatch(loginSuccess());
        } catch (error) {
          dispatch(logout());
          dispatch(switchToLogin());
          dispatch(loginFail("Please login again"));
          dispatch(openModal());
        }
      };

      fetchUser();
    }
  }, [dispatch, refreshToken]);

  return (
    <div className="bg-[#DAE0E6] dark:bg-[#030303] w-screen h-screen overflow-x-hidden">
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path="/create" element={<CreatePost />} />
          <Route path="/" element={<Home />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
