import React from "react";

import { TaskList } from "./";
import Button from "../Button";
import { Popup } from "../../components";
import { useDispatch, useSelector } from "react-redux";
import {
  addTask,
  setCompleted,
  deleteTask,
  editTask,
  removeAllTasks,
} from "../../redux/actions/tasks";

function TasksContainer() {
  const [isOpenModal, setOpenModal] = React.useState(false);
  const [isOpenModalEdit, setOpenModalEdit] = React.useState(false);
  const [oldTask, setOldTask] = React.useState({});

  const dispatch = useDispatch();
  const { activeList } = useSelector(({ lists }) => lists);

  const onOpenModal = () => {
    setOpenModal(true);
  };
  const onCloseModal = () => {
    setOpenModal(false);
  };

  const onToggleChecked = (id, completed) => {
    dispatch(setCompleted({ id, completed }, activeList));
  };

  const onOpenModalEdit = () => {
    setOpenModalEdit(true);
  };
  const onCloseModalEdit = () => {
    setOpenModalEdit(false);
  };

  const onSaveTask = (text) => {
    const newTask = {
      list: activeList,
      text: text,
      completed: false,
    };
    dispatch(addTask(newTask, activeList));
    setOpenModal(false);
  };

  const onDeleteTask = (id) => {
    dispatch(deleteTask(id, activeList));
  };

  const onEditTask = (id, text) => {
    setOldTask({ id, text });
    onOpenModalEdit();
  };

  const onSaveEditTask = (text) => {
    const obj = {
      id: oldTask.id,
      text: text,
    };
    dispatch(editTask(obj, activeList));
    setOpenModalEdit(false);
  };

  const handleClickRemoveAll = () => {
    if (window.confirm("Вы уверенны?")) {
      dispatch(removeAllTasks(activeList));
    }
  };

  return (
    <>
      <div className="tasks-container">
        <TaskList
          onToggleChecked={onToggleChecked}
          onDeleteTask={onDeleteTask}
          onEditTask={onEditTask}
        />
        <div className="tasks-settings">
          {activeList && (
            <div className="buttons-block">
              <Button onClick={onOpenModal} className="button button--add">
                <span></span>
                Add New
              </Button>
              <Button
                className="button button--clear"
                onClick={handleClickRemoveAll}
              >
                <span></span>
                Clear All
              </Button>
            </div>
          )}
        </div>
      </div>
      {isOpenModal && (
        <Popup onCloseClick={onCloseModal} onSaveClick={onSaveTask} />
      )}
      {isOpenModalEdit && (
        <Popup
          onCloseClick={onCloseModalEdit}
          onSaveClick={onSaveEditTask}
          oldTask={oldTask}
        />
      )}
    </>
  );
}

export default TasksContainer;
