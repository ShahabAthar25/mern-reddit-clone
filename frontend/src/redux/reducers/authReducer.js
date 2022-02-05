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
      state = initailState;
      return state;
    default:
      return state;
  }
};
