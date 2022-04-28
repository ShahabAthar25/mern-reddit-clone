import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  _id: "",
  title: "",
  body: "",
  image: "",
  owner: "",
  ownerId: "",
  subReddit: "",
  subRedditId: "",
  subRedditPic: "",
  upVotes: 0,
  downVotes: 0,
  error: "",
  isLoading: false,
};

const loginSlice = createSlice({
  name: "login",
  initialState,
  reducers: {
    postPending: (state) => {
      state.isLoading = true;
    },
    postSuccess: (state, { payload }) => {
      state._id = payload._id
      state.title = payload.title
      state.body = payload.body
      state.image = payload.image
      state.owner = payload.owner
      state.ownerId = payload.ownerId
      state.subReddit = payload.subReddit
      state.subRedditId = payload.subRedditId
      state.subRedditPic = payload.subRedditPic
      state.upVotes = payload.upVotes
      state.downVotes = payload.downVotes
      state.isLoading = false;
      state.error = "";
    },
    postFail: (state, { payload }) => {
      state.isLoading = false;
      state.error = payload;
    },
  },
});

const { reducer, actions } = loginSlice;

export const { postPending, postSuccess, postFail } = actions;

export default reducer;
