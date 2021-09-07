import axios from "axios";

export const register =
  ({ name, email, password }) =>
  async (dispatch) => {
    try {
      const response = await axios.post(
        "https://react-todo-server-my.herokuapp.com/api/auth/register",
        {
          name,
          email,
          password,
        }
      );
      alert(response.data.message);
      dispatch(loginAction({ email, password }));
    } catch (e) {
      alert(e.message);
    }
  };

export const loginAction =
  ({ email, password }) =>
  async (dispatch) => {
    try {
      const response = await axios.post(
        "https://react-todo-server-my.herokuapp.com/api/auth/login",
        {
          email,
          password,
        }
      );
      localStorage.setItem("token", response.data.token);
      dispatch(setUser(response.data.user));
    } catch (e) {
      alert(e.message);
    }
  };

export const authAction = () => async (dispatch) => {
  try {
    const token = localStorage.getItem("token");
    const response = await axios.get(
      "https://react-todo-server-my.herokuapp.com/api/auth/auth",
      {
        headers: {
          Authorization: `Bearer ${token ? token : ""}`,
        },
      }
    );
    localStorage.setItem("token", response.data.token);
    dispatch(setUser(response.data.user));
  } catch (e) {
    localStorage.removeItem("token");
  }
};

export const logout = () => {
  localStorage.removeItem("token");
  return {
    type: "LOGOUT",
  };
};

const setUser = (user) => {
  return {
    type: "SET_USER",
    payload: user,
  };
};
