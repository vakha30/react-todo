import axios from "axios";

const initialState = {
  currentUser: {},
  isAuth: false,
};

const user = (state = initialState, action) => {
  switch (action.type) {
    case "user/set-user/fulfilled":
      return {
        ...state,
        currentUser: action.payload,
        isAuth: true,
      };
    case "user/logout/fulfilled":
      return {
        ...state,
        currentUser: {},
        isAuth: false,
      };
    default:
      return state;
  }
};

export default user;

const setUser = (userData) => ({
  type: "user/set-user/fulfilled",
  payload: userData,
});

export const authAction = () => async (dispatch) => {
  try {
    const token = localStorage.getItem("token");
    const response = await axios.get("/api/auth/auth", {
      headers: {
        Authorization: `Bearer ${token || ""}`,
      },
    });
    localStorage.setItem("token", response.data.token);
    dispatch(setUser(response.data.user));
  } catch (e) {
    localStorage.removeItem("token");
  }
};

export const loginAction =
  ({ email, password }) =>
  async (dispatch) => {
    try {
      const response = await axios.post("/api/auth/login", {
        email,
        password,
      });
      localStorage.setItem("token", response.data.token);
      dispatch(setUser(response.data.user));
    } catch (e) {
      // alert(e.response.data.message);
    }
  };

export const register =
  ({ name, email, password }) =>
  async (dispatch) => {
    try {
      const response = await axios.post("/api/auth/register", {
        name,
        email,
        password,
      });
      alert(response.data.message);
      dispatch(loginAction({ email, password }));
    } catch (e) {
      if (e.response.data.errors) {
        alert(e.response.data.errors.errors[0].msg);
      } else {
        alert(e.response.data.message);
      }
    }
  };

export const logout = () => {
  localStorage.removeItem("token");
  return {
    type: "user/logout/fulfilled",
  };
};

export const selectCurrentUser = (state) => state.user.currentUser;
export const selectIsAuth = (state) => state.user.isAuth;
