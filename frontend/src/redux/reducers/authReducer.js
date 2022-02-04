import { LOGIN, REGISTER } from "../constants/actionTypes";

const initailState = {
  isLoggedIn: false,
  token: null,
};

export default (state = initailState, action) => {
  switch (action.type) {
    case LOGIN:
      return { isLoggedIn: true, token: action.payload.token };
    case REGISTER:
      return { isLoggedIn: false, token: null, redirect: true };
    default:
      return state;
  }
};
