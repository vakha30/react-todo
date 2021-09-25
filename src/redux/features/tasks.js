import axios from "axios";

const initialState = {
  items: [],
  loading: true,
};

const tasks = (state = initialState, action) => {
  switch (action.type) {
    case "tasks/fetch/panding":
      return {
        ...state,
        loading: true,
      };
    case "tasks/fetch/fulfilled":
      return {
        ...state,
        items: action.payload,
        loading: false,
      };
    default:
      return state;
  }
};

export default tasks;

export const setTasks = (items) => ({
  type: "tasks/fetch/fulfilled",
  payload: items,
});

export const setLoading = () => ({
  type: "tasks/fetch/panding",
});

export const fetchAllTasks = () => async (dispatch) => {
  dispatch(setLoading());
  try {
    const token = localStorage.getItem("token");
    const response = await axios(`/api/tasks`, {
      headers: {
        Authorization: `Bearer ${token || ""}`,
      },
    });
    dispatch(setTasks(response.data));
  } catch (error) {
    alert("Что-то пошло не так! ", error);
  }
};

export const fetchTasks = (id) => async (dispatch) => {
  dispatch(setLoading());
  try {
    const response = await axios.get(`/api/tasks/${id}`);
    dispatch(setTasks(response.data));
  } catch (error) {
    alert("Что-то пошло не так! ", error);
  }
};

export const addTask = (obj) => async (dispatch) => {
  try {
    const token = localStorage.getItem("token");
    await fetch("/api/tasks/add", {
      method: "POST",
      headers: {
        "Content-type": "application/json",
        Authorization: `Bearer ${token || ""}`,
      },
      body: JSON.stringify(obj),
    });
    dispatch(fetchAllTasks());
  } catch (error) {
    alert("Что-то пошло не так! ", error);
  }
};

export const setCompleted = (obj) => async (dispatch) => {
  try {
    await axios.put(`/api/tasks/${obj.id}`, {
      completed: !obj.completed,
    });
    dispatch(fetchAllTasks());
  } catch (error) {
    alert("Что-то пошло не так! ", error);
  }
};

export const deleteTask = (id) => async (dispatch) => {
  try {
    await axios.delete(`/api/tasks/delete/${id}`).then(() => {
      dispatch(fetchAllTasks());
    });
  } catch (error) {
    alert("Что-то пошло не так! ", error);
  }
};

export const editTask = (obj) => async (dispatch) => {
  try {
    await axios.put(`/api/tasks/edit/${obj.id}`, { text: obj.text });
    dispatch(fetchAllTasks());
  } catch (error) {
    alert("Что-то пошло не так! ", error);
  }
};

export const removeAllTasks = (activeList) => async (dispatch) => {
  try {
    await axios.delete(`/api/tasks/remove/${activeList}`);
    dispatch(fetchAllTasks());
  } catch (error) {
    alert("Что-то пошло не так! ", error);
  }
};

export const selectTasks = (state) => state.tasks.items;
export const selectTasksLoading = (state) => state.tasks.loading;
