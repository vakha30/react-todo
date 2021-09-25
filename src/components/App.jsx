import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";

import {
  authAction,
  selectCurrentUser,
  selectIsAuth,
} from "../redux/features/user";
import { fetchAllTasks } from "../redux/features/tasks";

import { Header, Sidebar, TasksContainer } from ".";
import { selectActiveLists } from "../redux/features/lists";

function App() {
  const dispatch = useDispatch();
  const activeList = useSelector(selectActiveLists);

  const currentUser = useSelector(selectCurrentUser);
  const isAuth = useSelector(selectIsAuth);

  useEffect(() => {
    dispatch(authAction());
    dispatch(fetchAllTasks());
  }, [dispatch, activeList, isAuth]);

  return (
    <div className="wrapper">
      <div className="app">
        <Header isAuth={isAuth} />
        {isAuth ? (
          <div className="content">
            <Sidebar currentUser={currentUser} />
            <TasksContainer />
          </div>
        ) : (
          <div className="content logout-content">
            Войдите или зарегистрируйтесь
          </div>
        )}
      </div>
    </div>
  );
}

export default App;
