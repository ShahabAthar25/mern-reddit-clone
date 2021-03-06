import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  data: [],
  error: "",
  isLoading: false,
};

const loginSlice = createSlice({
  name: "post",
  initialState,
  reducers: {
    postPending: (state) => {
      state.isLoading = true;
    },
    postSuccess: (state, { payload }) => {
      state.data = payload;
      state.isLoading = false;
      state.error = "";
    },
    postFail: (state, { payload }) => {
      state.isLoading = false;
      state.error = payload;
    },
    postCreate: (state, { payload }) => {
      state.data.push(payload);
    },
  },
});

const { reducer, actions } = loginSlice;
export const { postPending, postSuccess, postFail, postCreate } = actions;

export default reducer;
