import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  open: false,
  view: "login",
};

const viewSlice = createSlice({
  name: "modalView",
  initialState,
  reducers: {
    openModal: (state) => {
      state.open = true;
    },
    closeModal: (state) => {
      state.open = false;
    },
    switchToLogin: (state) => {
      state.view = "login";
    },
    switchToSignUp: (state) => {
      state.view = "signup";
    },
  },
});

const { reducer, actions } = viewSlice;

export const { openModal, closeModal, switchToLogin, switchToSignUp } = actions;

export default reducer;
