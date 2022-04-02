import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  loading: false,
  isSuccess: false,
  error: "",
};

const registerSlice = createSlice({
  name: "register",
  initialState,
  reducers: {
    registerPending: (state) => {
      state.loading = true;
    },
    registerSuccess: (state) => {
      state.loading = false;
      state.isSuccess = true;
    },
    registerFail: (state, { payload }) => {
      state.loading = false;
      state.error = payload;
    },
  },
});

const { reducer, actions } = registerSlice;

export const { registerPending, registerSuccess, registerFail } = actions;

export default reducer;
