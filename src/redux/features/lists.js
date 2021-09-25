import axios from "axios";

const initialState = {
  items: [],
  activeList: null,
  loading: true,
};

const lists = (state = initialState, action) => {
  switch (action.type) {
    case "lists/fetch/panding":
      return {
        ...state,
        loading: true,
      };
    case "lists/fetch/fulfilled":
      return {
        ...state,
        items: action.payload,
        loading: false,
      };
    case "lists/set-active/fulfilled":
      return {
        ...state,
        activeList: action.payload,
      };
    default:
      return state;
  }
};

export default lists;

export const setLists = (items) => ({
  type: "lists/fetch/fulfilled",
  payload: items,
});

export const setActiveList = (list) => ({
  type: "lists/set-active/fulfilled",
  payload: list,
});

export const fetchLists = () => async (dispatch) => {
  try {
    const token = localStorage.getItem("token");
    const response = await axios.get("/api/lists", {
      headers: {
        Authorization: `Bearer ${token || ""}`,
      },
    });
    dispatch(setLists(response.data));
  } catch (error) {
    alert("Что-то пошло не так", error);
  }
};

export const addList = (obj) => async (dispatch) => {
  try {
    const token = localStorage.getItem("token");
    await fetch("/api/lists/add", {
      method: "POST",
      headers: {
        "Content-type": "application/json",
        Authorization: `Bearer ${token || ""}`,
      },
      body: JSON.stringify(obj),
    });
    dispatch(fetchLists());
  } catch (error) {
    alert("Что то пошло не так", error);
  }
};

export const deleteList = (id) => async (dispatch) => {
  try {
    await axios.delete(`/api/lists/delete/${id}`).then(() => {
      dispatch(fetchLists());
      dispatch(setActiveList(null));
    });
  } catch (error) {
    alert("Что то пошло не так", error);
  }
};

export const selectLists = (state) => state.lists.items;
export const selectActiveLists = (state) => state.lists.activeList;
export const selectLoadingLists = (state) => state.lists.loading;
