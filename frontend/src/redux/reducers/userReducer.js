import { SET_USER, GET_USER } from "../constants/actionTypes";

const initailState = {
  id: null,
  username: null,
  email: null,
  profilePic: null,
  joinedSubReddits: null,
  karma: 0,
};

export default (state = initailState, action) => {
  switch (action.type) {
    case SET_USER:
      return {
        id: action.payload._id,
        username: action.payload.username,
        email: action.payload.email,
        profilePic: action.payload.profilePic,
        karma: action.payload.karma,
      };
    case GET_USER:
      return state;
    default:
      return state;
  }
};
