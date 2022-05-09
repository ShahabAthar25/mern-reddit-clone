import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  data: [],
  error: "",
  isLoading: false,
};

const loginSlice = createSlice({
  name: "subReddit",
  initialState,
  reducers: {
    subRedditPending: (state) => {
      state.isLoading = true;
    },
    subRedditSuccess: (state, { payload }) => {
      state.data = payload;
      state.isLoading = false;
      state.error = "";
    },
    subRedditFail: (state, { payload }) => {
      state.isLoading = false;
      state.error = payload;
    },
    subRedditCreate: (state, { payload }) => {
      state.data.push(payload);
    },
  },
});

const { reducer, actions } = loginSlice;
export const {
  subRedditPending,
  subRedditSuccess,
  subRedditFail,
  subRedditCreate,
} = actions;

export default reducer;
