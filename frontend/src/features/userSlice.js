import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  id: "",
  username: "",
  email: "",
  profilePic: "",
  karma: "",
};

const userSlice = createSlice({
  name: "login",
  initialState,
  reducers: {
    setUser: (state, { payload }) => {
      state.id = payload._id;
      state.username = payload.username;
      state.email = payload.email;
      state.profilePic = payload.profilePic;
      state.karma = payload.karma;
    },
  },
});

const { reducer, actions } = userSlice;

export const { setUser } = actions;

export default reducer;
