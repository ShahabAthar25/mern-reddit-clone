import { useDispatch } from "react-redux";
import axios from "../api/axios";
import { loginFail, logout } from "../features/loginSlice";
import { openModal, switchToLogin } from "../features/modalSlice";

export default function useRefreshToken() {
  const dispatch = useDispatch();

  const token = localStorage.getItem("refreshToken");

  try {
    const refreshToken = async () => {
      const { data } = await axios.post("/auth/refresh", {
        token,
      });

      sessionStorage.setItem("accessToken", data.accessToken);

      return data.accessToken;
    };

    return refreshToken;
  } catch (error) {
    dispatch(logout());
    dispatch(loginFail("Please login as your session was expired"));
    dispatch(switchToLogin());
    dispatch(openModal());
  }

  return token;
}
