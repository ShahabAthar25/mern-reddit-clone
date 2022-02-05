import axios from "../../axios/axios";

export const login = (email, password) => async (dispatch) => {
  try {
    const { data, headers } = await axios.post("/auth/login", {
      email,
      password,
    });

    dispatch({ type: "LOGIN", payload: headers });
    dispatch({ type: "SET_USER", payload: data });
    dispatch({ type: "CLEAR_ERRORS" });
  } catch (error) {
    dispatch({ type: "SET_ERROR", payload: error.response.data });
  }
};
