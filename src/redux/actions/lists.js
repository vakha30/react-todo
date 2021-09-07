import axios from "axios";

export const fetchLists = () => (dispatch) => {
  const token = localStorage.getItem("token");

  axios
    .get("/api/lists", {
      headers: {
        Authorization: `Bearer ${token ? token : ""}`,
      },
    })
    .then(({ data }) => {
      dispatch(setLists(data));
    });
};

export const setLists = (items) => {
  return {
    type: "SET_LISTS",
    payload: items,
  };
};

export const setActiveList = (list) => {
  return {
    type: "SET_ACTIVE_LIST",
    payload: list,
  };
};

export const addList = (obj) => (dispatch) => {
  const token = localStorage.getItem("token");
  fetch("/api/lists/add", {
    method: "POST",
    headers: {
      "Content-type": "application/json",
      Authorization: `Bearer ${token ? token : ""}`,
    },
    body: JSON.stringify(obj),
  })
    .then((res) => {
      // return res.json()
    })
    .then((data) => {
      dispatch(fetchLists());
    });
};

export const deleteList = (id) => (dispatch) => {
  axios.delete(`/api/lists/delete/${id}`).then((res) => {
    dispatch(fetchLists());
    dispatch(setActiveList(null));
  });
};
