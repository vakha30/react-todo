import axios from "axios";

export const fetchAllTasks = () => (dispatch) => {
  dispatch(setLoaded(false));
  const token = localStorage.getItem("token");
  axios
    .get(`/api/tasks`, {
      headers: {
        Authorization: `Bearer ${token ? token : ""}`,
      },
    })
    .then(({ data }) => {
      dispatch(setTasks(data));
    });
};

export const fetchTasks = (id) => (dispatch) => {
  dispatch(setLoaded(false));
  axios.get(`/api/tasks/${id}`).then(({ data }) => {
    dispatch(setTasks(data));
  });
};

export const setTasks = (items) => {
  return {
    type: "SET_TASKS",
    payload: items,
  };
};

export const setLoaded = (value) => {
  return {
    type: "SET_LOADED",
    payload: value,
  };
};

export const addTask = (obj, activeList) => (dispatch) => {
  const token = localStorage.getItem("token");
  fetch("/api/tasks/add", {
    method: "POST",
    headers: {
      "Content-type": "application/json",
      Authorization: `Bearer ${token ? token : ""}`,
    },
    body: JSON.stringify(obj),
  })
    .then((res) => {
      return res.json();
    })
    .then((data) => {
      dispatch(fetchAllTasks());
    });
};

export const setCompleted = (obj, activeList) => (dispatch) => {
  axios
    .put(`/api/tasks/${obj.id}`, { completed: !obj.completed })
    .then((res) => {
      dispatch(fetchAllTasks());
    });
};

export const deleteTask = (id, activeList) => (dispatch) => {
  axios.delete(`/api/tasks/delete/${id}`).then((res) => {
    dispatch(fetchAllTasks());
  });
};

export const editTask = (obj, activeList) => (dispatch) => {
  axios.put(`/api/tasks/edit/${obj.id}`, { text: obj.text }).then((res) => {
    dispatch(fetchAllTasks());
  });
};

export const removeAllTasks = (activeList) => (dispatch) => {
  axios.delete(`/api/tasks/remove/${activeList}`).then((res) => {
    dispatch(fetchAllTasks());
  });
};
