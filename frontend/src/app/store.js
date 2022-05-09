import { configureStore } from "@reduxjs/toolkit";
import loginReducer from "../features/loginSlice";
import modalReducer from "../features/modalSlice";
import registerReducer from "../features/registerSlice";
import userReducer from "../features/userSlice";
import postReducer from "../features/postSlice";
import subRedditReducer from "../features/subRedditSlice";

const store = configureStore({
  reducer: {
    login: loginReducer,
    register: registerReducer,
    modal: modalReducer,
    user: userReducer,
    posts: postReducer,
    subReddit: subRedditReducer,
  },
});

export default store;
