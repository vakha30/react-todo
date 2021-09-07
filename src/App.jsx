import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";

import { authAction } from "./redux/actions/user";
import { fetchAllTasks } from "./redux/actions/tasks";

import { Header, Sidebar, TasksContainer } from "./components";

function App() {
  const dispatch = useDispatch();
  const { activeList } = useSelector(({ lists }) => lists);

  const { isAuth, currentUser } = useSelector(({ user }) => user);

  useEffect(() => {
    dispatch(authAction());
    dispatch(fetchAllTasks());
  }, [dispatch, activeList]);

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
