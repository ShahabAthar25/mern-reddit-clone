import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  data: [],
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
      state.data = payload
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
